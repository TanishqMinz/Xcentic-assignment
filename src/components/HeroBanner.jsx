export default function HeroBanner() {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Mini E-commerce Store</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices!</p>
          <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    )
  }