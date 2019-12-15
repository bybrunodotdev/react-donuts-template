import React from 'react';
import logo from '@/assets/images/logo.svg';

import { Container, Header, DonutLogo, Link, ContainerCode } from './styles';

export default function DeliciousHome() {
  return (
    <Container>
      <Header>
        <DonutLogo src={logo} alt="Donut Logo" />
        <p>Welcome to the delicious donut template</p>
        <span>Use superdonut and give your donut with super powers</span>

        <ContainerCode>
          <p>
            Configure Eslint: <code>yarn run superdonut configure:eslint</code>
          </p>
          <p>
            Generate Component:{' '}
            <code>yarn run superdonut generate:component</code>
          </p>
        </ContainerCode>
        <Link
          href="https://github.com/heybrunoandrade/react-donuts-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Link>
      </Header>
    </Container>
  );
}
