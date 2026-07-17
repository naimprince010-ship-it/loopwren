import React from "react";
import { MockupWindow } from "./MockupWindow";
import { Store, Stethoscope, Pill, ShoppingCart, GraduationCap, Users, Landmark } from "lucide-react";

// Common UI elements for the mockups to look like a dashboard
const Sidebar = ({ activeColor = "#38B6A6" }) => (
  <div className="w-16 h-full bg-[#12162C] flex flex-col items-center py-6 gap-4 border-r border-[#1C2148]/20 flex-shrink-0">
    <div className="w-8 h-8 rounded bg-[#F3EFE7]/10 mb-4" />
    <div className="w-6 h-6 rounded bg-[#F3EFE7]/20" />
    <div className="w-6 h-6 rounded" style={{ backgroundColor: activeColor }} />
    <div className="w-6 h-6 rounded bg-[#F3EFE7]/20" />
    <div className="w-6 h-6 rounded bg-[#F3EFE7]/20 mt-auto" />
  </div>
);

const Header = () => (
  <div className="h-12 border-b border-gray-100 flex items-center px-6 gap-4 flex-shrink-0 bg-white">
    <div className="h-4 w-32 bg-gray-100 rounded" />
    <div className="ml-auto h-6 w-32 bg-gray-50 rounded-full" />
    <div className="w-6 h-6 rounded-full bg-gray-200" />
  </div>
);

export const PosMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#E8A33D" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex gap-6 bg-gray-50">
          {/* Main POS Grid */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-10 bg-white rounded shadow-sm border border-gray-100 flex items-center px-4">
              <div className="h-3 w-48 bg-gray-100 rounded" />
            </div>
            <div className="grid grid-cols-3 gap-4 flex-1">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-white rounded shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#E8A33D]/20 mb-2" />
                  <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                  <div className="h-3 w-10 bg-[#1C2148]/80 rounded" />
                </div>
              ))}
            </div>
          </div>
          {/* Cart / Receipt Area */}
          <div className="w-64 bg-white rounded shadow-sm border border-gray-100 flex flex-col">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <Store className="w-5 h-5 text-[#E8A33D]" />
            </div>
            <div className="flex-1 p-4 space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-2 w-20 bg-gray-100 rounded" />
                  <div className="h-2 w-8 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 mt-auto border-t border-gray-100">
              <div className="h-8 bg-[#1C2148] rounded w-full flex items-center justify-center">
                <div className="h-2 w-12 bg-white/50 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);

export const HospitalMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#38B6A6" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex flex-col gap-6 bg-gray-50">
          <div className="flex gap-4">
            <div className="flex-1 h-24 bg-white rounded shadow-sm border border-gray-100 p-4 flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-6 w-12 bg-[#38B6A6] rounded" />
              </div>
              <Stethoscope className="w-8 h-8 text-[#38B6A6]/40" />
            </div>
            <div className="flex-1 h-24 bg-white rounded shadow-sm border border-gray-100 p-4" />
            <div className="flex-1 h-24 bg-white rounded shadow-sm border border-gray-100 p-4" />
          </div>
          <div className="flex-1 bg-white rounded shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="h-4 w-48 bg-gray-200 rounded mb-6" />
            <div className="flex-1 border border-gray-100 rounded flex overflow-hidden">
              <div className="w-20 bg-gray-50 border-r border-gray-100 p-2 space-y-4">
                {[1,2,3,4].map(i => <div key={i} className="h-3 w-full bg-gray-200 rounded" />)}
              </div>
              <div className="flex-1 p-4 grid grid-cols-5 gap-2 relative">
                <div className="col-span-2 row-start-1 h-12 bg-[#38B6A6]/20 rounded border border-[#38B6A6]/40" />
                <div className="col-span-1 row-start-2 h-16 bg-[#E8A33D]/20 rounded border border-[#E8A33D]/40" />
                <div className="col-span-3 row-start-3 h-10 bg-[#1C2148]/20 rounded border border-[#1C2148]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);

export const PharmacyMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#38B6A6" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex flex-col gap-6 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="h-6 w-48 bg-gray-200 rounded" />
            <div className="h-8 w-32 bg-[#38B6A6] rounded" />
          </div>
          <div className="flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="h-10 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-4">
              <div className="h-2 w-8 bg-gray-200 rounded" />
              <div className="h-2 w-32 bg-gray-200 rounded" />
              <div className="h-2 w-20 bg-gray-200 rounded ml-auto" />
              <div className="h-2 w-16 bg-gray-200 rounded" />
            </div>
            <div className="flex-1 p-4 space-y-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <Pill className="w-5 h-5 text-[#38B6A6]" />
                  <div className="h-2 w-24 bg-[#1C2148] rounded" />
                  <div className="h-2 w-48 bg-gray-100 rounded" />
                  <div className="h-2 w-16 bg-[#E8A33D]/80 rounded ml-auto" />
                  <div className="h-4 w-12 bg-gray-100 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);

export const EcommerceMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#E8A33D" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex flex-col gap-6 bg-gray-50">
          <div className="grid grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-20 bg-white rounded shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
                <div className="h-2 w-16 bg-gray-200 rounded" />
                <div className="h-5 w-24 bg-[#1C2148] rounded" />
              </div>
            ))}
          </div>
          <div className="flex-1 flex gap-6">
            <div className="flex-[2] bg-white rounded shadow-sm border border-gray-100 p-6 flex flex-col">
              <div className="flex justify-between mb-8">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <ShoppingCart className="w-5 h-5 text-[#E8A33D]" />
              </div>
              <div className="flex-1 flex items-end gap-2 px-4">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#38B6A6]/20 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white rounded shadow-sm border border-gray-100 p-4 space-y-4">
              <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-full bg-gray-200 rounded" />
                    <div className="h-2 w-1/2 bg-gray-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);

