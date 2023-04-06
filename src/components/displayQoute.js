import { useState, useEffect } from "react";

function Qoute() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=success", {
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
      } catch(err) {
       setError(err)
      }
    }
    fetchData()
  }, [setData]);

  if(loading){
    return(<p>Loading....</p>)
  }
  if(!data && !loading){
    return(
      <p>{error}</p>
    )
  }

  return (
    <div className="qoutes">
        <p>{data.quote}</p>
    </div>
  );
}

export default Qoute;