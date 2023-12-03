import './App.css';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from './store/hooks/redux';
import FormCard from './components/formCard/FormCard';

function App() {
  const { cards } = useAppSelector((state) => state.dataReducer);
  return (
    <div className={'wrapper'}>
      <div>React Forms</div>
      <div>
        <NavLink className={'link'} to={'UncontrolledForm'}>
          Uncontrolled Form
        </NavLink>
      </div>
      <div>
        <NavLink className={'link'} to={'ReactHookForm'}>
          React Hook Form
        </NavLink>
      </div>

      <div className={'cards'}>
        {cards &&
          cards.map((el, index) => {
            return <FormCard key={index} item={el} />;
          })}
      </div>
    </div>
  );
}

export default App;
