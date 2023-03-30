import { useState, useEffect } from "react"

function Qoute() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
        const res = await fetch("https://api.api-ninjas.com/v1/trivia?category=mathematics", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "JxzhlyKScID2Xd/m0Lxq+w==ByBXhjJGRx0ruEch",
        },
      })
      const json = await res.json()
      for(let i=0; i < json.length; i++) {
        setData(json[i])
      }
      setLoading(false)
    }
    fetchData()
  }, [setData]);

  if(loading){
    return(<p>Loading....</p>)
  }
  if(!data){
    setError('There has been a problem loading the quote');
    return(
      <p>{error}</p>
    )
  }

  return (
    <div className="qoutes">
        <p>{data.question} - {data.answer}</p>
    </div>
  )
}

export default Qoute;