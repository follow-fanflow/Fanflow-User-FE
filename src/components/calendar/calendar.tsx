import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import dayjs from "dayjs";
import { theme } from "../../styles/theme";
import { PrevIcon } from "../../assets/imgs/Icons/PrevIcon";
import { NextIcon } from "../../assets/imgs/Icons/NextIcon";

const CustomCalendar = styled(Calendar)`
  min-width: none;
  border: none;
  width: 404px;

  .react-calendar__navigation__label > span {
    font-size: 24px;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      color: ${theme.color.black_1};
      font-size: 20px;
    }
  }

  .react-calendar__tile--now {
    background: none;
    font-size: 20px;
  }

  .react-calendar__tile--now:enabled:hover {
    border: 1px solid ${theme.color.zero};
    background-color: ${theme.color.white};
  }

  .react-calendar__tile--now:enabled:focus {
    background-color: ${theme.color.one};
    color: ${theme.color.white};
  }

  .react-calendar__tile {
    font-size: 24px;
    border-radius: 50%;
    height: 57px;
    color: ${theme.color.black_1};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:enabled:hover {
    border: 1px solid ${theme.color.zero};
    background-color: ${theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${theme.color.one};
    color: ${theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .react-calendar__month-view__days__day {
    height: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${theme.color.gray__1};
  }
`;

export const MyCalender = () => {
  const [mark, setMark] = useState([]);

  // const { data } = useQuery(
  //   ["logDate", month],
  //   async () => {
  //     const result = await axios.get(`/api/healthLogs?health_log_type=DIET`);
  //     return result.data;
  //   },
  //   {
  //     onSuccess: (data: any) => {
  //       setMark(data);
  //       // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
  //     },
  //   }
  // );
  const [value, onChange] = useState(new Date());

  return (
    <CustomCalendar
      formatDay={(locale, date) =>
        date.toLocaleString("en", { day: "numeric" })
      }
      selectRange={false}
      nextLabel={<NextIcon />}
      prevLabel={<PrevIcon />}
      next2Label={null}
      prev2Label={null}
      showNeighboringMonth={true}
      tileContent={({ date, view }) => {
        const hardcodedMark = ["2024-02-02", "2024-01-22", "2024-01-29"];

        if (hardcodedMark.find((x) => x === dayjs(date).format("YYYY-MM-DD"))) {
          return (
            <>
              {/* className="flex justify-center items-center absoluteDiv" */}
              <Wrap>
                <Dot className="dot"></Dot>
              </Wrap>
            </>
          );
        }
      }}
    />
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  height: 6px;
  width: 6px;
  top: 0;
  background-color: ${theme.color.zero};
  border-radius: 50%;
`;
