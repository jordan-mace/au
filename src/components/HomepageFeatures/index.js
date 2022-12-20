import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Achiever',
    Svg: require('@site/static/img/undraw_code_review.svg').default,
    description: (
      <>
        With extensive experience implementing frameworks such as Selenium, Cypress and Playwright in a range of scenarios,
        I have a deep understanding of the latest automation tooling.
      </>
    ),
  },
  {
    title: 'Developer Acceleration',
    Svg: require('@site/static/img/undraw_dev_productivity.svg').default,
    description: (
      <>
        I continuously look for improvements, and not just in code.
        I look at improving broader concerns like developer efficiency or robustness of CI/CD pipelines.
      </>
    ),
  },
  {
    title: 'Automation Coach',
    Svg: require('@site/static/img/undraw_grid_design.svg').default,
    description: (
      <>
        With experience teaching automation to audiences of varying technical ability, 
        I am well positioned to upskill teams on automation fundamentals.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
