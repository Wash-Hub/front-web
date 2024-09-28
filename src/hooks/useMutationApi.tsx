import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { postBookmark } from '../api/postBookmark';
import { deleteBookmark } from '../api/deleteBookmark';
import {
  BookmarkParams,
  DeleteReviewData,
  ProfileEditData,
  ReviewData,
  UseBookmarkOptions,
  UseProfileEditOptions,
  UseReviewOptions,
} from '../type';
import { postReview } from '../api/postReview';
import { deleteReview } from '../api/deleteReview';
import { useSetRecoilState } from 'recoil';
import { errorState } from '../recoil/atoms/errorState';
import { patchProfile } from '../api/patchProfile';

export const useBookmark = (data: BookmarkParams, options: UseBookmarkOptions) => {
  const { onOpenModal, onClose, onUpdateMenuDetail } = options;
  const notifyCreateReview = () => toast('북마크에 추가되었습니다.');
  const notifyCancelBookmark = () => toast('북마크가 취소되었습니다.');
  const notifyError = () => toast('잠시후 다시 시도해주세요.');
  const setError = useSetRecoilState(errorState);
  const mutationPostBookmark = useMutation((item: BookmarkParams) => postBookmark(item.mapId.id), {
    onSuccess: (status) => {
      if (Number(status) === 201) {
        onClose();
        setTimeout(() => {
          onUpdateMenuDetail();
          notifyCreateReview();
        }, 0);
      } else if (Number(status) === 401) {
        onOpenModal();
      } else {
        notifyError();
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const mutationDeleteBookmark = useMutation((item: BookmarkParams) => deleteBookmark(item.mapId.id), {
    onSuccess: (status) => {
      if (Number(status) === 200) {
        onClose();
        setTimeout(() => {
          onUpdateMenuDetail();
          notifyCancelBookmark();
        }, 0);
      } else if (Number(status) === 401) {
        onOpenModal();
      } else {
        notifyError();
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const createBookmark = () => {
    mutationPostBookmark.mutate({ mapId: data.mapId });
  };

  const cancelBookmark = () => {
    mutationDeleteBookmark.mutate({ mapId: data.mapId });
  };

  return {
    createBookmark,
    cancelBookmark,
  };
};

export const usePostReview = (options: UseReviewOptions) => {
  const { onClose, onUpdateMenuDetail } = options;
  const setError = useSetRecoilState(errorState);
  const notifyCreateReview = () => toast('리뷰가 등록되었습니다.');
  const notifyError = () => toast('잠시후 다시 시도해주세요.');
  const mutation = useMutation((data: ReviewData) => postReview(data.files, data.desc, data.map), {
    onSuccess: (status) => {
      if (Number(status) === 201) {
        onClose();
        setTimeout(() => {
          onUpdateMenuDetail();
          notifyCreateReview();
        }, 0);
      } else {
        notifyError();
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const postReviewData = (data: ReviewData) => {
    mutation.mutate(data);
  };

  return {
    postReviewData,
    ...mutation,
  };
};

export const useDeleteReview = (options: UseReviewOptions) => {
  const { onClose, onUpdateMenuDetail } = options;
  const setError = useSetRecoilState(errorState);
  const notifyCreateReview = () => toast('리뷰가 삭제되었습니다.');
  const notifyError = () => toast('잠시후 다시 시도해주세요.');
  const mutation = useMutation((data: DeleteReviewData) => deleteReview(data.id), {
    onSuccess: (status) => {
      if (Number(status) === 200) {
        onClose();
        setTimeout(() => {
          onUpdateMenuDetail();
          notifyCreateReview();
        }, 0);
      } else {
        notifyError();
      }
    },
    onError: () => {
      setError('error');
    },
  });

  const deleteReviewData = (data: DeleteReviewData) => {
    mutation.mutate(data);
  };

  return {
    deleteReviewData,
    ...mutation,
  };
};

export const usePatchProfile = (options: UseProfileEditOptions) => {
  const { onClose, onUpdateMenuMyPage } = options;
  const setError = useSetRecoilState(errorState);
  const notifyProfileEdit = () => toast('프로필 정보가 수정되었습니다.');
  const notifyError = () => toast('잠시후 다시 시도해주세요.');
  const mutation = useMutation((data: ProfileEditData) => patchProfile(data.name, data.email), {
    onSuccess: (status) => {
      if (Number(status) === 200) {
        onClose();
        setTimeout(() => {
          onUpdateMenuMyPage();
          notifyProfileEdit();
        }, 0);
      } else {
        notifyError();
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const patchProfileData = (data: ProfileEditData) => {
    mutation.mutate(data);
  };

  return {
    patchProfileData,
    ...mutation,
  };
};
