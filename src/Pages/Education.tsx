import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

const Education = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800">
            Empowering Knowledge in Technology
          </h2>
          <p className="mb-10 mt-4 text-center w-full max-w-3xl mx-auto text-gray-700">
            At Tech Innovations Daily, we are committed to providing insightful content that fosters understanding and innovation in the technology sector.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
            {/* Left Side: Image first on mobile */}
            <div className="order-1 sm:order-1" data-aos="fade-right" data-aos-duration="1000">
              <img
                src={images.slider4}
                alt="A representative image for Tech Education"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="order-2 sm:order-2" data-aos="fade-left" data-aos-duration="1000">
              <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                Online Learning Platforms
              </h3>
              <p className="text-lg mt-4 leading-relaxed text-gray-600">
                Tech Innovations Daily explores various online learning platforms that offer quality tech courses, helping individuals develop their skills and advance in their careers.
              </p>
              <Button className="rounded-full mt-4 bg-[#5271ff] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                Explore More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="order-1 sm:order-2" data-aos="fade-left" data-aos-duration="1000">
              <img
                src={images.slider2}
                alt="A representative image for Tech Trends"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="order-2 sm:order-1" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                Emerging Tech Trends
              </h3>
              <p className="text-lg mt-4 leading-relaxed text-gray-600">
                Stay updated with the latest trends in technology. Our articles cover AI, blockchain, IoT, and more, providing insights into how these innovations shape our world.
              </p>
              <Button className="rounded-full mt-4 bg-[#5271ff] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="order-1 sm:order-1" data-aos="fade-right" data-aos-duration="1000">
              <img
                src={images.slider3}
                alt="A representative image for Tech Careers"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="order-2 sm:order-2" data-aos="fade-left" data-aos-duration="1000">
              <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                Careers in Technology
              </h3>
              <p className="text-lg mt-4 leading-relaxed text-gray-600">
                Explore the diverse career opportunities in technology. We provide guidance on how to enter and excel in various tech fields, from software development to cybersecurity.
              </p>
              <Button className="rounded-full mt-4 bg-[#5271ff] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                Discover More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
