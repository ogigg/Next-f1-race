import React, { useState } from 'react';
import RacesApi from '../../lib/api/races';
import { Race } from '../../models/race';

export const Dashboard = () => {
  const [races, setRaces] = useState<Race[]>([]);
  React.useEffect(() => {
    RacesApi.getRacesData().then(racesData => setRaces(racesData.data.MRData.RaceTable.Races));
  }, []);

  const listItems = races.map(race => <li>{race.Circuit.circuitName}</li>);

  return (
    <div className="App">
      I've got: {races.length} races
      <ul>{listItems}</ul>
    </div>
  );
};
