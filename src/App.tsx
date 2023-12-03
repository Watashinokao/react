import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
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
    </div>
  );
}

export default App;
