import './App.css';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import JobAdvertisementList from './pages/JobAdvertisement/JobAdvertisementList';
import { Container } from 'semantic-ui-react';
import EmployerList from './pages/Employers/EmployerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navi />
      <Container className="main">
      {/* <EmployerList/> */}
      <JobAdvertisementList/>
      </Container>
      </header>
    </div>
  );
}

export default App;
