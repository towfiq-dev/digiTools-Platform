# DigiTools - Premium Digital Tools Marketplace

DigiTools is a modern, high-performance web platform designed for creators, professionals, and businesses. It serves as a curated marketplace where users can explore, filter, and manage premium digital assets, AI-powered tools, and productivity software through a seamless and interactive user interface.

## 🚀 Technologies Used

The project is built with a focus on speed, scalability, and a modern developer experience:

* **Frontend Framework:** React.js (utilizing the latest `use` hook and `Suspense` for data fetching)
* **Styling:** Tailwind CSS for custom utility-first designs
* **UI Components:** DaisyUI for accessible and beautiful interface elements
* **State Management:** React Hooks (`useState`, `useEffect`, `use`)
* **Notifications:** React-Toastify for real-time user feedback
* **Icons:** React Icons (Font Awesome, Material Design)

## ✨ Key Features

* **Dynamic Product Showcase:** A responsive grid layout that fetches and displays premium tools from a local JSON dataset using React’s modern asynchronous patterns.
* **Interactive Shopping Cart:** Users can add products to their cart in real-time. The system includes logic to prevent duplicate items and provides instant success/error feedback via toast notifications
* **Dual-View Interface:** A sticky navigation toggle allows users to switch seamlessly between the Product Gallery and the Shopping Cart without losing page context.
* **Smart Pricing System:** Features a transparent pricing section with "Most Popular" highlighting and detailed feature lists to help users choose the right plan.
* **Real-time Cart Calculations:** Automatically calculates the total price of all added items, providing a clear breakdown before checkout.
* **Advanced Confirmation Workflow:** Includes custom-designed toast confirmation modals for sensitive actions like deleting items or proceeding with payments to ensure a smooth UX.
* **Responsive & Accessible Navigation:** A fully responsive Navbar with multi-level dropdown menus for features and quick access to login/signup.
* **Step-by-Step Onboarding:** A dedicated section guiding users through the process of creating an account, choosing products, and starting their workflow.
* **Performance Optimized:** Implements `Suspense` for lazy loading components and data, ensuring a fast initial load and smooth transitions.
