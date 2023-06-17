import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "0d2a26d074f68e10f2627e64ee38804f";

async function getWeather(cityName) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  let res;
  try {
    res = await axios.get(apiURL);
    return {success: true, data : res.data};
  } catch(e) {
    return { success: false, data : e.message};
  }
}

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("city");

  async function handler(e) {
    e.preventDefault();
    const resp = await getWeather(city);
    if (resp.success) setData(resp.data);
    else console.error(resp.data)
    console.log(resp.data)
  }

  return (
    <div className="col-md-12">
      <div id="weatherBg">
        <h1 className="heading">weather app</h1>
        <div className="d-grid col-4 m-auto ">
          <input type="text" className="form-control" onChange={(e) => setCity(e.target.value.length ? e.target.value : "city")
          }/>
          <button  onClick={handler} className="btn btn-primary mt-3" type="submit">
            search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded" id="weatherResultBox">
          <img
            id="weatherIcon"
            src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"
            alt=""
          />
          <div id="weatherCity">{city}</div>
          <h1 id="weatherTemp">{data ? `${data.main.temp}°C` : "34°C" }</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
