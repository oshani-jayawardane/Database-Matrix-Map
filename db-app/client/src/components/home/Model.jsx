import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from './Tile';

function Model() {
  const [dblist, setDbList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getdbs')
      .then(dbs => {
        console.log("Data received:", dbs.data);
        setDbList(dbs.data);
      })
      .catch(error => console.log('Error fetching data: ', error));
  }, []);


  const uniqueDbModels = Array.from(new Set(dblist.map(db => db.dbModel)));

  return (
    <div>
      {uniqueDbModels.map(dbModel => (
        <div className="model-card" key={dbModel}>
          <h2>{dbModel}</h2>
          <div className="tile-parent">
            {dblist
              .filter(db => db.dbModel === dbModel)
              .map(db => (
                <Tile key={db._id} dbKey={db.name} image={db.image} name={db.name} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Model;
