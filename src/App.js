/**
 * App.js
 * 
 * This file contains the main App component created by Create React App (CRA).
 * It serves as the root component for the application, displaying the default
 * CRA landing page with logo and basic instructions.
 * 
 * This component demonstrates basic React concepts such as:
 * - Functional components
 * - JSX rendering
 * - Basic styling through CSS imports
 * - Image importing and usage
 * - External link handling with security considerations
 */

// Import React to enable JSX syntax and component functionality
// React must be in scope when using JSX (the HTML-like syntax below)
import React from 'react';

// Import the React logo SVG as a variable for use in the component
// Webpack handles this import and makes the image available as a JavaScript variable
// This approach allows for dynamic image paths and optimizations
import logo from './logo.svg';

// Import component-specific styles
// This CSS file contains all the styling rules applied to elements in this component
// Create React App configures webpack to process and include these styles automatically
import './App.css';

/**
 * App - The main functional component that represents our application.
 * Functional components are the modern preferred way to create React components.
 * This component returns JSX which React will render to the DOM.
 * 
 * This particular component follows the default structure provided by Create React App,
 * displaying the React logo, some instructional text, and a link to React documentation.
 * 
 * @returns {JSX.Element} The rendered React element that represents our application UI
 */
function App() {
  return (
    // Main container div with App class for styling
    // This wrapper div provides a container for all child elements
    // The className attribute corresponds to CSS classes defined in App.css
    <div className="App">
      {/* Header section containing the logo, text, and link */}
      {/* This uses the App-header class defined in App.css for styling */}
      <header className="App-header">
        {/* 
          React logo with animation applied via CSS
          The logo is imported above and used as the src attribute
          The App-logo class applies the spinning animation defined in App.css
          The alt attribute provides accessibility text for screen readers
        */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* 
          Instruction paragraph with inline code formatting
          The <code> element is used to style text as code with monospace font
          This tells developers how to start making changes to the app
        */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* 
          External link to React documentation
          The App-link class applies styling defined in App.css (typically color and hover effects)
          target="_blank" opens the link in a new tab
          rel="noopener noreferrer" prevents security vulnerabilities associated with target="_blank"
          - noopener: Prevents the opened page from accessing window.opener
          - noreferrer: Prevents passing the referrer information to the linked page
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
// This allows other files to import this component, typically index.js imports this
// and renders it to the DOM as the root component of the application
export default App;
