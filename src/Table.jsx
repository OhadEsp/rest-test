import React from 'react';

const getKeys = (data) => {
    const keys = Object.keys(Array.isArray(data) ? data[0] : data);
    return keys;
}
const getHeader = (data) => {
    if (data === undefined) return [];
    const keys = getKeys(data);
    return keys.map((key, index) => {
        return <th key={key}>{key.toUpperCase()}</th>
    })
};
function Rows ({data, keys, ...props}) {
    return keys.map((key, index) => {
        return <td key={data[key]}>{data[key]}</td>
    })
};
const getRowsData = (data) => {
    if (data === undefined) return [];
    let items;
    if (Array.isArray(data)) {
        items = data;
    } else {
        items = [];
        items.push(data);
    }
    const keys = getKeys(data);
    return items.map((row, index) => {
        return <tr key={index}><Rows key={index} data={row} keys={keys} /></tr>
    })
};

  export default function Table ({data}) {
      const header = getHeader(data);
      const rowsData = getRowsData(data);
      return (
        <table>
            <thead>
                <tr>{header}</tr>
            </thead>
            <tbody>
                {rowsData}
            </tbody>
        </table>
      )
  }