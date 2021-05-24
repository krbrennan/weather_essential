import React, { useEffect, useState } from 'react'

// googlemapapi: AIzaSyCaODk6-70vzIOmaWZ4nTZE6maPGq1nmjU

import { key, map} from '../../../key'

import Search from './search/Search'

import './searchAndDaily.css'

import DailyForecast from './daily/DailyForecast'

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const SearchAndDaily = () => {

    const [search, setSearch] = useState('')
    const [weather, setWeather ] = useState({})
    const [city, setCity ] = useState('')
    const [lat, setLat ] = useState(0)
    const [ long, setLong ] = useState(0)

    const fetchWeather = () => {
        console.log(weather)
    }

    // useEffect(() => {
    //     setSearch('')
    //     setLong(0)
    //     setLat(0)

    // })

    const getWeatherByZip = async(e) => {
        e.preventDefault()
        // randomness
        // extra random
        // yes
        // https://maps.googleapis.com/maps/api/geocode/json?address=18020&key=AIzaSyCaODk6-70vzIOmaWZ4nTZE6maPGq1nmjU

        // need to use zipcode to get lat and long coordinates in order to do a onecall for all weather data
        try{
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${process.env.REACT_APP_Map_API_KEY}`)
            const jsonData = await response.json()
            const latitude = jsonData.results[0].geometry.location.lat
            const longitude = jsonData.results[0].geometry.location.lng
            console.log(jsonData.results[0])
            setCity(jsonData.results[0].formatted_address)

            const openWeather = await fetch(`http://api.openweathermap.org/data/2.5/onecall?&lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
            const json = await openWeather.json()
            await setWeather(json)
        }
        catch(err){
            console.log(err)
        }
        fetchWeather()
    }

    const getWeatherByCoordinates = async(lat, long) => {
            try{
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_Map_API_KEY}`)
                const jsonData = await response.json()
                console.log(jsonData)
                setCity(jsonData.results[0].address_components[2].long_name)

                const res = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
                const json = await res.json()
                const data = await setWeather(json)
            }
            catch(err){
                console.log(err)
            }
    }

    function getLocation(){
       navigator.geolocation.getCurrentPosition((pos) => {
           getWeatherByCoordinates(pos.coords.latitude, pos.coords.longitude)
            // setLat(pos.coords.latitude)
            // setLong(pos.coords.longitude)
        })
        // call relevant api
    //    getWeatherByCoordinates()
    }

    function handleSearch(event){
        setSearch(event)
    }

    function handleSubmit(e) {
        console.log(weather)
    }

    return(
        <div className='search-and-daily'>
            <Search getLocation={getLocation} value={search} handleSubmit={getWeatherByZip} setLocation={handleSearch} />
            <DailyForecast city={city} forecast={weather} />
        </div>
    )
}

export default SearchAndDaily