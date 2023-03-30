import React, { useEffect, useState } from 'react';

function Home() {
  const [ipInfo, setIpInfo] = useState(null);
  const [reverseGeocode, setReverseGeocode] = useState(null);
  const [isReverseGeocodeEnabled, setIsReverseGeocodeEnabled] = useState(false);

  useEffect(() => {
    fetch('https://ipinfo.io/json?token=c2aec1583cf4d1')
      .then(response => response.json())
      .then(data => {
        setIpInfo(data);
        setIsReverseGeocodeEnabled(true);
        localStorage.setItem('country', data.country);
      })
      .catch(error => console.error(error));
  }, []);

  const handleReverseGeocode = () => {
    if (ipInfo) {
      const url = `https://api.opencagedata.com/geocode/v1/json?key=a02f38298198484c92e1343a5f1ee8fa&q=${ipInfo.loc}&pretty=1&no_annotations=1`;
      fetch(url)
        .then(response => response.json())
        .then(data => setReverseGeocode(data.results))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      {ipInfo && (
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IP</td>
              <td>{ipInfo.ip}</td>
            </tr>
            <tr>
              <td>Hostname</td>
              <td>{ipInfo.hostname}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{ipInfo.city}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>{ipInfo.region}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{ipInfo.country}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{ipInfo.loc}</td>
            </tr>
          </tbody>
        </table>
      )}

      <button onClick={handleReverseGeocode} disabled={!isReverseGeocodeEnabled}>
        Reverse GeoCode Location
      </button>

      {reverseGeocode && (
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {reverseGeocode.map((result, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>Formatted</td>
                  <td>{result.formatted}</td>
                </tr>
                <tr>
                  <td>Components</td>
                  <td>
                    {result.components.city}, {result.components.state}, {result.components.country}
                  </td>
                </tr>
                <tr>
                  <td>Geometry</td>
                  <td>{result.geometry.lat}, {result.geometry.lng}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Home;