import images from "../utils/importImages"; // Import images

export default function PostList({ onSelectPost, posts }) {  // 🔥 Accept filtered posts
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div 
            key={post.id} 
            className="w-full md:w-1/3 p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
            onClick={() => onSelectPost(post)} 
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <img 
              src={images[post.image]} 
              alt={post.title} 
              className="w-full h-85 object-cover rounded-lg mt-2"  // ✅ Fixed width & height
            />
            <p className="text-gray-700 mt-2">{post.content.slice(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 w-full">No items found in this category.</p>  // ✅ Centered message
      )}
    </div>
  );
}
