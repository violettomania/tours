import { useState } from 'react';
import { SingleTour } from './App';

const MORE_BTN_TEXT = 'read more';
const LESS_BTN_TEXT = 'show less';

type ButtonText = typeof MORE_BTN_TEXT | typeof LESS_BTN_TEXT;

const truncateText = (text: string, length: number) => {
  return text.length <= length ? text : `${text.slice(0, length)}...`;
};

function Tour({ image, info: fullInfo, name, price }: SingleTour) {
  const truncatedInfo = truncateText(fullInfo, 500);
  const [displayedInfo, setDisplayedInfo] = useState(truncatedInfo);
  const [buttonText, setButtonText] = useState<ButtonText>(MORE_BTN_TEXT);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplayedInfo((currentInfo) =>
      currentInfo === fullInfo ? truncatedInfo : fullInfo
    );
    setButtonText(displayedInfo === fullInfo ? MORE_BTN_TEXT : LESS_BTN_TEXT);
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img'></img>
      <span className='tour-price'>{`$${price}`}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {`\xa0${displayedInfo}`}
          <button className='info-btn' onClick={handleClick}>
            {buttonText}
          </button>
        </p>
        <button className='delete-btn btn-block btn'>not interested</button>
      </div>
    </article>
  );
}

export default Tour;
