import React from 'react'

import DailyCard from '../dailyCard/DailyCard'

const DailyForecast = (props) => {
    if(Object.keys(props.forecast).length == 0){
        console.log('empty')
    } else {
        console.log(props)
    }

    
    if(Object.keys(props.forecast).length == 0){
        return(
            <h3></h3>
        )
    } else{
        return(
            <DailyCard data={props} />
        )
    }
    
}

export default DailyForecast