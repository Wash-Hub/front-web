type LoginButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const LoginButton = ({ children, onClick }: LoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rotate-180 text-gray-500 transition-colors duration-200 hover:text-blue-500 rtl:rotate-0 dark:text-gray-400 dark:hover:text-blue-400"
    >
      {children}
    </button>
  );
};
