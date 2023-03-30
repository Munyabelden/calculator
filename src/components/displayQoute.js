import { useState, useEffect } from "react"

function Qoute() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
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
      } catch {
        alert("error")
      }
      setLoading(false);
    }
    fetchData()
  }, [setData, setLoading]);

  if(loading){
    return(<p>Loading....</p>)
  }

  return (
    <div className="qoutes">
        <p>{data.question} - {data.answer}</p>
    </div>
  )
}

export default Qoute;