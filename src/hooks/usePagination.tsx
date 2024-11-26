import { useNavigate } from 'react-router-dom';

type PaginationProps = {
  title?: string;
  page: number;
  menu: string;
};

export const usePagination = ({ menu, title, page }: PaginationProps) => {
  const navigate = useNavigate();
  const onClickPrevious = (noPrev: boolean, pageCount: number) => {
    if (noPrev) return;
    title
      ? navigate(`/${menu}/${title}/${Math.max(1, page - pageCount)}`)
      : navigate(`/${menu}/${Math.max(1, page - pageCount)}`);
  };

  const onClickNext = (noNext: boolean, totalPages: number, pageCount: number) => {
    if (noNext) return;
    title
      ? navigate(`/${menu}/${title}/${Math.min(totalPages, page + pageCount)}`)
      : navigate(`/${menu}/${Math.min(totalPages, page + pageCount)}`);
  };

  const changePage = (e: any) => {
    title ? navigate(`/${menu}/${title}/${Number(e)}`) : navigate(`/${menu}/${Number(e)}`);
  };

  return { onClickPrevious, onClickNext, changePage };
};
