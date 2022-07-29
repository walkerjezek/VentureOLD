import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './Map'

function Map1(){
  <Wrapper apiKey={process.env.API_KEY} render={render}>
    <Map/>
  </Wrapper>
}