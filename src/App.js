/**
 * App.js
 * 
 * This file contains the main App component created by Create React App (CRA).
 * It serves as the root component for the application, displaying the default
 * CRA landing page with logo and basic instructions.
 * 
 * This component demonstrates the basic structure of a React application
 * with a simple UI that includes a spinning logo, text, and a link.
 */

// Import React library to enable JSX syntax and component functionality
// React must be in scope when using JSX even if not explicitly referenced
import React from 'react';

// Import the React logo SVG as a variable for use in the component
// Using the import syntax allows webpack to process and optimize the image
import logo from './logo.svg';

// Import component-specific styles from the App.css file
// This creates a scoped styling approach for this component
import './App.css';

/**
 * App - The main functional component that represents our application.
 * Functional components are the modern preferred way to create React components.
 * This component returns JSX which React will render to the DOM.
 * 
 * @returns {JSX.Element} The JSX representation of our application UI
 */
function App() {
  // The return statement contains the JSX that will be rendered
  return (
    // Main container div with App class for styling
    // This div wraps all content and applies the styles defined in App.css
    <div className="App">
      {/* 
       * Header section containing the logo, text, and link
       * The App-header class provides styling for this section including
       * background color, flex layout, and text alignment
       */}
      <header className="App-header">
        {/* 
         * React logo with animation applied via CSS
         * The App-logo class contains the spinning animation
         * Alt text is provided for accessibility
         */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* 
         * Instruction paragraph with inline code formatting
         * This shows users how to start making changes to the application
         * The code element applies monospace formatting to highlight the file path
         */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* 
         * External link to React documentation
         * App-link class provides styling for the link (color, hover effects)
         * target="_blank" opens the link in a new tab
         * rel="noopener noreferrer" prevents security vulnerabilities when using target="_blank"
         */}
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
// This makes the component available for import in other files like index.js
export default App;
