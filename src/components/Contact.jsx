export default function Contact() {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">Have questions? Reach out to us anytime.</p>
  
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">📍 Our Location</h2>
          <p className="text-gray-700">Zainab Market, Saddar, Karachi, Pakistan</p>
        </div>
  
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">📞 Call or Email Us</h2>
          <p className="text-gray-700">Phone: <span className="font-semibold">+92 312 3456789</span></p>
          <p className="text-gray-700">Email: <span className="font-semibold">info@rexcenter.com</span></p>
        </div>
  
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">📩 Send a Message</h2>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="p-3 border rounded-md" />
            <input type="email" placeholder="Your Email" className="p-3 border rounded-md" />
            <textarea placeholder="Your Message" className="p-3 border rounded-md h-32"></textarea>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
  