import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
    <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
    <LuMenu className ="text-xl"/>Все товары
    </p>
    </div>
  )
}

export default BottomHeader