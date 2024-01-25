// 잠시 주석처리 좀 해놓겟습니당ㄷ

// import React, { useState, useRef, useEffect } from "react";
// import { styled } from "styled-components";
// import Search from "../../../assets/imgs/search.svg";
// import { Input } from "./Input";
// import hangulIncludes from "@toss/hangul/dist/index";

// interface AutoProps {
//   label?: string;
//   placeholder?: string;
//   value?: string | undefined;
//   setValue: React.Dispatch<React.SetStateAction<string>>;
//   list: string[];
// }

// export const AutoInput = ({
//   label,
//   placeholder,
//   value, // Update the type to be string or undefined
//   setValue,
//   // list
// }: AutoProps) => {
//   const selectListRef = useRef<HTMLDivElement | null>(null);
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   useEffect(() => {
//     const handleOutsideClose = (e: { target: any }) => {
//       if (
//         isOpen &&
//         selectListRef.current &&
//         !selectListRef.current.contains(e.target)
//       )
//         setIsOpen(false);
//     };
//     document.addEventListener("click", handleOutsideClose);

//     return () => document.removeEventListener("click", handleOutsideClose);
//   }, [isOpen]);

//   return (
//     <Container>
//       {/* <Input
//         label={label}
//         placeholder={placeholder}
//         value={value || ""} // Provide a default value if value is undefined
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//           setValue(e.target.value);
//         }}
//         onFocus={() => setIsOpen(true)}
//       />
//       {isOpen && (
//         // <ListContainer>
//         //   {list.filter((v) => hangulIncludes(v, value || "")).length === 0 ? (
//         //     <p>아이돌 정보가 없습니다. 이메일로 문의해주세요</p>
//         //   ) : (
//         //     list
//         //       .filter((v) => hangulIncludes(v, value || ""))
//         //       .map((v) => (
//         //         <>
//         //           <ListValue
//         //             onClick={(e) => {
//         //               e.preventDefault();
//         //               e.stopPropagation();
//         //               setValue(v);
//         //               setIsOpen(false);
//         //             }}
//         //           >
//         //             {v}{" "}
//         //           </ListValue>
//         //           <hr />
//         //         </>
//         //       ))
//         //   )}
//         // </ListContainer>
//       )} */}
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   position: relative;
// `;
// const ListContainer = styled.div`
//   position: absolute;
//   top: 100%;
//   width: 100%;
//   z-index: 1;
//   background-color: ${({ theme }) => theme.color.white};
//   border: 1px solid ${({ theme }) => theme.color.gray__1};
//   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
//   border-radius: 4px;

//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   padding: 4px;

//   max-height: 180px;
//   overflow: auto;

//   > hr {
//     border: 1px solid ${({ theme }) => theme.color.gray__1};
//     &:last-child {
//       display: none;
//     }
//   }
// `;
// const ListValue = styled.div`
//   padding: 8px;
//   border-radius: 4px;
//   cursor: pointer;

//   transition: 100ms all ease-in-out;

//   &:hover {
//     background-color: ${({ theme }) => theme.color.zero};
//   }
//   &:active {
//     background-color: ${({ theme }) => theme.color.three};
//   }
// `;
// const ListNewValue = styled.div`
//   display: flex;
//   gap: 12px;
//   padding: 8px;
//   align-items: center;
//   cursor: pointer;
//   > p {
//     font-size: 24px;
//     color: ${({ theme }) => theme.color.gray__1};
//   }
// `;

// 파일 내용...

export { };
