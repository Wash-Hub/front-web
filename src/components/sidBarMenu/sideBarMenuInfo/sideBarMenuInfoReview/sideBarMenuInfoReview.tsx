import { useRecoilState } from 'recoil';
import {
  imgModal,
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
} from './sideBarMenuInfoReview.css';
import Modal from 'react-modal';
import { loginModalState, loginState } from '../../../../recoil/atoms/loginState';
import { reviewState } from '../../../../recoil/atoms/reviewState';
export const SideBarMenuInfoReview = () => {
  const dummy = [
    {
      name: '익명',
      date: '2021-09-01',
      content: '가까운 곳에 있어서 좋아요',
    },
    {
      name: '익명2',
      date: '2021-09-02',
      content: '항상 잘 이용하고 있어요',
      img: 'public/test.jpg',
    },
  ];
  const [, setReview] = useRecoilState(reviewState);
  const [, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  // const [isImgModalOpen, setIsImgModalOpen] = useState({ isImgModalOpen: false });
  // const [selectedImg, setSelectedImg] = useState('' as string);
  const [isImgModalOpen, setIsImgModalOpen] = useRecoilState(reviewState);
  const [selectedImg, setSelectedImg] = useRecoilState(reviewState);
  const onClick = () => {
    setIsModalOpen({ isModalOpen: true });
    if (login.isLogin) setReview((prev) => ({ ...prev, isOpened: true }));
  };
  const onClickImg = (img: string) => {
    setSelectedImg((prev) => ({ ...prev, selectedImg: img }));
    setIsImgModalOpen((prev) => ({ ...prev, isImgModalOpen: true }));
  };
  return (
    <div>
      <div className={sideBarMenuInfoReviewContainer}>
        {dummy.map((item) => (
          <div key={item.name} className={sideBarMenuInfoReviewInfoContainer}>
            <div className={sideBarMenuInfoReviewInfo}>
              <div className={sideBarMenuInfoReviewInfoProfile}>
                <img src="public\icon_people_outline.webp" alt="" className={sideBarMenuInfoReviewInfoImg} />
                {item.name}
              </div>
              <div className={sideBarMenuInfoReviewInfoProfileDate}>{item.date}</div>
            </div>
            <div className={sideBarMenuInfoReviewInfoContent}>{item.content}</div>
            {item.img && (
              <img src={item.img} className={sideBarMenuInfoReviewImg} onClick={() => onClickImg(item.img)} />
            )}
          </div>
        ))}
      </div>
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
