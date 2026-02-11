const projects = [
  {
    title: "Kubernetes Cluster with kOps",
    desc: "Designed and deployed a production-ready Kubernetes cluster on AWS using kOps.",
    tech: "AWS • Kubernetes • kOps",
  },
  {
    title: "AWS Cost Optimization",
    desc: "Reduced AWS costs by identifying idle resources and optimizing storage classes.",
    tech: "AWS • EC2 • S3",
  },
  {
    title: "CI/CD Automation",
    desc: "Automated build and deployment pipelines using GitHub Actions and Docker.",
    tech: "GitHub Actions • Docker",
  },
  {
    title: "Offline Billing Android App",
    desc: "Built an offline billing system with PDF invoices and sales reports.",
    tech: "Android • Java • SQLite",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800
                       hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>

            <p className="text-gray-400 mt-4">{project.desc}</p>

            <p className="mt-6 text-sm text-blue-400 font-semibold">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
