import { ClipLoader } from 'react-spinners';

export const Spinner = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <ClipLoader color="#36d7b7" loading={true} size={50} />
    </div>
  );
};
