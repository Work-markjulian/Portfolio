import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const reveal = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    reveal.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="app">

      <nav className="nav">
        <h2 className="logo">MJ</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1 className="title">
          <span className="gradient">Mark Julian</span><br />
          Landayan
        </h1>

        <p className="subtitle">
          Premium Portfolio • Modern UI • Fast Learner
        </p>

        <div className="buttons">
          <a href="mailto:landayanmarkj@gmail.com" className="btn">
            Email Me
          </a>
          <a href="tel:+639760923948" className="btn outline">
            Call Me
          </a>
        </div>
      </section>

      <section id="about" className="card reveal">
        <h2>About</h2>
        <p>
          Motivated individual with strong attention to detail, adaptability,
          and experience in administrative and digital tools.
        </p>
      </section>

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
            <li>MS Office</li>
            <li>Google Workspace</li>
            <li>Canva</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="card reveal">
        <h2>Contact</h2>
        <p><a href="mailto:landayanmarkj@gmail.com">📧 Email</a></p>
        <p><a href="tel:+639760923948">📞 Phone</a></p>
        <p>📍 Malolos City, Bulacan</p>
      </section>

      <footer className="footer">
        <p>© 2026 Portfolio</p>
      </footer>

    </div>
  );
}
