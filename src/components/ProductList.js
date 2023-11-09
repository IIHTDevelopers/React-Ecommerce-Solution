import React, { useState } from 'react';

const ProductList = ({ products, deleteProduct, setEditProduct }) => {
    const [filters, setFilters] = useState({ name: '' });

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(filters.name.toLowerCase());
    });

    return (
        <div>
            <div>
                <label htmlFor="name">
                    Filter by Name:
                    <input
                        id="name"
                        type="text"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <li key={product.id}>
                            <strong>Name:</strong> {product.name}
                            <br />
                            <strong>Description:</strong> {product.description}
                            <br />
                            <strong>Price:</strong> {product.price}
                            <button onClick={() => setEditProduct(product)}>Edit</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No products found</li>
                )}
            </ul>
        </div>
    );
};

export default ProductList;
