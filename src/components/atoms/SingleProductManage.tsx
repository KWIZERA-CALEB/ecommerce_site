import React, { useState, useEffect } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { deleteProduct, fetchProducts } from '../../services/productservice'
import { Product } from '../../utils/producttypes'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";



const SingleProductManage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    


    useEffect(()=> {
        const getProducts = async()=> {
          try {
            const productsData = await fetchProducts()
            setProducts(productsData)
            console.log(productsData)
          }catch(error) {
            console.log('Failed to fetch products')
          }
        }
    
        //call the getProducts fnc
        getProducts()
    
      }, [])

      const handleDeleteProduct = async (id: number)=> {
        try {
            const destory = await deleteProduct(id)
            setProducts(products.filter(product => product.id !== id))
            return destory
        }catch(error) {
            console.log(error)
            throw error
        }
      }

      
      const renderedProducts = []
      for (let i = 0; i < products.length; i++) {
        const productImages = JSON.parse(products[i].product_image);

        renderedProducts.push(
            <div key={products[i].id} className="p-[15px] border-[2px] border-solid border-gray-300">
                <div className="w-full h-[300px] cursor-pointer">
                    <img src={productImages[0]} className="h-full w-full object-cover object-center" alt="Product" />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="mt-[18px]">
                        <h3 className='select-none'>{products[i].product_price} Rwf</h3>
                        <p className='select-none cursor-pointer'><strong>{products[i].product_name}</strong></p>
                    </div>
                    <div>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <EllipsisVerticalIcon title='Click to add to cart' className="size-[20px] cursor-pointer" />
                            </DropdownTrigger>
                            <DropdownMenu variant="faded">
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem className="text-red-500" onClick={()=> handleDeleteProduct(products[i].id)} >Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
      }

  return (
    <>
    {renderedProducts}
    </>
  )
}

export default SingleProductManage
  