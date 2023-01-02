import React,{useEffect, useState, useCallback} from 'react'
import Info from './Info'
import axios from 'axios'
export default function Ipinfo(props) {

    // console.log(props.address);

    return (
        <div className='IP-box'>
            <Info data="IP Address" detail={props.address.ip}/>
            <div className="vl"></div>
            <Info data="Location" detail={props.address.location}/>
            <div className="vl"></div>
            <Info data="Timezone" detail={props.address.timeZone}/>
            <div className="vl"></div>
            <Info data="ISP" detail={props.address.isp}/>



            {/* -- add offset value dynamically using the API  */}
        </div>
    )
}
