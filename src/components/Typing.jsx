import React from 'react'

import Typed from 'typed.js';


function Typing() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Init[] Association', 'Test text'],
        typeSpeed: 50,
        fadeOut: true,
        loop: true
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <h1 className='text-center text-3xl'>
        <span ref={el} />
      </h1>
    );
}


export default Typing