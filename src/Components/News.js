
import React, { useState, useEffect } from "react";


function news(){
  const [data, setData] = useState(null);
  async function getData(){
    const result = await fetch(
     "https://newsapi.org/v2/everything?q=tesla&from=2023-03-14&sortBy=publishedAt&apiKey=1c688d134eca4d178a42fae7f9ce6f82 "
      
    );
    const res= await result.json();
    console.log( res.articles)
    setData(res.articles);
  }

  useEffect(()=>{
    getData();
  }, [])
  return(
    <div>
      {
        data?.map((item,index)=>{
          return(
            <div key={index}>
<h1>{item.author}</h1>
            </div>
          )
        })

      }
    </div>

  )
}

export default news;