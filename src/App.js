
import './App.css';
import Homescreen from './Components/Homescreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import ViewallCustomer from './Components/ViewallCustomer';
import ViewSingle from './Components/ViewSingle';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homescreen />}>  </Route>
      <Route path="/ViewallCustomer" element={<ViewallCustomer/>}>
      </Route>
      <Route path={"/ViewallCustomer"||"/ViewallCustomer/ViewSingle"} element={<ViewallCustomer/>}>
      </Route>
      <Route path="/ViewallCustomer/ViewSingle" element={<ViewSingle/>}>
      </Route>
      <Route path="*" element={'/'}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
