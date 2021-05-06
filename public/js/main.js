const submitBtn = document.getElementById('submit');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    // alert("hello");
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please write city name before you search";

        data_hide.classList.add('data_hide');

    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7a301c40564f0619e54c73ae8bb3514b`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            // console.log(arrData);
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMod = arrData[0].weather[0].main;

            if(tempMod == "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMod == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMod == "Rain"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #eccc68;'></i>";
            }
            data_hide.classList.remove('data_hide');


        }catch{
            city_name.innerText = "Please write city properly";
            data_hide.classList.add('data_hide');

        }
        
    }
}

submitBtn.addEventListener('click',getInfo);