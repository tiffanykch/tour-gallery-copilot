import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]); // Stores fetched tours
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Tracks error state

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Handle fetch error
        }
        const data = await response.json();
        setTours(data); // Set tours data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchTours();
  }, []); // Fetch tours on component mount

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Remove tour by ID
  };

  // Show loading message while fetching data
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Show error message if fetch fails
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Show "Refresh" button if no tours are left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={() => window.location.reload()} className="refresh-btn">
          Refresh
        </button>
      </div>
    );
  }

  // Render Gallery with tours data
  return (
    <div>
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;
