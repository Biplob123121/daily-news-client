import React from 'react'

export default function Results({results}) {
  return (
    <div>
       {
        results.map(result =>
          <div key={result._id}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
          )
       }
    </div>
  )
}
