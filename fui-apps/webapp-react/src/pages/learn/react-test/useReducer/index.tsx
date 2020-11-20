import * as React from 'react'

const {
  useState,
} = React


import useFetch from './useFetch'


function useReducerTest () {
  const [query, setQuery] = useState('')
  const { loading, error, data, setUrl } = useFetch()

  return (
    <div>
        {loading && <h2>loading...</h2>}
        {error && <h2>error</h2>}
        {!(loading || error) && <h4>{data}</h4>}
        <div>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)}/>
            <button onClick={() => setUrl(`/api/${query}`)}>query</button>
        </div>
    </div>
  )
}

export default useReducerTest
