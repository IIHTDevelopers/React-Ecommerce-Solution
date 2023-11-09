import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, editProduct, updateProduct }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
    });

    useEffect(() => {
        if (editProduct) {
            setProduct({ ...editProduct });
        } else {
            setProduct({
                name: '',
                description: '',
                price: '',
            });
        }
    }, [editProduct]);

    const isEditForm = !!editProduct;

    const isFormIncomplete = !product.name || !product.price;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditForm) {
            updateProduct(product);
        } else {
            addProduct(product);
        }
        setProduct({ name: '', description: '', price: '' });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Product' : 'Add a Product'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <input
                        id="description"
                        type="text"
                        value={product.description}
                        onChange={(e) =>
                            setProduct({ ...product, description: e.target.value })
                        }
                    />
                </label>
                <label htmlFor="price">
                    Price:
                    <input
                        id="price"
                        type="number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Product' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
