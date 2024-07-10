import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCard = () => {
    const images = [
        { src: "/vote1.jpg", legend: "Mina" },
        { src: "/vote2.jpg", legend: "Suman" },
        { src: "/vote3.jpg", legend: "Mikasa" },
        { src: "/vote4.jpg", legend: "Geyu" }
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-[#ff912e] text-center m-10">Top Voted Designs</h1>
            <div className=" overflow-hidden rounded-lg shadow-md w-2/4 h-auto m-auto bg-[#F15512] border-4 border-[#F020B2]">
                <Carousel
                    autoPlay={true}
                    interval={1500} // Adjust interval for slide transition
                    infiniteLoop={true}
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                    dynamicHeight={true}
                    centerMode={true}
                    centerSlidePercentage={100}
                    emulateTouch={true}
                    stopOnHover={true}
                    className="w-full m-2"
                >
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img
                                src={image.src}
                                alt={`Design ${index + 1}`}
                                className="object-cover h-72 sm:h-96 md:h-80 lg:h-96 w-full rounded-lg shadow-lg "
                            />
                            <p className="legend">{image.legend}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselCard;
