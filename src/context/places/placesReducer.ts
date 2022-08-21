import { PlacesState } from './PlacesProvider';
import { Feature } from '../../interfaces/places';

type PlacesAction =
| { type: 'setUserLocation', playload: [number, number]}
| { type: 'setPlaces', payload: Feature[]}
| { type: 'setLoadingPLaces'}

export const placesReducer = ( state:PlacesState, action:PlacesAction ):PlacesState => {
    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading:false,
                userLocation: action.playload
            }
      case 'setLoadingPLaces':
          return{
              ...state,
              isLoadingPlaces:true,
              places: [],
          }
        
          case 'setPlaces':
              return {
                  ...state,
                  isLoadingPlaces:false,
                  places:action.payload
              }
    
        default:
            return state;
    }
}