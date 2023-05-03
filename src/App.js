import './App.css';
import {useState} from "react";

function App() {
    const [data, setData] = useState([]);
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
        .then(res => res.json())
        .then(data => setData(data));


  return (
    <div className="App">
      <header className="App-header">
          <h1>NEWSSSSS</h1>
          <ul>
          {data.map(article => {
              return <li>{article.title}</li>
          })}
          </ul>
      </header>
    </div>
  );
}

export default App;
