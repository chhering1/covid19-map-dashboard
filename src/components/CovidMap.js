import { useEffect, useState } from 'react';
import { Map, TileLayer, Popup } from 'react-leaflet'; 
import Marker from 'react-leaflet-enhanced-marker';
import './covidmap.css';
import "leaflet/dist/leaflet.css";
import BeatLoader from "react-spinners/BeatLoader";

const CovidMap = () => {
    const [loading, setLoading] = useState('');
    const [data, setData] = useState('');
  
useEffect(() => {
  fetch('https://disease.sh/v3/covid-19/countries/')
  . then(res => res.json() )
  .then(result =>   setData(result))
}, [setData]);
    
data && console.log(data)
  return (
    // <main className="container">
    <Map center={[20,100]} zoom={2} scrollWheelZoom={true}>
   
    <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> 
    { data ?  data.map(country => (
      
        <Marker  icon={ <img style={{width:20,height:20}}  src={country.countryInfo.flag} alt={country.country}/>} key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
          {country.country} has  <br /> {country.todayCases} new cases and {country.todayDeaths} death today.
           </Popup>
        </Marker>  
    ))
    : <div className="spinner"><BeatLoader  size={155}/></div> }
    
  </Map>
  
  );
    
}
 
export default CovidMap;