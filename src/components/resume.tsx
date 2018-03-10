import * as React from "react";

import { Footer } from "./common";

export const Resume = () => (
  <div className="resume">
    <ResumeContent />
    <Footer />
  </div>
);

const ResumeSection = props => (
  <section className="resume__section">
    <h2 className="resume__sectionTitle">{props.title}</h2>
    <div className="resume__sectionContent">{props.children}</div>
  </section>
);

const ResumeContentItem = props => (
  <div className="resume__contentItem">{props.children}</div>
);

const ResumeContentItemHeader = props => (
  <div className="resume__contentItemHeader">
    <h3 className="resume__contentItemHeaderTitle">{props.title}</h3>
    <div className="resume__contentItemHeaderSubtitle">
      <p>{props.subtitle}</p>
    </div>
  </div>
);

const ResumeContent = () => (
  <div>
    <ResumeSection title="👦🏻 Profile">
      <ResumeContentItem>
        <p>
          Full-stack software developer with a specialized interest in building
          intuitive and rich web applications.
        </p>
        <p>Currently based in Edinburgh, Scotland.</p>
      </ResumeContentItem>
    </ResumeSection>

    <ResumeSection title="👔 Employment">
      <ResumeContentItem>
        <ResumeContentItemHeader
          title="TDP Software"
          subtitle="2017 - present"
        />
        <p>Custom software development and consulting.</p>
      </ResumeContentItem>
      <ResumeContentItem>
        <ResumeContentItemHeader title="Pandell" subtitle="2013 - 2017" />
        <p>
          Technical lead for the full rewrite of an industry-leading financial
          accounting software product.
        </p>
        <p className="detail">
          TypeScript, KnockoutJS, Razor, C#, .NET, SQL Server
        </p>
      </ResumeContentItem>
      <ResumeContentItem>
        <ResumeContentItemHeader title="Haemonetics" subtitle="2011 - 2012" />
        <p>
          Design and development of a new web application for plasma donor
          management.
        </p>
        <p className="detail">JavaScript, JSP, Java EE, NHibernate, Oracle</p>
      </ResumeContentItem>
    </ResumeSection>

    <ResumeSection title="🎓 Education">
      <ResumeContentItem>
        <ResumeContentItemHeader
          title="BSc - University of Alberta"
          subtitle="2008 - 2012"
        />
        <p>Computer Science, with Distinction</p>
        <p>Specialization in Bioinformatics 🌿</p>
      </ResumeContentItem>
    </ResumeSection>
  </div>
);
