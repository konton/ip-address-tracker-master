import React, { useEffect, useState, useReducer } from 'react'
import Ipinfo from './Ipinfo'
import Searching from './Searching'
import Map from './Map';


export default function Header() {
    const [ipDetail, setIpDetail] = useState({
        ip: "",
        lat: "",
        lng: "",
        location: "",
        timeZone: "",
        isp: ""
    });

    const urlReducer = (state, action) => {
        //set type อีก type
        if (action.type === 'IP_ADDRESS') {
            return { value: action.val, isSearch: true, isClick: !state.isClick };
        }
    }

    const [fetchUrl, dispatchFetchUrl] = useReducer(urlReducer, {
        value: '',
        isSearch: true,
        isClick: false
    })




    const searchHandler = (address) => {
        dispatchFetchUrl({ type: 'IP_ADDRESS', val: address })
        // setUserIp(address);
    }

    useEffect(() => {
        fetchIp(fetchUrl.value)
        console.log("FETCH USE EFFECT");
    }, [fetchUrl.isClick]);


    const fetchIp = async (addresser) => {
        console.log(addresser)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: addresser })
        }
        const response = await fetch('http://localhost:3001/getip', requestOptions);
        const data = await response.json();
        console.log("HI")
        const { ip, isp, location } = data

        setIpDetail({
            ip: ip,
            lat: location.lat,
            lng: location.lng,
            location: location.country + " " + location.region,
            timeZone: location.timezone,
            isp: isp
        });
        // dispatchFetchUrl({ type: 'DEFAULT', val: 'https://geo.ipify.org/api/v2/country,city?apiKey=at_4I8EuUR3buRJxvbw2lWD6jlkfikcm&ipAddress=' });
        // setIsSearch(true);   
    };
    return (
        <div className='Heading'>
            <div className='Header-box'>
                <h1 className='HeaderText'>IP Address Tracker</h1>
                <Searching search={searchHandler} />
            </div>
            <Ipinfo address={ipDetail} />
            {fetchUrl.isSearch ? <Map lat={ipDetail.lat} lng={ipDetail.lng} zoom={12} /> : null}

        </div>
    )
}
