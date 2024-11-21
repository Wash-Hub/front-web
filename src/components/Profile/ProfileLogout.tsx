import { IconPeaple } from '@/assets/icons/IconPeaple';

interface ProfileLogoutProps {
  name?: boolean;
}

export const ProfileLogout = ({ name = true }: ProfileLogoutProps) => {
  return (
    <div className="flex items-center space-x-2">
      <IconPeaple />
      {name && <span className="text-xs font-bold text-gray-700 dark:text-gray-200">로그인 후 이용해주세요</span>}
    </div>
  );
};
