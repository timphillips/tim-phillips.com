import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { light } from "../assets/theme";
import styled from "styled-components";

const Title = styled.h1`
  margin: 40px 0 0 0;
  color: ${props => props.theme.color.main};
  font-size: 75px;
  text-shadow: ${props => (props.theme === light ? "2px 2px #999" : undefined)};
`;

const Subtitle = styled.h2`
  margin: 20px 0 0 0;
  color: ${props => props.theme.color.main};
  font-size: 30px;
  font-weight: 400;
`;

const HomePage = ({ location }) => (
  <Layout location={location} initialBackground={location.state.background}>
    <SEO title="Home" />
    <Title>Tim Phillips</Title>
    <Subtitle>full stack software developer</Subtitle>
  </Layout>
);

export default HomePage;
