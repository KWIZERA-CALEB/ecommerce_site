import {useEffect, useState} from 'react'
import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import SingleProduct from '../components/atoms/SingleProduct'
import CartIcon from '../components/atoms/CartIcon'

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

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
    <>
      {showScroll ? <CartIcon /> : null}
      <Navigation />
      <Hero />
      <Categories />
      <div className="mb-[40px]">
          <div className="mb-[15px]">
              <div><h4 className="text-slate-900 font-black text-[25px] select-none mt-[20px] flex justify-center">Start Shopping</h4></div>
          </div>
          <div className="grid grid-cols-1 gap-[6px] pl-[6px] pr-[6px] md:pr-[60px] md:pl-[60px] md:grid-cols-4">
              <SingleProduct />
          </div>
      </div>      
    </>
  )
}

export default Home
