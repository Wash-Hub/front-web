import { usePagination } from '@/hooks/usePagination';
import Container from './Container';
import { PaginationList } from './PaginationList';
import { PaginationItem } from './PaginationItem';
import { useParams } from 'react-router-dom';

export const Pagination = ({ totalPages, pageCount }: any) => {
  const { page } = useParams();
  const currentPage = Number(page);
  const noPrev = currentPage === 1;
  const noNext = currentPage + pageCount - 1 >= totalPages;

  const { onClickPrevious, onClickNext, changePage } = usePagination({
    menu: 'mypage',
    page: currentPage,
  });

  const startPage = Math.floor((currentPage - 1) / pageCount) * pageCount + 1;
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
