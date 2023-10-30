import { SingleTour } from './App';

function Tour({ image, info, name, price }: SingleTour) {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img'></img>
      <span className='tour-price'>{`$${price}`}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {info}
          <button className='info-btn'>...read more</button>
        </p>
        <button className='delete-btn btn-block btn'>not interested</button>
      </div>
    </article>
  );
}

export default Tour;
