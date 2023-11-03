import { useEffect, useState } from 'react';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project';

export interface SingleTour {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
}

function App() {
  const [tours, setTours] = useState<SingleTour[]>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='title-underline'></div>
        </div>
        <div className='tours'>
          {tours?.length === 0 ? (
            <p>no tours available</p>
          ) : (
            tours?.map((tour) => <Tour key={tour.id} {...tour} />)
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
