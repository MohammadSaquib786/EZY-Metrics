import React, { useState, useEffect } from "react";
import './Reports.css';
import dataSourceArray from './Dummydata';

const Reports = () => {
  const [dataSources, setDataSources] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredDataSources, setFilteredDataSources] = useState([]); 
  const [selectedSources, setSelectedSources] = useState([]); 

  useEffect(() => {
    setDataSources(dataSourceArray);
    setFilteredDataSources(dataSourceArray); 
  }, []);

 
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

   
    const filtered = dataSources.filter((dataSource) =>
      dataSource.dataSourceName.toLowerCase().includes(query)
    );
    setFilteredDataSources(filtered); 
  };

  const handleCheckboxChange = (e, dataSourceName) => {
    if (e.target.checked) {
      setSelectedSources([...selectedSources, dataSourceName]); 
    } else {
      setSelectedSources(selectedSources.filter(name => name !== dataSourceName)); 
    }
  };

  return (
    <div className="Reports">
      <div className="nevbar">
        <h2 className="header">Data Sources</h2>
        <div className="InputContainer">
          <input
            type="text"
            placeholder="Search by Data Source Name..."
            value={searchQuery}
            onChange={handleSearch}
            className="input"
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Select</th> 
            <th>Data Source Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Created</th>
            <th>Last Refresh</th>
            <th>Refresh Interval</th>
            <th>Owner</th>
            <th>Shared</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {filteredDataSources.length > 0 ? (
            filteredDataSources.map((dataSource, index) => (
              <tr key={index}>
                <td>
                  <input
                    style={{cursor:'pointer'}}
                    type="checkbox"
                    checked={selectedSources.includes(dataSource.dataSourceName)}
                    onChange={(e) => handleCheckboxChange(e, dataSource.dataSourceName)}
                  />
                </td>
                <td>{dataSource.dataSourceName}</td>
                <td>{dataSource.type}</td>
                <td>{dataSource.format}</td>
                <td>{dataSource.created}</td>
                <td>{dataSource.lastRefresh}</td>
                <td>{dataSource.refreshInterval}</td>
                <td>{dataSource.owner}</td>
                <td>{dataSource.shared ? "Yes" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No matching data sources found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
