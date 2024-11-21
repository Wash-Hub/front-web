type InfowindowProps = {
  id: string;
  placeName: string;
  roadName: string;
};

export const Infowindow = (info: InfowindowProps) => {
  return `
    <div class="absolute left-3.5 bottom-[25px] w-[300px] h-[89px] ml-[-144px] text-left overflow-hidden text-[12px] leading-[1.5]">
      <div class="relative w-[300px] h-[77px] rounded-[15px] overflow-hidden bg-white border-0 shadow-md">
        <div>
          <div class="flex flex-row justify-between">
            <span class="block font-bold text-[15px] text-gray-800 p-[7px_3px_0_5px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">${info.placeName}</span>
          </div>
          <span class="block font-bold text-[11px] text-gray-800 p-[1px_15px_0_5px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">${info.roadName}</span>
          <div id="${info.id}" class="block font-bold text-[11px] text-blue-500 p-[1px_15px_0_5px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">상세보기</div>
        </div>
      </div>
    </div>
  `;
};
