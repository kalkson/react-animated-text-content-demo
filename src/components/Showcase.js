import ShowcaseItem from './ShowcaseItem';

const Showcase = () => {
  return (
    <div className='main showcase'>
      <ShowcaseItem animationType='bounce' tag='h1' type='chars'>
        react-animated-text-content
      </ShowcaseItem>
      <ShowcaseItem animationType='blocks' type='words' duration={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut excepturi
        iusto harum dignissimos laborum enim praesentium non aspernatur eveniet.
      </ShowcaseItem>
      <ShowcaseItem
        animationType='rifle'
        type='chars'
        style={{ fontSize: '30px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora
        recusandae mollitia et quam esse, cumque expedita repudiandae vero
        perspiciatis!
      </ShowcaseItem>
      <ShowcaseItem
        animationType='wave'
        type='chars'
        style={{ fontSize: '30px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora
        recusandae mollitia et quam esse, cumque expedita repudiandae vero
        perspiciatis!
      </ShowcaseItem>
      <ShowcaseItem
        animationType='float'
        type='words'
        style={{ fontSize: '30px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora
        recusandae mollitia et quam esse, cumque expedita repudiandae vero
        perspiciatis!
      </ShowcaseItem>
      <ShowcaseItem
        animationType='throw'
        type='words'
        style={{ fontSize: '30px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora
        recusandae mollitia et quam esse, cumque expedita repudiandae vero
        perspiciatis!
      </ShowcaseItem>
      <ShowcaseItem
        animationType='diagonal'
        type='chars'
        style={{ fontSize: '30px' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora
        recusandae mollitia et quam esse, cumque expedita repudiandae vero
        perspiciatis!
      </ShowcaseItem>
      <ShowcaseItem
        animationType='lights'
        type='words'
        style={{ fontSize: '30px' }}
        duration={0.7}
        interval={0.5}
      >
        Compose your own animation in generator!
      </ShowcaseItem>
    </div>
  );
};

export default Showcase;
