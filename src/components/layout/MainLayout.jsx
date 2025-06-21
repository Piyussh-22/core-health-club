import Header from "./Header";
import CalendarDisplay from "../calendar/CalendarDisplay";
import WorkoutPanel from "../workout/WorkoutPanel";
import DietPanel from "../diet/DietPanel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const MainLayout = () => {
  return (
    <div className="piy-home-body m-1">
      <Header />
      <div className="piy-main-layout w-[95%] mx-auto my-2 flex flex-col bg-amber-700 ">
        <div className="w-full flex flex-col lg:flex-row gap-4 px-3 py-3">
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <CalendarDisplay />
          </div>

          <div className="w-full lg:w-3/5">
            <Tabs defaultValue="workout" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="workout">Workout</TabsTrigger>
                <TabsTrigger value="diet">Diet</TabsTrigger>
              </TabsList>

              <TabsContent value="workout">
                <WorkoutPanel />
              </TabsContent>

              <TabsContent value="diet">
                <DietPanel />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
