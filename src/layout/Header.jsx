import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: "1rem",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  color: isActive ? "#0070f3" : "#333",
});

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.3rem" }}>운동 루틴 확인 시스템</h1>
      <nav>
        <NavLink to="/workout" style={linkStyle}>
          루틴 설정
        </NavLink>
        <NavLink to="/log" style={linkStyle}>
          기록 확인
        </NavLink>
      </nav>
    </header>
  );
}
