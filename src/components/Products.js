import React, { useContext } from "react"
import { ProductsContext } from "./ProductProvider"

const Products = () => {
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();

  return (
    <div>
      {products.map(product => (
        <div>{ product.name }</div>
      ))}
    </div>
  )
}

export default Products;
