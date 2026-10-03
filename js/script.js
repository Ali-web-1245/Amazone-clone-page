/* ==========================================
   AmaZone - Main JavaScript Engine
   ========================================== */

const products = [
  { id: 1, name: "Wireless Noise-Canceling Headphones", category: "Electronics", price: 99.99, oldPrice: 149.99, rating: 4.8, reviews: 312, image: "https://picsum.photos/400/400?random=1" },
  { id: 2, name: "Smart Fitness Watch V2", category: "Electronics", price: 49.99, oldPrice: 79.99, rating: 4.5, reviews: 180, image: "https://picsum.photos/400/400?random=2" },
  { id: 3, name: "Ergonomic Mechanical Keyboard", category: "Electronics", price: 69.99, oldPrice: 89.99, rating: 4.7, reviews: 95, image: "https://picsum.photos/400/400?random=3" },
  { id: 4, name: "Ultra-HD 4K Gaming Monitor 27-inch", category: "Electronics", price: 279.99, oldPrice: 349.99, rating: 4.9, reviews: 420, image: "https://picsum.photos/400/400?random=4" },
  { id: 5, name: "Men's Casual Denim Jacket", category: "Fashion", price: 39.99, oldPrice: 59.99, rating: 4.3, reviews: 88, image: "https://picsum.photos/400/400?random=5" },
  { id: 6, name: "Women's Lightweight Running Shoes", category: "Fashion", price: 54.99, oldPrice: 74.99, rating: 4.6, reviews: 210, image: "https://picsum.photos/400/400?random=6" },
  { id: 7, name: "Classic Leather Backpack", category: "Fashion", price: 44.99, oldPrice: 64.99, rating: 4.4, reviews: 150, image: "https://picsum.photos/400/400?random=7" },
  { id: 8, name: "Polarized Sunglasses UV400", category: "Fashion", price: 19.99, oldPrice: 29.99, rating: 4.2, reviews: 67, image: "https://picsum.photos/400/400?random=8" },
  { id: 9, name: "Stainless Steel Espresso Coffee Maker", category: "Home", price: 89.99, oldPrice: 119.99, rating: 4.8, reviews: 540, image: "https://picsum.photos/400/400?random=9" },
  { id: 10, name: "Smart Air Purifier with HEPA Filter", category: "Home", price: 119.99, oldPrice: 159.99, rating: 4.7, reviews: 130, image: "https://picsum.photos/400/400?random=10" },
  { id: 11, name: "Non-Stick Ceramic Cookware Set 10-Pcs", category: "Home", price: 79.99, oldPrice: 109.99, rating: 4.5, reviews: 89, image: "https://picsum.photos/400/400?random=11" },
  { id: 12, name: "Robot Vacuum Cleaner with Mop", category: "Home", price: 199.99, oldPrice: 299.99, rating: 4.6, reviews: 275, image: "https://picsum.photos/400/400?random=12" },
  { id: 13, name: "Hydrating Face Serum Vitamin C", category: "Beauty", price: 15.99, oldPrice: 24.99, rating: 4.4, reviews: 310, image: "https://picsum.photos/400/400?random=13" },
  { id: 14, name: "Professional Hair Dryer Brush", category: "Beauty", price: 34.99, oldPrice: 49.99, rating: 4.5, reviews: 190, image: "https://picsum.photos/400/400?random=14" },
  { id: 15, name: "Organic Essential Oils Gift Set", category: "Beauty", price: 22.99, oldPrice: 32.99, rating: 4.8, reviews: 115, image: "https://picsum.photos/400/400?random=15" },
  { id: 16, name: "Pro Matte Lipstick Set 5 Colors", category: "Beauty", price: 18.99, oldPrice: 26.99, rating: 4.3, reviews: 78, image: "https://picsum.photos/400/400?random=16" },
  { id: 17, name: "Adjustable Dumbbell Set 50lbs", category: "Sports", price: 149.99, oldPrice: 199.99, rating: 4.9, reviews: 620, image: "https://picsum.photos/400/400?random=17" },
  { id: 18, name: "Non-Slip Exercise Yoga Mat 6mm", category: "Sports", price: 21.99, oldPrice: 31.99, rating: 4.6, reviews: 405, image: "https://picsum.photos/400/400?random=18" },
  { id: 19, name: "Insulated Stainless Steel Water Bottle", category: "Sports", price: 16.99, oldPrice: 22.99, rating: 4.7, reviews: 230, image: "https://picsum.photos/400/400?random=19" },
  { id: 20, name: "Camping Waterproof 4-Person Tent", category: "Sports", price: 89.99, oldPrice: 129.99, rating: 4.5, reviews: 140, image: "https://picsum.photos/400/400?random=20" },
  { id: 21, name: "Atomic Habits Hardcover Book", category: "Books", price: 14.99, oldPrice: 21.99, rating: 4.9, reviews: 1200, image: "https://picsum.photos/400/400?random=21" },
  { id: 22, name: "Wireless RGB Gaming Controller", category: "Gaming", price: 39.99, oldPrice: 54.99, rating: 4.6, reviews: 310, image: "https://picsum.photos/400/400?random=22" },
  { id: 23, name: "Organic Cold-Pressed Olive Oil 1L", category: "Grocery", price: 12.99, oldPrice: 16.99, rating: 4.8, reviews: 90, image: "https://picsum.photos/400/400?random=23" },
  { id: 24, name: "Wireless Bluetooth Speaker", category: "Electronics", price: 29.99, oldPrice: 44.99, rating: 4.4, reviews: 260, image: "https://picsum.photos/400/400?random=24" }
];

