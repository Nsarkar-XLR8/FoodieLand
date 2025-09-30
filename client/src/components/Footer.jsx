const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 shadow-lg">
      <div className="container mx-auto px-6 py-12">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-3">
              <span className="text-yellow-400">Foodie</span>Land
            </h2>
            <p className="text-gray-400 text-sm">
              Your go-to place for discovering the most delicious food from around the world. 
              Taste the passion in every dish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Our Menu</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <span className="mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                       fill="currentColor" className="bi bi-geo-alt-fill text-yellow-400"
                       viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7
                             a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </span>
                123 Flavor Avenue, Culinary City, 1010
              </p>
              <p className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                       fill="currentColor" className="bi bi-telephone-fill text-yellow-400"
                       viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1
                          2.61.163L6.29 2.98c.329.423.445.974.28
                          1.465l-2.095 2.095a16.002 16.002 0 0 0
                          6.196 6.196l2.095-2.095c.491-.165
                          1.042-.048 1.465.28l2.306 1.794c.829.645.905
                          1.87.163 2.611l-1.034 1.034c-.74.74-1.846
                          1.065-2.877.702a18.634 18.634 0 0
                          1-7.01-4.42 18.634 18.634 0 0
                          1-4.42-7.009c-.362-1.03-.038-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </span>
                +880-1626 644761
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"
                 className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58
                           0-.002 3.603-.002 8.05c0 4.017 2.926
                           7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017
                           1.195-3.131 3.022-3.131.876 0 1.791.157
                           1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303
                           1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604
                           6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram"
                 className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                {/* Instagram SVG */}
              </a>
              <a href="#" aria-label="Twitter"
                 className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                {/* Twitter SVG */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center text-gray-500">
            <h3 className="text-lg font-medium text-gray-300 mb-2">
              Here You Can Find Delicious Foods
            </h3>
            <p className="text-sm">&copy; 2025 | Nayem Sarkar. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
