import WorkoutForm from "../components/workout/WorkoutForm";
import WorkoutList from "../components/workout/WorkoutList";

export default function WorkoutPage() {
  return (
    <section>
      <h2>운동 루틴 설정</h2>
      <WorkoutForm />
      <hr style={{ margin: "1.5rem 0" }} />
      <WorkoutList />
    </section>
  );
}
