import { createContext, useContext, useState, useMemo } from "react";
import { DAYS } from "../constants/days";

const WorkoutContext = createContext(null);

function createEmptySchedule() {
  const schedule = {};
  DAYS.forEach((d) => {
    schedule[d.key] = []; // 각 요일은 처음엔 빈 배열
  });
  return schedule;
}

let exerciseIdSeq = 1;
let routineItemSeq = 1;

export function WorkoutProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [schedule, setSchedule] = useState(createEmptySchedule());

  // 1. 운동 추가
  const addExercise = (name, category) => {
    if (!name.trim()) return;
    const newExercise = {
      id: `ex-${exerciseIdSeq++}`,
      name: name.trim(),
      category,
    };
    setExercises((prev) => [...prev, newExercise]);
  };

  // 2. 운동 삭제 (선택)
  const removeExercise = (exerciseId) => {
    setExercises((prev) => prev.filter((ex) => ex.id !== exerciseId));
    // 스케줄에서도 삭제
    setSchedule((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((dayKey) => {
        next[dayKey] = next[dayKey].filter(
          (item) => item.exerciseId !== exerciseId
        );
      });
      return next;
    });
  };

  // 3. 요일에 운동 추가
  const addExerciseToDay = (dayKey, exerciseId) => {
    if (!exerciseId) return;
    setSchedule((prev) => {
      const dayList = prev[dayKey] || [];
      const newItem = {
        id: `item-${routineItemSeq++}`,
        exerciseId,
        done: false,
      };
      return {
        ...prev,
        [dayKey]: [...dayList, newItem],
      };
    });
  };

  // 4. Todo 체크 토글
  const toggleDone = (dayKey, itemId) => {
    setSchedule((prev) => {
      const dayList = prev[dayKey] || [];
      const newList = dayList.map((item) =>
        item.id === itemId ? { ...item, done: !item.done } : item
      );
      return {
        ...prev,
        [dayKey]: newList,
      };
    });
  };

  const value = useMemo(
    () => ({
      exercises,
      schedule,
      addExercise,
      removeExercise,
      addExerciseToDay,
      toggleDone,
    }),
    [exercises, schedule]
  );

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const ctx = useContext(WorkoutContext);
  if (!ctx) {
    throw new Error("useWorkout은 WorkoutProvider 안에서만 사용해야 합니다.");
  }
  return ctx;
}
