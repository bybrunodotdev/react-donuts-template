import React from 'react';
import { File } from 'react-kawaii';

import { Container } from './styles';

export default function Error404() {
  return (
    <Container>
      <File size={400} mood="ko" color="#ffa5b6" />
      <h1>Oooh no! Page not Found</h1>
    </Container>
  );
}
