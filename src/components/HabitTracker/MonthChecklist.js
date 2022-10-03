import React, { useState } from "react";
const axios = require("axios");

export const MonthChecklist = ({
  user,
  monthView,
  habitList,
  setHabitList,
}) => {
  const [togglePercent, setTogglePercent] = useState();

  async function handleChange({ id, day }) {
    const year = monthView.getFullYear();
    const month = monthView.getMonth();
    let date = new Date(year, month, day);
    let dateID =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    habitList.map(async (habit) => {
      if (habit._id.toString() === id) {
        let completeData = habit.completionData.find(
          (data) => data.date === dateID
        );
        let completeStatus = "";
        if (completeData) {
          completeStatus = completeData.complete;
        }
        switch (completeStatus) {
          case "complete":
            completeStatus = "skipped";
            break;
          case "skipped":
            completeStatus = "missed";
            break;
          case "missed":
            completeStatus = "";
            break;
          default:
            completeStatus = "complete";
        }
        const newData = {
          date: dateID,
          complete: completeStatus,
        };
        if (user !== "guest") {
          axios
            .post(
              `${process.env.REACT_APP_DOMAIN}/habits/` +
                user.habitDataID +
                "/update/" +
                id,
              {
                newData: newData,
              }
            )
            .catch(function (error) {
              console.log(error);
            });
        }
        if (!habit.completionData.find((data) => data.date === newData.date)) {
          habit.completionData.push(newData);
        } else {
          habit.completionData = habit.completionData.map((data) => {
            return data.date === newData.date ? newData : data;
          });
        }

        return { ...habit };
      } else {
        return { ...habit };
      }
    });
    setHabitList([...habitList]);
  }

  function listCheckboxes({ user, monthView, habitList, setHabitList, day }) {
    const year = monthView.getFullYear();
    const month = monthView.getMonth();
    let date = new Date(year, month, day);
    let dateID =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    const chooseSymbol = (completeStatus) => {
      let completeSymbol = "";
      switch (completeStatus) {
        case "complete":
          completeSymbol = "✓";
          break;
        case "skipped":
          completeSymbol = "–";
          break;
        case "missed":
          completeSymbol = "✕";
          break;
        default:
          break;
      }
      return completeSymbol;
    };

    let checkboxes = habitList.map((habit) => {
      let completeStatus = "";
      let completeData = habit.completionData.find(
        (data) => data.date === dateID
      );
      if (completeData) {
        completeStatus = completeData.complete;
      }

      return (
        <td
          className={`${completeStatus} + hoverable`}
          key={habit._id + "." + day}
          onClick={() => {
            handleChange({
              id: habit._id,
              day,
            });
          }}
        >
          {chooseSymbol(completeStatus)}
        </td>
      );
    });
    return checkboxes;
  }

  function calcTotals(monthView, habitList, days, togglePercent) {
    const year = monthView.getFullYear();
    const month = monthView.getMonth();

    const dayTotalArray = [];
    const weekLengthArray = [];
    var weekLength = 0;
    var weekTotal = 0;
    const weekTotalArray = [];
    var monthTotal = 0;
    var monthLength = 0;

    for (let day = 1; day <= days; day++) {
      let dayTotal = 0;

      let date = new Date(year, month, day);
      let dateID =
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
      for (let habit = 0; habit < habitList.length; habit++) {
        let completeData = habitList[habit].completionData.find(
          (data) => data.date === dateID
        );
        let completeStatus = "";
        if (completeData) {
          completeStatus = completeData.complete;
        }
        weekLength++;
        if (completeStatus === "complete") {
          dayTotal++;
          weekTotal++;
          monthTotal++;
        }
      }
      if (date.getDay() === 0) {
        // Handle weekend-only weeks:
        if (weekLength / habitList.length <= 2) {
          togglePercent
            ? (weekTotal += 1 * habitList.length)
            : (weekTotal += 0);
          weekLength = 1;
        } else {
          weekLength = weekLength / habitList.length - 2;
        }
        weekTotalArray.push(weekTotal);
        weekLengthArray.push(weekLength);
        monthLength += weekLength;
        weekTotal = 0;
        weekLength = 0;
      }
      dayTotalArray.push(dayTotal);
    }
    return {
      dayTotalArray: dayTotalArray,
      weekTotalArray: weekTotalArray,
      weekLengthArray: weekLengthArray,
      monthTotal: monthTotal,
      monthLength: monthLength,
    };
  }

  function formatTotal({
    total,
    maximum,
    type,
    togglePercent,
    setTogglePercent,
  }) {
    let defaultColor = type === "day" ? "#222b35" : "#333f4f";
    let percent = (total * 100) / maximum;

    const formatValue = (total, percent, type, togglePercent) => {
      if (type === "day") {
        return total;
      } else {
        return togglePercent ? Number(percent.toFixed(0)) + "%" : total;
      }
    };

    return (
      <td
        className={type !== "day" ? "hoverable + togglePercent" : ""}
        style={
          total === 0
            ? { backgroundColor: `${defaultColor}` }
            : { backgroundColor: `rgb(0,156,57,${total / maximum}` }
        }
        onClick={() =>
          type !== "day"
            ? setTogglePercent((togglePercent = !togglePercent))
            : ""
        }
      >
        {formatValue(total, percent, type, togglePercent)}
      </td>
    );
  }

  const year = monthView.getFullYear();
  const month = monthView.getMonth();
  const days = 32 - new Date(year, month, 32).getDate();
  const daysArray = [...Array(days).keys()];

  const totals = calcTotals(monthView, habitList, days, togglePercent);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var week = 0;
  let newDaysArray = daysArray.map((day, index) => {
    day += 1;
    let date = new Date(year, month, day);
    return (
      <React.Fragment key={index}>
        <tr>
          <td className="inactiveCells">
            {day} - {dayNames[date.getDay()]}
          </td>
          {listCheckboxes({
            user,
            monthView,
            habitList,
            setHabitList,
            day,
          })}
          {formatTotal({
            total: totals.dayTotalArray[day - 1],
            maximum: habitList.length,
            type: "day",
          })}
        </tr>

        {date.getDay() === 0 ? (
          <tr>
            <td className="inactiveCells" colSpan={habitList.length + 1}>
              Week {(week += 1)} Total:
            </td>
            {formatTotal({
              total: totals.weekTotalArray[week - 1],
              maximum: habitList.length * totals.weekLengthArray[week - 1],
              type: "week",
              togglePercent,
              setTogglePercent,
            })}
          </tr>
        ) : null}

        {day === daysArray.length ? (
          <tr>
            <td className="inactiveCells" colSpan={habitList.length + 1}>
              Month Total:
            </td>
            {formatTotal({
              total: totals.monthTotal,
              maximum: totals.monthLength * habitList.length,
              type: "month",
              togglePercent,
              setTogglePercent,
            })}
          </tr>
        ) : null}
      </React.Fragment>
    );
  });
  return newDaysArray;
};
