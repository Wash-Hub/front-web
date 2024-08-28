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

export interface location {
  latitude: number;
  longitude: number;
}

export type MapScript = (
  lat: number,
  lng: number,
  marker: {
    lat: number;
    lng: number;
    title: string;
    id: string;
  }[]
) => void;

type JwtPayload = {
  userId: String;
};
