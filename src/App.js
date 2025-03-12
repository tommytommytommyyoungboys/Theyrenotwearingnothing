/**
 * App.js
 * 
 * This file contains the main App component created by Create React App (CRA).
 * It serves as the root component for the application, displaying the default
 * CRA landing page with logo and basic instructions.
 */

// Import React to enable JSX syntax and component functionality
import React from 'react';
// Import the React logo SVG as a variable for use in the component
import logo from './logo.svg';
// Import component-specific styles
import './App.css';

/**
 * App - The main functional component that represents our application.
 * Functional components are the modern preferred way to create React components.
 * This component returns JSX which React will render to the DOM.
 */
function App() {
  return (
    // Main container div with App class for styling
    <div className="App">
      {/* Header section containing the logo, text, and link */}
      <header className="App-header">
        {/* React logo with animation applied via CSS */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Instruction paragraph with inline code formatting */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* External link to React documentation */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" // Security best practice for external links
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;
