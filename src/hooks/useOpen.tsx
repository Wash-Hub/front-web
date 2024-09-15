import { useRecoilState } from 'recoil';
import { menuState } from '../recoil/atoms/menuState';
import { sidebarState } from '../recoil/atoms/sidebarState';
import { reviewState } from '../recoil/atoms/reviewState';

export const useOpen = () => {
  const [, setIsOpened] = useRecoilState(menuState);
  const [, setIsMyPageOpened] = useRecoilState(menuState);
  const [isActiveSearch, setIsActiveSearch] = useRecoilState(sidebarState);
  const [, setReview] = useRecoilState(reviewState);
  const [, setIsActiveDetail] = useRecoilState(sidebarState);
  const [, setIsActiveReview] = useRecoilState(sidebarState);

  const MenuControllMenu = () => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: !prevState.isOpened }));
    setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: false }));
    setReview((prev) => ({ ...prev, isOpened: false }));
    setIsMyPageOpened((prevState) => ({ ...prevState, isMyPageOpened: false }));
  };

  const MenuControlldetail = () => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: true }));
    setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: false }));
    setReview((prev) => ({ ...prev, isOpened: false }));
    setIsMyPageOpened((prevState) => ({ ...prevState, isMyPageOpened: false }));
  };

  const MenuControllMyPage = () => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: false }));
    setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: false }));
    setReview((prev) => ({ ...prev, isOpened: false }));
    setIsMyPageOpened((prevState) => ({ ...prevState, isMyPageOpened: !prevState.isMyPageOpened }));
  };

  const MenuControllSearch = () => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: false }));
    isActiveSearch.isActiveSearch
      ? setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: true }))
      : setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: !prevState.isActiveSearch }));
    setReview((prev) => ({ ...prev, isOpened: false }));
    setIsMyPageOpened((prevState) => ({ ...prevState, isMyPageOpened: false }));
  };

  const MenuControllDetail = () => {
    setIsActiveDetail((prevState) => ({ ...prevState, isActiveDetail: true }));
    setIsActiveReview((prevState) => ({ ...prevState, isActiveReview: false }));
  };

  const MenuControllReview = () => {
    setIsActiveDetail((prevState) => ({ ...prevState, isActiveDetail: false }));
    setIsActiveReview((prevState) => ({ ...prevState, isActiveReview: true }));
  };

  return {
    MenuControllMenu,
    MenuControllMyPage,
    MenuControllSearch,
    MenuControllReview,
    MenuControllDetail,
    MenuControlldetail,
  };
};
