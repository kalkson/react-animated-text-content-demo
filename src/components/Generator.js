import { useState, useRef, useEffect } from 'react';
import AnimatedText from 'react-animated-text-content';

const RangeInput = ({ ...props }) => {
  const [value, setValue] = useState(props.defaultValue);

  useEffect(() => {
    setValue(props.defaultValue);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input onChange={handleChange} type='range' {...props} value={value} />{' '}
      <input
        type='number'
        step={props.step}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

const Generator = () => {
  const [formData, setFormData] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('asd');
    const formDataEvent = new FormData(event.target);

    let emptyFormData = {};

    for (var pair of formDataEvent.entries()) {
      emptyFormData = {
        ...emptyFormData,
        [pair[0]]: pair[1] === '' ? null : pair[1],
      };
    }

    console.log(emptyFormData);
    setFormData(emptyFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='generator' ref={formRef}>
        <textarea
          name='content'
          id='content'
          className='generator__content'
          cols='30'
          rows='10'
          defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, qui commodi? Quod aut nihil ipsa? Modi esse dicta neque nihil!'
        ></textarea>
        <input
          type='number'
          id='duration'
          name='duration'
          className='generator__duration'
          step={0.01}
          defaultValue={0.8}
        />
        <input
          type='number'
          id='interval'
          name='interval'
          className='generator__interval'
          step={0.01}
          defaultValue={0.04}
        />
        <input
          type='number'
          id='y'
          name='y'
          className='generator__y'
          min={-1000}
          max={1000}
          defaultValue={100}
        />
        <input
          type='number'
          id='x'
          name='x'
          className='generator__x'
          min={-1000}
          max={1000}
          defaultValue={0}
        />
        <RangeInput
          type='range'
          id='scale'
          name='scale'
          className='generator__scale'
          min={-10}
          max={10}
          defaultValue={1}
          step={0.01}
        />
        <input
          type='number'
          id='size'
          name='size'
          className='generator__size'
          min={1}
          max={200}
          defaultValue={32}
          step={0.1}
        />
        <select
          id='type'
          name='type'
          className='generator__type'
          min={1}
          max={200}
          step={0.1}
        >
          <option value='words' defaultValue>
            words
          </option>
          <option value='chars'>chars</option>
        </select>
        <select
          id='ease'
          name='ease'
          className='generator__ease'
          min={1}
          max={200}
          defaultValue={32}
          step={0.1}
        >
          <option value='ease' defaultValue>
            ease
          </option>
          <option value='ease-in'>ease-in</option>
          <option value='ease-in-out'>ease-in-out</option>
          <option value='linear'>linear</option>
        </select>
        <button type='submit'>Generate</button>
        {formData && (
          <AnimatedText
            className='generator__text'
            type={formData.type}
            interval={formData?.interval ?? 0.04}
            style={{ fontSize: `${formData?.size ?? 32}px` }}
            animation={{
              duration: formData?.duration ?? 0.04,
              x: `${formData?.x ?? 0}px`,
              y: `${formData?.y ?? 0}px`,
              ease: formData?.ease ?? 'ease-in-out',
              scale: formData?.scale ?? 1,
            }}
          >
            {formData.content || ''}
          </AnimatedText>
        )}
      </form>
    </>
  );
};

export default Generator;
