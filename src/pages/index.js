import React from "react"
import ProductsProvider from "../components/ProductProvider";
import Products from "../components/Products";

const index = () => (
    <ProductsProvider>
        <Products />
    </ProductsProvider>
)

export default index;