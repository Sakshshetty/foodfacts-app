import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  const { product_name, brands, nutriments, image_small_url, code } = product

  const handleClick = () => {
    navigate(`/product/${code}`)
  }

  return (
    <div 
      className="food-card" 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    >
      {image_small_url ? (
        <img src={image_small_url} alt={product_name} />
      ) : (
        <p>No image</p>
      )}

      <h2>{product_name || "Unknown Product"}</h2>
      <p>{brands || "No brand"}</p>

      <p>Calories: {nutriments?.['energy-kcal_100g'] || 0}</p>
      <p>Protein: {nutriments?.proteins_100g || 0}g</p>
      <p>Carbs: {nutriments?.carbohydrates_100g || 0}g</p>
      <p>Fat: {nutriments?.fat_100g || 0}g</p>
    </div>
  )
}

export default FoodCard