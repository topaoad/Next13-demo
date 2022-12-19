// app/todos/page.tsx

import { use } from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/todos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

type Todo = {
  id:number
  title: string;
};

export default function Page() {
  const todos: Todo[] = use(getData());

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </>
  );
}

