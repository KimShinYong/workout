// src/components/todo/TodoItem.jsx
import { useWorkout } from "../../context/workout-context";

export default function TodoItem({ dayKey, itemId, label, done }) {
  const { toggleDone } = useWorkout();

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.2rem 0",
      }}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleDone(dayKey, itemId)}
      />
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
          color: done ? "#999" : "#333",
          fontSize: "0.9rem",
        }}
      >
        {label}
      </span>
    </li>
  );
}
