// src/components/workout/WorkoutList.jsx
import { useWorkout } from "../../context/workout-context";

function categoryLabel(category) {
  if (category === "upper") return "상체";
  if (category === "lower") return "하체";
  return "유산소";
}

export default function WorkoutList() {
  const { exercises, removeExercise } = useWorkout();

  if (exercises.length === 0) {
    return <p>추가된 운동이 없습니다. 위에서 운동을 추가해보세요.</p>;
  }

  return (
    <div>
      <h3>운동 목록</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {exercises.map((ex) => (
          <li
            key={ex.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.4rem 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <span>
              {ex.name}{" "}
              <span style={{ color: "#666", fontSize: "0.85rem" }}>
                ({categoryLabel(ex.category)})
              </span>
            </span>
            <button
              onClick={() => removeExercise(ex.id)}
              style={{ padding: "0.2rem 0.5rem", fontSize: "0.8rem" }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
