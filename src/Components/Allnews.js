import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function Allnews(){
  const [data, setData] = useState([]);
  async function getData(){
    const result = await fetch(
     "https://newsapi.org/v2/top-headlines?country=us&apiKey=1c688d134eca4d178a42fae7f9ce6f82"
      
    );

    const res= await result.json();
    console.warn(res);
    console.log( res.articles)
    setData(res.articles);
  }

  useEffect(()=>{
    getData();
  }, [])
  
  function formatDate(date) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
  return(
    <div>
      <div className='table-info'>
        <h2>Recent Transitions</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Author</th>
              <th>Date</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {data.length ?
              data.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.urlToImage && (
                      <img src={item.urlToImage} alt={item.title} width="100" />
                    )}
                  </td>
                  <td>{item.author}</td>
                  <td>{formatDate(item.publishedAt)}</td>
                  <td>{item.content}</td>
                </tr>
              )) :
              <tr>
                <td colSpan="4" style={{textAlign: "center"}}>Data not found</td>
              </tr>
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Allnews;
