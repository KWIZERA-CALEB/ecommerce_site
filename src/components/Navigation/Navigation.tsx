import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'


const Navigation = () => {
  const [showScroll, setShowScroll] = useState(false);

  const location = useLocation();

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);


  return (
    <div className={showScroll ? `w-full fixed top-0 left-0 right-0 bg-white border-b border-[2px] border-gray-300 h-[90px] pt-[20px] z-9999 pb-[20px] pl-[40px] pr-[40px] flex flex-row justify-between items-center` : `w-full fixed top-0 left-0 right-0 bg-white border-b border-[2px] border-gray-300 h-[90px] pt-[20px] pb-[20px] pl-[40px] pr-[40px] flex flex-row justify-between items-center`}>
          <div>
              <div><h4 className="text-slate-900 font-black text-[25px] md:text-[34px] select-none">React Shop</h4></div>
          </div>

          <div className="hidden flex-row space-x-[30px] items-center md:flex">
              <div className={location.pathname === '/' ? `text-blue-500 select-none cursor-pointer` : `text-slate-900 select-none cursor-pointer`}><strong><Link to={'/'}>Home</Link></strong></div>
              <div className={location.pathname === '/products' ? `text-blue-500 select-none cursor-pointer` : `text-slate-900 select-none cursor-pointer`}><strong><Link to={'/products'}>Products</Link></strong></div>
              <div className={location.pathname === '/gallery' ? `text-blue-500 select-none cursor-pointer` : `text-slate-900 select-none cursor-pointer`}><strong><Link to={'/gallery'}>Gallery</Link></strong></div>
              <div className={location.pathname === '/contact' ? `text-blue-500 select-none cursor-pointer` : `text-slate-900 select-none cursor-pointer`}><strong><Link to={'/contact'}>Contact</Link></strong></div>
          </div>
          
          <div className="flex flex-row space-x-[30px] items-center">
              <div className="flex justify-center items-center w-[40px] h-[40px] p-[6px] rounded-full border-[2px] border-solid border-gray-300 cursor-pointer"><Link to={'/search'}><MagnifyingGlassIcon className="size-6" /></Link></div>
              <div className="flex justify-center items-center w-[40px] h-[40px] p-[6px] rounded-full border-[2px] border-solid border-gray-300 cursor-pointer"><Link to={'/cart'}><ShoppingCartIcon className="size-6" /></Link></div>
              <div className="flex justify-center items-center w-[40px] h-[40px] p-[6px] rounded-full border-[2px] border-solid border-gray-300 cursor-pointer"><Link to={'/user'}><UserIcon className="size-6" /></Link></div>
          </div>
    </div>
  )
}

export default Navigation
