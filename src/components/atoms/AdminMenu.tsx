import { useLocation, Link } from "react-router-dom"

const AdminMenu = () => {
    const location = useLocation()
  return (
    <>
        <div className="w-[20%] hidden md:block">
            <div className="flex flex-col w-full">
                <div className={location.pathname === '/admin/create' ? "bg-blue-500 p-[20px] text-white cursor-pointer" : "hover:bg-gray-300 p-[20px] text-slate-800 cursor-pointer"}><strong><Link to={'/admin/create'}>Add Product</Link></strong></div>
                <div className={location.pathname === '/admin/products' ? "bg-blue-500 p-[20px] text-white cursor-pointer" : "hover:bg-gray-300 p-[20px] text-slate-800 cursor-pointer"}><strong><Link to={'/admin/products'}>Products</Link></strong></div>
                <div className={location.pathname === '/admin/orders' ? "bg-blue-500 p-[20px] text-white cursor-pointer" : "hover:bg-gray-300 p-[20px] text-slate-800 cursor-pointer"}><strong><Link to={''}>Orders</Link></strong></div>
                <div className={location.pathname === '/admin/deleted' ? "bg-blue-500 p-[20px] text-white cursor-pointer" : "hover:bg-gray-300 p-[20px] text-slate-800 cursor-pointer"}><strong><Link to={''}>Deleted Products</Link></strong></div>
                <div className="bg-red-500 p-[20px] text-white cursor-pointer"><strong>Logout</strong></div>
            </div>
        </div>
    </>
  )
}

export default AdminMenu
