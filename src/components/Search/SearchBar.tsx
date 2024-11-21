import { IconSearch } from '@/assets/icons/IconSearch';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (e: any) => {
    navigate(`/search/${e.search}/1`);
  };
  return (
    <div className="relative mx-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full rounded-md border bg-white py-1.5 pl-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      >
        <input
          id="search"
          type="text"
          placeholder="검색어를 입력하세요"
          className="text-sm"
          required
          {...register('search')}
        />
        <button className="absolute inset-y-0 right-2 flex items-center" type="submit">
          <IconSearch />
        </button>
      </form>
    </div>
  );
};
