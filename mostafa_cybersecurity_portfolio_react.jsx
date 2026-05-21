/*
=============================================
HOW TO USE THIS PORTFOLIO
=============================================

1) PROFILE IMAGE
Place your personal image here:
/public/profile.png

2) CV FILE
Place your CV PDF here:
/public/assets/cv.pdf

3) PROJECT IMAGES
Place project screenshots here:
/public/projects/project1.png
/public/projects/project2.png
/public/projects/project3.png

4) CERTIFICATES
Place certificates images here:
/public/certificates/cert1.png
/public/certificates/cert2.png
/public/certificates/cert3.png

5) SOCIAL LINKS
Replace all href="#" links with your real:
- GitHub
- TryHackMe
- HackTheBox
- LinkedIn

6) INSTALLATION
npm install
npm run dev

7) DEPLOYMENT
Recommended:
- Vercel
- Netlify
- GitHub Pages

8) REQUIRED PACKAGES
npm install framer-motion react-icons react-type-animation

=============================================
*/

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaShieldAlt,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

export default function CyberPortfolio() {
  const skills = [
    "SIEM Monitoring",
    "Threat Detection",
    "Incident Response",
    "pfSense",
    "Wireshark",
    "Linux Administration",
    "Network Security",
    "SOC Analysis",
    "ELK Stack",
    "CCNA",
  ];

  const projects = [
    {
      title: "Automated SOC with SOAR",
      desc: "Built automated detection and response workflows using ELK, Shuffle, and pfSense.",
      tech: "ELK • Shuffle • pfSense",
      image: "/projects/project1.png",
    },
    {
      title: "Attack Simulation Lab",
      desc: "Simulated attacks using Kali Linux and analyzed logs inside a SOC environment.",
      tech: "Kali Linux • Wireshark • IDS/IPS",
      image: "/projects/project2.png",
    },
    {
      title: "Firewall Security Lab",
      desc: "Configured firewall rules, VLANs, and IDS/IPS to secure enterprise environments.",
      tech: "pfSense • VLANs • Networking",
      image: "/projects/project3.png",
    },
  ];

  const certificates = [
    {
      title: "Google Cybersecurity",
      image: "/certificates/cert1.png",
    },
    {
      title: "CCNA",
      image: "/certificates/cert2.png",
    },
    {
      title: "IBM Agile",
      image: "/certificates/cert3.png",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden scroll-smooth">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
            MOSTAFA
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#certs" className="hover:text-cyan-400 transition">Certificates</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 border border-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-blue-400/20 rounded-full animate-spin duration-[15000ms]"></div>
        </div>
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
              SOC Analyst • Network Security Engineer
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Mostafa <br />
              <span className="text-cyan-400">Boghdady</span>
            </h1>

            <div className="text-cyan-400 text-2xl font-semibold mb-6 h-14">
              <TypeAnimation
                sequence={[
                  'SOC Analyst',
                  1500,
                  'Threat Hunter',
                  1500,
                  'Blue Team Specialist',
                  1500,
                  'Network Security Engineer',
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Entry-level SOC Analyst with hands-on experience in threat detection,
              network security, incident response, and Linux administration.
              Passionate about building secure infrastructures and defending digital environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/assets/cv.pdf"
                className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-cyan-400/40 hover:bg-cyan-400/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full group-hover:scale-110 transition duration-500"></div>

              <img
                src="/profile.png"
                alt="Mostafa"
                className="relative w-[350px] h-[450px] object-cover rounded-[40px] border border-cyan-400/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <p className="text-gray-300 leading-8">
                I specialize in security monitoring, incident investigation, and network defense.
                I have practical experience with Linux, firewall configuration, log analysis,
                and attack simulation labs. My goal is to join a professional SOC environment
                where I can grow as a Blue Team specialist.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="space-y-4 text-gray-300">
                <p><span className="text-cyan-400">Experience:</span> IT Engineer at Click Solutions</p>
                <p><span className="text-cyan-400">Education:</span> B.Sc. Computer Science</p>
                <p><span className="text-cyan-400">Focus:</span> SOC Analysis & Blue Teaming</p>
                <p><span className="text-cyan-400">Location:</span> Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-white/[0.02] relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.3),transparent_60%)]"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-cyan-400">Technical Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black/40 border border-cyan-400/20 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="font-semibold text-gray-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-cyan-400">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-gray-400 leading-7 mb-4">
                    {project.desc}
                  </p>

                  <div className="text-cyan-400 text-sm mb-6">
                    {project.tech}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold"
                    >
                      Live Demo
                    </a>

                    <a
                      href="#"
                      className="px-4 py-2 rounded-xl border border-cyan-400/30"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certs" className="py-28 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-cyan-400">Certificates</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-black/50 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-semibold">{cert.title}</h3>

                  <button className="text-cyan-400 hover:text-cyan-300">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6 backdrop-blur-xl">
              <FaShieldAlt className="text-cyan-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Threat Detection</h3>
              <p className="text-gray-400">
                Monitoring suspicious activities and identifying security threats.
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6 backdrop-blur-xl">
              <FaServer className="text-cyan-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Infrastructure Security</h3>
              <p className="text-gray-400">
                Hardening systems and securing enterprise environments.
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6 backdrop-blur-xl">
              <FaNetworkWired className="text-cyan-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Network Monitoring</h3>
              <p className="text-gray-400">
                Analyzing traffic and investigating anomalies.
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">SOC Monitoring</h2>

          <div className="bg-black border border-cyan-400/30 rounded-3xl p-8 font-mono text-sm overflow-hidden shadow-2xl">
            <p className="text-green-400">[INFO] Monitoring network traffic...</p>
            <p className="text-yellow-400">[WARNING] Suspicious login detected...</p>
            <p className="text-red-400">[BLOCKED] Firewall blocked malicious IP...</p>
            <p className="text-cyan-400">[ACTIVE] SIEM alerts operational...</p>
            <p className="text-gray-500 mt-4">root@mostafa-soc:~$</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-cyan-400">
            Let's Work Together
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Interested in SOC analysis, cybersecurity operations, and network defense opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:mostafa10020038@gmail.com"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mostafa-boghdady-/"
              className="px-6 py-3 rounded-2xl border border-cyan-400/30"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="px-6 py-3 rounded-2xl border border-cyan-400/30"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
