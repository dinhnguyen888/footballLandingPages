import React from "react";

interface TextLine {
  string: string;
  customClass?: string; 
}

const BigText: React.FC<TextLine> = ({ string, customClass }) => {
  return (
    <p className={`my-component ${customClass} font-vietnam  uppercase font-extrabold font-serif  my-1 tracking-tighter`}>
      {string}
    </p>
  );
};

export default BigText;
