import "./RootLayout.module.css";
import "../../index.css";
import React, { FC, useEffect, useState } from "react";

import Header from "../Header/Header";
import Pagination from "../Pagination/Pagination";
import Main from "../Main/Main";
import { MainProps } from "../../Interfaces/Interfaces";
import { Outlet, useSearchParams } from "react-router-dom";

const RootLayout: FC = () => {
  const [isDetails, setIsDetails] = useState(false);
  const [request, setRequest] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [, setSearch] = useSearchParams();
  const [results, setResults] = useState<MainProps>({
    data: [],
    info: {
      count: 0,
      nextPage: "",
      previousPage: "",
      totalPages: 0,
    },
  });

  function fetchRequest(request: string, page: number, pageSize: number) {
    fetch(
      `https://api.disneyapi.dev/character?name=${request}&page=${page}&pageSize=${pageSize}`,
    )
      .then((res) => res.json())
      .then((result: MainProps) => {
        const { info, data } = result;
        setResults({
          data: data,
          info: {
            count: info.count,
            nextPage: info.nextPage,
            previousPage: info.previousPage,
            totalPages: info.totalPages,
          },
        });

        setIsLoaded(true);
        setError(false);
        if (result.info.count === 0) {
          setError(true);
          localStorage.setItem("prevRequest", "");
        }
      })
      .catch(() => {
        setIsLoaded(true);
        setError(true);
      });
  }
  useEffect(() => {
    setSearch({
      page: `${page}`,
    });
    const prevRequest = localStorage.getItem("prevRequest");
    setIsLoaded(false);

    setRequest(prevRequest || "");
    fetchRequest(prevRequest || "", page, pageSize);
  }, [request, page, pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

  function handlePage(page: string) {
    switch (page) {
      case "next":
        setPage((count) => count + 1);
        break;
      case "prev":
        setPage((count) => count - 1);
        break;
    }
  }
  function handlePageSize(size: number) {
    setPageSize((count) => count + size - count);
    setPage(1);
  }
  function handleRequest(request: string) {
    setRequest(request);
    localStorage.setItem("prevRequest", request.trim());
  }
  if (error) {
    throw new Error("Request not found");
  }
  function handleDetails() {
    setIsDetails(false);
  }

  return (
    <div className={"app"}>
      <Header handleRequest={handleRequest} />
      {!isLoaded ? (
        <img
          className={"loading"}
          src="/src/assets/loading.gif"
          alt={"loading"}
        />
      ) : (
        <>
          <Pagination
            info={results.info}
            handlePage={handlePage}
            page={page}
            pageSize={pageSize}
            handlePageSize={handlePageSize}
          />
          <div className={isDetails ? "open-details" : ""}>
            <Main
              setIsDetails={setIsDetails}
              results={results.data}
              page={page}
              isDetails={isDetails}
            />
            <Outlet context={{ handleDetails, page }}></Outlet>
          </div>
        </>
      )}
    </div>
  );
};

export default RootLayout;
