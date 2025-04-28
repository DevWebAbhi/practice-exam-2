import React from 'react'

const StudentCard = ({data}) => {
   // console.log(data)
  return (
    <div>
        <h3>{data.name}</h3>
        <p>age :{data.age}</p>
        <p>gender :{data.gender}</p>
        <p>grade :{data.grade}</p>
        <p>email :{data.email}</p>
    </div>
  )
}

export default StudentCard