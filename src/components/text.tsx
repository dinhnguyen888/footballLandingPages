import React from "react";

interface TextLine {
  string: string;
  customClass?: string;
}

const TextMain: React.FC<TextLine> = ({ string, customClass }) => {
  // Chuyển các dòng mới thành các phần tử <br/> bằng cách sử dụng biểu thức chính quy
  const formattedString = string.replace(/(?:\r\n|\r|\n)/g, '<br/>');

  return (
    <p className={`my-component ${customClass} font-vietnam  font-light text-sm font-mono uppercase my-2`} dangerouslySetInnerHTML={{ __html: formattedString }} />
  );
};

export default TextMain;
