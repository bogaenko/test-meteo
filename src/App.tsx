import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Menu from './components/Menu';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Home from './pages/home/components/Home';
import AddPool from './pages/pool/components/AddPool';
import PoolList from './pages/pool/components/PoolList';
import PoolDetails from './pages/pool/components/PoolDetails';

function App() {
  const Routes = () => {
    let routes = useRoutes([
        { path: RouterPathEnum.HOME, element: <Home /> },
        { path: RouterPathEnum.POOL_ADD, element: <AddPool /> },
        { path: RouterPathEnum.POOL_LIST, element: <PoolList /> },
        { path: RouterPathEnum.POOL_DETAILS, element: <PoolDetails /> }
    ]);

    return routes;
  };
  
  //Rendering
  return (
    <Container maxWidth="md">
      <Router>
        <Menu />
        <Routes />
      </Router>  
    </Container>
  );
}

export default App;
