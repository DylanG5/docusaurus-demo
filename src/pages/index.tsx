import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
  return (
    <Layout
      title="McMaster Exoskeleton"
      description="Empowering Mobility with Robotics"
    >
      <main style={{ textAlign: "center", marginTop: "3rem" }}>
        <img
          src="/img/exo_white_scalable.svg"
          alt="McMaster Exoskeleton Logo"
          style={{ width: 200 }}
        />
        <h1>McMaster Exoskeleton</h1>
        <p>Empowering Mobility with Robotics</p>
        <div style={{ marginTop: "2rem" }}>
          <a className="button button--primary" href="/intro">
            Get Started
          </a>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
