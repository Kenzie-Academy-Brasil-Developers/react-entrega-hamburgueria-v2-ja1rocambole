import React from "react";

interface ITitle {
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
  children: React.ReactNode;
}

export const Title = ({ tag, className, children }: ITitle) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
    </>
  );
};
