import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { postBookmark } from '../api/postBookmark';
import { deleteBookmark } from '../api/deleteBookmark';
import { BookmarkParams, UseBookmarkOptions } from '../type';

export const useBookmark = (data: BookmarkParams, options: UseBookmarkOptions) => {
  const { onOpenModal, onClose, onUpdateMenuDetail } = options;

  const notifyCreateReview = () => toast('북마크에 추가되었습니다.');
  const notifyCancelBookmark = () => toast('북마크가 취소되었습니다.');

  const mutationPostBookmark = useMutation((item: BookmarkParams) => postBookmark(item.mapId), {
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
        alert('잠시후 다시 시도해주세요.');
      }
    },
    onError: () => {
      alert('잠시후 다시 시도해주세요.');
    },
  });

  const mutationDeleteBookmark = useMutation((item: BookmarkParams) => deleteBookmark(item.mapId), {
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
        alert('잠시후 다시 시도해주세요.');
      }
    },
    onError: () => {
      alert('잠시후 다시 시도해주세요.');
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
