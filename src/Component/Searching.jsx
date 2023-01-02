import React, {useState} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Searching(props) {
    const [searchIp, setSearchIp] = useState("")

    const inputHandler=(ev)=>{
        setSearchIp(ev.target.value);
    }

    const ipHandler = (ev) => {
        
        props.search(searchIp)
        ev.preventDefault();
     
    }
    return (
        <div className='Searching-box'>
            <form>
                <input className='Searching-input' onChange={inputHandler} value={searchIp} placeholder='Search for any IP address or domain' />
                <button className='Searching-btn' onClick={ipHandler}> <KeyboardArrowRightIcon style={{ color: "white" }} /> </button>
            </form>
        </div>
    )
}
