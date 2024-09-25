import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from '../../../recoil/atoms/searchState';
import { usePagination } from '../../../hooks/usePagination';
import { active, invisible, li, move, pageStyle, ul, wrapper } from './paginationSearch.css';

export const Pagination = ({ totalPages, pageCount, currentPage }: any) => {
  const [page, setPage] = useRecoilState(searchState);

  const noPrev = page.page === 1;
  const noNext = page.page + pageCount - 1 >= totalPages;

  useEffect(() => {
    setPage((prev) => ({ ...prev, page: currentPage }));
  }, [currentPage, setPage]);

  const { onClickPrevious, onClickNext, changePage } = usePagination('search');

  const startPage = Math.floor((page.page - 1) / pageCount) * pageCount + 1;
  const onClickPage = (e: any) => {
    changePage(e);
  };
  return (
    <div className={wrapper}>
      <ul className={ul}>
        <li className={`${move} ${noPrev && invisible}`}>
          <div onClick={() => onClickPrevious(noPrev, pageCount)}>이전</div>
        </li>
        {[...Array(pageCount)].map(
          (_, i) =>
            startPage + i <= totalPages && (
              <li className={li} key={startPage + i}>
                <div className={`${pageStyle} ${currentPage === startPage + i && active}`} onClick={onClickPage}>
                  {startPage + i}
                </div>
              </li>
            )
        )}
        <li className={`${move} ${noNext && invisible}`}>
          <div onClick={() => onClickNext(noNext, totalPages, pageCount)}>다음</div>
        </li>
      </ul>
    </div>
  );
};
