"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    // دالة async داخل useEffect
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const result = await response.json();
      setTodo(result);
    };

    fetchTodo();
  }, []); // مهم جدًا علشان ميعملش fetch في كل render

  return (
    <div>
      <h1>{todo.title ? todo.title : "Loading..."}</h1>
    </div>
  );
}
