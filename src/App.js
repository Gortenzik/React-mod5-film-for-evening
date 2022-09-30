import { useState } from 'react';
import { data } from './data';
import './App.css';
import Link from './Link';


function App() {

const [move, setMove] = useState(data);
// console.log(data);

const removeFilm = (id) => {
  // console.log(id);
    let newFilm = move.filter(filmName => filmName.id !== id);
    console.log(newFilm);
    setMove(newFilm);
}

  return (
    <div>

        <div className='container'>
            <Link/>
        </div>

        <div className='container'>
            <h2>Осталось посмотреть {move.length} фильмов:</h2>
        </div>

    {move.map((mean => {
        const {id, nameCinema} = mean;
  

        return (
            <div key={id}>

    <div className='row'>
        <div className='row'>
            <p>{nameCinema}</p>
        </div>

        <div className='row'>
            <button className='btn' onClick={() => removeFilm(id)}>Удалить</button>
        </div>
    </div>

            </div>
        )

        }))} 
        

            <div className='container'>
              <button className='btn' onClick={() => {setMove([])}}>Удалить все</button>
            </div>

    </div>
  );
}

export default App;
