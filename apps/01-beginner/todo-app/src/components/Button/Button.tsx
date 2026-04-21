import type { ReactNode } from "react";

type Props = {
   children: ReactNode;
   className?: string;
}

const Button = (props: Props) => {
   const { children, className } = props;

   return <button className={`btn btn-default ${className}`}>{children}</button>;
};
export default Button;
