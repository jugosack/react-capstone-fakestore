import { render, screen } from '@testing-library/react';
import ProductComponent from './ProductComponent';

test('renders placeholder', () => {
  render(<ProductComponent />);
  const placeholder = screen.getByPlaceholderText('woman, man, jewerly...');
  expect(placeholder).toBeInTheDocument();
});
