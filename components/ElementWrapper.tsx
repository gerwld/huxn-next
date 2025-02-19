import { FC, JSX, ReactNode } from "react";

interface IElementWrapper {
  elementType: "div" | "span" | "button";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ElementWrapper: FC<IElementWrapper> = ({
  elementType,
  children,
  className,
  onClick,
}) => {
  const Element = elementType as keyof JSX.IntrinsicElements;

  return (
    <Element onClick={onClick} className={className}>
      {children}
    </Element>
  );
};

export default ElementWrapper;
