import { useCallback, useEffect, useState } from 'react';
import Tour from './Tour';
import LoadingSpinner from './LoadingSpinner';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState<SingleTour[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchTours = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: SingleTour[]) => {
        setLoading(false);
        setTours(data);
        if (error) setError(false);
      })
      .catch(() => setError(true));
  }, [error]);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  const handleRefresh = () => {
    setLoading(true);
    fetchTours();
  };

  const handleRemoveTour = (id: string) => {
    setTours((prevTours) => prevTours?.filter((tour) => tour.id !== id));
  };

  const renderNoTours = () => {
    return (
      <>
        <p>No tours available.</p>
        <button className='btn-block btn' onClick={handleRefresh}>
          refresh
        </button>
      </>
    );
  };

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='title-underline'></div>
        </div>
        <div className='tours'>
          {loading && <LoadingSpinner />}
          {error ? (
            <p>There was an error fetching the tours.</p>
          ) : tours?.length === 0 ? (
            renderNoTours()
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
