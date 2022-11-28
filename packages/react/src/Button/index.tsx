import type { FC, ReactNode } from 'react';

/**
 * Props
 */
interface ChildProps {
  children: ReactNode;
}

/**
 * React Button Component
 *
 * @param children inside component
 * @returns
 */
const Button: FC<ChildProps> = ({ children }: ChildProps) => {
  return <button>{children}</button>;
};

export default Button;
