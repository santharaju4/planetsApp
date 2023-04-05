// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="title">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlant => (
          <PlanetItem key={eachPlant.id} planetDetails={eachPlant} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
