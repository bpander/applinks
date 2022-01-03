import Link from 'next/link';
import React from 'react';

const Inner: React.FC = () => {
  console.log('render Inner');
  return (
    <div>
      <h1>Inner</h1>
      <Link href="/success">Success</Link>
    </div>
  )
};

export default Inner;
