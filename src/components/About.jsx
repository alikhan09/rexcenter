export default function About() {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">About RexCenter</h1>
        <p className="text-gray-700">
          Welcome to <span className="font-bold text-purple-700">RexCenter</span>, your ultimate fashion destination in Karachi’s famous **Zainab Market**.
        </p>
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🕒 Shop Timings</h2>
          <p className="text-gray-600">Monday - Saturday: <span className="text-green-600 font-semibold">10:00 AM - 10:00 PM</span></p>
          <p className="text-gray-600">Sunday: <span className="text-red-500 font-semibold">Closed</span></p>
        </div>
  
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">📍 Location</h2>
          <p className="text-gray-600">Zainab Market, Saddar, Karachi, Pakistan</p>
        </div>
  
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">📞 Contact Us</h2>
          <p className="text-gray-600">Phone: <span className="font-semibold">+92 312 3456789</span></p>
          <p className="text-gray-600">Email: <span className="font-semibold">info@rexcenter.com</span></p>
        </div>
      </div>
    );
  }
  