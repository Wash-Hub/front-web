import { useAxiosInterceptors } from '@/hooks/Auth/useAxiosInterceptors';
import { myPageState } from '@/recoil/atoms/myPageState';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

export const ProfileEditContent = ({ name, email }: { name: string; email: string }) => {
  useAxiosInterceptors();

  const { register, handleSubmit } = useForm();
  const setIsOpened = useSetRecoilState(myPageState);

  const onClickCancel = () => {
    setIsOpened((prev) => ({ ...prev, isModalOpened: false }));
  };
  const { patchProfileData } = useProfile();
  const onSubmit = (data: any) => {
    patchProfileData({ name: data.name, email: data.email });
    setIsOpened((prev) => ({ ...prev, isModalOpened: false }));
  };
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg p-4 shadow-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <span className="mb-1 ml-3 text-lg font-medium text-gray-800">이메일</span>
        <input
          className="placeholder-italic mx-auto mb-4 w-11/12 rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
          type="email"
          placeholder="이메일"
          {...register('email')}
          defaultValue={email}
          required
        />
        <span className="mb-1 ml-3 text-lg font-medium text-gray-800">닉네임</span>
        <input
          className="placeholder-italic mx-auto mb-4 w-11/12 rounded-md border border-gray-300 p-3 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
          type="text"
          placeholder="닉네임"
          {...register('name')}
          defaultValue={name}
          required
        />
        <div className="mt-5 flex justify-center gap-4 pb-2">
          <button type="submit" className="rounded-md bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600">
            변경
          </button>
          <button
            type="button"
            onClick={onClickCancel}
            className="rounded-md border border-gray-300 bg-white px-5 py-2 text-black transition hover:bg-gray-100"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};
function useProfile(): { patchProfileData: any } {
  throw new Error('Function not implemented.');
}
