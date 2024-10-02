import { useRecoilState, useRecoilValue } from 'recoil';
import {
  imgModal,
  noReview,
  sideBarMenuInfoDeleteIcon,
  sideBarMenuInfoReviewButton,
  sideBarMenuInfoReviewButtonContainer,
  sideBarMenuInfoReviewContainer,
  sideBarMenuInfoReviewImg,
  sideBarMenuInfoReviewInfo,
  sideBarMenuInfoReviewInfoContainer,
  sideBarMenuInfoReviewInfoContent,
  sideBarMenuInfoReviewInfoImg,
  sideBarMenuInfoReviewInfoProfile,
  sideBarMenuInfoReviewInfoProfileDate,
  sideBarMenuInfoReviewInfoProfileDateWrapper,
} from './sideBarMenuInfoReview.css';
import Modal from 'react-modal';
import { loginModalState, loginState, userUniqIdAtom } from '../../../../recoil/atoms/loginState';
import { reviewState } from '../../../../recoil/atoms/reviewState';
import { getReviewInfo } from '../../../../api/getReviewInfo';
import { MdDelete } from 'react-icons/md';
import { useAxiosInterceptorsJson } from '../../../../hooks/useAxiosInterceptors';
import { closeModal } from './createReview/createReview.css';
import { AlertModal } from './deleteModal/deleteModal';
import { Player } from '@lottiefiles/react-lottie-player';
import reviewAnimation from '../../../../../public/reviewAnimation.json';
export const SideBarMenuInfoReview = () => {
  useAxiosInterceptorsJson();
  const data = getReviewInfo();
  const [, setReview] = useRecoilState(reviewState);
  const [, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const [isImgModalOpen, setIsImgModalOpen] = useRecoilState(reviewState);
  const [selectedImg, setSelectedImg] = useRecoilState(reviewState);
  const id = useRecoilValue(userUniqIdAtom);
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useRecoilState(reviewState);
  const onClick = () => {
    setIsModalOpen({ isModalOpen: true });
    if (login.isLogin) setReview((prev) => ({ ...prev, isOpened: true }));
  };
  const onClickImg = (img: string) => {
    setSelectedImg((prev) => ({ ...prev, selectedImg: img }));
    setIsImgModalOpen((prev) => ({ ...prev, isImgModalOpen: true }));
  };

  const onClickDeleteReview = () => {
    setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: true }));
  };
  return (
    <div>
      {data === undefined || data.length === 0 ? (
        <div>
          <div className={noReview}>👉여러분의 소중한 후기를 남겨주세요.👈</div>
          <div>
            <Player autoplay loop src={reviewAnimation} style={{ height: '100px', width: '200px' }} />
          </div>
        </div>
      ) : (
        <div className={sideBarMenuInfoReviewContainer}>
          {data.map((item: any) => (
            <div key={item.id} className={sideBarMenuInfoReviewInfoContainer}>
              <div className={sideBarMenuInfoReviewInfo}>
                <div className={sideBarMenuInfoReviewInfoProfile}>
                  <img src={item.user.profileImg} alt="" className={sideBarMenuInfoReviewInfoImg} />
                  {item.user.name}
                </div>
                <div className={sideBarMenuInfoReviewInfoProfileDateWrapper}>
                  <div className={sideBarMenuInfoReviewInfoProfileDate}>{item.createdAt}</div>
                  {id === item.user.id && (
                    <div className={sideBarMenuInfoDeleteIcon} onClick={onClickDeleteReview}>
                      <MdDelete />
                    </div>
                  )}
                </div>
              </div>
              <div className={sideBarMenuInfoReviewInfoContent}>{item.desc}</div>
              {item.img.length > 0 && (
                <img src={item.img} className={sideBarMenuInfoReviewImg} onClick={() => onClickImg(item.img)} />
              )}
              {isDeleteReviewModalOpen.isDeleteReviewModalOpen && (
                <Modal
                  ariaHideApp={false}
                  isOpen={isDeleteReviewModalOpen.isDeleteReviewModalOpen}
                  onRequestClose={() =>
                    setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: false }))
                  }
                  shouldCloseOnEsc={true}
                  shouldCloseOnOverlayClick={true}
                  style={{
                    overlay: closeModal.overlay,
                    content: {
                      ...closeModal.content,
                      textAlign: closeModal.content.textAlign as React.CSSProperties['textAlign'],
                      width: window.innerWidth > 768 ? '30%' : '60%',
                    },
                  }}
                >
                  <AlertModal id={item.id} />
                </Modal>
              )}
            </div>
          ))}
        </div>
      )}
      <div className={sideBarMenuInfoReviewButtonContainer}>
        <button className={sideBarMenuInfoReviewButton} onClick={onClick}>
          리뷰 작성하기
        </button>
      </div>
      {isImgModalOpen && (
        <Modal
          ariaHideApp={false}
          isOpen={isImgModalOpen.isImgModalOpen}
          onRequestClose={() => setIsImgModalOpen((prev) => ({ ...prev, isImgModalOpen: false }))}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: imgModal.overlay,
            content: imgModal.content,
          }}
        >
          <img src={selectedImg.selectedImg} alt="" />
        </Modal>
      )}
    </div>
  );
};
