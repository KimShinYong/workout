// src/components/workout/WorkoutForm.jsx
import { useState } from "react";
import { useWorkout } from "../../context/workout-context";

export default function WorkoutForm() {
  const { addExercise } = useWorkout();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("upper");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise(name, category);
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="운동명 (예: 스쿼트)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "0.4rem 0.6rem", minWidth: "200px" }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "0.4rem 0.6rem" }}
      >
        <option value="upper">상체</option>
        <option value="lower">하체</option>
        <option value="cardio">유산소</option>
      </select>
      <button type="submit" style={{ padding: "0.4rem 0.8rem" }}>
        운동 추가
      </button>
    </form>
  );
}
