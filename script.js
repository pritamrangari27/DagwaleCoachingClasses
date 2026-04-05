/* ============================================
   DAGWALE COACHING CLASSES - JAVASCRIPT
   Interactive Features & Functionality
   ============================================ */

// ============================================
// Back to Top Button
// ============================================

window.addEventListener('load', function() {
    // Create back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Show/hide back-to-top button based on scroll depth (50% of page)
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollDepth = (window.scrollY + windowHeight) / documentHeight;

        if (scrollDepth > 0.5) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Scroll to top on button click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ============================================
// Sticky Navbar Scroll Effect
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}, { passive: true });

// ============================================
// Mobile Menu Toggle
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = navMenu?.querySelectorAll('a');
    navLinks?.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (menuToggle && navMenu) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickInsideToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickInsideToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// ============================================
// Form Validation with Floating Labels
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

    formInputs.forEach(input => {
        // Add placeholder for floating label to work
        if (!input.placeholder) {
            input.placeholder = ' ';
        }

        // Real-time validation
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.parentElement.classList.contains('error')) {
                validateField(this);
            }
        });

        // Allow Enter key to submit (for text inputs only)
        if (input.type === 'email' || input.type === 'text') {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const form = this.closest('form');
                    if (form) {
                        form.dispatchEvent(new Event('submit'));
                    }
                }
            });
        }
    });
});

function validateField(field) {
    const formGroup = field.parentElement;
    let isValid = true;
    let errorMessage = '';

    // Check if field is required and empty
    if (field.hasAttribute('required') && field.value.trim() === '') {
        isValid = false;
        errorMessage = 'This field is required';
    }
    // Email validation
    else if (field.type === 'email' && field.value.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    // Phone validation
    else if (field.type === 'tel' && field.value.trim() !== '') {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // Update UI based on validation result
    if (isValid) {
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        const errorEl = formGroup.querySelector('.validation-error');
        if (errorEl) {
            errorEl.textContent = '';
        }
    } else {
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
        let errorEl = formGroup.querySelector('.validation-error');
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'validation-error';
            formGroup.appendChild(errorEl);
        }
        errorEl.textContent = errorMessage;
    }

    return isValid;
}

// ============================================
// Form Submission Handler
// ============================================

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.course) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }

    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Processing...';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
        console.log('Form Data:', data);

        // Reset form
        form.reset();

        // Show success notification
        showNotification('Thank you! We will contact you shortly.', 'success');

        // Restore button
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // In a real application, this would send data to a backend
        // Example:
        // fetch('/api/enrollments', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     showNotification('Thank you! We will contact you shortly.', 'success');
        //     form.reset();
        //     submitButton.textContent = originalText;
        //     submitButton.disabled = false;
        // })
        // .catch(error => {
        //     showNotification('An error occurred. Please try again.', 'error');
        //     submitButton.textContent = originalText;
        //     submitButton.disabled = false;
        // });
    }, 1500);
}

// ============================================
// Notification System
// ============================================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="notification-icon fas fa-${getNotificationIcon(type)}"></i>
            <p>${message}</p>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Add notification styles dynamically
const style = document.createElement('style');
style.innerHTML = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        animation: slideOut 0.3s ease reverse;
    }

    .notification-success .notification-content {
        background-color: #d4edda;
        color: #155724;
    }

    .notification-error .notification-content {
        background-color: #f8d7da;
        color: #721c24;
    }

    .notification-warning .notification-content {
        background-color: #fff3cd;
        color: #856404;
    }

    .notification-info .notification-content {
        background-color: #d1ecf1;
        color: #0c5460;
    }

    .notification-icon {
        font-size: 1.2rem;
    }

    .notification-content p {
        margin: 0;
        font-weight: 500;
    }

    .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: inherit;
        padding: 0;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    .notification-close:hover {
        opacity: 1;
    }

    @media (max-width: 640px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Active Navigation Link
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Smooth Scroll Behavior (Enhancement)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe course cards, feature items, and other elements
    const elementsToObserve = document.querySelectorAll(
        '.course-card, .feature-item, .stat-card, .contact-form, .contact-info-box'
    );

    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.innerHTML = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);
});

// ============================================
// Scroll-to-Top Button (Optional)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Create scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    // Add styles
    const scrollTopStyle = document.createElement('style');
    scrollTopStyle.innerHTML = `
        #scrollTopBtn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #ff8c00 0%, #ff9500 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
        }

        #scrollTopBtn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 25px rgba(255, 140, 0, 0.4);
        }

        #scrollTopBtn.show {
            opacity: 1;
            visibility: visible;
        }

        @media (max-width: 640px) {
            #scrollTopBtn {
                width: 45px;
                height: 45px;
                bottom: 20px;
                right: 20px;
            }
        }
    `;
    document.head.appendChild(scrollTopStyle);

    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Scroll to top
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ============================================
// Counter Animation (for stats)
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat h3, .stat-card h3');

    counters.forEach(counter => {
        const text = counter.textContent;
        // Extract number from text
        const numberMatch = text.match(/\d+/);

        if (numberMatch) {
            const finalNumber = parseInt(numberMatch[0]);
            const increment = Math.ceil(finalNumber / 50);
            let currentNumber = 0;

            const updateCounter = () => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    counter.textContent = text;
                } else {
                    counter.textContent = currentNumber + '+';
                    requestAnimationFrame(updateCounter);
                }
            };

            // Use Intersection Observer to trigger animation when visible
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && currentNumber === 0) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        }
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// Prevent form double submission
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
            }
        });
    });
});

// ============================================
// Console logging for debugging
// ============================================

console.log('%cDagwale Coaching Classes', 'color: #ffffff; font-size: 20px; font-weight: bold;');
console.log('%cWelcome! Version 1.0', 'color: #ff8c00; font-weight: bold;');
console.log('For support, contact: priya.dagwale@gmail.com');
