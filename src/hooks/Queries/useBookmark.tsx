import { postBookmark } from '@/api/postBookmark';
import { BookmarkParams, UseBookmarkOptions } from '@/type';
import { deleteBookmark } from '@/api/deleteBookmark';
import { useMutationHandler } from './useMutationHandler';

export const useBookmark = (data: BookmarkParams, options: UseBookmarkOptions) => {
  const { onOpenModal } = options;
  const notifyCreateBookmark = '북마크에 추가되었습니다.';
  const notifyCancelBookmark = '북마크가 취소되었습니다.';
  const notifyError = '잠시후 다시 시도해주세요.';
  const { mutate: createBookmark } = useMutationHandler(
    () => postBookmark(data.mapId.data.id),
    notifyCreateBookmark,
    notifyError,
    onOpenModal,
  );

  const { mutate: cancelBookmark } = useMutationHandler(
    () => deleteBookmark(data.mapId.data.id),
    notifyCancelBookmark,
    notifyError,
    onOpenModal,
  );

  return {
    createBookmark: () => createBookmark(),
    cancelBookmark: () => cancelBookmark(),
  };
};
