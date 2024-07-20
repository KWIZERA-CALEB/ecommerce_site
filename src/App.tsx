import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import Product from './pages/Product'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Gallery from './pages/Gallery'
import Products from './pages/Products'
import Contact from './pages/Contact'
import AdminCreate from './pages/AdminCreate'
import AdminProducts from './pages/AdminProducts'
import AdminDeletedProducts from './pages/AdminDeletedProducts'

function App() {
  
 
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/admin/create" element={<AdminCreate />}></Route>
          <Route path="/admin/products" element={<AdminProducts />}></Route>
          <Route path="/admin/deleted" element={<AdminDeletedProducts />}></Route>
        </Routes>

    </>
  )
}

export default App
