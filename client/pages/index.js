import React, { useRef } from 'react'

import HtmlHead from '../src/components/HtmlHead';
import App from '../src/components/App';

import '../assets/styles/sass/custom.scss';

const Index = () => {
  const htmlHead = useRef();
  console.log('htmlHead: ', htmlHead);
  return (
    <div>
      <HtmlHead />
      <App />
    </div>
  );
};

export default Index;
