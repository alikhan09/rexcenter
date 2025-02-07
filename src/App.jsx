import { useState } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { posts } from "./mockdata";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState("home");
  const [filter, setFilter] = useState("all"); // 🔹 Default to "all"

  // 🔥 Filter posts based on selected category
  const filteredPosts = filter === "all" ? posts : posts.filter(post => post.category === filter);

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "contact" && <Contact />}
      {page === "home" && <h1 className="text-center mt-10 text-2xl font-bold">Welcome to RexCenter! 🛍️</h1>}

      {/* 🔥 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
  {["all", "men", "women", "children", "winter", "summer"].map((category) => (
    <button
      key={category}
      className={`px-4 py-2 rounded-lg text-sm md:text-base ${
        filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
      } hover:bg-blue-400 transition`}
      onClick={() => setFilter(category)}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  ))}
</div>

      <div className="p-6">
        {selectedPost ? (
          <PostDetail post={selectedPost} goBack={() => setSelectedPost(null)} />
        ) : (
          <PostList onSelectPost={setSelectedPost} posts={filteredPosts} /> 
        )}
      </div>

      <Footer />
    </>
  );
}
