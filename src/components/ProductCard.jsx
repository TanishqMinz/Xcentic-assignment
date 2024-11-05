import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-purple-600 font-bold mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/product/${product.id}`}
            className="text-purple-600 hover:text-purple-800"
          >
            View Details
          </Link>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    amazonLink: PropTypes.string.isRequired,
  }).isRequired,
}