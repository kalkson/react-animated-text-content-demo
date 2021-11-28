import { useEffect, useState } from 'react';
import AnimatedText from 'react-animated-text-content';

const ShowcaseItem = ({ children, ...props }) => {
  const [shouldRerender, setShouldRerender] = useState(false);

  useEffect(() => {}, [shouldRerender]);

  const handleClick = () => {
    setShouldRerender(!shouldRerender);
  };

  return (
    <div className='item__content'>
      {props.animationType && <span>animationType: {props.animationType}</span>}
      {props.type && <span>type: {props.type}</span>}
      <button onClick={handleClick}>Rerun</button>
      <AnimatedText
        style={{ fontSize: '2rem' }}
        className='item__text'
        rootMargin='0px'
        {...props}
      >
        {children}
      </AnimatedText>
    </div>
  );
};

export default ShowcaseItem;
