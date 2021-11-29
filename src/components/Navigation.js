import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

const Navigation = () => {
  const dotRef = useRef(null);

  const handleClick = (event) => {
    const { left, width } = event.target.getBoundingClientRect();

    dotRef.current.style.left = `${left + width / 2 - 5}px`;
  };

  return (
    <nav className='nav'>
      <div className='dot' ref={dotRef} />
      <NavLink onClick={handleClick} to='react-animated-text-content-demo'>
        Showcase
      </NavLink>
      <NavLink
        onClick={handleClick}
        to='react-animated-text-content-demo/#/generator'
      >
        Generator
      </NavLink>
    </nav>
  );
};

export default Navigation;
