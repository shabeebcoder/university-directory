import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './components/Header';
import List from './components/List';
import Details from './pages/Details';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Navigation bar components tests', () => {
  test('renders header with correct title', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<Header />);
    });
    const titleElement = screen.getByText('University Directory');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders header with correct link', () => {
    render(<Header />);
    const linkElement = screen.getByRole('link', { name: 'University Directory' });
    expect(linkElement).toHaveAttribute('href', '/');
  });

  test('header has correct class', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('navBar');
  });

  test('header container has correct class', () => {
    render(<Header />);
    // eslint-disable-next-line testing-library/no-node-access
    const containerElement = screen.getByRole('banner').querySelector('.container');
    expect(containerElement).toHaveClass('container');
  });

  test('brand has correct class', () => {
    render(<Header />);
    const brandElement = screen.getByRole('link', { name: 'University Directory' });
    expect(brandElement).toHaveClass('brand');
  });
})

// 

describe('University List component tests', () => {


  test('renders list item with correct name', () => {
    const item = { name: 'Test University', fadeOut: false };
    render(<List item={item} />);
    const nameElement = screen.getByText('Test University');
    expect(nameElement).toBeInTheDocument();
  });

  test('renders list item with correct country', () => {
    const item = { country: 'United Arab Emirates', fadeOut: false };
    render(<List item={item} />);
    const countryElement = screen.getByText('United Arab Emirates');
    expect(countryElement).toBeInTheDocument();
  });

  test('renders list item with fade-out class when fadeOut is true', () => {

    const item = { name: 'Test University', fadeOut: true };
    render(<List item={item} index={1} deleteItem={() => jest.fn()} />);
    const listBoxElement = screen.getByRole('list');
    expect(listBoxElement).toHaveClass('fade-out');
  });

  test('clicking delete icon calls deleteItem with correct index', () => {
    const deleteItemMock = jest.fn();
    const index = 0;
    const item = { name: 'Test University', fadeOut: false };
    render(<List item={item} index={index} deleteItem={deleteItemMock} />);
    const deleteIcon = screen.getByRole('tooltip');
    fireEvent.click(deleteIcon);
    expect(deleteItemMock).toHaveBeenCalledWith(index);
  });


})





