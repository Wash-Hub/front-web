import {
  selectLoginButton,
  selectLoginButtonIcon,
  selectLoginButtonText,
  selectLoginButtonWrapper,
  selectLoginContainer,
  selectLoginContent,
  selectLoginTitle,
  selectLoginTitleClose,
  selectLoginTitleWrapper,
} from './selectLogin.css';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';
import { loginModalState } from '../../../recoil/atoms/loginState';
import { useRecoilState } from 'recoil';
import { FcGoogle } from 'react-icons/fc';

export const SelectLogin = () => {
  const [, setLoginModal] = useRecoilState(loginModalState);
  const onClickCloseModal = () => {
    setLoginModal((prevState) => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
  };
  return (
    <div className={selectLoginContainer}>
      <div className={selectLoginTitleWrapper}>
        <div className={selectLoginTitle}>로그인</div>
        <div onClick={onClickCloseModal} className={selectLoginTitleClose}>
          <IoIosClose />
        </div>
      </div>
      <span className={selectLoginContent}>로그인이 필요한 서비스입니다.</span>
      <div className={selectLoginButtonWrapper}>
        <button className={selectLoginButton({ background: 'kakao' })}>
          <div className={selectLoginButtonIcon({ background: 'kakao' })}>
            <RiKakaoTalkFill />
          </div>
          <div className={selectLoginButtonText()}>카카오 로그인</div>
        </button>
        <button className={selectLoginButton({ background: 'google' })}>
          <div className={selectLoginButtonIcon({ background: 'google' })}>
            <FcGoogle />
          </div>
          <div className={selectLoginButtonText({ margin: 'google' })}>구글 로그인</div>
        </button>
      </div>
    </div>
  );
};
