import * as React from "react";

import { Footer } from "./common";

export const Resume = () => (
  <div>
    <ResumeContent />
    <Footer />
  </div>
);

const ResumeContent = () => (
  <div>
    <section className="resume__section">
      <h2>👦🏻 Profile</h2>
      <div className="content">
        <div className="content_item">
          <p>
            Full-stack software developer with a specialized interest in
            building intuitive and rich web applications.
          </p>
          <p>Currently based in Edinburgh, Scotland.</p>
        </div>
      </div>
    </section>

    <section className="resume__section">
      <h2>👔 Employment</h2>
      <div className="content">
        <div className="content_item">
          <div className="content_header">
            <h3>TDP Software</h3>
            <div className="meta">
              <p>Software Developer (Contractor)</p>
              <p>2017 - present</p>
            </div>
          </div>
          <p>Custom software development and consulting.</p>
        </div>
        <div className="content_item">
          <div className="content_header">
            <h3>Pandell</h3>
            <div className="meta">
              <p>Software Developer</p>
              <p>2013 - 2017</p>
            </div>
          </div>
          <p>
            Technical lead for the full rewrite of an industry-leading financial
            accounting software product.
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
          <p className="detail">JavaScript, JSP, Java EE, NHibernate, Oracle</p>
        </div>
      </div>
    </section>

    <section className="resume__section">
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
  </div>
);
