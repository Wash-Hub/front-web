export interface LoginState {
  isLogin: boolean | DefaultValue | null;
}

export interface LoginModalState {
  isModalOpen: boolean;
}

export interface MenuState {
  isMyPageOpened?: boolean;
  isOpened?: boolean;
}

export interface MyPageState {
  isDropdownMenuOpened: boolean;
}

export interface ReviewState {
  isImgModalOpen: boolean;
  selectedImg: string;
  isOpened: boolean;
}

export interface SidebarState {
  isActiveDetail: boolean;
  isActiveReview: boolean;
  isActiveSearch: boolean;
}

export type ReviewImg = string | ArrayBuffer | null;

export type dropdownRef = HTMLDivElement | null;

export type customoverlay = kakao.maps.CustomOverlay | null;

export interface location {
  latitude: number;
  longitude: number;
}

export type MapScript = (lat: number, lng: number, draggable: boolean) => void;

type JwtPayload = {
  userId: String;
};

export interface debounce {
  (map: kakao.maps.Map, locate: location, setLocate: SetterOrUpdater<location>): void;
}

export interface userInfo {
  name: string;
  email: string;
  nickname: string;
  profileImg: string;
  id: string;
}
