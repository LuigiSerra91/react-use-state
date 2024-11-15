import { useState } from 'react'
import data from './data/languages.js'



const App = () => {
  // Stato per il linguaggio selezionato
  const [active, setActive] = useState(data[0]);

  // Funzione per gestire il click sui bottoni
  const handleClick = (post) => {
    setActive(post);
  };

  return (
    <div>
      <h1>Learn Web development</h1>
      
      {/* Lista di bottoni per ogni linguaggio */}
      <div>
        {data.map((post) => (
          
            <button className='btn' key={post.id} onClick={() => handleClick(post)}>
            {post.title}
          </button>
          
          
        ))}
      </div>

      {/* Card con il linguaggio selezionato */}
      <div className='card'>
        <h2>{active.title}</h2>
        <p>{active.description}</p>
      </div>
    </div>
  );
}


export default App
