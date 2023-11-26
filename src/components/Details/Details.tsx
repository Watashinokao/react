import { useRouter } from 'next/router';
import classes from './Details.module.css';
import { CharacterAPI } from '../../Interfaces/Interfaces';
import { FC } from 'react';

interface DetailsProps {
  data: CharacterAPI;
}

const Details: FC<DetailsProps> = (props) => {
  const router = useRouter();
  const pageSize = router.query.pageSize;
  const page = router.query.page;
  const name = router.query.name;
  const { data } = props;

  return (
    <div className={classes.details} data-testid="details">
      {data && (
        <div className={classes.container}>
          <button
            data-testid="closeBtn"
            className={classes.remove}
            title={`I wish you a New Year's mood`}
            onClick={() => {
              router.push({
                pathname: '/',
                query: {
                  page: page,
                  pageSize: pageSize ? String(pageSize) : '10',
                  name: name ? String(name) : '',
                },
              });
            }}
          >
            <img src="../src/assets/close.svg" alt="close details" />
          </button>
          <div
            data-testid="detailsBackground"
            className={classes.img}
            style={{
              background: `center no-repeat url(${data.data.imageUrl} )`,
            }}
          ></div>
          <p>Film: {data.data.films[0] || '-'}</p>
          <p>tvShow: {data.data.tvShow || '-'}</p>
          <p>Name: {data.data.name}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
