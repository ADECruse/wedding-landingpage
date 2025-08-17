# 💒 Wedding Landing Page - Katharina & Axel

A beautiful, responsive wedding landing page for Katharina and Axel's special day, featuring bilingual support (German/English), wedding details, and honeymoon contribution options.

## ✨ Features

- **🌍 Bilingual Support**: Full German and English language support with automatic language detection
- **📱 Responsive Design**: Mobile-first design that looks great on all devices
- **🎨 Beautiful UI**: Elegant design with custom fonts and smooth animations
- **📅 Wedding Schedule**: Interactive timeline with all event details
- **💝 Honeymoon Contributions**: PayPal integration for guest contributions
- **🖼️ Image Gallery**: Beautiful couple photos and Honeymoon destination imagery
- **📍 Location Details**: Maps integration for venues

## 🚀 Live Demo

The landing page is live at: [Wedding of Katharina & Axel](https://katharina-and-axel.de)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Fonts**: Google Fonts (Great Vibes, Open Sans)
- **Build Tool**: Tailwind CLI for CSS compilation
- **Deployment**: Static hosting with custom domain

## 📁 Project Structure

```
wedding-landingpage/
├── css/
│   ├── input.css          # Tailwind CSS source
│   └── output.css         # Compiled CSS
├── images/                # Wedding photos and imagery
├── scripts/
│   └── main.js           # JavaScript functionality
├── index.html            # Main landing page
├── package.json          # Dependencies
├── CNAME                # Custom domain configuration
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wedding-landingpage.git
   cd wedding-landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS**
   ```bash
   npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
   ```

4. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or serve locally with a simple HTTP server:
     ```bash
     python -m http.server 8000
     # or
     npx serve .
     ```

### Language Support

The site automatically detects the user's browser language and defaults to German for German-speaking users, English for others. Users can manually switch languages using the flag buttons in the footer.

## 📱 Responsive Design

The landing page is built with a mobile-first approach and includes:
- Responsive images that scale appropriately
- Flexible layouts that work on all screen sizes
- Touch-friendly navigation elements
- Optimized typography for readability

## 🚀 Deployment

### Static Hosting

This project is designed for static hosting services like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any traditional web hosting

## 📄 License

© 2025 Alan Cruse. All Rights Reserved.

## 📸 Image Rights

All photographs and images on this site are © 2025 Katharina & Axel Meyer-Woelden. All Rights Reserved.

## 👨‍💻 Developer

Built with ❤️ by [Alan Cruse](https://alancruse.me)

---

*Wishing Katharina and Axel a beautiful wedding day and many happy years together! 💕*
