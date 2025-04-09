
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";

const VanillaStyleGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bamboo-beige">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-raleway font-semibold">Vanilla Style Guide</h1>
            <div className="flex gap-4">
              <Link to="/style-guide">
                <button className="btn-secondary">View Style Guide</button>
              </Link>
              <Link to="/style-guide-code">
                <button className="btn-secondary">View React Code</button>
              </Link>
            </div>
          </div>

          <p className="text-lg text-bamboo-text-light max-w-3xl mb-8">
            This page shows the vanilla HTML, CSS, and JavaScript code for implementing the Bamboo design system without any frameworks.
          </p>

          <div className="space-y-12">
            {/* HTML Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-raleway font-medium mb-4">HTML Structure</h2>
              <p className="text-bamboo-text-light mb-6">
                Basic HTML structure for implementing the Bamboo design system.
              </p>
              
              <h3 className="text-xl font-raleway font-medium mb-3">Base HTML Template</h3>
              <CodeBlock 
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bamboo Store</title>
  <link rel="stylesheet" href="css/bamboo.css">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <a href="/">Bamboo</a>
        </div>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="/products" class="nav-link">Products</a></li>
            <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
            <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <button class="btn-icon" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="btn-icon" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="currentColor"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="currentColor"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- Page Content Goes Here -->
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">Bamboo</div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Bamboo. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/bamboo.js"></script>
</body>
</html>`}
              />
              
              <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Hero Section</h3>
              <CodeBlock 
                language="html"
                code={`<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Sustainable Living with Bamboo</h1>
        <p>Discover our eco-friendly collection of bamboo products designed for modern living while preserving our planet.</p>
        <a href="/shop" class="btn-primary">Shop Now</a>
      </div>
      <div class="hero-image">
        <img src="images/hero-image.jpg" alt="Bamboo Products" />
      </div>
    </div>
  </div>
</section>`}
              />
              
              <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Product Card</h3>
              <CodeBlock 
                language="html"
                code={`<div class="product-card">
  <div class="product-image">
    <img src="images/product.jpg" alt="Bamboo Water Bottle" />
  </div>
  <div class="product-info">
    <p class="product-category">Kitchen</p>
    <h3 class="product-title">Bamboo Water Bottle</h3>
    <p class="product-price">$24.99</p>
    <button class="btn-primary">Add to Cart</button>
  </div>
</div>`}
              />
              
              <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Button Variations</h3>
              <CodeBlock 
                language="html"
                code={`<!-- Primary Button -->
<button class="btn-primary">Shop Now</button>

<!-- Secondary Button -->
<button class="btn-secondary">Learn More</button>

<!-- Ghost Button -->
<button class="btn-ghost">View Details</button>

<!-- Button with Icon -->
<button class="btn-primary btn-with-icon">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 8V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 11H23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  Add User
</button>`}
              />
            </section>
            
            {/* CSS Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-raleway font-medium mb-4">CSS Styles</h2>
              <p className="text-bamboo-text-light mb-6">
                The CSS that powers the Bamboo design system.
              </p>
              
              <h3 className="text-xl font-raleway font-medium mb-3">Base Styles</h3>
              <CodeBlock 
                language="css"
                code={`/* bamboo.css */

/* ===== BASE STYLES ===== */
:root {
  /* Colors */
  --bamboo-primary: #9C7B61;
  --bamboo-light: #BEA68F;
  --bamboo-dark: #7A5E48;
  --bamboo-beige: #F5F1EA;
  --bamboo-teal: #0A5D6A;
  --bamboo-charcoal: #404040;
  --bamboo-text-light: #6B6B6B;
  --white: #FFFFFF;
  
  /* Spacing */
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
  
  /* Border Radius */
  --radius-sm: 0.125rem; /* 2px */
  --radius-md: 0.25rem;  /* 4px */
  --radius-lg: 0.5rem;   /* 8px */
  
  /* Typography */
  --font-sans: 'Open Sans', sans-serif;
  --font-display: 'Raleway', sans-serif;
}

/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bamboo-beige);
  color: var(--bamboo-charcoal);
  line-height: 1.5;
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: var(--spacing-4);
}

h1 {
  font-size: 2.5rem; /* 40px */
}

h2 {
  font-size: 2rem; /* 32px */
}

h3 {
  font-size: 1.5rem; /* 24px */
}

h4 {
  font-size: 1.25rem; /* 20px */
}

p {
  margin-bottom: var(--spacing-4);
}

/* Links */
a {
  color: var(--bamboo-teal);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--bamboo-dark);
}

/* Lists */
ul, ol {
  padding-left: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

li {
  margin-bottom: var(--spacing-2);
}

/* ===== LAYOUT ===== */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

/* Grid */
.grid {
  display: grid;
  gap: var(--spacing-4);
}

.grid-2 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  h1 {
    font-size: 3rem; /* 48px */
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  
  h1 {
    font-size: 3.5rem; /* 56px */
  }
}`}
              />
              
              <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Components & Layout</h3>
              <CodeBlock 
                language="css"
                code={`/* ===== COMPONENTS ===== */

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: none;
}

