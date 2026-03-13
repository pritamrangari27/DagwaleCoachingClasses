# Dagwale Coaching Classes - Professional Website

A modern, responsive, multi-page website for Dagwale Coaching Classes specializing in Class 11th, 12th, CET, JEE, and NEET preparation.

## 📋 Features

### Landing Page (index.html)
- **Hero Section**: Eye-catching hero with strong CTA ("Enroll Now")
- **Course Streams**: Six dedicated course cards with icons and features
  - Class 11th
  - Class 12th
  - CET Crash Course (Featured)
  - JEE Advanced
  - NEET Mastery
  - Foundation Program
- **Why Choose Us**: Six feature tiles highlighting strengths
- **Contact & Lead Capture**: Functional enrollment form with:
  - Form validation
  - Course selection dropdown
  - Google Maps embed placeholder
  - Contact details section
- **Footer**: Integrated footer with:
  - About section
  - Quick links
  - Courses overview
  - Newsletter subscription
  - Social media links
  - Footer bottom links (Privacy, Terms, Refund)

### Gallery Page (gallery.html)
- **Gallery Hero**: Professional banner section
- **Masonry Grid Layout**: Responsive grid with 16 sample gallery items
- **Filter Categories**:
  - All
  - Classrooms
  - Labs & Facilities
  - Achievements
  - Events
- **Statistics Section**: Four key stats with icons
- **Call-to-Action**: Enrollment encouragement section
- **Hover Overlays**: Beautiful overlay effects on gallery items

## 🎨 Design System

### Color Palette
- **Primary Navy**: `#001a4d` - Trust, authority, professionalism
- **Secondary Navy**: `#003d99` - Secondary elements
- **Accent Gold**: `#ff8c00` - Success, energy, highlights
- **Accent Orange**: `#ff9500` - Supplementary accent
- **Pure White**: `#ffffff` - Clean backgrounds
- **Light Gray**: `#f5f7fa` - Section backgrounds
- **Medium Gray**: `#e8ecf1` - Borders, subtle elements
- **Dark Gray**: `#4a5568` - Body text

### Typography
- **Headings**: Montserrat (sans-serif)
  - Weights: 600, 700, 800
  - Modern, professional appearance
- **Body Text**: Roboto (sans-serif)
  - Weights: 400, 500, 700
  - Excellent readability

### Icons
- Font Awesome 6.4.0 (60+ icons used throughout)
- Consistent iconography for courses and features

## 📱 Responsive Design

- **Desktop**: Full layout with enhanced spacing
- **Tablet** (768px and below): Optimized grid and navigation
- **Mobile** (640px and below): Stacked layouts, adjusted typography
- **Touch-friendly**: Proper button sizes and spacing
- **iOS Compatible**: Form inputs with proper font sizes to prevent zoom

## 🔧 Interactive Features

### JavaScript Functionality
1. **Mobile Menu Toggle**: Hamburger menu for smaller screens
2. **Gallery Filtering**: Real-time category filtering
3. **Form Validation**: Client-side validation with notifications
4. **Newsletter Subscription**: Subscribe form handler
5. **Smooth Scrolling**: Enhanced scroll behavior
6. **Scroll Animations**: Fade-in animations as elements come into view
7. **Scroll-to-Top Button**: Appears when scrolled down
8. **Counter Animation**: Animated statistics
9. **Notification System**: Non-intrusive toast notifications

### Form Features
- Required field validation
- Email format validation
- Phone number validation
- Success/error notifications
- Clear user feedback
- Prevents double submission

## 📁 File Structure

```
d:/Project/Coaching/
├── index.html          # Landing page
├── gallery.html        # Gallery page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image directory (to be populated)
│   ├── library-study-space.jpg
│   ├── smart-classroom.jpg
│   ├── class-session.jpg
│   ├── student-collaboration.jpg
│   ├── science-lab.jpg
│   ├── computer-lab.jpg
│   ├── study-materials.jpg
│   ├── award-ceremony.jpg
│   ├── success-board.jpg
│   ├── merit-certificates.jpg
│   ├── seminar.jpg
│   ├── skill-workshop.jpg
│   ├── career-fair.jpg
│   ├── doubt-session.jpg
│   ├── student-testimonial.jpg
│   └── mock-exam.jpg
└── README.md           # This file
```

