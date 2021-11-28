import { useState, useRef, useEffect } from 'react';
import AnimatedText from 'react-animated-text-content';
import SyntaxHighlighter from 'react-syntax-highlighter';

const RangeInput = ({ ...props }) => {
  const [value, setValue] = useState(props.defaultValue);

  useEffect(() => {
    setValue(props.defaultValue);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`${props.className} generator__range`}>
      <input
        type='range'
        onChange={handleChange}
        {...props}
        className=''
        value={value}
      />
      <input
        type='number'
        step={props.step}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

const Generator = () => {
  const [formData, setFormData] = useState(null);
  const [code, setCode] = useState(null);
  const [isCodeVisible, setCodeVisible] = useState(null);
  const formRef = useRef(null);

  const handleClick = () => {
    setCodeVisible(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataEvent = new FormData(event.target);
    setCodeVisible(false);

    let emptyFormData = {};

    for (var pair of formDataEvent.entries()) {
      emptyFormData = {
        ...emptyFormData,
        [pair[0]]: pair[1] === '' ? null : pair[1],
      };
    }

    console.log(emptyFormData);

    const generatedCode = `<AnimatedText
    type='${emptyFormData.type}'
    interval={${emptyFormData?.interval}}
    duration={${emptyFormData?.duration}}
    animation={{
      ${emptyFormData?.x !== '0' ? `x: '${emptyFormData.x}px',` : ''}
      ${emptyFormData?.y !== '0' ? `y: '${emptyFormData.y}px',` : ''}
      ${emptyFormData?.ease ? `ease: '${emptyFormData.ease}',` : ''}
      ${emptyFormData?.scale !== '1' ? `scale: ${emptyFormData.scale},` : ''}
    }}
  >
    Your content
</AnimatedText>`.replaceAll(/^\s*\n/gm, '');

    setCode(generatedCode);
    setFormData(emptyFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='generator' ref={formRef}>
        <label htmlFor='duration' className='generator__label'>
          duration
          <input
            type='number'
            id='duration'
            name='duration'
            className='generator__duration'
            step={0.01}
            defaultValue={0.8}
          />
        </label>
        <label htmlFor='interval' className='generator__label'>
          interval
          <input
            type='number'
            id='interval'
            name='interval'
            className='generator__interval'
            step={0.01}
            defaultValue={0.04}
          />
        </label>
        <label htmlFor='y' className='generator__label'>
          y
          <input
            type='number'
            id='y'
            name='y'
            className='generator__y'
            min={-1000}
            max={1000}
            defaultValue={100}
          />
        </label>
        <label htmlFor='x' className='generator__label'>
          x
          <input
            type='number'
            id='x'
            name='x'
            className='generator__x'
            min={-1000}
            max={1000}
            defaultValue={0}
          />
        </label>
        <label htmlFor='scale' className='generator__label'>
          scale
          <RangeInput
            id='scale'
            name='scale'
            className='generator__scale generator__range'
            min={-10}
            max={10}
            defaultValue={1}
            step={0.01}
          />
        </label>
        <label htmlFor='size' className='generator__label'>
          font size
          <RangeInput
            id='size'
            name='size'
            className='generator__size'
            min={1}
            max={200}
            defaultValue={32}
            step={0.1}
          />
        </label>
        <label htmlFor='type' className='generator__label'>
          type
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
        </label>
        <label htmlFor='ease' className='generator__label'>
          ease
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
            <option value='ease-out'>ease-out</option>
            <option value='ease-in-out'>ease-in-out</option>
            <option value='linear'>linear</option>
          </select>
        </label>
        <label htmlFor='content' className='generator__label'>
          content
          <textarea
            name='content'
            id='content'
            className='generator__content'
            defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, qui commodi? Quod aut nihil ipsa? Modi esse dicta neque nihil!'
          ></textarea>
        </label>
        <button type='submit'>Generate</button>
        <button type='button' onClick={handleClick}>
          Get code
        </button>
      </form>
      {isCodeVisible && code && (
        <SyntaxHighlighter language='jsx'>{code}</SyntaxHighlighter>
      )}
      {formData && (
        <AnimatedText
          className='generator__text'
          type={formData.type}
          interval={formData?.interval ?? 0.04}
          style={{ fontSize: `${formData?.size ?? 32}px` }}
          duration={formData?.duration}
          animation={{
            x: `${formData?.x ?? 0}px`,
            y: `${formData?.y ?? 0}px`,
            ease: formData?.ease ?? 'ease-in-out',
            scale: formData?.scale ?? 1,
          }}
        >
          {formData.content || ''}
        </AnimatedText>
      )}
    </>
  );
};

export default Generator;