.btn-primary {
  background-color: var(--bamboo-teal);
  color: var(--white);
}

.btn-primary:hover {
  background-color: rgba(10, 93, 106, 0.9); /* --bamboo-teal with opacity */
  color: var(--white);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--bamboo-teal);
  color: var(--bamboo-teal);
}

.btn-secondary:hover {
  background-color: rgba(10, 93, 106, 0.1);
}

.btn-ghost {
  background-color: transparent;
  color: var(--bamboo-charcoal);
}

.btn-ghost:hover {
  background-color: var(--bamboo-beige);
}

.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
}

.btn-with-icon svg {
  width: 1rem;
  height: 1rem;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: var(--bamboo-charcoal);
}

.btn-icon:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Cards */
.product-card {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-image {
  height: 250px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: var(--spacing-4);
}

.product-category {
  font-size: 0.875rem;
  color: var(--bamboo-text-light);
  margin-bottom: var(--spacing-2);
}

.product-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: var(--spacing-2);
}

.product-price {
  font-weight: 600;
  margin-bottom: var(--spacing-4);
}

/* Header */
.header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: var(--spacing-4) 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}

.logo a {
  color: var(--bamboo-charcoal);
}

.nav-list {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: var(--spacing-4);
}

.nav-link {
  color: var(--bamboo-charcoal);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--bamboo-teal);
}

.header-actions {
  display: flex;
  gap: var(--spacing-2);
}

/* Hero Section */
.hero {
  padding: var(--spacing-12) 0;
}

.hero-content {
  display: grid;
  gap: var(--spacing-8);
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

/* Footer */
.footer {
  background-color: var(--bamboo-dark);
  color: var(--white);
  padding: var(--spacing-12) 0 var(--spacing-4);
}

.footer-content {
  display: grid;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-4);
}

.footer-links {
  display: grid;
  gap: var(--spacing-6);
}

