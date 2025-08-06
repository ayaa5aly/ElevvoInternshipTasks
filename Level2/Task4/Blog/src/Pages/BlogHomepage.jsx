import { useState } from "react";
import tech from "../assets/programming.jpg";
import alps from "../assets/alps.jpg";
import coffee from "../assets/best-portland-coffee-prince-coffee.jpg";
import th from "../assets/Asian-Noodle.jpg";
import trip from "../assets/trip in japan.jpg";
import tech2 from "../assets/useEffect-and-useState-Hooks.png";
import cssGrid from "../assets/grid.jpg";
import barcelona from "../assets/traveling-to-barcelona-11.jpg";
import pasta from "../assets/pa.jpg";
import typescript from "../assets/maxresdefault.jpg";
const BlogHomepage = () => {
  // Sample blog post data
  const initialPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      category: "Tech",
      image: tech,
      description:
        "Learn how to use React Hooks to simplify your functional components.",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "My Trip to Japan",
      category: "Travel",
      image: trip,
      description: "Exploring the beautiful temples and cuisine of Kyoto.",
      date: "2023-04-22",
    },
    {
      id: 3,
      title: "The Best Coffee Shops in Portland",
      category: "Food",
      image: coffee,
      description:
        "A guide to my favorite coffee spots in the Pacific Northwest.",
      date: "2023-03-10",
    },
    {
      id: 4,
      title: "Understanding useState and useEffect",
      category: "Tech",
      image: tech2,
      description: "Deep dive into the most commonly used React hooks.",
      date: "2023-06-05",
    },
    {
      id: 5,
      title: "Hiking the Swiss Alps",
      category: "Travel",
      image: alps,
      description: "Breathtaking views and challenging trails in Switzerland.",
      date: "2023-02-18",
    },
    {
      id: 6,
      title: "Easy Vegan Recipes for Beginners",
      category: "Food",
      image: th,
      description: "Simple plant-based meals you can make in under 30 minutes.",
      date: "2023-01-30",
    },
    {
      id: 7,
      title: "Mastering CSS Grid Layout",
      category: "Tech",
      image: cssGrid, // Make sure to import this image
      description:
        "A comprehensive guide to creating modern layouts with CSS Grid.",
      date: "2023-07-12",
    },
    {
      id: 8,
      title: "Hidden Gems of Barcelona",
      category: "Travel",
      image: barcelona, // Make sure to import this image
      description:
        "Discover the less touristy but equally amazing places in Barcelona.",
      date: "2023-08-05",
    },
    {
      id: 9,
      title: "Authentic Italian Pasta Recipes",
      category: "Food",
      image: pasta, // Make sure to import this image
      description: "Learn to make classic Italian pasta dishes from scratch.",
      date: "2023-09-18",
    },
    {
      id: 10,
      title: "Introduction to TypeScript",
      category: "Tech",
      image: typescript, // Make sure to import this image
      description:
        "Why and how to start using TypeScript in your JavaScript projects.",
      date: "2023-10-22",
    },
  ];

  // State management
  const [posts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get unique categories
  const categories = [
    "All",
    ...new Set(initialPosts.map((post) => post.category)),
  ];

  // Filter posts by search term and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchTerm.trim() === "" || new RegExp(searchTerm, "i").test(post.title);

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-400 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">My Personal Blog</h1>
          <p className="mt-2">Sharing my thoughts and experiences</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Search Input */}
          <div className="w-full md:w-1/2">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Posts
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
            />
          </div>

          {/* Category Filter */}
          <div className="w-full md:w-1/2">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Filter by Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Showing {currentPosts.length} of {filteredPosts.length} posts
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-400 text-xs font-semibold rounded-full mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <button className="text-blue-400 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No posts found matching your criteria
            </h3>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === page
                        ? "bg-blue-400 text-white"
                        : "border border-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} My Personal Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogHomepage;
