import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DonutMaker from '@site/src/components/Donuts';

import styles from './index.module.css';
import { Alert, Container } from 'react-infima';
import Row from '@site/src/components/Row';

function ContentHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">What's this!?</h1>
        <p className="hero__subtitle">A secret page?</p>
      </div>
    </header>
  );
}

export default function Donuts() {
  return (
    <Layout
      title={`Hello`}
      description="Quality Coach based in Melbourne, Australia. Shift-Left Advocate.">

      <main>
        <Container>
                <Alert theme='success'>Please note! I am still under development!</Alert>
        </Container>
      </main>
    </Layout>
  );
}
