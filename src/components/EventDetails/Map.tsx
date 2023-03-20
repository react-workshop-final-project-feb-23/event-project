import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface Props {
  event: any;
}

const Map = ({ event }: Props) => {
  return (
    <div className="Map">
      <h1 style={{textAlign: 'center'}}><LocationOnOutlinedIcon/> Event Location</h1>
      <iframe
        src={`https://maps.google.com/maps?q=${event?._embedded.venues[0].location.latitude},${event?._embedded.venues[0].location.longitude}&hl=es;&output=embed`}
        id="iframeId"
        height="500px"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Map;
