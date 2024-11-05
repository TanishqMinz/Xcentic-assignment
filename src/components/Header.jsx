import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error))
  }, [])

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">MiniShop</Link>
        <nav>
          <ul className="flex space-x-6">
            {categories.map(category => (
              <li key={category}>
                <Link to={`/category/${category}`} className="text-gray-600 hover:text-purple-600">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/cart" className="text-gray-600 hover:text-purple-600">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  )
}