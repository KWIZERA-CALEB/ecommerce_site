import SingleCategory from "../atoms/SingleCategory"

const Categories = () => {
  return (
    <div className="w-full pl-[6px] pr-[6px] mt-[30px] mb-[30px] md:pr-[60px] md:pl-[60px]">
        <div className="text-white bg-slate-800 rounded-[20px] p-[20px] grid grid-cols-1 gap-[4px] md:grid-cols-6">
            <SingleCategory image="/images/men-shoes.png">Men Shoes</SingleCategory>
            <SingleCategory image="/images/men-shoes.png">Men Shoes</SingleCategory>
            <SingleCategory image="/images/men-shoes.png">Men Shoes</SingleCategory>
            <SingleCategory image="/images/men-shoes.png">Men Shoes</SingleCategory>
            <SingleCategory image="/images/men-shoes.png">Men Shoes</SingleCategory>
            <SingleCategory image="/images/men-shoes.png">Men Shoes</SingleCategory>
        </div>
    </div>
  )
}

export default Categories
