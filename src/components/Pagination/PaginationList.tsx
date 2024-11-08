import { ChildrenProps } from '@/type';

export const PaginationList = ({ children }: ChildrenProps) => {
  return <ul className="m-0 flex list-none p-0">{children}</ul>;
};
