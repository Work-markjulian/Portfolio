export default function App() {
  return (
    <div className="container">
      
      <nav className="nav">
        <h2>Portfolio</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1 className="fade-in">MARK JULIAN B. LANDAYAN</h1>
        <p className="fade-in delay">
          Modern Portfolio • Clean Design • Fast Learner
        </p>

        <div className="buttons">
          <a href="mailto:landayanmarkj@gmail.com" className="btn">
            Email Me
          </a>
          <a href="tel:+639760923948" className="btn outline">
            Call Me
          </a>
        </div>
      </header>

      <section id="about" className="card fade-in">
        <h2>About Me</h2>
        <p>
          Motivated and reliable individual with strong foundation in administrative work,
          data handling, and digital tools. Fast learner and adaptable to new environments.
        </p>
      </section>

      <section id="skills" className="grid">
        <div className="card fade-in">
          <h3>Core Skills</h3>
          <ul>
            <li>Data Entry</li>
            <li>File Management</li>
            <li>Communication</li>
            <li>Teamwork</li>
          </ul>
        </div>

        <div className="card fade-in delay">
          <h3>Tech Skills</h3>
          <ul>
            <li>MS Office</li>
            <li>Google Workspace</li>
            <li>Canva</li>
            <li>Zoom</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="card fade-in">
        <h2>Contact</h2>
        <p>
          📧 <a href="mailto:landayanmarkj@gmail.com">landayanmarkj@gmail.com</a>
        </p>
        <p>
          📞 <a href="tel:+639760923948">+63 976 092 3948</a>
        </p>
        <p>📍 Malolos City, Bulacan</p>
      </section>

      <footer className="footer fade-in">
        <p>© 2026 Your Portfolio</p>
      </footer>

    </div>
  );
}
