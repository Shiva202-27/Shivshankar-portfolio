export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <div className="max-w-3xl">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Shivshankar Kasapnor
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg sm:text-xl text-blue-400">
          DevOps & Cloud Engineer
        </p>

        {/* Short description */}
        <p className="mt-8 text-gray-300 leading-relaxed">
          I build scalable cloud infrastructure, automate deployments, and
          optimize cloud costs using modern DevOps practices.
        </p>

        {/* Tech keywords (ONE LINE ONLY) */}
        <p className="mt-6 text-sm tracking-widest text-gray-400 uppercase">
          AWS • Kubernetes • Docker • CI/CD • Infrastructure Automation
        </p>

        {/* FORCED SPACE */}
        <div style={{ height: "48px" }} />

        <div className="flex justify-center">
          <a
            href="#projects"
            style={{ marginRight: "32px" }}
            className="px-8 py-3 rounded-xl bg-blue-500 text-white
               hover:bg-blue-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-blue-400
               text-blue-400 hover:bg-blue-400 hover:text-black
               transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
