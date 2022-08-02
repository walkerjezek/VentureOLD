import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './Map'

function Map1(){
 console.log(process.env.REACT_APP_API_KEY)
  const render = (Status) => {
    return <h1>{Status}</h1>;
  };
 return (
  <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
    <Map/>
  </Wrapper>
 )
}

export default Map1