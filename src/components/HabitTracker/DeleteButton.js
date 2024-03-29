import React from "react";
const axios = require("axios");

const handleDelete = async (user, habitList, setHabitList) => {
  if (user === "guest") {
    setHabitList(
      habitList.filter((habit) => {
        return !habit.deleteHabit ? { ...habit } : null;
      })
    );
  } else {
    const deleteHabitIDs = [];
    for (let habit = 0; habit < habitList.length; habit++) {
      if (habitList[habit].deleteHabit) {
        deleteHabitIDs.push(habitList[habit]._id);
      }
      if (habit === habitList.length - 1) {
        await axios
          .post(
            `${process.env.REACT_APP_DOMAIN}/habits/` +
              user.habitDataID +
              "/delete",
            {
              deleteHabitIDs: deleteHabitIDs,
            }
          )
          .then((res) => setHabitList(res.data));
      }
    }
  }
};

export const DeleteButton = ({ user, habitList, setHabitList }) => {
  if (habitList?.length > 0 && habitList.some((habit) => habit.deleteHabit)) {
    return (
      <div>
        <button
          className="deleteButton"
          onClick={() => handleDelete(user, habitList, setHabitList)}
        >
          Delete habit?
        </button>
      </div>
    );
  } else {
    return "";
  }
};
