import React from 'react';

// thead {color:green;}
// tbody {color:blue;}
// table, th, td {
//  border: 1px solid black;
// }
// td, th{
//  padding: 5px;
// }

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
const RenderRow = ({ data, keys, ...props }) => {
    return keys.map((key, index) => {
        return <td key={data[key]}>{data[key]}</td>
        //asdfasdf
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
        return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
    })
};

// const TableHeader = () => {
//     return (
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Job</th>
//         </tr>
//       </thead>
//     )
//   }

//   const TableBody = props => {
//       const rows = props.dbData.map((row, index) => {
//           return (
//               <tr key={index}>
//                   <td></td>
//               </tr>
//           )
//       })

//     return (
//       <tbody />
//     )
//   }

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