import React, { useState } from "react";
const axios = require("axios");
const { v4: uuid } = require("uuid");

export const AddHabit = ({ user, habitList, setHabitList }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newHabit = {
      name: userInput,
      deleteHabit: false,
      completionData: [],
    };

    if (user === "guest") {
      newHabit._id = uuid();
      setHabitList([...habitList, newHabit]);
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_DOMAIN}/habits/` + user.habitDataID + "/add",
          newHabit
        )
        .then((res) => setHabitList(res.data));
    }
    setUserInput("");
  };

  return (
    <h3>
      Add a habit:
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={userInput}
            type="text"
            placeholder=""
            onChange={handleChange}
          />
        </form>
      </div>
    </h3>
  );
};
