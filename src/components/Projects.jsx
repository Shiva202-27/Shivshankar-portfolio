export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-40 pb-32 border-t border-white/10 flex justify-center"
    >
      <div className="w-full max-w-6xl px-6">
        <h2 className="mb-20 text-3xl sm:text-4xl font-semibold text-gray-200 text-center">
          Projects
        </h2>

        <div className="space-y-14">
          {/* Project 1 */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between
                          rounded-2xl bg-white/5 backdrop-blur-xl
                          border border-white/10 p-8 hover:border-blue-400/40 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                Kubernetes Cluster on AWS
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Production-ready Kubernetes cluster using kOps
              </p>
            </div>

            <div className="mt-6 md:mt-0 text-right">
              <p className="text-sm text-gray-300">
                ✔ High availability setup
                <br />
                ✔ Secure networking
                <br />✔ Automated node management
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-end">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  AWS
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  Kubernetes
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  kOps
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between
                          rounded-2xl bg-white/5 backdrop-blur-xl
                          border border-white/10 p-8 hover:border-blue-400/40 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                AWS Cost Optimization
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Reduced infrastructure cost through resource analysis
              </p>
            </div>

            <div className="mt-6 md:mt-0 text-right">
              <p className="text-sm text-gray-300">
                ✔ Identified idle EC2 resources
                <br />
                ✔ Optimized S3 storage classes
                <br />✔ Improved monthly cost efficiency
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-end">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  AWS
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  EC2
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  S3
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between
                          rounded-2xl bg-white/5 backdrop-blur-xl
                          border border-white/10 p-8 hover:border-blue-400/40 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                CI/CD Automation
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Automated build and deployment pipelines
              </p>
            </div>

            <div className="mt-6 md:mt-0 text-right">
              <p className="text-sm text-gray-300">
                ✔ Automated Docker image builds
                <br />
                ✔ Reduced manual deployment effort
                <br />✔ Faster release cycles
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-end">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  GitHub Actions
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
