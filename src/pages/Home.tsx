import React, {useEffect, useState} from 'react'
import { fetchProducts } from "../services/productservice"
import { Product } from '../utils/producttypes'
import Navigation from '../components/Navigation/Navigation'

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=> {
    const getProducts = async()=> {
      try {
        const productsData = await fetchProducts()
        setProducts(productsData)
      }catch(error) {
        console.log('Failed to fetch products')
      }
    }

    //call the getProducts fnc
    getProducts()

  }, [])

  const renderedProducts = []
  for (let i = 0; i < products.length; i++) {
      renderedProducts.push(
        <h3 key={products[i].id}>Product Name: {products[i].product_name}</h3>
      )
  }


  return (
    <>
      <Navigation />
      <div>
        Home
        <div>
          {products.map((product)=> (
            <h3 key={product.id}>{product.product_name}</h3>
          ))}
        </div>
        For loop
        <div>
          {renderedProducts}
        </div>
      </div>
    </>
  )
}

export default Home
