import AdminMenu from "../components/atoms/AdminMenu"
import Navigation from "../components/Navigation/Navigation"
import SingleProduct from "../components/atoms/SingleProduct"

const AdminProducts = () => {
  return (
    <>
        <Navigation />
        <div className="pl-[6px] flex flex-row space-x-[6px] pr-[6px] mt-[30px] md:mt-[80px] md:pl-[40px] md:pr-[40px]">
            <AdminMenu></AdminMenu>
            <div className="p-[0px] w-full md:w-[80%]">
                <div className="grid grid-cols-1 gap-[6px] pl-[6px] pr-[6px] md:pr-[60px] md:pl-[60px] md:grid-cols-4">
                <SingleProduct />
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminProducts
