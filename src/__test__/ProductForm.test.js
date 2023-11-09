import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductForm from '../components/ProductForm';

const addProductMock = jest.fn();
const updateProductMock = jest.fn();

describe('boundary', () => {
    test('ProductFormComponent boundary it is rendered', () => {
        render(<ProductForm addProduct={addProductMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('ProductFormComponent boundary it has "Add a Product" h2', () => {
        render(<ProductForm addProduct={addProductMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add a Product');
    });

    test('ProductFormComponent boundary it has "Edit Product" h2 when in edit mode', () => {
        render(<ProductForm editProduct={{ name: 'Edit Product' }} updateProduct={updateProductMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Product');
    });

    test('ProductFormComponent boundary it has name input field', () => {
        render(<ProductForm addProduct={addProductMock} />);
        const nameInput = screen.getByLabelText('Name:');
        expect(nameInput).toBeTruthy();
    });

    test('ProductFormComponent boundary it has description input field', () => {
        render(<ProductForm addProduct={addProductMock} />);
        const descriptionInput = screen.getByLabelText('Description:');
        expect(descriptionInput).toBeTruthy();
    });

    test('ProductFormComponent boundary it has price input field', () => {
        render(<ProductForm addProduct={addProductMock} />);
        const priceInput = screen.getByLabelText('Price:');
        expect(priceInput).toBeTruthy();
    });

    test('ProductFormComponent boundary it has an "Add Product" button', () => {
        render(<ProductForm addProduct={addProductMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Product' });
        expect(addButton).toBeTruthy();
    });

    test('ProductFormComponent boundary it has an "Update Product" button when in edit mode', () => {
        render(<ProductForm editProduct={{ name: 'Edit Product' }} updateProduct={updateProductMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Product' });
        expect(updateButton).toBeTruthy();
    });
});
