import { Panel, PanelLeft } from "../components/Panel";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";

const AboutPage = ({ location }) => {
  return (
    <Layout location={location} theme="dark">
      <SEO title="About" />
      <Panel>
        <PanelLeft>
          <p>
            <b>Hello.</b> I'm a <b>full stack software developer</b>{" "}
            specializing in the construction of <b>enterprise-grade</b> web
            applications.
          </p>
          <p>Blah blah blah</p>
          <p>
            Currently, I'm working as a senior developer on the{" "}
            <b>Executive Tools</b> team at{" "}
            <a href="https://www.pandell.com">Pandell</a>. Prior to that, I
            spent a number of years as the technical lead for Pandell's flagship
            accounting product, <a href="Pandell JV">Pandell JV</a>.
          </p>
          <p>I'm based in Edinburgh, Scotland.</p>
        </PanelLeft>
      </Panel>
    </Layout>
  );
};

export default AboutPage;
