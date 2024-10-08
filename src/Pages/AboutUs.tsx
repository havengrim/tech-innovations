import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

const AboutUs = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
          {/* Left Side: Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="font-bold text-4xl leading-tight text-gray-700">
              Why Tech Innovations Daily?
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              At Tech Innovations Daily, we provide a dynamic platform for exploring the latest trends and insights in technology. Our mission is to educate and inspire through a blend of cutting-edge content and timeless wisdom. We cover everything from gadget reviews to emerging technologies, ensuring that our readers stay informed and engaged in the fast-paced tech landscape.
            </p>
            <Button className="rounded-full mt-4 bg-[#5271ff] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
              Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
            </Button>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            <img
              src={images.about}
              alt="A representative image for About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
