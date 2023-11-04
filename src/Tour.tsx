import { useState } from 'react';

const MORE_BTN_TEXT = 'read more';
const LESS_BTN_TEXT = 'show less';

type ButtonText = typeof MORE_BTN_TEXT | typeof LESS_BTN_TEXT;

interface TourState {
  displayedInfo: string;
  buttonText: ButtonText;
}

interface Props {
  tour: SingleTour;
  onRemoveTour: (id: string) => void;
}

const truncateText = (text: string, length: number) => {
  return text.length <= length ? text : `${text.slice(0, length)}...`;
};

export default function Tour({ tour, onRemoveTour }: Props) {
  const { name, image, info: fullInfo, price } = tour;
  const truncatedInfo = truncateText(fullInfo, 300);
  const displayButton = fullInfo !== truncatedInfo;

  const [state, setState] = useState<TourState>({
    displayedInfo: truncatedInfo,
    buttonText: MORE_BTN_TEXT,
  });

  const handleChangeButtonText = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const changedInfo =
      state.displayedInfo === fullInfo ? truncatedInfo : fullInfo;
    const btnText =
      state.buttonText === MORE_BTN_TEXT ? LESS_BTN_TEXT : MORE_BTN_TEXT;
    setState({ displayedInfo: changedInfo, buttonText: btnText });
  };

  const handleRemoveTour = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onRemoveTour(tour.id);
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img'></img>
      <span className='tour-price'>{`$${price}`}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {state.displayedInfo}
          {displayButton && (
            <button className='info-btn' onClick={handleChangeButtonText}>
              {`\xa0${state.buttonText}`}
            </button>
          )}
        </p>
        <button className='delete-btn btn-block btn' onClick={handleRemoveTour}>
          not interested
        </button>
      </div>
    </article>
  );
}
