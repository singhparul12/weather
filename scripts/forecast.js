const key = 'wZmC4ixcvhsPJCNTDsj6cu3ZARnxk8y9';

const getCity = async(city) =>{

    const url = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(url+query);
    const data = await response.json();
    return data[0];

}


const getWeather = async(id) =>{

    const url = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    const response = await fetch(url+query);
    const data = await response.json();

    return data[0];
}