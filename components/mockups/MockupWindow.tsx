import React from "react";

export function MockupWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col rounded-xl overflow-hidden border border-[#1C2148]/20 bg-[#F3EFE7] shadow-xl">
      {/* Top Bar / Browser Frame */}
      <div className="h-8 bg-[#1C2148] flex items-center px-4 gap-2 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#E8A33D]/50" />
        <div className="w-3 h-3 rounded-full bg-[#E8A33D]/50" />
        <div className="w-3 h-3 rounded-full bg-[#E8A33D]/50" />
      </div>
      
      {/* Dashboard Body */}
      <div className="flex-1 relative bg-white">
        {children}
      </div>
    </div>
  );
}
