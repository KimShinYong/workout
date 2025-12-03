// src/components/todo/TodoList.jsx
import { useWorkout } from "../../context/workout-context";
import TodoItem from "./TodoItem";

export default function TodoList({ dayKey, items }) {
  const { exercises } = useWorkout();

  const findExerciseName = (exerciseId) => {
    const ex = exercises.find((e) => e.id === exerciseId);
    return ex ? ex.name : "삭제된 운동";
  };

  if (!items || items.length === 0) {
    return (
      <p style={{ fontSize: "0.85rem", color: "#888" }}>
        이 요일에 등록된 운동이 없습니다.
      </p>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          dayKey={dayKey}
          itemId={item.id}
          label={findExerciseName(item.exerciseId)}
          done={item.done}
        />
      ))}
    </ul>
  );
}
