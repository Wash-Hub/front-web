import { infowindowContainer, infowindowText, infowindowTitle, infowindowWrapper } from './infowidnow.css';

export const Infowindow = (info: any) => {
  return `
    <div class="${infowindowContainer}">
      <div class="${infowindowWrapper}">
        <div class="${infowindowTitle}">
          <span class="${infowindowText({ fontSize: 'large' })}">${info.placeName}</span>
          // <span class="${infowindowText({ fontSize: 'small' })}">리뷰 ${info.placeName}</span>  
        </div>
        <span class="${infowindowText({ fontSize: 'medium' })}">${info.roadName}</span>
        <div id="${info.id}" class="${infowindowText({ fontSize: 'link' })}">상세보기</div>
      </div>
    </div>
  `;
};
