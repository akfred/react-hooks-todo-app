import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);

  const title =
    state.todos.length > 0 ? `${state.todos.length} todos` : "No todos";
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li
            className="flex items-center bg-orange-dark border-black border-dashed border-1 my-2 py-4"
            key={todo.id}
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
              className={`flex-1 ml-12 cursor-pointer ${todo.completed &&
                "line-through text-grey-darkest"} `}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "SET_CURRENT_TODO", payload: todo })
              }
            >
              <i className="fas fa-edit h-6 text-green-dark pt-1 mr-2" />
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo })}
            >
              <i className="fas fa-trash h-6 text-red pt-1 mr-3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
