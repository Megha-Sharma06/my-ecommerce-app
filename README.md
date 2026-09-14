# E-Commerce Storefront

A responsive E-Commerce web application built with React, Tailwind CSS, and Context API. The application includes real-time API integration, client-side product filtering, global cart state management with persistent local storage, and an automated checkout price summary.

# Live Demo & Repository

- Live Site: https://my-ecommerce-app-dusky.vercel.app
- Source Code: https://github.com/Megha-Sharma06/my-ecommerce-app

# Key Features

- Dynamic Data Fetching: Integrates FakeStore REST API asynchronously with loading and error state handling.
- In-Memory Search & Filtering: Real-time search functionality paired with dynamic category filters generated using ES6 Set data structure.
- Global Cart Management: Custom Context provider handling cart item additions, quantity adjustments, item removal, and subtotal/shipping price calculations.
- Persistent State: Utilizes Lazy State Initialization with browser localStorage to maintain cart state across reloads.
- Responsive UI: Built with a mobile-first design system using Tailwind CSS utility classes and conditional state styling.

# Tech Stack

- React.js (Hooks, Context API)
- JavaScript (ES6+)
- Tailwind CSS
- FakeStore REST API
- Browser LocalStorage API

# Local Setup Instructions

1. Clone the repository:
   git clone https://github.com/Megha-Sharma06/my-ecommerce-app.git

2. Navigate into the project directory:
   cd my-ecommerce-app

3. Install required dependencies:
   npm install

4. Start the local development server:
   npm run dev