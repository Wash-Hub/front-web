type SideBarButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const SideBarButton = ({ onClick, children }: SideBarButtonProps) => {
  return (
    <button
      className="flex w-full transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
