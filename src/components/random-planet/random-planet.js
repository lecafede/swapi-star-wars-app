import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';

import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
    
  }

  state = {
    planet: {},
    loading: true,
  };


  onPlanetLoaded = (planet) => {
    console.log('ON PLANET LOADED ' + planet)
    return this.setState({
      planet,
      loading: false,
      error: false,

    })
  }

  updatePlanet = () => {
    console.log('UPDATE PLANET')
    // const id = Math.floor(Math.random() * 10) + 2
    const id = 10;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)

  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
  })}
  
  
  render() {

    const {planet, loading, error} = this.state;

    const hasData = !(loading || error) // данные есть когда нет загрузки и ошибки

    const errorMessage = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null
    const content = hasData ? <PlanetView planet={planet}/> : null
    

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}



// const PlanetView = ({planet}) => {

//   const {id, name, population, rotationPeriod, diameter} = planet;

// УБРААААТЬ УБРАТЬ УБРАТЬ УБРАТЬ =====================================
//   return (
//     <React.Fragment>
//               <img className="planet-image"
//              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
//         <div>
//           <h4>{name}</h4>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <span className="term">Population</span>
//               <span>{population}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Rotation Period</span>
//               <span>{rotationPeriod}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Diameter</span>
//               <span>{diameter}</span>
//             </li>
//           </ul>
//         </div>
//     </React.Fragment>
//   )
// };





// ПЕРВАЯ ВЕРСИЯ


 // swapiService = new SwapiService;
  
  // constructor() {
  //   super();
  //   this.updatePlanet();
  // }

  // state = {
  //   name: null,
  //   population: null,
  //   rotationPeriod: null,
  //   diameter: null
  // }

  // updatePlanet() {
  //   const id = Math.floor(Math.random() * 7) + 2;

  
  //   this.swapiService
  //     .getPlanet(id)
  //     .then((planet) => {
  //       console.log(planet)
  //       this.setState({
  //         id,
  //         name: planet.name,
  //         population: planet.population,
  //         rotationPeriod: planet.rotation_period,
  //         diameter: planet.diameter
  //       })
  //     })
  // }



      // const {id, name, population, rotationPeriod, diameter} = this.state;