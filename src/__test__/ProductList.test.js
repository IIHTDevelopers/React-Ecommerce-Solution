import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99 },
];

const deleteProduct = jest.fn();
const setEditProduct = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <ProductList
                products={products}
                deleteProduct={deleteProduct}
                setEditProduct={setEditProduct}
            />
        );
    });

    test('ProductListComponent boundary it has a "Filter by Name" text field', () => {
        const nameInput = screen.getByLabelText('Filter by Name:');
        expect(nameInput).toBeTruthy();
    });

    test('ProductListComponent boundary it displays the Name of a product after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Name:');
        fireEvent.change(filterInput, { target: { value: 'Product 1' } });
        const strongElement = await screen.findByText('Name:');
        expect(strongElement).toBeTruthy();
    });

    test('ProductListComponent boundary it displays the Description of a product after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Name:');
        fireEvent.change(filterInput, { target: { value: 'Product 1' } });
        const strongElement = await screen.findByText('Description:');
        expect(strongElement).toBeTruthy();
    });

    test('ProductListComponent boundary it displays the Price of a product after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Name:');
        fireEvent.change(filterInput, { target: { value: 'Product 1' } });
        const strongElement = await screen.findByText('Price:');
        expect(strongElement).toBeTruthy();
    });

    test('ProductListComponent boundary it displays the "Edit" button to edit the product', async () => {
        const filterInput = screen.getAllByText('Edit');
        expect(filterInput).toBeTruthy();
    });

    test('ProductListComponent boundary it calls deleteProduct when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteProduct).toHaveBeenCalledWith(products[0].id);
    });

    test('ProductListComponent boundary it removes the product after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText('Name: Product 1')).toBeNull();
        expect(screen.queryByText('Description: Description 1')).toBeNull();
        expect(screen.queryByText('Price: 19.99')).toBeNull();
    });

    test('ProductListComponent boundary it displays "No products found" when there are no products', async () => {
        render(
            <ProductList products={[]} deleteProduct={deleteProduct} setEditProduct={setEditProduct} />
        );
        const noProductsMessage = await screen.findByText('No products found');
        expect(noProductsMessage).toBeTruthy();
    });
});
