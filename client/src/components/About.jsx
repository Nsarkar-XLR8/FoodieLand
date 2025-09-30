const About = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-4xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
          <p className="mt-2 text-gray-600">
            A quick introduction to who I am, what I do, and what drives me.
          </p>
        </header>

        {/* Content */}
        <div className="bg-gray-100 rounded-lg shadow-md p-8 space-y-6">
          <p className="text-lg leading-relaxed">
            Hi 👋, I’m <span className="font-semibold">Nayem Sarkar</span>, a
            passionate <span className="text-yellow-600 font-semibold">Junior Developer</span>{" "}
            currently pursuing my B.Sc. in Computer Science & Engineering at{" "}
            <span className="font-semibold">United International University</span>.
            I love building scalable, maintainable, and user‑friendly web
            applications that solve real‑world problems.
          </p>

          <p className="text-lg leading-relaxed">
            My core strengths lie in{" "}
            <span className="font-semibold">JavaScript, React, PHP, MySQL</span>,
            and modern frontend workflows with{" "}
            <span className="font-semibold">React Router</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>. On GitHub, I’ve
            worked on projects ranging from{" "}
            <span className="italic">Java algorithms</span> and{" "}
            <span className="italic">Python utilities</span> to{" "}
            <span className="italic">React dashboards</span> and{" "}
            <span className="italic">club management portals</span>.
          </p>

          <p className="text-lg leading-relaxed">
            Beyond coding, I’m meticulous about{" "}
            <span className="font-semibold">UI/UX consistency</span>, accessibility,
            and clean project structures. I enjoy collaborating on projects,
            iterating through feedback, and ensuring every component feels like
            part of a cohesive system.
          </p>

          <p className="text-lg leading-relaxed">
            Currently, I’m expanding my expertise by learning the{" "}
            <span className="font-semibold">MERN Stack (MongoDB, Express.js, React, Node.js)</span>,
            which allows me to build full‑stack applications with modern, scalable
            architectures. My future goal is to become a{" "}
            <span className="font-semibold">Software Engineer</span> who can design
            and deliver impactful solutions across the entire development lifecycle.
          </p>

          <p className="text-lg leading-relaxed">
            My long‑term vision is to build{" "}
            <span className="font-semibold">scalable platforms</span> that not only
            serve real users but can also be extended and maintained by other
            developers. I believe in writing code that lasts, not just code that
            works.
          </p>

          {/* Social Links */}
          <div className="pt-6 border-t border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/nayem-sarkar-8a84412a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Nsarkar-XLR8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.facebook.com/nayem.sarkar.752123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
