import { getSearchInfo } from '@/api/getSearchInfo';
import { Pagination } from '@/components/Pagination/PaginationSearch';
import { SearchBar } from '@/components/Search/SearchBar';
import { MenuContainer } from '@/components/Container/MenuContainer';
import { useParams } from 'react-router-dom';
import { SearchContent } from '@/components/Search/SearchContent';
import { SearchEmpty } from '@/components/Search/SearchEmpty';
export const SearchDetail = () => {
  let data = getSearchInfo();
  const total = data[0];
  data = data.slice(1);
  const { page } = useParams<{ page: string }>();
  return (
    <MenuContainer>
      <div className="w-[370px] p-4 pt-5">
        <SearchBar />
      </div>
      <div className="flex h-screen w-full flex-col overflow-y-auto bg-white">
        <div className="flex h-[6vh] w-full items-center justify-center text-lg font-bold">검색결과</div>
        {data.length === 0 ? (
          <SearchEmpty />
        ) : (
          <div>
            {data.map((item: any, index: any) => (
              <SearchContent key={item.id || index} item={item} index={index} />
            ))}
            <div>
              <Pagination totalPages={total} pageCount={5} currentPage={page} />
            </div>
          </div>
        )}
      </div>
    </MenuContainer>
  );
};
