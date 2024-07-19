import SingleProduct from "../components/atoms/SingleProduct"
import Navigation from "../components/Navigation/Navigation"

const Products = () => {
  return (
    <>
        <Navigation />
        <div className="mb-[40px]">
            <div className="mb-[15px]">
                <div><h4 className="text-slate-900 font-black text-[25px] select-none mt-[20px] flex justify-center">Products Page</h4></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px] pl-[6px] pr-[6px] md:pr-[60px] md:pl-[60px] md:grid-cols-3 lg:grid-cols-4">
                <SingleProduct />
            </div>
        </div>
    </>
  )
}

export default Products
