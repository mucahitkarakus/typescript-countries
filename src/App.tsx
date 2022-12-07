import axios from "axios"
import {useState} from "react"
import {CountryType} from "./type"


const App = () => {
    const [countries, setCountries] = useState<CountryType[]>([])
    const getCountries = async () => {
        try {
            const {data} = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
            setCountries(data)
        } catch{
        console.log("Ülkeleri alırken hata oluştu.");
        }
    }
  return (
    <div>Countries App with TypeScript</div>
  )
}

export default App