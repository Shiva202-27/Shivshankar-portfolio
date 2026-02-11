export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>

      <p className="text-gray-400 mb-8">
        Open to DevOps, Cloud & Automation opportunities
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:your-email@gmail.com"
          className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Email
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
