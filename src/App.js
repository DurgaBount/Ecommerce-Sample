import { Route, Routes } from "react-router-dom";
import './App.css';
import ProductsListPage from './screens/productsListPage';
import ProductDetailsPage from './screens/productDetailsPage';

function App() {
  return (
   <Routes>
   <Route exact path="/" element={<ProductsListPage />} />
   <Route path="/product/:productID" element={<ProductDetailsPage />} />
 </Routes>
  );
}

export default App;
