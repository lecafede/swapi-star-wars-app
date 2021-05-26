import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));




// const swapi = new SwapiService(); // Создали new SwapiService() чтобы вытаскивать данные из класса

//   swapi.getPerson(3).then((p) => {
//     console.log(p.name)
// })


// fetch - Возвращает промисы когда выоплнится promise мы получим тот самый обьект response

// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     return res.json(); // Получаем результат
    
//   })

//   .then((body) => {
//     console.log(body); // Вытаскиваем тело
//   });
