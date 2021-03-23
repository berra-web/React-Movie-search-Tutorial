
import {
 Types
} from './filmTypes'

export const storeData =   (payload) => {
  return {
    type: Types.STORE_DATA,
    payload: payload
  }
  
}



