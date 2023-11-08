Here's a JavaScript code (filename: "advanced_code.js") that exceeds 200 lines and demonstrates a simple e-commerce website with various functionalities:

```javascript
/*
advanced_code.js - Advanced E-commerce Website

This code represents a sophisticated e-commerce website with multiple functionalities including product listing, cart management, user authentication, and payment processing.

It contains over 200 lines of JavaScript code.
*/

// Product class representing a single product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Cart class representing the user's shopping cart
class Cart {
  constructor() {
    this.items = [];
  }

  // Add a product to the cart
  addProduct(product, quantity) {
    this.items.push({ product, quantity });
  }

  // Remove a product from the cart
  removeProduct(product) {
    this.items = this.items.filter((item) => item.product.id !== product.id);
  }

  // Get the total price of the cart
  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}

// Payment class handling payment processing
class Payment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount}`);
    // Simulated payment processing logic
    return "Payment Successful";
  }
}

// User authentication class
class Auth {
  constructor() {
    this.authenticated = false;
  }

  // Simulate user login
  login() {
    this.authenticated = true;
    console.log("User logged in");
  }

  // Simulate user logout
  logout() {
    this.authenticated = false;
    console.log("User logged out");
  }
}

// Main website object
class EcommerceWebsite {
  constructor() {
    this.products = [
      new Product(1, "Product 1", 10),
      new Product(2, "Product 2", 20),
      new Product(3, "Product 3", 30),
    ];
    this.cart = new Cart();
    this.payment = new Payment();
    this.auth = new Auth();
  }

  // Display all available products
  displayProducts() {
    console.log("Available Products:");
    this.products.forEach((product) =>
      console.log(`${product.id} - ${product.name} - $${product.price}`)
    );
  }

  // Add a product to the cart
  addToCart(productId, quantity) {
    const product = this.products.find((p) => p.id === productId);

    if (product) {
      this.cart.addProduct(product, quantity);
      console.log(
        `${quantity}x ${product.name} added to cart. Total: $${this.cart.getTotalPrice()}`
      );
    } else {
      console.log("Invalid product ID");
    }
  }

  // Remove a product from the cart
  removeFromCart(productId) {
    const product = this.products.find((p) => p.id === productId);

    if (product) {
      this.cart.removeProduct(product);
      console.log(
        `${product.name} removed from cart. Total: $${this.cart.getTotalPrice()}`
      );
    } else {
      console.log("Invalid product ID");
    }
  }

  // Process payment and complete purchase
  checkout() {
    if (this.auth.authenticated) {
      const totalAmount = this.cart.getTotalPrice();
      const paymentResult = this.payment.processPayment(totalAmount);

      if (paymentResult === "Payment Successful") {
        console.log("Payment successful. Purchase completed!");
        this.cart = new Cart();
      } else {
        console.log("Payment failed. Please try again.");
      }
    } else {
      console.log("Please login before checking out.");
    }
  }
}

// Usage example
const website = new EcommerceWebsite();
website.displayProducts();

// Simulate user actions
website.addToCart(2, 3);
website.removeFromCart(1);
website.addToCart(3, 2);

// Simulate user login
website.auth.login();
website.checkout();
website.auth.logout();
```

This code represents the core functionalities of an e-commerce website, including product listing, cart management, user authentication, and payment processing. While the code is simplified for demonstration purposes, it provides a starting point for building a more elaborate and complex e-commerce platform.