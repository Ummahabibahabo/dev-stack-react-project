import LogoImg from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="border-t-2 border-gray-200 bg-white mt-10 py-5">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <img src={LogoImg} alt="Dev Stack" className="w-28" />
            <p className="text-sm text-gray-400 leading-6 mt-4 max-w-md">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            {/* Social Links */}
            <ul className="flex gap-5 mt-5 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-pink-500">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">LEGAL</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
