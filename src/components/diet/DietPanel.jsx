import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Bot } from "lucide-react";

const DietPanel = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center py-4 px-2 bg-red-500">
      <Button variant="outline" className="flex gap-2 items-center">
        <Plus size={18} />
        Diet
      </Button>

      <Button variant="outline" className="flex gap-2 items-center">
        <Copy size={18} />
        Copy
      </Button>

      <Button variant="outline" disabled className="flex gap-2 items-center">
        <Bot size={18} />
        AI
      </Button>
    </div>
  );
};

export default DietPanel;
