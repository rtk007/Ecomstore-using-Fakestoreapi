# Ecomstore-using-Fakestoreapi
# vite-react-typescript-starter

## Overview
This project is a Vite + React + Tailwind CSS application.

## Features
- Fast development with Vite
- Styled using Tailwind CSS
- TypeScript support enabled
- ESLint and Prettier configured

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/your-repo.git
   cd vite-react-typescript-starter
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Run the development server  
   ```bash
   npm run dev
   ```

## Project Structure
```
- project/
  - src/                 # Source code
  - public/              # Static assets
  - index.html           # Main HTML file
  - vite.config.ts       # Vite configuration
  - tailwind.config.js   # Tailwind CSS configuration
  - tsconfig.json        # TypeScript configuration
  - package.json         # Project metadata
```

## Build for Production
```bash
npm run build
```

## Deploying to Netlify
1. Build the project  
   ```bash
   npm run build
   ```
2. Deploy to Netlify  
   - Drag & drop the `dist/` folder in Netlify  
   - OR use Netlify CLI:  
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod
     ```

## Dependencies
### Main Dependencies:
```
{
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-slot": "^1.0.2",
  "@tanstack/react-query": "^5.24.1",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.1",
  "tailwind-merge": "^2.2.1",
  "tailwindcss-animate": "^1.0.7",
  "zustand": "^4.5.1"
}
```

### Dev Dependencies:
```
{
  "@eslint/js": "^9.9.1",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.11",
  "globals": "^15.9.0",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.3.0",
  "vite": "^5.4.2"
}
```

---

Happy Coding!

