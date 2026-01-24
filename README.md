# 🏠 HomeNest - Real Estate Listing Portal

A modern, full-featured real estate platform built with React and Firebase, designed to connect property buyers, sellers, and agents in a seamless digital experience.

## 📋 Project Description

**HomeNest** is a comprehensive real estate listing platform that simplifies property buying and selling through modern web technologies. Built with React 19 and Firebase, it serves as a digital marketplace connecting property buyers, sellers, and real estate professionals.

The platform features advanced property search, detailed listings with image galleries, secure user authentication, and real-time property management. With a responsive design and intuitive interface, HomeNest provides a seamless experience across all devices while demonstrating modern full-stack development practices.

## 🌐 Live Demo

**[Visit HomeNest](https://home-nest-f0c86.web.app)**

## 📸 Screenshots

### Home Page
![HomeNest Home Page](src/assets/home-nest-1.avif)

### Property Listings
![Property Listings](src/assets/home-nest-4.avif)

## ✨ Features

### 🔍 **Advanced Property Search & Filtering**
- Powerful search functionality with multiple filter options
- Filter by location, price range, property type, and amenities
- Real-time search results with optimized performance

### 📸 **Comprehensive Property Listings**
- High-quality image galleries for each property
- Detailed property information including price, amenities, and descriptions
- Interactive map integration for location visualization
- Property ratings and reviews system

### 🔐 **Secure Authentication System**
- Firebase-powered user authentication
- Secure sign-up and login functionality
- Personalized user dashboards
- Protected routes and user session management

### 🏡 **Property Management**
- Add new property listings with rich media support
- Edit and update existing property details
- Delete or mark properties as sold
- Real-time updates across the platform

### 📱 **Responsive Design**
- Fully responsive UI optimized for all devices
- Modern, clean interface built with Tailwind CSS and DaisyUI
- Smooth animations and transitions with AOS
- Mobile-first design approach

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS

### Backend & Database
- **Firebase** - Authentication, Firestore database, and hosting
- **Firebase Storage** - Image and file storage

### State Management & Data Fetching
- **TanStack React Query** - Server state management
- **Context API** - Global state management

### UI/UX Libraries
- **React Icons** - Icon library
- **Lucide React** - Modern icon set
- **AOS** - Animate on scroll library
- **Swiper** - Touch slider component
- **React Rating** - Star rating component
- **SweetAlert2** - Beautiful alert dialogs
- **React Toastify** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **Axios** - HTTP client

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase account for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/home-nest-client.git
   cd home-nest-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase configuration**
   - Create a new Firebase project
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase config to `src/firebase/firebase.config.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PropertiesCard.jsx
│   └── ...
├── Pages/              # Main application pages
│   ├── Home/
│   ├── AllProperties/
│   ├── AddProperties/
│   ├── MyProperties/
│   ├── Dashboard/
│   └── Auth/
├── context/            # React Context providers
├── firebase/           # Firebase configuration
├── routes/             # React Router configuration
├── assets/             # Static assets and images
└── hooks/              # Custom React hooks
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@kantho202](https://github.com/kantho202)
- LinkedIn: [Dikshit](https://www.linkedin.com/in/dikshit-chakma)
- Email: dikshitchakma2002@gmail.com

## 🙏 Acknowledgments

- Firebase for providing excellent backend services
- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and the open-source community

---

⭐ **Star this repository if you found it helpful!**
