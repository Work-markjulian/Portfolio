import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="app">

      {/* NAV */}
      <nav className="nav">
        <h2 className="logo">MJ</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1 className="title">
          <span className="gradient">Mark Julian</span><br />
          Landayan
        </h1>

        <p className="subtitle">
          Simple. Clean. Professional.
        </p>

        <div className="buttons">
          <a href="mailto:landayanmarkj@gmail.com" className="btn primary">
            Contact Me
          </a>

          <a href="tel:+639760923948" className="btn secondary">
            Call
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="card reveal">
        <h2>About</h2>
        <p>
          Detail-oriented and adaptable individual with experience in administrative tasks,
          data handling, and modern digital tools.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="grid">
        <div className="card reveal">
          <h3>Core Skills</h3>
          <ul>
            <li>Data Entry</li>
            <li>Communication</li>
            <li>Teamwork</li>
          </ul>
        </div>

        <div className="card reveal">
          <h3>Tech Skills</h3>
          <ul>
            <li>Microsoft Office</li>
            <li>Google Workspace</li>
            <li>Canva</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="card reveal">
        <h2>Contact</h2>
        <p><a href="mailto:landayanmarkj@gmail.com">Email</a></p>
        <p><a href="tel:+639760923948">Phone</a></p>
      </section>

      <footer className="footer">
        <p>© 2026 Portfolio</p>
      </footer>

    </div>
  );
}
