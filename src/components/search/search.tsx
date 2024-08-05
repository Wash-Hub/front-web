import { useForm } from 'react-hook-form';
import { searchButton, searchContainer, searchInput, searchWrapper } from './search.css';
import { LuSearch } from 'react-icons/lu';
import { useOpen } from '../../hooks/useOpen';
export const Search = () => {
  const { register, handleSubmit } = useForm();
  const { MenuControllSearch } = useOpen();
  const onSubmit = (data: any) => {
    MenuControllSearch();
  };
  return (
    <div className={searchContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={searchWrapper}>
        <input
          id="search"
          type="text"
          placeholder="검색어를 입력하세요"
          className={searchInput}
          {...register('search')}
        />
        <button className={searchButton} type="submit">
          <LuSearch />
        </button>
      </form>
    </div>
  );
};
