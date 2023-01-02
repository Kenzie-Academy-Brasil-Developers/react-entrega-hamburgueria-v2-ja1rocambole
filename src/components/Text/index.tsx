import React from "react";

interface IText {
  tag: "span" | "p";
  className?: string;
  children: React.ReactNode;
}

export const Text = ({ tag, className, children }: IText) => {
  return (
    <>
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "p" && <p className={className}>{children}</p>}
    </>
  );
};
