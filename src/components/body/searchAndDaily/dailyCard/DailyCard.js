import React from 'react'

import './dailyCard.css'


const DailyCard = (props) => {
    console.log(props.data)

    // console.log(props.data.forecast.weather[0].icon)
    const data = props.data.forecast

    const currentDate = new Date().toString().split(' ').slice(0,4).join(' ')
    console.log(currentDate)

    return(
        <div className='card col-10'>
            <div className='card-top'>
                <img className='card-img-top' src={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`}></img>
                <div className='current-feel'>
                    <h5>Feels Like: {Math.round(data.current.temp)}</h5>
                    <p>{ data.current.weather[0].description[0].toUpperCase() + data.current.weather[0].description.toUpperCase().slice(1).toLowerCase() }</p>
                </div>
            </div>
           <hr></hr>
            <div className='card-body'>
                <h3 className='card-title'> { props.data.city.split(',')[0] } </h3>
                <h6 className='date'> { currentDate } </h6>
                <div className='today-p'>
                    <p className='card-text text'>Today's Low:</p>
                    <strong>{ Math.round(data.daily[0].temp.min) }</strong>
                </div>

                <div className='today-p'>
                    <p className='card-text text'>Today's High: </p>
                    <strong>{ Math.round(data.daily[0].temp.max) } </strong>
                </div>


                <div className='today-p'>
                    <p className='card-text text'>UV index: </p>
                    <strong>{ Math.round(data.daily[0].uvi) }/10</strong>
                </div>
                <div className='today-p'>
                    <p className='card-text text'>Average Wind: </p>
                    <strong>{ data.daily[0].wind_speed }</strong>
                </div>
                <div className='today-p'>

                </div>
            </div>

        </div>
    )
}


export default DailyCard