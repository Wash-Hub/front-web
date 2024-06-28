import { useForm } from 'react-hook-form';
import { searchButton, searchContainer, searchInput, searchWrapper } from './search.css';
import { LuSearch } from 'react-icons/lu';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../recoil/atoms/sidebarState';
import { menuState } from '../../recoil/atoms/menuState';
export const Search = () => {
  const { register, handleSubmit } = useForm();
  const [, setIsOpened] = useRecoilState(menuState);
  const [, setIsActiveSearch] = useRecoilState(sidebarState);
  const onSubmit = (data: any) => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: !prevState.isOpened }));
    setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: !prevState.isActiveSearch }));
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
