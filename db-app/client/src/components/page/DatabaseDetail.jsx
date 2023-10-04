
// update this code to read from database

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Entrywide from "./Entrywide";
import Entrysmall from "./Entrysmall";
import Entrysummary from "./Entrysummary";
import Entrylogo from "./Entrylogo";

function DatabaseDetail() {
  const [database, setDatabase] = useState(null);
  const { key } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3001/getdbs')
      .then(db => {
        console.log("Data received:", db.data);
        const database = db.data.find((db) => db.name === key);
        setDatabase(database);
      })
      .catch(error => console.log('Error fetching data: ', error));
  }, [key]);

  if (!database) return <div>Loading...</div>; // Loading state

  return (
    <div>
      <Link to="/" className="link" style={{ textDecoration: "underline" }}>
        <p>Back to Databases Page</p>
      </Link>
      <div className="entries">
        <Entrylogo name={database.name} logo={database.image} />
        <Entrysummary dbModel={database.dbModel} models={database.secondaryModels.join(', ')} vendor={database.vendor} flavors={database.dbFlavors.join(', ')} currentVersion={database.currentLTSRelease} />
      </div>
      <div className="entries">
        <Entrywide title="Supported Database Versions" image={database.supportedDBVersions}/>
        <Entrywide title="Supported OS Versions" image={database.supportedOSVersions}/>       
        <Entrysmall title="Replication Tools" items={database.ReplicationTools} />
        <Entrysmall title="High Availability Options" items={database.HighAvailability} />
      </div>
    </div>
  );
}

export default DatabaseDetail;
