import React from 'react'
import Marquee from "react-fast-marquee";
export default function Header() {
  return (
    <div>
      <div className='bg-blue-400 text-white text-xl font-bold p-2'>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
}
