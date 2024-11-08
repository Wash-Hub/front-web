type InfowindowProps = {
  id: string;
  placeName: string;
  roadName: string;
  reviewCount: number;
};

export const Infowindow = (info: InfowindowProps) => {
  return `
    <div class="absolute left-[0.9rem] bottom-[35px] w-[300px] h-[89px] ml-[-144px] text-left overflow-hidden text-[12px] leading-[1.5]">
      <div class="relative w-[300px] h-[77px] rounded-[15px] overflow-hidden bg-white shadow-md">
        <div class="absolute left-[40%] bottom-0 w-[22px] h-[12px] bg-[url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')]"></div>
        <div class="flex flex-row justify-between">
          <span class="block text-[#333] font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer text-[15px] py-[7px] px-[3px]">${info.placeName}</span>
          <!-- <span class="block text-[#004c80] font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer text-[10px] py-[11px] px-[18px]">리뷰 ${info.reviewCount}</span> -->
        </div>
        <span class="block text-[#333] font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer text-[11px] py-[1px] px-[15px]">${info.roadName}</span>
        <div id="${info.id}" class="block text-[#004c80] font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer text-[11px] px-[15px]">상세보기</div>
      </div>
    </div>
  `;
};
