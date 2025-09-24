# Popules.com

> Communities thrive when people connect, share, and grow together.

A modern Nuxt.js application for community content sharing and discovery, featuring infinite scrolling, category filtering, and responsive design with dark mode support.

## 🚀 Features

-  **Infinite Scroll**: Seamlessly load more content as you browse
-  **Category Filtering**: Browse content by categories (Vacancies, Workplace, Food, Design, Cars, Finance, Lifestyle, Travel, Makeup, Fitness)
-  **Dark Mode Support**: Toggle between light and dark themes
-  **Responsive Design**: Optimized for all device sizes
-  **Content Feed**: Discover and interact with community posts
-  **User Profiles**: View content creators and their profiles
-  **Engagement System**: Like and interact with posts

## 🛠️ Tech Stack

-  **Framework**: [Nuxt.js 4](https://nuxt.com/) - Vue.js full-stack framework
-  **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
-  **UI Components**: [Headless UI](https://headlessui.com/) - Unstyled, accessible UI components
-  **Language**: TypeScript
-  **Package Manager**: npm
-  **Containerization**: Docker

## 📦 Installation

### Prerequisites

-  Node.js (Latest LTS version recommended)
-  npm or yarn package manager

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/amirulnubitel/popules.git
   cd popules
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Docker Deployment

1. **Build the Docker image**

   ```bash
   docker build -t popules-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 popules-app
   ```

## 🏗️ Project Structure

```
popules/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Global styles
│   ├── components/
│   │   ├── Card.vue              # Content card component
│   │   ├── DarkModeToggle.vue    # Dark mode switcher
│   │   ├── Header.vue            # Application header
│   │   ├── Sidebar.vue           # Navigation sidebar
│   │   └── Skeleton.vue          # Loading skeleton
│   ├── layouts/
│   │   └── default.vue           # Default layout
│   ├── pages/
│   │   └── index.vue             # Homepage with infinite scroll
│   └── app.vue                   # Root application component
├── public/
│   ├── favicon.ico
│   └── logo.png
├── Dockerfile                    # Docker configuration
├── nuxt.config.ts               # Nuxt configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🔧 Available Scripts

-  `npm run dev` - Start development server
-  `npm run build` - Build for production
-  `npm run generate` - Generate static site
-  `npm run preview` - Preview production build
-  `npm run postinstall` - Prepare Nuxt (runs automatically)

## ⚙️ Configuration

### Environment Variables

The application uses API routes with proxy configuration:

```typescript
// nuxt.config.ts
routeRules: {
  "/popules/**": {
    proxy: {
      to: `https://api.popules.com/api/**`,
    },
  },
},
```

### Dark Mode

Dark mode is configured using `@nuxtjs/color-mode`:

```typescript
colorMode: {
  classSuffix: "",
},
```

### Meta Tags

SEO-optimized meta tags are configured for better search engine visibility:

-  Title: "Popules.com"
-  Description: "Communities thrive when people connect, share, and grow together."
-  Open Graph and Twitter Card support

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

-  **Dark Mode**: Class-based dark mode support
-  **Responsive Grid**: Adaptive layouts for different screen sizes
-  **Custom Scrollbars**: Hidden scrollbars for cleaner UI
-  **Hover Effects**: Smooth transitions and interactions

## 📱 Features Overview

### Content Feed

-  Displays community posts with thumbnails
-  User information and engagement metrics
-  Infinite scroll pagination
-  Category-based filtering

### Responsive Design

-  Mobile-first approach
-  Adaptive grid layouts (2-5 columns based on screen size)
-  Touch-friendly interactions

### Performance

-  Lazy loading for images
-  Skeleton loading states
-  Optimized infinite scroll
-  Efficient data fetching with useFetch

## 🔗 Links

-  **Repository**: [https://github.com/amirulnubitel/popules](https://github.com/amirulnubitel/popules)
-  **Live Demo**: [https://math.gochanger.exposed](https://math.gochanger.exposed)
