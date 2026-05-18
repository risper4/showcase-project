import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import Shop from '../components/Shop';
import ShopList from '../components/ShopList';



vi.mock('../components/NavBar', () => ({ default: () => <div data-testid="navbar" /> }));

vi.mock('../components/Search', () => ({
  default: ({ search, setSearch }) => (
    <input
      data-testid="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  ),
}));

vi.mock('../components/ShopList', () => ({
  default: ({ smoothies }) => (
    <div data-testid="shop-list">
      {smoothies.map((s) => <span key={s.id}>{s.name}</span>)}
    </div>
  ),
}));

vi.mock('../components/ShopCard', () => ({
  default: ({ smoothie }) => <div data-testid="shop-card">{smoothie.name}</div>,
}));

const mockSmoothies = [
  { id: 1, name: 'Mango Blast', ingredients: ['mango'], price: 5, badges: [] },
  { id: 2, name: 'Berry Mix', ingredients: ['berries'], price: 6, badges: [] },
];

vi.mock('../useContext/SmoothieContext', () => ({
  UseSmoothies: () => ({
    smoothies: mockSmoothies,
    loading: false,
    setSmoothies: vi.fn(),
  }),
}));

//Shop test
describe('Shop', () => {
  it('renders NavBar, Search and ShopList', () => {
    render(<Shop />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('shop-list')).toBeInTheDocument();
  });

  it('shows all smoothies by default', () => {
    render(<Shop />);
    expect(screen.getByText('Mango Blast')).toBeInTheDocument();
    expect(screen.getByText('Berry Mix')).toBeInTheDocument();
  });

  it('filters smoothies when searching', async () => {
    render(<Shop />);
    await userEvent.type(screen.getByTestId('search-input'), 'mango');
    expect(screen.getByText('Mango Blast')).toBeInTheDocument();
    expect(screen.queryByText('Berry Mix')).not.toBeInTheDocument();
  });
});

// ShopList Tests 

describe('ShopList', () => {
  it('renders a card for each smoothie', () => {
    render(<ShopList smoothies={mockSmoothies} addDelete={vi.fn()} addEdit={vi.fn()} />);
    expect(screen.getAllByTestId('shop-card')).toHaveLength(2);
  });

  it('renders empty list when no smoothies provided', () => {
    render(<ShopList smoothies={[]} addDelete={vi.fn()} addEdit={vi.fn()} />);
    expect(screen.queryAllByTestId('shop-card')).toHaveLength(0);
  });
});