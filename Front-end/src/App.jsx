// import { useState } from 'react'
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Salepage from './components/Salepage'
// import Pro1 from './components/Pro1'
// import Pro2 from './components/Pro2'
// import Recommend from './components/Recommend'
// import Services from './components/Services'
// import Supply from './components/Supply'
// import Footer from './components/Footer'
// import ProductList from './components/ProductList'
// import Home from './components/Home'
// function App() {

//   return (
//     <>
//    <Home/>
//     <ProductList/>

//     </>
//   )
// }

// export default App
// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;

