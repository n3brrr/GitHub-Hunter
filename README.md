<div align="center">

# 🕵️‍♂️ GitHub Hunter

**Advanced GitHub User Explorer & Tracker**

[🚀 Demo](https://git-hub-hunter.vercel.app/) - [🐛 Issues](https://github.com/n3brrr/githubHunter/issues) - [📖 Docs](#documentation)

</div>

---

## ⚡ Overview

GitHub Hunter is a modern web application designed to seamlessly explore GitHub user profiles. Built with a robust React & TypeScript architecture, it provides real-time data fetching, search history tracking, and a sleek, responsive interface powered by TailwindCSS.

### ✨ Key Features

- 🔍 **Smart User Search** - Instant access to GitHub user profiles and stats
- 📜 **History Management** - Automatically tracks and saves your search history
- ⚡ **High Performance** - Powered by Vite for lightning-fast builds and HMR
- 🎨 **Modern Design** - Fully responsive UI with TailwindCSS v4
- 🛡️ **Type Safety** - Comprehensive TypeScript integration for reliability

### 🛠️ Tech Stack

<p align="left">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

---

## � Installation

### Prerequisites

- Node.js 18+ (Recommended)
- npm or pnpm

### Quick Setup

```bash
# Clone repository
git clone https://github.com/n3brrr/githubHunter.git

# Navigate to directory
cd githubHunter

# Install dependencies
npm install

# Start Development Server
npm run dev

# Build for Production
npm run build
```

## 📁 Project Structure

```bash
githubHunter/
├── src/
│   ├── components/      # UI Components (SearchBar, UserCard, etc.)
│   ├── hooks/          # Custom hooks (useGithub)
│   ├── assets/         # Static assets
│   ├── App.tsx         # Main application component
│   └── types.ts        # TypeScript definitions
├── public/             # Public assets
├── index.html          # Entry HTML
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🔄 Architecture

```mermaid
graph TD
    User[User Interaction] --> Search[SearchBar Component]
    Search --> Hook[useGithub Hook]
    Hook --> API[GitHub API]
    API --> State[Global State]
    State --> Card[UserCard Component]
    State --> History[HistoryList Component]
```

## 💻 Usage

```typescript
// Example: Using the custom hook for data fetching
import useGithub from './hooks/useGithub';

const MyComponent = () => {
  const { user, loading, fetchUser } = useGithub();

  return (
    <button onClick={() => fetchUser('n3brrr')}>
      Search User
    </button>
  );
};
```

## 🧪 Scripts

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Lint code
pnpm run lint

# Preview production build
pnpm run preview
```

## 👤 Author

**Rubén Torres** - [@n3brrr](https://github.com/n3brrr)

Frontend Developer | TypeScript Enthusiast

<div align="center">
⭐ Star this repo if you find it useful
</div>
