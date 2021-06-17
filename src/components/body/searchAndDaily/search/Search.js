import React from 'react'

import './search.css'

const Search = (props) => {
    return (
        <div className='container search'>
            <h2>Daily Forecast</h2>
            <form onSubmit={props.handleSubmit}>
                <input type='text' value={props.value} className='input-field' placeholder='Enter Zipcode' onChange={event => props.setLocation(event.target.value) } />
            </form>
            <button className='btn btn-primary' onClick={props.getLocation} id='geoLocateBtn'>Get Current Location Weather</button>
        </div>
    )
}

export default Search