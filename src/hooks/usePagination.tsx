import { useRecoilState } from 'recoil';
import { searchState } from '../recoil/atoms/searchState';
import { useOpen } from './useOpen';

export const usePagination = () => {
  const { MenuControllSearch, Close } = useOpen();
  const [page, setPage] = useRecoilState(searchState);
  const refresh = () => {
    Close();
    setTimeout(() => {
      MenuControllSearch();
    }, 0);
  };
  const onClickPrevious = (noPrev: boolean, pageCount: number) => {
    if (noPrev) return;
    setPage((prev) => ({ ...prev, page: Math.max(1, page.page - pageCount) }));
    refresh();
  };

  const onClickNext = (noNext: boolean, totalPages: number, pageCount: number) => {
    if (noNext) return;
    setPage((prev) => ({ ...prev, page: Math.min(totalPages, page.page + pageCount) }));
    refresh();
  };

  const changePage = (e: any) => {
    setPage((prev) => ({ ...prev, page: Number(e.target.textContent) }));
    refresh();
  };

  return { onClickPrevious, onClickNext, changePage };
};
