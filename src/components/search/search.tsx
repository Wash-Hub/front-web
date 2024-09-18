import { useForm } from 'react-hook-form';
import { searchButton, searchContainer, searchInput, searchWrapper } from './search.css';
import { LuSearch } from 'react-icons/lu';
import { useOpen } from '../../hooks/useOpen';
import { useRecoilState } from 'recoil';
import { searchState } from '../../recoil/atoms/searchState';
export const Search = () => {
  const { register, handleSubmit } = useForm();
  const { MenuControllSearch, Close } = useOpen();
  const [, setContent] = useRecoilState(searchState);
  const onSubmit = (e: any) => {
    setContent({ contents: e.search, page: 1 });
    Close();
    setTimeout(() => {
      MenuControllSearch();
    }, 0);
  };
  return (
    <div className={searchContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={searchWrapper}>
        <input
          id="search"
          type="text"
          placeholder="검색어를 입력하세요"
          className={searchInput}
          required
          {...register('search')}
        />
        <button className={searchButton} type="submit">
          <LuSearch />
        </button>
      </form>
    </div>
  );
};
