import images from "../utils/importImages"; // Import images

export default function PostDetail({ post, goBack }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <button onClick={goBack} className="mb-4 text-blue-600 hover:underline">
        ← Back to Posts
      </button>

      <div className="w-110 p-6 border border-gray-300 rounded-lg shadow-lg bg-white ">
        {/* Display the image if available */}
        {images[post.image] ? (
          <img
            src={images[post.image]}
            alt={post.title}
            className="w-100 h-100 object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg mb-4">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
        <p className="text-lg font-semibold text-blue-600 mt-2">{post.price}</p>
        <p className="text-gray-700 mt-4 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}
