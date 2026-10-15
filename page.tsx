const skills = ["HTML & CSS", "JavaScript", "Next.js", "Networking", "Database Management"];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#home">jf<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, WELCOME TO MY PROFILE</p>
          <h1>Hi, I’m <span>Jharyll</span> Fuertes.</h1>
          <h2>A college student and an aspiring programmer.</h2>
          <p className="intro">
            I’m passionate about learning technology and creating simple projects.
            I want to keep improving my skills and learn how technology can help
            solve everyday problems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View My Projects</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="flower-card" aria-label="Decorative flower illustration">
          <div className="sun"></div>
          <div className="flower flower-one"><i></i><i></i><i></i><i></i><i></i><i></i><b></b></div>
          <div className="flower flower-two"><i></i><i></i><i></i><i></i><i></i><i></i><b></b></div>
          <div className="stem stem-one"></div>
          <div className="stem stem-two"></div>
          <div className="leaf leaf-one"></div>
          <div className="leaf leaf-two"></div>
          <div className="leaf leaf-three"></div>
          <p>growing, learning<br />and creating ✿</p>
        </div>
        <a className="scroll-note" href="#about">SCROLL TO EXPLORE ↓</a>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Learning one step at a time.</h2>
        </div>
        <div className="about-grid">
          <div className="about-mark">✿</div>
          <div>
            <p>
              I am a third-year Bachelor of Science in Information Technology
              student majoring in Network and Data Management at Nueva Vizcaya
              State University. I enjoy learning about programming, networking,
              and database management.
            </p>
            <p>
              I may still be learning, but I am hardworking and willing to
              practice, explore new ideas, and improve my skills through projects
              and experience.
            </p>
            <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">MY EDUCATION</p>
          <h2>Where I’m learning.</h2>
        </div>
        <article className="education-card">
          <div className="education-icon">✧</div>
          <div>
            <p className="card-label">CURRENTLY STUDYING</p>
            <h3>Nueva Vizcaya State University</h3>
            <p>Bachelor of Science in Information Technology</p>
            <p className="muted">Major in Network and Data Management (NDM)</p>
            <span className="tag">Third Year · Section 3A</span>
          </div>
        </article>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">WHAT I’M WORKING ON</p>
          <h2>My project.</h2>
          <p className="section-description">A school project focused on making computer laboratory monitoring more organized.</p>
        </div>
        <article className="project-card">
          <div className="project-art">
            <div className="monitor"><div className="monitor-screen"><span>CRS</span><small>Computer Registration</small><div className="screen-lines"></div></div><div className="monitor-neck"></div><div className="monitor-base"></div></div>
            <span className="spark spark-a">✦</span><span className="spark spark-b">✧</span>
          </div>
          <div className="project-content">
            <p className="card-label">SYSTEM DEVELOPMENT PROJECT</p>
            <h3>Computer Registration System</h3>
            <p>
              The proposed system will allow students to register using their
              Student ID and record their time-in and time-out. It is intended
              to help track computer usage and make laboratory monitoring more
              organized.
            </p>
            <div className="skill-list"><span>Next.js</span><span>CSS</span><span>System Proposal</span></div>
            <p className="project-status">Status: In progress</p>
          </div>
        </article>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-panel">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Thanks for visiting!</h2>
          <p>I’m always willing to learn, connect, and improve. Feel free to reach out.</p>
          <a className="button primary" href="mailto:your-email@gmail.com">Send Me an Email</a>
          <p className="email-note">Replace <strong>your-email@gmail.com</strong> in the code with your email address.</p>
        </div>
      </section>

      <footer>
        <a className="logo" href="#home">jf<span>.</span></a>
        <p>Made with care by Jharyll Fuertes · 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
