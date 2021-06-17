import React from 'react'

import './body.css'

// components
import SearchAndDaily from './searchAndDaily/SearchAndDaily'
import ExpandedForecast from './expandedForecast/ExpandedForecast'

const Body = () => {
    return(
        <div className='body'>
            <SearchAndDaily />
            <ExpandedForecast />
        </div>
    )
}

export default Body