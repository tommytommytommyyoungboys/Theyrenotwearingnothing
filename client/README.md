# React Frontend Application

This is the frontend portion of our application, created with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Running the Full Application

To run both the frontend and backend concurrently:

1. Start the backend server first with `nodemon index.js` from the root directory
2. Start the frontend with `npm start` from this client directory

The frontend is configured to proxy API requests to the backend server running on port 5000.

## Dependencies

This frontend uses several key dependencies:

- **react-router-dom**: For client-side routing
  - Install with: `npm install react-router-dom`

- **axios**: For making HTTP requests to the backend
  - Install with: `npm install axios`

## Project Structure

- `/src/components`: Contains reusable React components
- `/src/pages`: Contains page-level components
- `/src/utils`: Contains utility functions and helpers
- `/public`: Contains static assets and the HTML template

## API Integration

All API calls to the backend are made through Axios. The proxy configuration in `package.json` enables seamless integration during development by redirecting API requests to the backend server.
