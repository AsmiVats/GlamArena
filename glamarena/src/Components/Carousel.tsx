import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const DemoCarousel = () => {
    const images = [
        { src: "/vote1.jpg", legend: "Legend 1" },
        { src: "/vote2.jpg", legend: "Legend 2" },
        { src: "/vote3.jpg", legend: "Legend 3" },
        { src: "/vote4.jpg", legend: "Legend 3" }
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Top Voted Designs</h1>
            <div className="carousel-wrapper overflow-hidden rounded-lg shadow-md w-3/5 h-auto m-auto" >
                <Carousel
                    autoPlay={true}
                    interval={1500}
                    infiniteLoop={true}
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                    dynamicHeight={false}
                    centerMode={true}
                    centerSlidePercentage={100}
                    emulateTouch={true}
                    stopOnHover={true}
                    className="w-full"
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={`Design ${index + 1}`} className="object-cover h-72 sm:h-96 md:h-80 lg:h-96 w-full" />
                            <p className="legend text-white bg-black bg-opacity-50 p-2 rounded-md absolute bottom-0 left-0 right-0">{image.legend}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default DemoCarousel;
