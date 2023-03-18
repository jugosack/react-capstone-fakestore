import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductListing from '../containers/ProductListing';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('ProductListing', () => {
  test('renders', () => {
    render(<Provider store={store}><ProductListing /></Provider>);
    const renderingComp = screen.getByText('search by category');
    expect(renderingComp).toBeInTheDocument();
  });
});
