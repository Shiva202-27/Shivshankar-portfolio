export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Contact</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <a
          href="mailto:shivk202vapm@email.com"
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          Email
        </a>

        <a
          href="https://github.com/Shiva202-27"
          target="_blank"
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shivshankar-kasapnor-b44568239"
          target="_blank"
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