// Initialize LocalStorage State
let cart = JSON.parse(localStorage.getItem('sz_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('sz_wishlist')) || [];

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  updateCartBadge();
  initHeroSlider();
  initCountdown();
  initScrollAnimations();
  
  // Page Specific Renderers
  if (document.getElementById('deals-container')) renderProducts(products.slice(0, 8), 'deals-container');
  if (document.getElementById('featured-container')) renderProducts(products.slice(8, 16), 'featured-container');
  if (document.getElementById('shop-products-container')) initShopPage();
  if (document.getElementById('product-detail-root')) initProductDetailPage();
  if (document.getElementById('cart-page-root')) renderCartPage();
  if (document.getElementById('all-deals-container')) renderProducts(products, 'all-deals-container');
  if (document.getElementById('stats-container')) initAnimatedCounters();
});

// Navigation Handling
function initNavigation() {
  const header = document.querySelector('header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const sidebar = document.querySelector('.mobile-sidebar');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.sidebar-close');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  const openMenu = () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Search Logic
  const searchBtns = document.querySelectorAll('.search-btn');
  searchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = btn.previousElementSibling;
      if (input && input.value.trim() !== '') {
        window.location.href = `shop.html?search=${encodeURIComponent(input.value.trim())}`;
      }
    });
  });
}

// Hero Slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.slider-btn.prev');
  const next = document.querySelector('.slider-btn.next');

  if (!slides.length) return;

  let current = 0;
  let timer = null;

  const showSlide = (index) => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
  };

  const nextSlide = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prevSlide = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  const startAuto = () => timer = setInterval(nextSlide, 5000);
  const stopAuto = () => clearInterval(timer);

  if (next) next.addEventListener('click', () => { nextSlide(); stopAuto(); startAuto(); });
  if (prev) prev.addEventListener('click', () => { prevSlide(); stopAuto(); startAuto(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      current = idx;
      showSlide(current);
      stopAuto();
      startAuto();
    });
  });

  const heroSection = document.querySelector('.hero-slider');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAuto);
    heroSection.addEventListener('mouseleave', startAuto);
  }

  startAuto();
}

