import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductDetails from '../containers/ProductDetails';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('ProductDetails', () => {
  test('renders', () => {
    render(<Provider store={store}><ProductDetails /></Provider>);
    const addToCart = screen.getByText('...Loading');
    expect(addToCart).toBeInTheDocument();
  });
});
