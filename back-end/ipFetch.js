const axios = require('axios');

const fetchIp = async (address) => {
    const response = axios.get(address).then((response) => {
        return response.data;
    })
        .catch((error) => {
            console.log(error);
        })
    const data = await response;
    return data;
}

module.exports = fetchIp