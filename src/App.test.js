import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders learn react link when present', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders the app header with correct styling', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('App-header');
  });

  test('displays the React logo with appropriate alt text', () => {
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass('App-logo');
  });

  test('renders the "Edit src/App.js" instruction text', () => {
    const instructionText = screen.getByText(/Edit/i);
    expect(instructionText).toBeInTheDocument();
    expect(instructionText.textContent).toContain('src/App.js');
  });

  test('contains a code element inside the instruction paragraph', () => {
    const codeElement = screen.getByText('src/App.js');
    expect(codeElement.tagName).toBe('CODE');
    expect(codeElement).toBeInTheDocument();
  });

  test('has the correct CSS classes applied to the main App container', () => {
    const appDiv = document.querySelector('.App');
    expect(appDiv).toBeInTheDocument();
    expect(appDiv).toHaveClass('App');
  });
});
