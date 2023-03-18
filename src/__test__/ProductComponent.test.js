import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductComponent from '../containers/ProductComponent';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('ProductComponent', () => {
  test('renders', () => {
    render(<Provider store={store}><ProductComponent /></Provider>);
    const heading = screen.getByRole('heading', {
      name: 'search by category',
    });
    expect(heading).toBeInTheDocument();

    const inputfield = screen.getByRole('textbox', {});
    expect(inputfield).toBeInTheDocument();

    const placeholder = screen.getByPlaceholderText('woman, man, jewerly...');
    expect(placeholder).toBeInTheDocument();
  });
});
