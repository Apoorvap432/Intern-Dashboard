import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import Header from "../components/Header";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Dummy static data (could be fetched from backend later)
    const dummyData = [
      { name: "Apoorva Panwar", referral: "apoorva2025", donations: 1500 },
      { name: "Riya Mehta", referral: "riya2025", donations: 1350 },
      { name: "Rahul Kumar", referral: "rahul2025", donations: 1200 },
      { name: "Sneha Roy", referral: "sneha2025", donations: 1100 },
      { name: "Arjun Verma", referral: "arjun2025", donations: 900 },
    ];
    setLeaderboard(dummyData);
  }, []);

  return (
    <>
    <Header />
    <div className="leaderboard-container">
      <h1>Top Interns Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.referral}</td>
              <td>₹{user.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Leaderboard;
