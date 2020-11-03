// import React, { useState } from "react";
// import Board from "../components/Board";

// const Board = ({onClick}) => {
//   const [inputText, setInputText] = useState("");

//   const _handleChange = (text) => {
//     setInputText(text);
//   };
//   const _handleClick = () => {
//     onClick(inputText);
//     setInputText("");
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         data-testid="inputText"
//         value={inputText}
//         onChange={(e) => _handleChange(e.target.value)}
//       />
//       <button 
//         type="button" 
//         data-testid="sendButton" 
//         onClick={_handleClick}>Send
//       </button>
//     </div>
//   );
// };
// export default Board;