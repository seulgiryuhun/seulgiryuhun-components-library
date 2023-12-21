import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
export interface ButtonProps extends PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
