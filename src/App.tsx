import * as React from "react";
import "./App.css";

const Header = () => (
  <header>
    <h1>Tim Phillips</h1>
  </header>
);

function Main() {
  return (
    <main>
      <section id="profile">
        <h2>👦🏻 Profile</h2>
        <div className="content">
          <div className="content_item">
            <p>
              Full-stack software developer with a specialized interest in
              building intuitive and rich web applications.
            </p>
          </div>
        </div>
      </section>

      <section id="employment">
        <h2>👔 Employment</h2>
        <div className="content">
          <div className="content_item">
            <div className="content_header">
              <h3>Pandell</h3>
              <div className="meta">
                <p>Software Developer</p>
                <p>2013 - present</p>
              </div>
            </div>
            <p>
              Technical lead for the full rewrite of an industry-leading
              financial accounting software product.
            </p>
            <p className="detail">
              TypeScript, KnockoutJS, Razor, C#, .NET, SQL Server
            </p>
          </div>
          <div className="content_item">
            <div className="content_header">
              <h3>Haemonetics</h3>
              <div className="meta">
                <p>Systems Analyst (Internship)</p>
                <p>2011 - 2012</p>
              </div>
            </div>
            <p>
              Design and development of a new web application for plasma donor
              management.
            </p>
            <p className="detail">
              JavaScript, JSP, Java EE, NHibernate, Oracle
            </p>
          </div>
        </div>
      </section>

      <section id="education">
        <h2>👨🏻‍🎓 Education</h2>
        <div className="content">
          <div className="content_item">
            <div className="content_header">
              <h3>BSc - University of Alberta</h3>
              <div className="meta">
                <p>2008 - 2012</p>
              </div>
            </div>
            <p>Computer Science, with Distinction</p>
            <p>Specialization in Bioinformatics 🌿</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      Tim Phillips 2018
      <br />
      Edinburgh, Scotland
    </footer>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