// Product Cards Rendering
function createProductCard(p) {
  const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
  const isWish = wishlist.includes(p.id);

  return `
    <div class="product-card">
      <span class="badge-discount">${discount}% OFF</span>
      <button class="wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)">
        <i class="fa-solid fa-heart"></i>
      </button>
      <a href="product.html?id=${p.id}" class="product-img-box">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </a>
      <span class="product-category-text">${p.category}</span>
      <a href="product.html?id=${p.id}" class="product-title">${p.name}</a>
      <div class="rating-box">
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <span>${p.rating}</span>
        </div>
        <span class="review-count">(${p.reviews})</span>
      </div>
      <div class="price-box">
        <span class="current-price"><sup>$</sup>${p.price.toFixed(2)}</span>
        <span class="old-price">$${p.oldPrice.toFixed(2)}</span>
      </div>
      <button class="add-cart-btn" onclick="addToCart(${p.id})">
        <i class="fa-solid fa-cart-shopping"></i> Add to Cart
      </button>
    </div>
  `;
}

function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; background: white; border-radius: 8px;"><h3>No products found matching your criteria.</h3></div>`;
    return;
  }
  container.innerHTML = list.map(p => createProductCard(p)).join('');
}

// Cart Management
function addToCart(productId, qty = 1) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart();
  showToast('Product added to cart!');
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
    renderCartPage();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCartPage();
  showToast('Item removed from cart.');
}

function saveCart() {
  localStorage.setItem('sz_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = count);
}

// Wishlist Management
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    btn.classList.add('active');
    showToast('Added to wishlist!');
  }
  localStorage.setItem('sz_wishlist', JSON.stringify(wishlist));
}

// Toast Notifications
function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent);"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Countdown Timer
function initCountdown() {
  const el = document.getElementById('deal-timer');
  if (!el) return;

  let totalSeconds = 5 * 3600 + 42 * 60 + 18;

  setInterval(() => {
    if (totalSeconds <= 0) {
      el.innerHTML = "DEAL EXPIRED";
      return;
    }
    totalSeconds--;
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const pad = n => n.toString().padStart(2, '0');
    el.innerHTML = `<span>${pad(h)}</span> : <span>${pad(m)}</span> : <span>${pad(s)}</span>`;
  }, 1000);
}

// Shop Page Filtering
function initShopPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  const catQuery = urlParams.get('category');

  let filtered = [...products];

  if (searchQuery) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  if (catQuery) {
    filtered = filtered.filter(p => p.category.toLowerCase() === catQuery.toLowerCase());
  }

  renderProducts(filtered, 'shop-products-container');

  // Filter Listeners
  const categoryRadios = document.querySelectorAll('.cat-filter');
  categoryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const val = e.target.value;
      let current = [...products];
      if (val !== 'All') {
        current = current.filter(p => p.category === val);
      }
      renderProducts(current, 'shop-products-container');
    });
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      let current = [...filtered];
      const val = e.target.value;
      if (val === 'low-high') current.sort((a, b) => a.price - b.price);
      else if (val === 'high-low') current.sort((a, b) => b.price - a.price);
      else if (val === 'rating') current.sort((a, b) => b.rating - a.rating);
      renderProducts(current, 'shop-products-container');
    });
  }
}

