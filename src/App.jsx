import { useState } from "react";

// This is a simple Todo application built with React.
// It features a responsive design with a gradient background,

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Deploy the App", completed: true },
  ]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5 flex flex-col  items-center">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-2xl mt-5 flex flex-col h-[90vh]">
          {/* Header */}
          <header className="text-center mb-8 flex-shrink-0">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Welcome to Todozi
            </h1>
            <p className="text-md text-slate-500 mb-2">
              Your playful, powerful way to get things done..!!
            </p>
          </header>
          {/* Todo Form */}
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="What do you want to do?"
              className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              title="Add Todo"
              aria-label="Add Todo"
              role="button"
              tabindex="0"
            >
              Add Todo
            </button>
          </form>
          {/* Todo List */}
          <div className="mt-4  flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-3">
                {todos?.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex justify-between items-center border-b border-slate-200 py-2 last:border-b-0"
                  >
                    <span
                      className={`text-slate-700  ${
                        todo.completed ? "line-through" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                        ✓
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                        ✗
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*After Create, read and delete next Task is add Filters Section */}
        </div>
      </div>
    </>
  );
}

export default App;
