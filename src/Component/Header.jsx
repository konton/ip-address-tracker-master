import React, { useEffect, useState, useReducer } from 'react'
import Ipinfo from './Ipinfo'
import Searching from './Searching'
import Map from './Map';


export default function Header() {
    // const [isSearch, setIsSearch] = useState(false);
    // const [userIp, setUserIp] = useState("");
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_4I8EuUR3buRJxvbw2lWD6jlkfikcm&ipAddress="
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
        console.log(address);
        dispatchFetchUrl({ type: 'IP_ADDRESS', val: address })
        // setUserIp(address);
    }

    useEffect(() => {
        fetchIp(url + fetchUrl.value)
        console.log("FETCH USE EFFECT");
    }, [fetchUrl.isClick]);


    const fetchIp = async (address) => {
        const response = await fetch(address);
        const data = await response.json();
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
