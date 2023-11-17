import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Results from './Components/Results/Results';
import NewPlaylist from './Components/NewPlaylist/NewPlaylist';
import Track from './Components/Track/Track';
import Tracklist from './Components/TrackList/Tracklist';

function App() {
  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <SearchBar />
      <div className='ResultsAndPlaylist'>
        <Results />
        <NewPlaylist />
      </div>

      <Track />
      <Tracklist />
    </>
  );
}

export default App;
