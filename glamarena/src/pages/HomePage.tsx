import About from "../Components/About"
import CarouselP from "../Components/Carousel"
import Category from "../Components/Category"
import Head from "../Components/Head"
import Navbar from "../Components/Navbar"


function HomePage() {
  return (
    <div className='bg-[#FFEFE0] font-noto-sans' >
        <Navbar/>
        <Head/>
        <Category/>
        <About />
        <CarouselP/>
    </div>
  )
}

export default HomePage