import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    console.log(url)
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                setError("Could not feth the data for that resource!")
                throw Error("Could not feth the data for that resource!") 
            }
            return res.json()
        })
        .then(json => {
            setData(json);
            setIsPending(false);
            setError(null)

        })


        
        
      }, []);
      return {data, isPending, error}
      
}

export default useFetch;