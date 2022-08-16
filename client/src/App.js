import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import { Box } from "@mui/material";
import DataProvider from "./components/context/DataProvider";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <DataProvider> 
    <BrowserRouter>
     <Header/>
         <Box style={{marginTop : 54}}>
       <Routes>
    {/* styling is done to hv my home component down the header. */}
           <Route path='/'element={<Home />} />
           <Route path='/product/:id'element={<DetailView />} />
           <Route path='/cart' element={<Cart />} /> 
       </Routes>
         </Box>
    </BrowserRouter>
  </DataProvider>
  );
}

export default App;
