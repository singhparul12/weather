const getCityForm = document.querySelector('form')

let updateCity = async (city) =>{

    const cityName = await getCity(city);
    const weatherDetail = await getWeather(cityName.Key);

    return{cityName,weatherDetail};
}


getCityForm.addEventListener('submit',e =>{
    e.preventDefault();

    const city = getCityForm.city.value.trim();
    getCityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => {
            console.log(alert('Please enter a valid city name'))
            console.log("could not fetch the data",err);
        })
})

const degree = document.querySelector('.centegrate span');
const condition = document.querySelector('.condition');
const icon = document.querySelector('.icon img');
const curTime = document.querySelector('.curTime');
const curCity = document.querySelector('.curCity');
const curMeridiem = document.querySelector('.curMeridiem');
const wDetail = document.querySelector('.weather-detail')
const cityTime = document.querySelector('.time')

const updateUI = (data) =>{
    wDetail.classList.remove('d-none')
    cityTime.classList.remove('d-none')

    const cityDetail = data.cityName;
    const weatherDetail = data.weatherDetail;
    console.log(cityDetail)
    console.log(weatherDetail)
    degree.textContent = weatherDetail.Temperature.Metric.Value;
    condition.textContent = weatherDetail.WeatherText
    const weatherIconNumber = weatherDetail.WeatherIcon
    icon.setAttribute('src',`icons/${weatherIconNumber}.svg`)
    
    //from weather condition we will get timestamp 
    //So we have to convert it into real time
    const timestamp = weatherDetail.LocalObservationDateTime;
    const now = new Date(timestamp)
    curTime.textContent = now.toLocaleDateString()
    curCity.textContent = cityDetail.EnglishName
    if(weatherDetail.IsDayTime){
        curMeridiem.textContent = "Day";
    }else{
        curMeridiem.textContent = 'Night';
    }
}
