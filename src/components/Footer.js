import './footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(res => res.json())
        .then( result => setData(result))
    }, []);
    return (
        <footer className="mapFooter"> 
         {data && <div>Total positive tests today in the  world  <h2>{data.todayCases}</h2></div>  } 
         {data && <div>Today's total death in the world <h2>{data.todayDeaths}</h2></div>  }
        {data && <div>Today's total active cases in the world <h2>{data.active}</h2></div> }
        {data &&  <div>So many People have recovered today <h2>{data.todayRecovered}</h2></div> }
            
        </footer>
      );
}
 
export default Footer;