type PaginationItemProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const PaginationItem = ({ isActive, isDisabled, onClick, children }: PaginationItemProps) => {
  return (
    <li className={`mx-1 flex h-10 items-center rounded-full ${isDisabled ? 'invisible' : ''}`}>
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={`flex items-center justify-center rounded-full px-3 py-2 text-[14px] text-sm transition-colors duration-300 ${
          isActive
            ? 'bg-gradient-to-t from-sky-400 to-sky-500 font-bold text-white'
            : 'cursor-pointer text-gray-500 hover:bg-gray-200 hover:text-black'
        }`}
      >
        {children}
      </div>
    </li>
  );
};
