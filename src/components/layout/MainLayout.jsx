import Header from "./Header";
import CalendarDisplay from "../calendar/CalendarDisplay";
const MainLayout = () => {
  return (
    <div className="piy-home-body m-1">
      <Header />
      <div className="piy-main-layout w-[95%] mx-auto my-2 flex flex-col bg-amber-700 ">
        <div className="piy-date-container flex justify-center items-center bg-amber-800 p-2">
          <CalendarDisplay></CalendarDisplay>
        </div>
        <div className="piy-work-diet-container w-full flex flex-col gap-2 lg:flex-row px-3 py-3">
          <div className="flex-1 bg-amber-600 p-4 rounded-lg">work left</div>
          <div className="flex-1 bg-amber-600 p-4 rounded-lg">diet right</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
