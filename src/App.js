import React, { useState, useEffect } from 'react';
import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  const GET_JOBS = gql`
    query GetJobs {
       cities {
      name
    jobs{
    title
    applyUrl
    company{
      name
      websiteUrl
    }
    }
    }
    }`;

  const { loading, error, data } = useQuery(GET_JOBS);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 return (
      data.cities.map((city, id) =>
      <div>
  <h1 key={id}>{city.name}</h1>
    {data.cities[id].jobs.map((job, id) => {
        return(
            <>
            <h3 key={id}>{job.title}</h3>
            <h5>COMPANY: {job.company.name}</h5>
            <a>{job.applyUrl}</a>
            </>
            )
    }
)}
</div>
  ))
}
export default App;