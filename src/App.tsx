import Tour from './Tour';

function App() {
  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>
        <div className='tours'>
          <Tour />
        </div>
      </section>
    </main>
  );
}

export default App;
