import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { errorState } from '@/recoil/atoms/errorState';

export const useMutationHandler = (
  mutationFn: any,
  successMessage: string,
  errorMessage: string,
  options?: () => void,
) => {
  const setError = useSetRecoilState(errorState);
  const notifySuccess = () => toast(successMessage);
  const notifyError = () => toast(errorMessage);

  const mutation = useMutation(mutationFn, {
    onSuccess: (status: any) => {
      if (Number(status) === 201 || Number(status) === 200) {
        setTimeout(() => {
          notifySuccess();
        }, 0);
      } else if (options && Number(status) === 401) {
        options();
      } else {
        notifyError();
      }
    },
    onError: (error: any) => {
      setError(error);
      notifyError();
    },
  });

  return mutation;
};
