import { useSelector, useDispatch } from "react-redux";
import { setDate } from "@/redux/dateSlice";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarDisplay = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const selectedDate = useSelector((state) => state.date.selectedDate);
  const dispatch = useDispatch();

  const dateToShow = new Date(selectedDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handelDateClicked = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <button
        className="px-4 py-2 rounded-full bg-primary text-background font-medium shadow-md cursor-pointer"
        onClick={handelDateClicked}
      >
        {dateToShow}
      </button>
      {showCalendar && (
        <div className="mt-2 rounded-xl border bg-background p-4 shadow-lg">
          <Calendar
            mode="single"
            selected={new Date(selectedDate)}
            onSelect={(date) => {
              if (date) dispatch(setDate(date.toISOString()));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarDisplay;
