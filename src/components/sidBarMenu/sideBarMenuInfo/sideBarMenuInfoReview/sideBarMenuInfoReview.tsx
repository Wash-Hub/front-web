import { useRecoilState } from 'recoil';
import {
  sideBarMenuInfoReviewButton,
  sideBarMenuInfoReviewButtonContainer,
  sideBarMenuInfoReviewContainer,
  sideBarMenuInfoReviewInfo,
  sideBarMenuInfoReviewInfoContainer,
  sideBarMenuInfoReviewInfoContent,
  sideBarMenuInfoReviewInfoImg,
  sideBarMenuInfoReviewInfoProfile,
  sideBarMenuInfoReviewInfoProfileDate,
} from './sideBarMenuInfoReview.css';
import { reviewState } from '../../../../recoil/atoms/menuState';
import { loginModalState, loginState } from '../../../../recoil/atoms/loginState';
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
    },
  ];
  const [, setReview] = useRecoilState(reviewState);
  const [, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const onClick = () => {
    setIsModalOpen({ isModalOpen: true });
    if (login.isLogin) setReview({ isOpened: true });
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
            <div>
              <div className={sideBarMenuInfoReviewInfoContent}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={sideBarMenuInfoReviewButtonContainer}>
        <button className={sideBarMenuInfoReviewButton} onClick={onClick}>
          리뷰 작성하기
        </button>
      </div>
    </div>
  );
};
