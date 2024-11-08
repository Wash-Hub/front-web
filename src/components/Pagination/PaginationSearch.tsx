import { usePagination } from '@/hooks/usePagination';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Container from './Container';
import { PaginationList } from './PaginationList';
import PaginationItem from './PaginationItem';
import { searchState } from '@/recoil/atoms/searchState';

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
    <Container>
      <PaginationList>
        <PaginationItem isDisabled={noPrev} onClick={() => onClickPrevious(noPrev, pageCount)}>
          이전
        </PaginationItem>
        {[...Array(pageCount)].map(
          (_, i) =>
            startPage + i <= totalPages && (
              <PaginationItem
                key={startPage + i}
                isActive={currentPage === startPage + i}
                onClick={() => onClickPage(startPage + i)}
              >
                {startPage + i}
              </PaginationItem>
            ),
        )}
        <PaginationItem isDisabled={noNext} onClick={() => onClickNext(noNext, totalPages, pageCount)}>
          다음
        </PaginationItem>
      </PaginationList>
    </Container>
  );
};
