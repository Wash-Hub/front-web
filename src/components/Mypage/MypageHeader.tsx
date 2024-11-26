import { myPageState } from '@/recoil/atoms/myPageState';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { RxHamburgerMenu } from 'react-icons/rx';
import { useLogout } from '@/hooks/Auth/useAuth';
export const MypageHeader = ({ data }: any) => {
  const [isOpen, setIsOpen] = useRecoilState(myPageState);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const logout = useLogout();
  const onClickLogout = () => {
    logout();
  };
  const onClickMenu = () => {
    setIsOpen((prev) => ({ ...prev, isDropdownMenuOpened: !prev.isDropdownMenuOpened }));
  };
  const onClickProfileEdit = () => {
    setIsOpen((prev) => ({ ...prev, isModalOpened: true }));
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen((prev) => ({ ...prev, isDropdownMenuOpened: false }));
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-row items-center justify-between px-4 py-5">
      <div className="flex items-center text-sm font-semibold">
        <img src={data.profile.profileImg} alt="" className="mr-2 h-10 w-10 rounded-full" />
        <div>{data.profile.name} 님</div>
      </div>
      <div className="relative inline-block" ref={dropdownRef}>
        <RxHamburgerMenu className="h-5 w-5 cursor-pointer" onClick={onClickMenu} />
        {isOpen.isDropdownMenuOpened && (
          <div className="absolute left-[-120px] top-[110%] z-10 w-[137px] rounded-md border border-gray-200 bg-white p-2 shadow-md">
            <div
              className="cursor-pointer rounded-md border-b border-gray-200 px-4 py-2 hover:bg-gray-100"
              onClick={onClickProfileEdit}
            >
              프로필 수정
            </div>
            <div
              className="cursor-pointer rounded-md border-t border-gray-200 px-4 py-2 hover:bg-gray-100"
              onClick={onClickLogout}
            >
              로그아웃
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
