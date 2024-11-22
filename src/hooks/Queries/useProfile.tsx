import { patchProfile } from '@/api/patchProfile';
import { ProfileEditData } from '@/type';
import { useMutationHandler } from './useMutationHandler';

export const usePatchProfile = () => {
  const notifyProfileEdit = '프로필 정보가 수정되었습니다.';
  const notifyError = '잠시후 다시 시도해주세요.';

  const { mutate: patchProfileData } = useMutationHandler(
    (data: ProfileEditData) => patchProfile(data.name, data.email),
    notifyProfileEdit,
    notifyError,
  );

  return {
    patchProfileData,
  };
};
