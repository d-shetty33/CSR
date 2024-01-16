import React, { useEffect, useState } from "react";
import "./Event2.css";
import { database } from "../../../config/appwrite";


const Event2 = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await database.listDocuments(
      "658fb4872811d10690cc",
      "659ae042bb91df79de32"
    );
    setData(res.documents);
  }
  return (
    <div className="events1">
      {data.map((e, i) => (
        <div className={"event" + (i + 1)}>
          <div className={"btn" + (i + 1)}>Upcoming</div>
          <div className="task4">{e.name}</div>
          <div className="date4">{e.date}</div>
        </div>
      ))}

      <b className="head1">Your Events</b>
    </div>
  );
};

export default Event2;



// import React from 'react'
// import './Event2.css'

// const Event2 = () => {
//   return (
//     <div className="events1">
//       <div className="event6">
//         <div className="btn6">Completed</div>
//         <div className="task6">Human Rights - ABC Company</div>
//         <div className="date6">On June 20 2023</div>
//       </div>
//       <div className="event5">
//         <div className="btn5">Upcoming</div>
//         <div className="task6">Poverty & Gender Equality - XYZ Company</div>
//         <div className="date6">On May 26 2024</div>
//       </div>
//       <div className="event4">
//         <div className="btn4">Completed</div>
//         <div className="date4">On July 21 2023</div>
//         <div className="task4">Labor practices - MNN Company</div>
//       </div>
//       <div className="event3">
//         <button className="btn3">Ongoing</button>
//         <div className="date4">On December 2 2023</div>
//         <div className="task4">Education & Livelihood - JIK Company</div>
//       </div>
//       <div className="event2">
//         <div className="btn2">Upcoming</div>
//         <div className="date4">On January 20 2024</div>
//         <div className="task4">Environment & Animal Welfare - EFG Company</div>
//       </div>
//       <div className="event1">
//         <div className="btn1">Ongoing</div>
//         <div className="date4">on December 4 2023</div>
//         <div className="task4">Health & Poverty - HIJ Company</div>
//       </div>
//       <b className="head1">Your Events</b>
//     </div>
//   )
// }

// export default Event2