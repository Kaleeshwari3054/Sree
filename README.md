# Tirumala Tirupati Devasthanams (TTD) Website

A modern, responsive website for Tirumala Tirupati Devasthanams built with ReactJS and Bootstrap 5, showcasing temple information, services, and providing devotee services.

## 🚀 Features

### 🎨 Design & User Experience
- **Fully Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, elegant design with Bootstrap 5
- **Golden Theme**: Traditional color scheme reflecting temple sanctity
- **Smooth Animations**: Engaging transitions and hover effects
- **Accessibility**: WCAG compliant with semantic HTML5

### 📱 Pages & Sections
- **Home Page**: Hero section, services overview, daily schedule, latest updates
- **About Page**: Temple history, vision & mission, leadership team, achievements
- **Services Page**: Detailed information about sevas, darshan, accommodation, donations
- **Gallery Page**: Photo gallery, video gallery, 360° virtual tour, downloadable resources
- **Contact Page**: Contact information, contact form, office timings, FAQ

### 🛠️ Technical Features
- **React Router**: Client-side routing for smooth navigation
- **Component Architecture**: Modular, reusable React components
- **TypeScript**: Type-safe development
- **Bootstrap 5**: Responsive grid system and UI components
- **Custom CSS**: Temple-specific styling with CSS variables
- **Interactive Elements**: Forms, image galleries, accordions, modals

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (version 16 or higher)
- npm (version 8 or higher)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ttd-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
ttd-website/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Footer.tsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Home page
│   │   ├── About.tsx       # About page
│   │   ├── Services.tsx    # Services page
│   │   ├── Gallery.tsx     # Gallery page
│   │   └── Contact.tsx     # Contact page
│   ├── styles/             # CSS files
│   │   └── index.css       # Main stylesheet
│   ├── assets/             # Static assets (images, logos)
│   ├── App.tsx             # Main App component
│   └── index.tsx           # Entry point
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🎨 Customization

### Colors
The website uses CSS variables for consistent theming:

```css
:root {
  --ttd-primary: #d4af37;    /* Golden color */
  --ttd-secondary: #8b4513;  /* Brown color */
  --ttd-dark: #2c3e50;       /* Dark text */
  --ttd-light: #f8f9fa;      /* Light background */
  --ttd-orange: #ff6b35;     /* Accent color */
  --ttd-red: #dc3545;        /* Alert color */
}
```

### Adding Images
Place your temple images in the `src/assets/` directory and reference them in components:

```jsx
<img src="/assets/temple-image.jpg" alt="Temple" />
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `build/` folder.

### Deploy to Static Hosting
The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for environment-specific configuration:

```env
REACT_APP_API_URL=https://api.ttd-thiruvannamalai.org
REACT_APP_MAP_API_KEY=your_google_maps_api_key
```

## 📱 Responsive Breakpoints

The website is optimized for:
- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and queries:
- Email: info@ttd-thiruvannamalai.org
- Phone: +91-XXXX-XXXXXX

## 🙏 Acknowledgments

- ReactJS team for the amazing framework
- Bootstrap for the responsive UI framework
- Bootstrap Icons for beautiful icons
- The entire TTD team for their guidance and support

---

**Jai Sri Venkateswara!** 🙏