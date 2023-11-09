import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const addedProduct = await axios.post('http://localhost:4000/products', product);
      setProducts([...products, addedProduct.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (product) => {
    try {
      await axios.put(`http://localhost:4000/products/${product.id}`, product);
      setProducts(
        products.map((p) => (p.id === product.id ? { ...p, ...product } : p))
      );
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to your Product Catalog</h2>
      <h2>Product Form</h2>
      <ProductForm addProduct={addProduct} editProduct={editProduct} updateProduct={updateProduct} />
      <h2>Products List</h2>
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        setEditProduct={setEditProduct}
      />
    </div>
  );
}

export default App;
