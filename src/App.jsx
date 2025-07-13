import { useState } from "react";

// This is a simple Todo application built with React.
// It features a responsive design with a gradient background,

function App() {
  const [todos, setTodos] = useState([
    // Initial todos for demonstration purposes
    // In a real application, you would fetch these from an API or a database.
    {
      id: 1,
      text: "Learn React - Life Cycle, Components, hooks ",
      completed: true,
    },
    { id: 2, text: "Building a Todo App", completed: false },
    { id: 3, text: "Deploy the App", completed: false },
  ]);

  const [text, setText] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5 flex flex-col  items-center">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl px-10 pb-5 pt-2 w-full max-w-2xl mt-5 flex flex-col overflow-y-auto h-[100vh]">
          {/* Header */}
          <header className="text-center mb-8 flex-shrink-0 sticky top-0 z-10 bg-slate-50">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-1">
              Welcome to Todozi - InProgress
            </h1>
            <p className="text-md text-slate-500">
              Your playful, powerful way to get things done..!!
            </p>
          </header>

          <p className="text-sm text-slate-600 mb-4">
            <span>Note: </span>
            <ul className="list-disc list-inside text-slate-600">
              <li>
                The below are
                <span className="font-semibold"> sample todos</span> to get you
                started, as it in still InProgress and not fully functional need
                to features like
                <span className="font-semibold">
                  {" "}
                  delete, edit, and filter todos
                </span>
                .
              </li>
              <li>You can add your own todos using the input field below.</li>
              <li>
                The todos are stored in the component state and will reset on
                page refresh.
              </li>
            </ul>
          </p>
          {/* Todo Form */}
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="What do you need to do?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              title="Enter your todo item"
              aria-label="Todo Input"
              className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              title="Add Todo"
              aria-label="Add Todo"
              role="button"
              tabindex="0"
              onClick={(e) => {
                e.preventDefault();
                // Logic to add a new todo would go here
                // For now, we will just log a message

                setTodos((prevTodos) => [
                  { id: Date.now(), text, completed: false },
                  ...prevTodos,
                ]);
                setText(""); // Clear the input field after adding
                console.log("Todo added!");
              }}
            >
              Add Todo
            </button>
          </form>
          {/* Todo List */}
          <div className="mt-4  flex flex-col gap-4 ">
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-3">
                {todos?.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex justify-between items-center border-b border-slate-200 py-2 last:border-b-0"
                  >
                    <span
                      className={`text-slate-800  ${
                        todo.completed ? "line-through" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                    <div className="flex gap-2">
                      {/* <button className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"> */}
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className="px-5 py-5   cursor-pointer "
                        title={
                          todo.completed
                            ? "Mark as Incomplete"
                            : "Mark as Complete"
                        }
                        aria-label={
                          todo.completed
                            ? "Mark as Incomplete"
                            : "Mark as Complete"
                        }
                        onChange={() => {
                          setTodos((prevTodos) =>
                            prevTodos.map((t) =>
                              t.id === todo.id
                                ? { ...t, completed: !t.completed }
                                : t
                            )
                          );
                        }}
                      />
                      {/* </button> */}
                      <button
                        title="Delete Todo"
                        className="text-red-500 text-xl font-medium  rounded-lg hover:text-red-600 transition duration-200"
                      >
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
