import React, {useCallback, useEffect, useState}  from 'react';
import ListBuilding from "./components/ListBuilding"
import './App.css';

function App() {
  const [spatial, setSpatial] = useState();

  const fetchSpace =  useCallback(
    () => {//on recupere la liste des batiments
      fetch('https://api-developers.spinalcom.com/api/v1/geographicContext/space')
      .then(res => res.json())
      .then(data => {
          setSpatial(data)
      }).catch(err => {
          console.log(err)
      })
    },
    [],
  )
  
  useEffect(() => {
      fetchSpace()
  }, [fetchSpace]);

  return (
    <div className='App'>
      {
        spatial?.children?.map((building) => (
          <ListBuilding key={building.name} data={building} />
        ))
      }
    </div>
  )
}

export default App;
