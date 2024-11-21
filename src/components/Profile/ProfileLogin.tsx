import { getUserInfo } from '@/api/getUserInfo';
import { useNavigate } from 'react-router-dom';

interface ProfileLoginProps {
  name?: boolean;
}

export const ProfileLogin = ({ name = true }: ProfileLoginProps) => {
  const data = getUserInfo();
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/mypage/1');
  };
  return (
    <button onClick={onClick} className="flex items-center space-x-2">
      <img src={data.profileImage} alt="profile" className="h-7 w-7 rounded-full object-cover" />
      {name && <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{data.name}</span>}
    </button>
  );
};
