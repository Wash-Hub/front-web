type ContainerProps = {
  children: React.ReactNode;
  addClassName?: string;
};

export default function Container({ children }: ContainerProps) {
  return <div className="flex justify-center py-4">{children}</div>;
}