export const EdtechMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#38B6A6" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex gap-6 bg-gray-50">
          <div className="flex-[2] flex flex-col gap-6">
            <div className="h-40 bg-[#1C2148] rounded shadow-sm p-6 flex flex-col justify-end relative overflow-hidden">
              <GraduationCap className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
              <div className="h-6 w-48 bg-white/90 rounded mb-2" />
              <div className="h-3 w-64 bg-white/50 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-white rounded shadow-sm border border-gray-100 p-4 flex flex-col">
                  <div className="h-16 bg-gray-50 rounded mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#38B6A6]/20" />
                  </div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-gray-100 rounded mt-auto" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-white rounded shadow-sm border border-gray-100 p-4">
            <div className="h-4 w-32 bg-gray-200 rounded mb-6" />
            <div className="space-y-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex gap-3 border-b border-gray-50 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                  <div className="flex-1 py-1 space-y-2">
                    <div className="h-2 w-20 bg-gray-200 rounded" />
                    <div className="h-2 w-12 bg-[#E8A33D] rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);

export const SomitiMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#38B6A6" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex flex-col gap-6 bg-gray-50">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <div className="h-3 w-24 bg-gray-400 rounded" />
              <div className="h-8 w-40 bg-[#1C2148] rounded" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-24 bg-white border border-gray-200 rounded" />
              <div className="h-8 w-24 bg-[#38B6A6] rounded" />
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1 h-20 bg-white rounded border-l-4 border-[#38B6A6] shadow-sm p-4 flex flex-col justify-between">
              <div className="h-2 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-800 rounded" />
            </div>
            <div className="flex-1 h-20 bg-white rounded border-l-4 border-[#E8A33D] shadow-sm p-4 flex flex-col justify-between">
              <div className="h-2 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-800 rounded" />
            </div>
            <div className="flex-1 h-20 bg-white rounded border-l-4 border-[#1C2148] shadow-sm p-4 flex flex-col justify-between">
              <div className="h-2 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-800 rounded" />
            </div>
          </div>

          <div className="flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <div className="h-3 w-32 bg-gray-300 rounded" />
               <Users className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex-1 p-4 space-y-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gray-100" />
                  <div className="h-3 w-32 bg-gray-300 rounded" />
                  <div className="h-2 w-20 bg-gray-200 rounded ml-auto" />
                  <div className="h-3 w-16 bg-[#38B6A6] rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);

export const BankingMockup = () => (
  <MockupWindow>
    <div className="flex h-full w-full">
      <Sidebar activeColor="#1C2148" />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 flex gap-6 bg-gray-50">
          <div className="w-64 bg-[#1C2148] rounded shadow-sm p-6 text-white flex flex-col">
            <Landmark className="w-8 h-8 text-[#E8A33D] mb-6" />
            <div className="h-2 w-16 bg-white/40 rounded mb-2" />
            <div className="h-6 w-32 bg-white rounded mb-8" />
            
            <div className="space-y-4">
              <div className="h-10 bg-white/10 rounded" />
              <div className="h-10 bg-white/10 rounded" />
              <div className="h-10 bg-white/10 rounded" />
            </div>
            
            <div className="mt-auto h-20 bg-gradient-to-r from-[#E8A33D]/20 to-transparent rounded p-4 border border-[#E8A33D]/30">
               <div className="h-2 w-12 bg-white/60 rounded mb-2" />
               <div className="h-4 w-20 bg-[#E8A33D] rounded" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-32 bg-white rounded shadow-sm border border-gray-100 p-6 flex flex-col justify-center gap-4">
              <div className="h-3 w-40 bg-gray-200 rounded" />
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-[#38B6A6]/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-[#38B6A6]" />
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#38B6A6]" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-100 flex gap-6 text-sm text-gray-400">
                <div className="h-2 w-24 bg-gray-200 rounded" />
                <div className="h-2 w-24 bg-gray-200 rounded" />
                <div className="h-2 w-24 bg-gray-200 rounded" />
              </div>
              <div className="flex-1 p-4 space-y-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="h-2 w-16 bg-gray-200 rounded" />
                    <div className="flex-1 h-2 bg-gray-100 rounded" />
                    <div className="h-2 w-20 bg-gray-300 rounded" />
                    <div className="h-2 w-16 bg-[#1C2148] rounded text-right" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupWindow>
);
