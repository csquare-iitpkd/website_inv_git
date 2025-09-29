import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
  >
    ❯
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
  >
    ❮
  </button>
);

const ImageSlider = () => {
  const imageFiles = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    // Add all the file names from your carousel folder
  ];

  const images = imageFiles.map((file) => `/corousel/${file}`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full py-12 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Gallery
      </h2>

      {/* Slider Wrapper */}
      <div className="relative w-[85%] md:w-[70%] mx-auto rounded-2xl overflow-hidden shadow-lg p-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-[500px] relative"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageSlider;
