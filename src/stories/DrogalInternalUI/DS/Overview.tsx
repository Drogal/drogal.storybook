import React from 'react';
import './overview.css';
import { Button } from './Button/Button';

export const Overview: React.FC = () => {

  return (
    <article>

      <section className="storybook-page">
        <h2>OverView DS</h2>
        <p>
          <Button label="Button from Overview" />
        </p>

      </section>
    </article>
  );
};
