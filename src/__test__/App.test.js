import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to your Product Catalog" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to your Product Catalog')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Product Form" h2', () => {
        render(<App />);
        expect(screen.queryByText('Product Form')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Products List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Products List')).toBeInTheDocument();
    });
});
