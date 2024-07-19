import SingleCategory from "../atoms/SingleCategory"

const Categories = () => {
  return (
    <div className="w-full pl-[60px] pr-[60px] mt-[30px] mb-[30px]">
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
