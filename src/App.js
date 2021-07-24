import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Sidebar from "./components/Sidebar";
import './App.css';
import AgriInputPurchaseDetail from "./pages/AgriInputPurchaseDetail";

const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-row'>
          <Sidebar />
          <Switch>
            <Route path='/inputMaster' exact>
              <h1 className='page-content'>Agri Input Master Maintainance</h1>
            </Route>
            <Route path='/supplierMaster' exact>
              <h1 className='page-content'>Supplier Master Maintainance</h1>
            </Route>
            <Route path='/inputPurchase' exact>
              <AgriInputPurchaseDetail />
            </Route>
            <Redirect to='/inputMaster' />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
