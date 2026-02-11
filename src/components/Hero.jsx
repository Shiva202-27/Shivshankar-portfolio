export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6
  bg-gradient-to-br from-slate-900 via-black to-slate-900 animate-fade-in"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Shivshankar Kasapnor
      </h1>

      <p className="mt-6 text-xl md:text-2xl text-gray-300">
        DevOps & Cloud Engineer
      </p>

      <p className="mt-4 max-w-2xl text-gray-400">
        I build scalable cloud infrastructure, automate deployments, and
        optimize costs using AWS, Kubernetes, and CI/CD pipelines.
      </p>

      <div className="mt-10 flex gap-6">
        <a
          href="#projects"
          className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-xl border border-blue-400 hover:bg-blue-500 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gray-400 rounded mt-2 animate-bounce"></div>
      </div>
    </section>
  );
}
