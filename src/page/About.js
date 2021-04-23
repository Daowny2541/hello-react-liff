
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function About() {
    const [data, setData] = useState({ users: [] });
    const [query, setQuery] = useState(1);
    const [search, setSearch] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( async() => {
        // const fetchData = async () => {
          
        // };

         setIsLoading(true);
    
          const result = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${search}`,
          );
          
          setData({
            users: result.data
          });
    
           setIsLoading(false);
    
        // fetchData();
      }, [search]);
  
    return (
        <div>
        <input
          type="text"
          placeholder="User ID"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => setSearch(query)}>
          Search
        </button> <br/>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <span>
            {data.users.name}
          </span>
        )}
      </div>    
    );
}
export default About