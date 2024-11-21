import { getUserInfo } from '@/api/getUserInfo';
import { MenuContainer } from '@/components/Container/MenuContainer';
import { MypageContent } from '@/components/Mypage/MypageContent';
import { MypageHeader } from '@/components/Mypage/MypageHeader';
import { ProfileEditModal } from '@/components/Mypage/ProfileEditModal/ProfileEditModal';
import { Spinner } from '@/components/Spinner/Spinner';
import { Toast } from '@/components/Toast/Toast';
import { myPageState } from '@/recoil/atoms/myPageState';
import { userInfo } from '@/type';
import { useRecoilState } from 'recoil';
export const Mypage = () => {
  const data: userInfo = getUserInfo();
  const [isOpen] = useRecoilState(myPageState);

  return (
    <MenuContainer>
      {data === undefined ? (
        <Spinner />
      ) : (
        <>
          <MypageHeader data={data} />
          <MypageContent data={data} />
        </>
      )}
      {isOpen.isModalOpened && <ProfileEditModal name={data.profile.name} email={data.profile.email} />}
      <Toast />
    </MenuContainer>
  );
};
