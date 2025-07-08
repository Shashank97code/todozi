import { useState } from "react";

function App() {
  // This is a simple Todo application built with React.
  // It features a responsive design with a gradient background,
  // a form to add new todos, and buttons to filter todos by status.
  // The todos are displayed in a list with options to mark them as complete or delete them.

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Deploy the App", completed: true },
  ]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5 flex flex-col  items-center">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-2xl mt-5 flex flex-col h-[90vh]">
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
          {/*next  filters */}
          <div className="mt-4  flex flex-col gap-4">
            {/* <div className="flex justify-between items-center mt-4 mb-4">
              <h2 className="text-xl font-semibold text-slate-700">Filters</h2>
              <div className="flex gap-3">
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
                  style={filter === "all" ? { backgroundColor: "#4f46e5" } : {}}
                >
                  All
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
                  style={
                    filter === "action" ? { backgroundColor: "#4f46e5" } : {}
                  }
                >
                  Active
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
                  style={
                    filter === "Completed" ? { backgroundColor: "#4f46e5" } : {}
                  }
                >
                  Completed
                </button>
              </div>
            </div> */}

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
        </div>
      </div>
    </>
  );
}

export default App;