// Product Details Page
function initProductDetailPage() {
  const root = document.getElementById('product-detail-root');
  if (!root) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id')) || 1;
  const p = products.find(prod => prod.id === id) || products[0];

  root.innerHTML = `
    <div class="product-detail-container">
      <div class="gallery-container">
        <div class="thumbnails">
          <img src="${p.image}" class="thumb-img active" onclick="changeImage(this.src)" alt="">
          <img src="https://picsum.photos/400/400?random=88" class="thumb-img" onclick="changeImage(this.src)" alt="">
          <img src="https://picsum.photos/400/400?random=89" class="thumb-img" onclick="changeImage(this.src)" alt="">
        </div>
        <div class="main-image-box">
          <img id="main-product-img" src="${p.image}" alt="${p.name}">
        </div>
      </div>
      <div class="detail-info">
        <h1>${p.name}</h1>
        <p class="product-category-text">Category: ${p.category}</p>
        <div class="rating-box">
          <div class="stars"><i class="fa-solid fa-star"></i> <span>${p.rating}</span></div>
          <span class="review-count">(${p.reviews} customer reviews)</span>
        </div>
        <div class="detail-price">
          $${p.price.toFixed(2)} <del>$${p.oldPrice.toFixed(2)}</del>
        </div>
        <p style="margin-bottom: 15px; color: var(--muted);">In Stock. FREE Delivery on eligible orders. Fast fulfillment directly from AmaZone warehouses.</p>
        <div class="qty-selector">
          <label>Quantity:</label>
          <button class="qty-btn" onclick="adjustQty(-1)">-</button>
          <input type="text" id="detail-qty" class="qty-input" value="1" readonly>
          <button class="qty-btn" onclick="adjustQty(1)">+</button>
        </div>
        <div class="action-btns">
          <button class="add-cart-btn" style="border-radius:6px;" onclick="addDetailToCart(${p.id})"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
          <button class="buy-now-btn" onclick="alert('Checkout functionality is for demonstration only.')">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}

function changeImage(src) {
  document.getElementById('main-product-img').src = src;
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
}

function adjustQty(delta) {
  const input = document.getElementById('detail-qty');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  input.value = val;
}

function addDetailToCart(id) {
  const qty = parseInt(document.getElementById('detail-qty').value);
  addToCart(id, qty);
}

// Cart Page Renderer
function renderCartPage() {
  const root = document.getElementById('cart-page-root');
  if (!root) return;

  if (cart.length === 0) {
    root.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: white; border-radius: 8px;">
        <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; color: var(--muted); margin-bottom: 15px;"></i>
        <h2>Your AmaZone Cart is empty</h2>
        <a href="shop.html" class="btn" style="margin-top: 15px;">Shop today's deals</a>
      </div>
    `;
    return;
  }

  let subtotal = 0;
  const itemsHTML = cart.map(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return '';
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${p.image}" class="cart-item-img" alt="${p.name}">
        <div class="cart-item-details">
          <h3>${p.name}</h3>
          <p class="product-category-text">${p.category}</p>
          <button onclick="removeFromCart(${p.id})" style="background:none; color: #007185; cursor:pointer; font-size:0.85rem; margin-top:8px;">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
        <div style="text-align: right;">
          <div class="cart-item-price">$${p.price.toFixed(2)}</div>
          <div class="qty-selector" style="justify-content: flex-end; margin-top: 10px;">
            <button class="qty-btn" onclick="updateCartQuantity(${p.id}, -1)">-</button>
            <span style="padding: 0 8px;">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${p.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  root.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items-box">
        <h2>Shopping Cart</h2>
        <hr style="margin: 15px 0; border: none; border-bottom: 1px solid var(--border);">
        ${itemsHTML}
      </div>
      <div class="cart-summary">
        <h3>Order Summary</h3>
        <hr style="margin: 15px 0; border: none; border-bottom: 1px solid var(--border);">
        <div class="summary-row"><span>Items Subtotal:</span> <span>$${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>Estimated Shipping:</span> <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span></div>
        <div class="summary-row total"><span>Order Total:</span> <span>$${total.toFixed(2)}</span></div>
        <button class="checkout-btn" onclick="alert('Checkout functionality is for demonstration only.')">Proceed to Checkout</button>
      </div>
    </div>
  `;
}

// Scroll Animations & Counters
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.4s ease';
    observer.observe(el);
  });
}

function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 50;
    const update = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count) + '+';
        setTimeout(update, 30);
      } else {
        counter.innerText = target + '+';
      }
    };
    update();
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}