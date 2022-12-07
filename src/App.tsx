import axios from "axios"
import {useState, useEffect} from "react"
import {CountryType} from "./type"
import Country from "./components/Country"


const App = () => {
    const [countries, setCountries] = useState<CountryType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const getCountries = async () => {
      setLoading(true)
        try {
            const {data} = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
            setCountries(data)
        } catch{
        console.log("Ülkeleri alırken hata oluştu.");
        } finally{
          setLoading(false)
        }
    }

    useEffect(() => {
      getCountries();
    }, [])

    console.log({countries})
    


  return (
    <div>{countries.map((country) => {
        return(
          <Country country={country} /> 
          )

    })}
    </div>

  )
}

export default App