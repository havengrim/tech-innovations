import { images } from "@/assets/images";

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900">
            <div className="container p-6 mx-auto">
                <div className="lg:flex lg:justify-between">
                    <div className="w-full lg:w-2/5">
                        <div className="px-6">
                            <a href="#">
                                <img className="w-auto h-14" src={images.logo} alt="Tech Innovations Daily Logo" />
                            </a>
                            <p className="max-w-sm mt-2 text-white dark:text-gray-400">
                                Stay informed about Tech Innovations Daily's community news, events, and enriching educational opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-6 lg:w-3/5 lg:mt-0">
                        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-400 dark:text-white">About Tech Innovations Daily</h3>
                                <ul className="mt-2 space-y-2 text-white dark:text-gray-400">
                                    <li><a href="#" className="hover:underline">Our Mission</a></li>
                                    <li><a href="#" className="hover:underline">Team</a></li>
                                    <li><a href="#" className="hover:underline">Company History</a></li>
                                    <li><a href="#" className="hover:underline">Accreditations</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-400 dark:text-white">Academics</h3>
                                <ul className="mt-2 space-y-2 text-white dark:text-gray-400">
                                    <li><a href="#" className="hover:underline">Programs Offered</a></li>
                                    <li><a href="#" className="hover:underline">Curriculum</a></li>
                                    <li><a href="#" className="hover:underline">Extracurricular Activities</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-400 dark:text-white">Admissions</h3>
                                <ul className="mt-2 space-y-2 text-white dark:text-gray-400">
                                    <li><a href="#" className="hover:underline">How to Apply</a></li>
                                    <li><a href="#" className="hover:underline">Admission Requirements</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-400 dark:text-white">Contact</h3>
                                <p className="mt-2 text-white dark:text-gray-400">Phone: 123-456-7890</p>
                                <p className="mt-2 text-white dark:text-gray-400">Email: info@techinnovationsdaily.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-white dark:text-gray-400">
                    <p>© Tech Innovations Daily - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
