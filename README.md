# Mini E-commerce Project

This project was made by Tanishq Minz as part of the assignment given by XCENTIC : Develop a Mini E-commerce Website.

## Features

- Product listing with category filtering
- Search and sort functionality
- Category-based navigation
- Integration with Amazon product links (links to the search term for it)

## Techologies Used :

- Frontend:
  - React (Vite)
  - React Router
  - Tailwind CSS

- Backend:
  - Express.js
  - Node.js
  - CORS

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Create another terminal using split terminal, and in it type: 

    ```bash
    cd backend
    npm install
    ```

### Running the Application

1. Start the backend server in the 2nd terminal:

    ```bash
    node server.js
    ```

The server will run on [http://localhost:3000]


2. Start the frontend development server in the 1st terminal:

    ```bash
    npm run dev
    ```

The application will be available at [http://localhost:5173]


## API Endpoints

- `GET /api/products` - Get all products stored in backend/products.js
- `GET /api/products/:id` - Get a specific product
- `GET /api/categories` - Get all categories
- `GET /api/products/category/:category` - Get products by category
