
# Project README

## Introduction

This project is a web application built with a React Native frontend and a Fastify backend. It displays product details and manages stock and price information, which is updated regularly. The application has specific routing requirements and utilizes several technologies to ensure seamless operation and a user-friendly experience.

## Technologies Used

### Frontend
- **React Native**: A framework for building native applications using React.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and developer experience.
- **NativeWind**: A utility-first CSS framework for React Native that provides utility classes for styling.
- **Expo**: A framework and a platform for universal React applications that helps with development and deployment.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Fastify**: A web framework for Node.js with a focus on performance and low overhead.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Expo CLI (for running the React Native app)

### Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/rodrigobleao/minutentag-challenge.git

### Frontend Setup

1. **Install Dependencies**
   ```sh
   cd minutentag-challenge/frontend
   npm install

### Backend Setup

1. **Clone the Repository**
   ```sh
   cd /minutentag-challenge/backend
   npm install

### Frontend
The main components and hooks used in the project are:

- **Home Screen**
  - Displays a list of products with a search input, category sections, and filters.
- **Details Screen**
  - Displays detailed information about a selected product, including price and stock.
- **Hooks**
  - `useFetchDetails`: Fetches product details based on product ID and brand.
  - `useUpdateStockPrice`: Updates stock and price information for products at regular intervals.

### Backend

The backend of this project is designed to read local files and support real-time editing without requiring a server restart. Here's an overview:

- **Local File Reading**  
  The backend reads data from local JavaScript files (`products.js` and `stock-price.js`). These files contain all the necessary product and stock information required by the frontend.

- **Real-Time Editing**  
  The backend is configured to detect changes in these local files and update the data dynamically. This allows for real-time editing and ensures that any modifications to the files are immediately reflected in the application's data, without the need to stop and restart the server.

## API Endpoints

1. **Product List**
   - **Endpoint**: `/api/`
   - **Description**: Returns a list of products in stock with the minimum price option available.
   - **Example Response**:
     ```json
     {
       "availableProducts": [
         {
           "id": 1,
           "brand": "Special Model",
           "price": 4350
         }
       ]
     }
     ```

2. **Stock and Price Information**
   - **Endpoint**: `/api/stock-price/:code`
   - **Description**: Returns all stocks and prices information for a specific product.
   - **Example Response**:
     ```json
     {
       "id": 1,
       "skus": [
         {
           "code": "123",
           "name": "SKU Name",
           "stock": 50,
           "price": 4350
         }
       ],
     }
     ```

3. **Product Details**
   - **Endpoint**: `/api/:productId-:productBrand`
   - **Description**: Returns detailed information about a product based on its ID and brand.
   - **Example Response**:
     ```json
     {
       "id": 1,
       "brand": "Product Prime",
       "origin": "Mexico",
       "information": "This is a sample product."
     }
     ```

## Running the Project

1. **Start the Backend Server**
   Ensure the backend server is running on `http://localhost:3000`.
   ```sh
   cd backend
   node server.js
2. **Start the Frontend Application**
   Ensure the backend server is running on `http://localhost:3000`.
   ```sh
   cd frontend
   npx expo start