## 🖼️ Image Requirements

The website expects the following images in the `images/` folder (all optional for basic functionality):

### Classroom Images
- `library-study-space.jpg` - Library and study areas
- `smart-classroom.jpg` - Interactive classroom setup
- `class-session.jpg` - Regular class in progress
- `student-collaboration.jpg` - Group study sessions

### Labs & Facilities
- `science-lab.jpg` - Science laboratory setup
- `computer-lab.jpg` - Computer/IT lab
- `study-materials.jpg` - Study materials and resources

### Achievements
- `award-ceremony.jpg` - Toppers award ceremony
- `success-board.jpg` - Success stories/AIR board
- `merit-certificates.jpg` - Student achievements

### Events
- `seminar.jpg` - Expert seminars/guest lectures
- `skill-workshop.jpg` - Personality development workshops
- `career-fair.jpg` - Career guidance sessions
- `mock-exam.jpg` - Mock examination sessions

### Additional
- `doubt-session.jpg` - One-on-one mentoring
- `student-testimonial.jpg` - Student success testimonials

**Note**: Recommended image dimensions are 400x300px or larger. Use high-quality images for professional appearance.

## 🚀 Getting Started

1. **Extract Files**: Ensure all HTML, CSS, and JS files are in the same directory
2. **Add Images**: Place your coaching class images in the `images/` folder
3. **Update Content**:
   - Replace the example phone numbers, email, and address in both HTML files
   - Update the Google Maps embed URL with your actual location
   - Update social media links in footer
4. **Test**: Open `index.html` in a modern web browser

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Minimum IE Support**: Not supported (modern CSS Grid, Flexbox required)

## 🛠️ Customization Guide

### Changing Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-navy: #001a4d;
    --accent-gold: #ff8c00;
    /* ... other colors ... */
}
```

### Adding New Course
1. Duplicate a `.course-card` in `index.html`
2. Update the icon, title, description, and features
3. Add the course option to the form's select element

### Modifying Typography Sizes
Adjust font-size values in `styles.css` under typography sections:
```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
```

### Adding New Gallery Category
1. Add filter button in `gallery.html`:
   ```html
   <button class="filter-btn" data-filter="new-category">New Category</button>
   ```
2. Add gallery items with matching data-category attribute

### Backend Integration

For form submission to work with a backend:
1. Uncomment the fetch code in `script.js` (around line 98)
2. Replace `/api/enrollments` with your actual API endpoint
3. Ensure your backend handles POST requests with this JSON structure:
```json
{
  "name": "Student Name",
  "email": "student@email.com",
  "phone": "+91 1234567890",
  "course": "Course Name",
  "message": "Optional message"
}
```

## 📧 Contact Information

Update these in both HTML files:
- **Email**: info@dagwale.com, admissions@dagwale.com
- **Phone**: +91 9876 543 210, +91 8765 432 109
- **Address**: Dagwale Coaching Classes, Educational Hub, City Center
- **Hours**: Mon-Sat 8 AM - 6 PM, Sun 10 AM - 4 PM

## 🔐 Performance Optimizations

- CSS Grid and Flexbox for efficient layouts
- Smooth animations using CSS transforms
- Lazy loading ready for images
- Minimal JavaScript for fast load times
- Mobile-first responsive design

## 📊 SEO Considerations

- Semantic HTML structure
- Meta descriptions included
- Alt text ready for images
- Structured heading hierarchy
- Mobile-responsive design

## 📞 Support & Maintenance

For any questions or modifications:
- Check the inline comments in code files
- Ensure images are properly formatted
- Test on multiple devices before deployment
- Keep browser compatibility in mind

## 📄 License

This website template is provided as-is for Dagwale Coaching Classes.

---

**Version**: 1.0  
**Last Updated**: March 2026  
**Developed**: Professional Website Design Team
