# 📝 Todozi (a React ToDO) App

A basic Todozi app to help you remember and get things done. Built with React, Vite, and Tailwind CSS.

## ✅ Project Setup Status

- ✅ Initialize Vite + React project
- ✅ Tailwind CSS setup
- ✅ Basic folder structure created

## What does this app do?

- ✅ Add a new task
- 🗑️ Delete an existing task
- 📌 Mark tasks as complete/incomplete/deleted
- ↹ Have a tab wise todo list (all, active, completed, pending )
- 💾 Data persists using `localStorage` (optional)

## What you need before starting

- Node.js installed on your computer
- A code editor (like VS Code or trending Cursor)
- Knowledge of HTML,CSS, JavaScript, ReactJS and TailwindCSS

## How to start

Imp: Directly clone using git clone CLONE_URL and run below to initall node_modules

```bash
    git clone https://github.com/Shashank97code/todozi.git
    cd my-todo-app
    npm install
    npm run dev
```

### Step 1: How the project is initialized

```bash
npm create vite@latest todozi  -- --template react
cd my-todo-app
npm install
```

### Step 2: Add Tailwind CSS

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind config files
npx tailwindcss init -p
```

### Step 3: Setup Tailwind

Open `tailwind.config.js` and replace with:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 4: Add Tailwind to CSS

Open `src/index.css` and replace everything with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Start the app

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

## Basic commands

- `npm run dev` - Start the app
- `npm run build` - Build for production
- `Ctrl + C` - Stop the app

## File structure

```
my-todo-app/
├── src/
│   ├── App.jsx       (Main app file)
│   ├── main.jsx      (App entry point)
│   └── index.css     (Styles)
├── index.html        (HTML template)
└── package.json      (Dependencies)
```

## What is each technology?

- **React** - Makes websites interactive
- **Vite** - Fast development server
- **Tailwind CSS** - Easy styling with classes

## Next steps

1. Open `src/App.jsx` and start building your Todo app
2. Use Tailwind classes like `bg-blue-500`, `text-white`, `p-4` for styling
3. Add state with `useState` for managing todos
4. Save todos to localStorage to remember them

## Common Tailwind classes

- `bg-blue-500` - Blue background
- `text-white` - White text
- `p-4` - Padding
- `m-2` - Margin
- `rounded` - Rounded corners
- `shadow` - Drop shadow
- `hover:bg-blue-600` - Hover effect

## Need help?

- Check the browser console for errors (F12)
- Make sure Node.js is installed
- Try `npm install` if something doesn't work

Good luck building your Todozi app! 🚀
