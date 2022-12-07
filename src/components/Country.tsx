import {FunctionComponent} from "react";
import { CountryType } from "../type"

interface ICountryProps {
    country: CountryType
}

const Country: FunctionComponent<ICountryProps> =  (props) => {
    const {country} = props;
  return (

    <div>
     <p>{country.name} - {country.capital}</p>


    </div>
  )
}

export default Country