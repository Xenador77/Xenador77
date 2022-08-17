import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

<script
  src="https://platform.linkedin.com/badges/js/profile.js"
  async
  defer
  type="text/javascript"
></script>;

<div
  class="badge-base LI-profile-badge"
  data-locale="en_US"
  data-size="medium"
  data-theme="dark"
  data-type="VERTICAL"
  data-vanity="hermes77"
  data-version="v1"
>
  <a
    class="badge-base__link LI-simple-link"
    href="https://www.linkedin.com/in/hermes77?trk=profile-badge"
  >
    River Saxton
  </a>
</div>;

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
