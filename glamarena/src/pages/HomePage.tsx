import About from "../Components/About"
import CarouselCard from "../Components/Carousel"
import Category from "../Components/Category"
import Footer from "../Components/Footer"
import Head from "../Components/Head"
import Navbar from "../Components/Navbar"


function HomePage() {
  return (
    <div className='bg-[#FFEFE0] font-noto-sans' >
        <Navbar/>
        <Head/>
        <Category/>
        <About />
        <CarouselCard/>
        <Footer/>
    </div>
  )
}

export default HomePage