import React, { useEffect, useState } from "react";
import "../css/HabitTracker.css";
import Metadata from "../components/HabitTracker/Metadata";
import { LogIn } from "../components/HabitTracker/LogIn";
import { Header } from "../components/HabitTracker/Header";
import { AddHabit } from "../components/HabitTracker/AddHabit";
import { DeleteButton } from "../components/HabitTracker/DeleteButton";
import { HabitTable } from "../components/HabitTracker/HabitTable";
const axios = require("axios");

function HabitTracker() {
  const [habitList, setHabitList] = useState([]);
  const [monthView, setMonthView] = useState(new Date());
  const [user, setUser] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted && user && user !== "guest") {
      axios
        .get("https://www.nikzprojects.com/apis/habits/" + user.habitDataID)
        .then(response => {
          setHabitList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else if (mounted && !user) {
      axios
        .get("https://www.nikzprojects.com/apis/habits/")
        .then(response => {
          setHabitList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    return () => (mounted = false);
  }, [user]);

  return (
    <>
      <Metadata />
      <div className="habitTracker">
        {!user ? (
          <LogIn setUser={setUser} />
        ) : (
          <>
            <Header
              user={user}
              setUser={setUser}
              monthView={monthView}
              setMonthView={setMonthView}
            />
            <AddHabit
              user={user}
              habitList={habitList}
              setHabitList={setHabitList}
            />
            <DeleteButton
              user={user}
              habitList={habitList}
              setHabitList={setHabitList}
            />
            <HabitTable
              user={user}
              monthView={monthView}
              habitList={habitList}
              setHabitList={setHabitList}
            />
          </>
        )}
      </div>
    </>
  );
}
export default HabitTracker;
