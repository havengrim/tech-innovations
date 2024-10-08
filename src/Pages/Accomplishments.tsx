import { useEffect } from 'react'; // Import useEffect
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { images } from '@/assets/images';

export default function Accomplishments() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 
          className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800" 
          data-aos="fade-up" // AOS effect for heading
        >
          Celebrating Our Innovations
        </h2>
        <p 
          className="mb-10 mt-4 text-center w-full max-w-3xl mx-auto text-gray-700" 
          data-aos="fade-up" // AOS effect for paragraph
        >
          We embrace daily technological advancements, empowering students with innovative learning experiences that blend traditional values with modern methodologies.
        </p>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={1} // Display 1 slide at a time
          centeredSlides={false} // Disable centering, so multiple slides show side by side
          spaceBetween={30} // Space between slides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            // Adjust slidesPerView for smaller screens
            640: {
              slidesPerView: 4, // Show 1 slide on small screens
            },
            768: {
              slidesPerView: 4, // Show 2 slides on medium screens
            },
            1024: {
              slidesPerView: 4, // Show 3 slides on large screens
            },
          }}
        >
          <SwiperSlide>
            <img src={images.ac1} alt="Accomplishment 1" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac2} alt="Accomplishment 2" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac3} alt="Accomplishment 3" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac4} alt="Accomplishment 4" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac5} alt="Accomplishment 5" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac6} alt="Accomplishment 6" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac7} alt="Accomplishment 7" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac8} alt="Accomplishment 8" data-aos="fade-up" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.ac9} alt="Accomplishment 9" data-aos="fade-up" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
