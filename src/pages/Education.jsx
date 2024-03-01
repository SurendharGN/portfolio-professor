import React from 'react';
import '../styles/education.css';

const Education = () => {
  const data = [
    { exam: "S.S.L.C", board: "BSE,TN", clg: "GHSS, Podaturpet",yop:"1984",percent:"76",class:"First" },
    { exam: "H.S.C", board: "BSE,TN", clg: "GHSS, Podaturpet",yop:"1986",percent:"78",class:"First" },
    { exam: "B.E (ECE)", board: "Madras University", clg: "APEC, Melmaruvathur",yop:"1990",percent:"68",class:"First" },
    { exam: "M.B.A", board: "IGNOU", clg: "New College",yop:"2001",percent:"B-Grade",class:"First" },
    { exam: "M.E", board: "Anna University", clg: "CEG, Guindy",yop:"2010",percent:"B-Grade",class:"First" },
    { exam: "Ph .D", board: "Anna University", clg: "CEG, Guindy",yop:"2018",percent:"-",class:"-" },
    { exam: "M.S.W", board: "IGNOU", clg: "Gurunanak Arts and Science College",yop:"2021",percent:"B-Grade",class:"First" },
    { exam: "H.D.I.N.C.C", board: "NIIT", clg: "NIIT, Parrys",yop:"1998",percent:"61",class:"First"},
]
  
  return (
    <div className="App">
            <table>
                <tr>
                    <th>Name of the Exam</th>
                    <th>Board\University</th>
                    <th>School/College</th>
                    <th>Year of Completion</th>
                    <th>Percentage</th>
                    <th>Class</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.exam}</td>
                            <td>{val.board}</td>
                            <td>{val.clg}</td>
                            <td>{val.yop}</td>
                            <td>{val.percent}</td>
                            <td>{val.class}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
  )
}

export default Education