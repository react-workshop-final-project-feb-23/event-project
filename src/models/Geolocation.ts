interface Place {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

export default interface Geolocation {
  places: Place[];
}
