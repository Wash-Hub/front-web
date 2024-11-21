import { getMapAllInfo } from '@/api/getMapInfo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { location } from '@/type';
import { mapInfoAtom, mapState } from '@/recoil/atoms/mapState';
import { useNavigate } from 'react-router-dom';
import { loginModalState, loginState } from '@/recoil/atoms/loginState';

export const useMenu = () => {
  const [locate] = useRecoilState<location>(mapState);
  const locateInfo = getMapAllInfo(locate);
  const navigate = useNavigate();
  const setMapData = useSetRecoilState(mapInfoAtom);
  const [, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);

  const onClickHome = () => {
    navigate('/');
  };

  const onClickMenu = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const onClickMyPage = () => {
    if (!login.isLogin) {
      setIsModalOpen((prevState) => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
    } else {
      navigate('/mypage');
    }

    // navigate('/mypage');
  };

  const changeLocate = () => {
    setMapData(locateInfo.data);
  };

  return {
    onClickHome,
    onClickMenu,
    onClickMyPage,
    changeLocate,
  };
};
