// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Product data (dummy, tanpa database)
const products = [
    {
        id: 1,
        name: "Crazy T-Shirt",
        price: 75000,
        emotion: "Kacau",
        image: "assets/produk1.png"
    },
    {
        id: 2,
        name: "Stuck T-Shirt",
        price: 75000,
        emotion: "Lemah",
        image: "assets/produk2.png"
    },
    {
        id: 3,
        name: "Crazy T-Shirt",
        price: 75000,
        emotion: "Kacau",
        image: "assets/produk1.png"
    },
    {
        id: 4,
        name: "Stuck T-Shirt",
        price: 75000,
        emotion: "Lemah",
        image: "assets/produk2.png"
    },
    {
        id: 5,
        name: "Crazy T-Shirt",
        price: 75000,
        emotion: "Kacau",
        image: "assets/produk1.png"
    },
    {
        id: 6,
        name: "Stuck T-Shirt",
        price: 75000,
        emotion: "Lemah",
        image: "assets/produk2.png"
    }
];

// Render products
const productGrid = document.getElementById('productGrid');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
            <span class="product-emotion">#${product.emotion}</span>
        </div>
    `;
    productGrid.appendChild(card);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll animation (fade-up)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .philosophy-content, .contact-content').forEach(el => {
    el.classList.add('fade-out');
    observer.observe(el);
});

// Tambahkan class CSS untuk animasi fade
const style = document.createElement('style');
style.innerHTML = `
    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s, transform 0.6s;
    }
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Efek interaktif: background berubah mengikuti mouse
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #f9f9f7, #eae7e0)`;
});

// Animasi tambahan untuk produk (distorsi saat hover)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.filter = 'hue-rotate(10deg) contrast(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.filter = 'none';
    });
});

// Glitch efek pada judul section saat di-scroll (menggunakan animasi glitch yang sudah diubah)
window.addEventListener('scroll', () => {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            title.style.animation = 'glitch 5s infinite';
        } else {
            title.style.animation = 'none';
        }
    });
});