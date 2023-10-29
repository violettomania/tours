function Tour() {
  return (
    <article className='single-tour'>
      <img
        src='https://www.course-api.com/images/tours/tour-1.jpeg'
        alt='Best of Paris in 7 Days Tour'
        className='img'
      ></img>
      <span className='tour-price'></span>
      <div className='tour-info'>
        <h3>card title</h3>
        <p>
          Lorem ipsum...
          <button className='info-btn'>read more</button>
        </p>
        <button className='delete-btn btn-block btn'>not interested</button>
      </div>
    </article>
  );
}

export default Tour;
