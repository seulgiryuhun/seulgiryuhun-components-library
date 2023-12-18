import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>;
};
