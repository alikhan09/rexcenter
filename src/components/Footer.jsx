export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} Rex Center. All rights reserved.</p>
          </div>
  
          {/* Center Section - Contact Info */}
          <div className="text-center my-4 md:my-0">
            <p className="text-sm">📍 Location: Karachi, Pakistan</p>
            <p className="text-sm">📞 Contact: +921 123 4567</p>
            <p className="text-sm">📧 Email: info@RexCenter.com</p>
          </div>
  
          {/* Right Section - Social Media (Optional) */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
          </div>
  
        </div>
      </footer>
    );
  }
  