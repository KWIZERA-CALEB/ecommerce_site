import { ReactNode } from 'react'


type CategoryProps = {
    image: any,
    children: ReactNode
}

const SingleCategory = (props: CategoryProps) => {
    const { image, children } = props
  return (
    <>
        <div className='bg-white flex flex-row items-center space-x-[20px] p-[15px] rounded-[20px]'>
            <div className="bg-slate-800 w-[50px] h-[50px] rounded-full cursor-pointer p-[6px] flex justify-center items-center"><img src={image} className="w-[50px]" alt="Category" /></div>
            <div className="font-bold text-slate-900"><strong>{children}</strong></div>
        </div>
    </>
  )
}

export default SingleCategory
