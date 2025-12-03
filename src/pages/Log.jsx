import WeekSchedule from "../components/schedule/WeekSchedule";

export default function Log() {
  return (
    <section>
      <h2>기록 페이지</h2>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        요일별로 운동 루틴을 배치하고, 완료한 운동을 체크해보세요.
      </p>
      <WeekSchedule />
    </section>
  );
}
