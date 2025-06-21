import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "@/redux/dateSlice";

const CalendarDisplay = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.selectedDate);

  const [isMobile, setIsMobile] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleDateClick = () => {
    if (isMobile) {
      setShowCalendar((prev) => !prev);
    }
  };

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date.toISOString()));
    if (isMobile) setShowCalendar(false);
  };

  const formattedDate = new Date(selectedDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div className="w-[250px]">
        <div
          onClick={handleDateClick}
          className="bg-muted text-sm font-medium px-4 py-2 rounded-md shadow cursor-pointer text-center"
        >
          {formattedDate}
        </div>
        {(!isMobile || showCalendar) && (
          <div className="mt-2">
            <Calendar
              mode="single"
              selected={new Date(selectedDate)}
              onSelect={handleDateChange}
              className="border-none shadow-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDisplay;
