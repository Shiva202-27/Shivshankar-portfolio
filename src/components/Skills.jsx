const skills = [
  "AWS",
  "Linux",
  "Docker",
  "Kubernetes (kOps)",
  "Git & GitHub",
  "CI/CD",
  "Terraform",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center
hover:-translate-y-2 hover:scale-[1.03]
hover:shadow-xl hover:shadow-blue-500/20
transition-all duration-300"
          >
            <p className="text-xl text-gray-200 font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
