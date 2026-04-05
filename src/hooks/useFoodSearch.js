import { useState } from 'react'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const searchFood = async (query) => {
    setLoading(true)

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1&page_size=10`
      )

      const data = await res.json()

      const formatted = data.products.map(p => ({
        id: p.id || p._id,
        product_name: p.product_name,
        brands: p.brands
      }))

      setResults(formatted)
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return { results, loading, searchFood }
}

export default useFoodSearch