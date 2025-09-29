import React, { useState} from "react";
import "../styles/ta_schedule_table.css";

const TAScheduleTable = () => {
    const defaultSchedule = [
      {
        day: "Monday",
        date: "2-Dec-2024",
        shifts: ["05 PM TO 08 PM", "08 PM TO 11 PM"],
      },
      {
        day: "Tuesday",
        date: "3-Dec-2024",
        shifts: ["05 PM TO 08 PM", "08 PM TO 11 PM"],
      },
      {
        day: "Wednesday",
        date: "4-Dec-2024",
        shifts: ["05 PM TO 08 PM", "08 PM TO 11 PM"],
      },
      {
        day: "Thursday",
        date: "5-Dec-2024",
        shifts: ["05 PM TO 08 PM", "08 PM TO 11 PM"],
      },
      {
        day: "Friday",
        date: "29-Nov-2024",
        shifts: ["05 PM TO 08 PM", "08 PM TO 11 PM"],
      },
      {
        day: "Saturday",
        date: "30-Nov-2024",
        shifts: ["10 AM TO 01 PM", "01 PM TO 04 PM", "04 PM TO 07 PM"],
      },
      {
        day: "Sunday",
        date: "1-Dec-2024",
        shifts: ["10 AM TO 01 PM"],
      },
    ];
  
    const teamMembers = [
      "Fathima Mundeth",
      "Mallineni Rithvik",
      "Abhinay Rathore",
      "Ganedi Satya Harika",
      "Kiran M V",
      "B.Aakanksha",
      "Jonnalagadda Nikhila",
      "Enjam Suma",
    ];
  
    const [schedule] = useState(defaultSchedule);
  
    return (
      <div className="schedule-container bg-transparent">
        <h1>TA Schedule</h1>
        <table>
          <thead>
            <tr>
              <th>Shift</th>
              {schedule.map((day, index) => (
                <th key={index} colSpan={day.shifts.length}>
                  <div className="day-date">
                    <div className="day">{day.day}</div>
                    <div className="date">{day.date}</div>
                  </div>
                </th>
              ))}
              <th>Total Work Hour (Week)</th>
            </tr>
            <tr>
              <td>Time</td>
              {schedule.map((day, index) =>
                day.shifts.map((shift, i) => (
                  <th key={`${index}-${i}`} className="shift-time">
                    {shift}
                  </th>
                ))
              )}
              <td></td>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, idx) => (
              <tr key={idx}>
                <td className="team-member-name">{member}</td>
                {schedule.map((day) =>
                  day.shifts.map((_, i) => <td key={i}></td>)
                )}
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TAScheduleTable;