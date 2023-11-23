import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from "../images/slider/sliderImg_1.png"
import sliderImg_2 from "../images/slider/sliderImg_2.jpg"
import sliderImg_3 from "../images/slider/sliderImg_3.jpg"
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative px-10 mx-24">
    <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
    <div className='px-11'>
       <Image src={sliderImg_1} alt="sliderImg" />
    </div>
    <div className='px-11'>
       <Image src={sliderImg_2} alt="sliderImg" />
    </div>
    <div className='px-11'>
       <Image src={sliderImg_3} alt="sliderImg" />
    </div>
</Carousel>
{/*<div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>*/}
</div>
  )
}

export default Banner