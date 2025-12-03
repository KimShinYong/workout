// src/components/schedule/WeekSchedule.jsx
import { DAYS } from "../../constants/days";
import DayCard from "./DayCard";

export default function WeekSchedule() {
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {DAYS.map((day) => (
        <DayCard key={day.key} dayKey={day.key} label={day.label} />
      ))}
    </div>
  );
}
