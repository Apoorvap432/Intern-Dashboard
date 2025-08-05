import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "../components/Header";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "",
    referralCode: "",
    donations: 0,
  });

  useEffect(() => {
    // Simulate fetch from backend
    setTimeout(() => {
      setUser({
        name: "Apoorva Panwar",
        referralCode: "apoorva2025",
        donations: 1500,
      });
    }, 500);
  }, []);
  
  useEffect(() => {
  // This still sets data even if user clicks "Dashboard" again
  setUser({
    name: "Apoorva Panwar",
    referralCode: "apoorva2025",
    donations: 1500,
  });
}, []);

  return (
    <>
    <Header/>
    <div className="dashboard-container">
      <h1>Welcome, {user.name} 👋</h1>
      <div className="info-box">
        <p><strong>Referral Code:</strong> {user.referralCode}</p>
        <p><strong>Total Donations Raised:</strong> ₹{user.donations}</p>
      </div>

      <h2>Rewards & Unlockables</h2>
      <div className="rewards-section">
        <div className="reward-card">
          <h3>₹500 Raised</h3>
          <p>Unlocked: Certificate</p>
        </div>
        <div className="reward-card">
          <h3>₹1000 Raised</h3>
          <p>Unlocked: T-shirt</p>
        </div>
        <div className="reward-card">
          <h3>₹2000 Raised</h3>
          <p>Locked</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
