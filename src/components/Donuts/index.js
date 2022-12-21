import React from 'react';
import { Card, Container } from 'react-infima';
import Row from '../Row';
import clsx from 'clsx';

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

function MakeCard({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <Card>
        <Card.Header>
          <h3>Hello</h3>
        </Card.Header>
        <Card.Body>
          <p>Donuts</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default function DonutMaker() {
  return (
          FeatureList.map((props, idx) => (
            <MakeCard key={idx} {...props} />
          ))
  );
}
