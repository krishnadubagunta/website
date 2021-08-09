import { useState, useEffect  } from "react"
import Navbar from "../../components/Navbar"

export default function Product({ product: productId }) {
  const [product, setProduct] = useState({})

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`/api/product/${productId}`)
      setProduct(data)
    }
    fetchData()
    return () => {}
  }, [productId, setProduct])

  return <>
    <Navbar />
    { JSON.stringify(product) }
  </>
}