.footer-column h4 {
  font-size: 1rem;
  margin-bottom: var(--spacing-4);
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column a {
  color: rgba(255,255,255,0.8);
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: var(--spacing-4);
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.6);
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
  
  .hero-content {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-links {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .footer-content {
    grid-template-columns: 1fr 2fr;
  }
}`}
              />
            </section>
            
            {/* JavaScript Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-raleway font-medium mb-4">JavaScript Functionality</h2>
              <p className="text-bamboo-text-light mb-6">
                JavaScript code for implementing interactive features in the Bamboo design system.
              </p>
              
              <h3 className="text-xl font-raleway font-medium mb-3">Core JavaScript</h3>
              <CodeBlock 
                language="javascript"
                code={`// bamboo.js

// ===== DOM ELEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const setupMobileMenu = () => {
    const menuButton = document.createElement('button');
    menuButton.classList.add('btn-icon', 'menu-toggle');
    menuButton.setAttribute('aria-label', 'Toggle Menu');
    menuButton.innerHTML = \`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    \`;
    
    const header = document.querySelector('.header-content');
    const nav = document.querySelector('.nav');
    
    // Only add the menu button on small screens
    if (window.innerWidth < 768) {
      header.insertBefore(menuButton, nav);
      
      menuButton.addEventListener('click', () => {
        const navList = document.querySelector('.nav-list');
        
        // If nav is not displayed (mobile), create and show a mobile menu
        if (window.getComputedStyle(navList).display === 'none') {
          const mobileMenu = document.querySelector('.mobile-menu') || document.createElement('div');
          
          if (!document.querySelector('.mobile-menu')) {
            mobileMenu.classList.add('mobile-menu');
            mobileMenu.innerHTML = navList.outerHTML;
            document.body.appendChild(mobileMenu);
            
            // Add close button
            const closeButton = document.createElement('button');
            closeButton.classList.add('btn-icon', 'menu-close');
            closeButton.setAttribute('aria-label', 'Close Menu');
            closeButton.innerHTML = \`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            \`;
            
            mobileMenu.prepend(closeButton);
            
            closeButton.addEventListener('click', () => {
              mobileMenu.classList.remove('active');
            });
          }
          
          mobileMenu.classList.add('active');
        }
      });
    }
  };
  
  // Initialize mobile menu
  setupMobileMenu();
  
  // Reinitialize on window resize
  window.addEventListener('resize', () => {
    // Remove old mobile menu button if it exists
    const menuButton = document.querySelector('.menu-toggle');
    if (menuButton) menuButton.remove();
    
    // Setup again based on new screen size
    setupMobileMenu();
  });
});

// ===== PRODUCT FUNCTIONALITY =====

// Add to Cart functionality
const setupAddToCartButtons = () => {
  const addToCartButtons = document.querySelectorAll('.btn-primary');
  
  addToCartButtons.forEach(button => {
    // Only target buttons in product cards
    if (button.closest('.product-card')) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const product = button.closest('.product-card');
        const productTitle = product.querySelector('.product-title').textContent;
        
        // Show confirmation message
        showNotification(\`Added "\${productTitle}" to cart\`);
        
        // Here you would normally update cart count and store in local storage
        updateCartCount(1);
      });
    }
  });
};

// Update cart count
const updateCartCount = (increment = 0) => {
  // Get current cart count from local storage or default to 0
  let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
  
  // Increment count
  cartCount += increment;
  
  // Save to local storage
  localStorage.setItem('cartCount', cartCount.toString());
  
  // Update UI if cart count element exists
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
    
    // Show/hide based on count
    if (cartCount > 0) {
      cartCountElement.classList.add('active');
    } else {
      cartCountElement.classList.remove('active');
    }
  }
};

// Notification system
const showNotification = (message, type = 'success') => {
  // Create notification element
  const notification = document.createElement('div');
  notification.classList.add('notification', \`notification-\${type}\`);
  notification.textContent = message;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Show with animation
  setTimeout(() => {
    notification.classList.add('active');
  }, 10);
  
  // Hide after 3 seconds
  setTimeout(() => {
    notification.classList.remove('active');
    
    // Remove from DOM after animation
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
};

// Initialize product functionality
document.addEventListener('DOMContentLoaded', () => {
  setupAddToCartButtons();
  
  // Initialize cart count from local storage
  updateCartCount(0);
});

// ===== ADDITIONAL CSS FOR JS FUNCTIONALITY =====
// This would normally go in your CSS file, but included here for reference

/*
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--white);
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  padding: var(--spacing-4);
  z-index: 1000;
  transition: right 0.3s ease;
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu .nav-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-top: var(--spacing-8);
}

.menu-close {
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
}

.notification {
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bamboo-teal);
  color: var(--white);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: bottom 0.3s ease;
  z-index: 1000;
}

.notification.active {
  bottom: var(--spacing-4);
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  background-color: var(--bamboo-teal);
  color: var(--white);
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease;
}

.cart-count.active {
  opacity: 1;
  transform: scale(1);
}
*/`}
              />
              
              <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Form Validation Example</h3>
              <CodeBlock 
                language="javascript"
                code={`// Contact form validation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form fields
      const nameInput = this.querySelector('[name="name"]');
      const emailInput = this.querySelector('[name="email"]');
      const messageInput = this.querySelector('[name="message"]');
      
      // Reset previous error states
      const errorElements = this.querySelectorAll('.error-message');
      errorElements.forEach(el => el.remove());
      const invalidInputs = this.querySelectorAll('.invalid');
      invalidInputs.forEach(input => input.classList.remove('invalid'));
      
      // Validate fields
      let isValid = true;
      
      // Name validation
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name');
        isValid = false;
      }
      
      // Email validation
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
      }
      
      // Message validation
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Please enter a message');
        isValid = false;
      }
      
      // If all valid, submit the form (or simulate submission)
      if (isValid) {
        // Normally you would submit the form to your backend here
        // For now, we'll just show a success message
        
        showNotification('Your message has been sent successfully!');
        
        // Reset form
        this.reset();
      }
    });
  }
  
  // Helper function to show error message
  function showError(inputElement, message) {
    inputElement.classList.add('invalid');
    
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    
    // Insert after the input element
    inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});`}
              />
              
              <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Product Filter Example</h3>
              <CodeBlock 
                language="javascript"
                code={`// Product filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const productGrid = document.querySelector('.products-grid');
  
  if (filterButtons.length && productGrid) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter category
        const filter = button.dataset.filter;
        
        // Get all product cards
        const productCards = productGrid.querySelectorAll('.product-card');
        
        // Filter products
        productCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            const category = card.dataset.category;
            if (category === filter) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
});`}
              />
            </section>
            
            {/* Download Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-raleway font-medium mb-4">Download & Integration</h2>
              <p className="text-bamboo-text-light mb-6">
                How to integrate this vanilla code into your project.
              </p>
              
              <div className="bg-bamboo-beige p-6 rounded-lg">
                <h3 className="text-xl font-raleway font-medium mb-3">File Structure</h3>
                <CodeBlock 
                  language="text"
                  code={`bamboo/
├── css/
│   └── bamboo.css
├── js/
│   └── bamboo.js
├── images/
│   └── placeholder.jpg
└── index.html`}
                />
                
                <h3 className="text-xl font-raleway font-medium mt-6 mb-3">Integration Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-bamboo-text-light">
                  <li>Download the CSS and JavaScript files from the links below.</li>
                  <li>Include the CSS file in the <code>&lt;head&gt;</code> of your HTML file.</li>
                  <li>Include the JavaScript file just before the closing <code>&lt;/body&gt;</code> tag.</li>
                  <li>Add Google Fonts link for Raleway and Open Sans in the <code>&lt;head&gt;</code>.</li>
                  <li>Use the provided HTML structure as templates for your pages and components.</li>
                </ol>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">Download Bamboo CSS</button>
                  <button className="btn-primary">Download Bamboo JS</button>
                  <button className="btn-secondary">Download Complete Package</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VanillaStyleGuide;
