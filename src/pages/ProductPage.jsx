import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(error => console.error('Error fetching data for this product', error))
  }, [id])

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-purple-600 mb-6">${product.price.toFixed(2)}</p>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 inline-block"
          >
            Buy Now on Amazon
          </a>
        </div>
      </div>
    </div>
  )
}