import { FaAws, FaDocker, FaLinux, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-40 flex justify-center">
      <div className="w-full max-w-5xl px-6">
        <h2 className="mb-14 text-6xl sm:text-6xl font-semibold text-center text-white">
          Core Skills
        </h2>

        {/* TABLE */}
        <div className="border border-white/20">
          {/* Row 1 */}
          <div className="grid grid-cols-2">
            <SkillBox>
              <FaAws title="AWS" />
            </SkillBox>
            <SkillBox right>
              <FaLinux title="Linux" />
            </SkillBox>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 border-t border-white/20">
            <SkillBox>
              <FaDocker title="Docker" />
            </SkillBox>
            <SkillBox right>
              <SiKubernetes title="Kubernetes (kOps)" />
            </SkillBox>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 border-t border-white/20">
            <SkillBox>
              <FaGithub title="Git & GitHub" />
            </SkillBox>
            <SkillBox right>
              <SiTerraform title="Terraform" />
            </SkillBox>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable box */
function SkillBox({ children, right }) {
  return (
    <div
      className={`h-40 flex items-center justify-center
        ${right ? "border-l border-white/20" : ""}
        hover:bg-white/5 transition`}
    >
      <div className="text-blue-400" style={{ fontSize: "72px" }}>
        {children}
      </div>
    </div>
  );
}
