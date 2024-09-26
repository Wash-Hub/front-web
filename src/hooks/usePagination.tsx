import { useRecoilState } from 'recoil';
import { searchState } from '../recoil/atoms/searchState';
import { useOpen } from './useOpen';
import { myPagePaginationState } from '../recoil/atoms/myPageState';

export const usePagination = (menu: string) => {
  const { MenuControllMyPage, MenuControllSearch, Close } = useOpen();
  const [searchPage, setSearchPage] = useRecoilState(searchState);
  const [myPage, setMyPage] = useRecoilState(myPagePaginationState);
  const refreshSearch = () => {
    Close();
    setTimeout(() => {
      MenuControllSearch();
    }, 0);
  };
  const refreshMyPage = () => {
    Close();
    setTimeout(() => {
      MenuControllMyPage();
    }, 0);
  };
  const onClickPrevious = (noPrev: boolean, pageCount: number) => {
    if (noPrev) return;
    if (menu === 'mypage') {
      setMyPage((prev) => ({ ...prev, page: Math.max(1, myPage.page - pageCount) }));
      refreshMyPage();
    }
    if (menu === 'search') {
      setSearchPage((prev) => ({ ...prev, page: Math.max(1, searchPage.page - pageCount) }));
      refreshSearch();
    }
  };

  const onClickNext = (noNext: boolean, totalPages: number, pageCount: number) => {
    if (noNext) return;
    if (menu === 'mypage') {
      setMyPage((prev) => ({ ...prev, page: Math.min(totalPages, myPage.page + pageCount) }));
      refreshMyPage();
    }
    if (menu === 'search') {
      setSearchPage((prev) => ({ ...prev, page: Math.min(totalPages, searchPage.page + pageCount) }));
      refreshSearch();
    }
  };

  const changePage = (e: any) => {
    if (menu === 'mypage') {
      setMyPage((prev) => ({ ...prev, page: Number(e.target.textContent) }));
      refreshMyPage();
    }
    if (menu === 'search') {
      setSearchPage((prev) => ({ ...prev, page: Number(e.target.textContent) }));
      refreshSearch();
    }
  };

  return { onClickPrevious, onClickNext, changePage };
};
