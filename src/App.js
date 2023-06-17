import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

function App() {
  const apiKey = "0d2a26d074f68e10f2627e64ee38804f";
  const [data, setData] = useState({});
  const [input,setInput]= useState('');
function getWhether(cityName) {
  if(!cityName)
  return
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" + apiKey

      axios.get(apiURL).then((res)=>{
      console.log("response",res.data);
      setData(res.data);

    }).catch((err)=>{
      console.log("err",err)
    })
  };

  useEffect(()=>{
    
    getWhether("delhi")

  },[data])

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">weather app</h1>
        <div className="d-grid col-4 m-auto ">
          <input type="text" className="form-control" id="input" value={} />
          <button  onClick={getWhether} className="btn btn-primary mt-3" type="button">
            search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox ">
          <img
            className="weatherIcon"
            src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"
            alt=""
          />
          <div className="weatherCity">city</div>

          <h1 className="weatherTemp">34°C</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
