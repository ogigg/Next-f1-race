export interface Race {
  Circuit: Circuit;
  date: string;
  raceName: string;
  round: string;
  seasons: string;
  time: string;
  url: string;
}

export interface Circuit {
  circuitId: string;
  circuitName: string;
  url: string;
  Location: Location;
}

export interface Location {
  country: string;
  lat: string;
  long: string;
  locality: string;
}

export interface RaceTable {
  Races: Race[];
  season: string;
}

export interface MRData {
  RaceTable: RaceTable;
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
  xmlns: string;
}

export interface RacesApiResponse {
  MRData: MRData;
}
