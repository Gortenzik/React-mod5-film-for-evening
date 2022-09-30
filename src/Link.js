import { useState } from 'react';
import { data } from './data';


function Link() {

const [film, setFilm] = useState(0);
const {id, name, description, image} = data[film];
// console.log(data[film]);

const [showText, setShowText] = useState(false);


const previousFilm = () => {
    setFilm((film) => {
        film --;
            if (film < 0) {
            return data.length-1;
        }
    return film;
})
}

const nextFilm = () => {
    setFilm((film) => {
    film ++;
    if (film > data.length-1) {
        film = 0;
    }
    return film;
})
}

    return (
    <div>
        <div className='container'>
            <h1> Фильмы для вечернего просмотра</h1>
        </div>

        <div>
            <div className='container'>
                <h2>{id}. {name}</h2>
            </div>

            <div className='container '>
                <p>{showText ? description : description.substring(0, 220) + '...'}
                    <button className='btnShow' onClick={() => setShowText(!showText)}>{showText ? 'Меньше' : 'Больше'}</button>
                </p>
            </div>

            <div className='container'>
                <img src={image} width="350px" alt=""/>
            </div>

            <div className='btn container'>
                <button onClick={previousFilm}>Назад</button>
                <button onClick={nextFilm}>Вперед</button>
            </div>

        </div>

    </div>
  );
}

export default Link;
