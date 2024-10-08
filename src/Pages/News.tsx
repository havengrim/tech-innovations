import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { images } from "@/assets/images";
import { Card } from "@/components/ui/card";

const News = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-start text-gray-800">
            Our Latest Tech News and Innovations
          </h2>
          <p className="mb-10 mt-4 text-gray-700">
            Stay updated with the latest developments in technology and innovation. From groundbreaking achievements to upcoming tech events, we are dedicated to fostering a vibrant learning environment that shapes the innovators of tomorrow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-16">
            {/* News Card 1 */}
            <Card 
              data-aos="fade-up" // Animation for Card 1
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={images.slider3}
                alt="Exciting Tech Workshop"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Exciting Tech Workshop</h3>
                <p className="text-gray-600 mt-2">
                  Participants engaged in hands-on activities during our recent tech workshop, showcasing their skills and creativity.
                </p>
                <div className="flex items-center text-gray-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 20, 2024</span>
                </div>
              </div>
            </Card>

            {/* News Card 2 */}
            <Card 
              data-aos="fade-up" // Animation for Card 2
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={images.slider4}
                alt="Tech Conference Highlights"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Tech Conference Highlights</h3>
                <p className="text-gray-600 mt-2">
                  Innovators from various fields gathered to share insights and breakthroughs during the recent tech conference.
                </p>
                <div className="flex items-center text-gray-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 18, 2024</span>
                </div>
              </div>
            </Card>

            {/* News Card 3 */}
            <Card 
              data-aos="fade-up" // Animation for Card 3
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={images.slider2}
                alt="Coding Competition"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Coding Competition</h3>
                <p className="text-gray-600 mt-2">
                  Talented coders competed in a friendly competition, showcasing their programming skills and creativity.
                </p>
                <div className="flex items-center text-gray-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 15, 2024</span>
                </div>
              </div>
            </Card>

            {/* Add more news cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
