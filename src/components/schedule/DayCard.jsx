// src/components/schedule/DayCard.jsx
import { useState } from "react";
import { useWorkout } from "../../context/workout-context";
import TodoList from "../todo/TodoList";

export default function DayCard({ dayKey, label }) {
  const { exercises, schedule, addExerciseToDay } = useWorkout();
  const [selectedExerciseId, setSelectedExerciseId] = useState("");

  const dayItems = schedule[dayKey] || [];

  const handleAdd = () => {
    if (!selectedExerciseId) return;
    addExerciseToDay(dayKey, selectedExerciseId);
    setSelectedExerciseId("");
  };

  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "0.8rem",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{label}요일</h3>

      <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.5rem" }}>
        <select
          value={selectedExerciseId}
          onChange={(e) => setSelectedExerciseId(e.target.value)}
          style={{ flex: 1, padding: "0.3rem 0.4rem" }}
        >
          <option value="">운동 선택</option>
          {exercises.map((ex) => (
            <option key={ex.id} value={ex.id}>
              {ex.name}
            </option>
          ))}
        </select>
        <button onClick={handleAdd} style={{ padding: "0.3rem 0.6rem" }}>
          추가
        </button>
      </div>

      <TodoList dayKey={dayKey} items={dayItems} />
    </article>
  );
}
