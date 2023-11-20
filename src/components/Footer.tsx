import Image from "next/image"
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300  flex items-center justify-center gap-4"> <Image className = "w-32" src={logo} alt="logo"/>
    <p> Модная обувь - доступна каждому! <a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="https://vk.com/gemwalk"> Свяжись с нами! </a> </p> </div>
  )
}

export default Footer