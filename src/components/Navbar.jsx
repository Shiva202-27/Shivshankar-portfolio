export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold", color: "#38bdf8" }}>
        Shivshankar.tech
      </div>

      <div style={{ display: "flex", gap: "40px" }}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
