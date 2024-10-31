const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2">Miku Chan</h2>
                        <p className="text-sm text-gray-400">
                            "Bergabunglah dengan kami di Anime List untuk merayakan kecintaan kita terhadap anime, <br />
                            Temukan dunia anime yang penuh warna dan jadilah bagian dari komunitas kami!"
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="mb-4 md:mb-0 md:mr-10">
                            <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="hover:text-teal-400 transition duration-300">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="hover:text-teal-400 transition duration-300">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-teal-400 transition duration-300">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-lg">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/profile.php?id=100005817349296" target="_blank" className="hover:text-teal-400 transition duration-300">
                                    <i className="fab fa-facebook-f"></i> {/* FontAwesome icon */}
                                </a>
                                <a href="https://github.com/muhammadfauzan810" target="_blank" className="hover:text-teal-400 transition duration-300">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://www.instagram.com/pohon_8109/" target="_blank" className="hover:text-teal-400 transition duration-300">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">&copy; 2024 Miku Chan.</p>
                    <div className="mt-2">
                        <a href="/privacy" className="hover:underline text-gray-400">
                            Privacy Policy
                        </a>
                        <span className="mx-2">|</span>
                        <a href="/terms" className="hover:underline text-gray-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
