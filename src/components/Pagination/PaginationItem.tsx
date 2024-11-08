type PaginationItemProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const PaginationItem = ({ isActive, isDisabled, onClick, children }: PaginationItemProps) => {
  return (
    <li className={`mx-1 flex h-10 items-center rounded-full ${isDisabled ? 'invisible' : ''}`}>
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={`${
          isActive
            ? 'bg-gradient-to-t from-sky-400 to-sky-500 font-bold text-white'
            : 'flex cursor-pointer items-center justify-center rounded-full p-2 text-sm text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-black'
        }`}
      >
        {children}
      </div>
    </li>
  );
};

export default PaginationItem;
