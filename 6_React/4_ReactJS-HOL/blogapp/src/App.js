import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App" style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <h1>Blog Application</h1>
      <Posts />
    </div>
  );
}

export default App;