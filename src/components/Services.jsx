export default function Services() {
    const categories = [
      { name: "Children's Wear", description: "Trendy and comfortable outfits for kids.", color: "bg-blue-200" },
      { name: "Men's Collection", description: "Stylish formal and casual clothing for men.", color: "bg-gray-200" },
      { name: "Women's Fashion", description: "Elegant and modern designs for women.", color: "bg-pink-200" },
      { name: "Winter Collection", description: "Cozy jackets, hoodies, and warm outfits.", color: "bg-purple-200" },
      { name: "Summer Wear", description: "Light and breezy styles perfect for hot weather.", color: "bg-yellow-200" },
    ];
  
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Services</h1>
        <p className="text-gray-600 mb-8">We offer a wide range of clothing collections for all ages and styles.</p>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md ${category.color}`}>
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-700 mt-2">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  