# AARAMBH 3.0

A modern, responsive React application for the AARAMBH 3.0 event website featuring light/dark mode, smooth animations, and optimized performance.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Theme System**: Light/dark mode with system preference detection
- **Performance Optimized**: Fast loading with Vite build tool
- **TypeScript**: Full type safety and better developer experience
- **Accessibility**: WCAG compliant components and navigation
- **Mobile First**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── Hero.tsx        # Hero section with countdown
│   ├── About.tsx       # About section
│   ├── Events.tsx      # Events section with filtering
│   ├── Schedule.tsx    # Event schedule
│   ├── Guidelines.tsx  # Event guidelines
│   ├── Contact.tsx     # Contact information
│   └── ErrorBoundary.tsx # Error handling component
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/             # Custom React hooks
│   └── useScrollAnimation.ts # Scroll animation hook
├── constants/         # Application constants
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 8+

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd aarambh3.0
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎨 Theme System

The application includes a comprehensive theme system with:

- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes for extended use
- **System Preference**: Automatically detects user's system theme
- **Manual Toggle**: Users can manually switch themes
- **Persistent**: Theme preference saved in localStorage

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify/Vercel

1. Connect your repository to Netlify or Vercel
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Icons from Lucide React
- Powered by Vite

---

Made with ❤️ for AARAMBH 3.0 by IEDC CEK
