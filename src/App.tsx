import { useEffect, useState } from 'react';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState<SingleTour[]>();

  const fetchTours = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((error) => console.error(error));
  };

  const handleRefresh = () => {
    fetchTours();
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemoveTour = (id: string) => {
    const filteredTours = tours?.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='title-underline'></div>
        </div>
        <div className='tours'>
          {tours?.length === 0 ? (
            <>
              <p>No tours available.</p>
              <button className='btn-block btn' onClick={handleRefresh}>
                refresh
              </button>
            </>
          ) : (
            tours?.map((tour) => (
              <Tour key={tour.id} tour={tour} onRemoveTour={handleRemoveTour} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
