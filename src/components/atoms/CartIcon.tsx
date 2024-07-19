import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const CartIcon = () => {
  return (
    <div className='bg-blue-500 w-[60px] h-[60px] fixed bottom-[40px] right-[40px] p-[6px] rounded-full'>
      <div className="flex justify-center items-center mt-[10px] text-white font-bold"><Link to={'/cart'}><ShoppingCartIcon className="size-6" /></Link></div>
    </div>
  )
}

export default CartIcon
