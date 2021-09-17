import React, { useState } from 'react';
import axios from 'axios';

export const Dashboard = () => {
  const baseURL = 'http://ergast.com/api/f1/current.json';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  const [races, setRaces] = useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      const tmp = response.data.MRData.RaceTable.Races;
      console.log(tmp);
      setRaces(tmp);
    });
  }, []);

  return <div className="App">I've got: {races.length} races</div>;
};
