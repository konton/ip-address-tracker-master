import React, {useEffect, useState, useCallback} from 'react'
import Ipinfo from './Ipinfo'
import Searching from './Searching'
import Map from './Map';


export default function Header() {
    const [isSearch, setIsSearch] = useState(false);
    const [userIp, setUserIp] = useState("");
    const [ipDetail, setIpDetail] = useState({
        ip:"",
        lat:"",
        lng:"",
        location:"",
        timeZone:"",
        isp:""
    });

    const searchHandler= (address)=>{
        setUserIp(address);

        // fetchIp();
    }
    
    useEffect(()=>{
        fetchIp()
        console.log("FETCH");
    },[userIp]);


    const fetchIp = async()=>{
        const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_4I8EuUR3buRJxvbw2lWD6jlkfikcm&ipAddress="+userIp;
        console.log(url);
        const response = await fetch(url)
        console.log(response);
        const data = await response.json();
        const {ip, isp, location} = data
        setIpDetail({
            ip: ip,
            lat: location.lat,
            lng: location.lng,
            location: location.country +" "+ location.region,
            timeZone: location.timezone,
            isp: isp
        });
        console.log(ipDetail);
        setIsSearch(true);   
    };

    
    console.log(ipDetail);
    return (
        <div className='Heading'>
            <div className='Header-box'>
                <h1 className='HeaderText'>IP Address Tracker</h1>
                <Searching search={searchHandler}/>
            </div>
            <Ipinfo address={ipDetail}/>
            {isSearch &&  <Map lat={ipDetail.lat} lng={ipDetail.lng}/>}
           
        </div>
    )
}
