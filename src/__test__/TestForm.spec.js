// import React from "react";
// import { fireEvent, render, cleanup } from "@testing-library/react";
// // import { Modal } from "bloomer/lib/components/Modal/Modal";
// // import Board from "../components/Board";

// describe("<TextField />", () => {
//   let getByTestId;

//   afterEach(cleanup);

//   describe("clicking the send button", () => {
//     let sendHandler;

//     beforeEach(async () => {
//       sendHandler = jest.fn().mockName("sendHandler");
//       ({ getByTestId } = render(<TextField onChange={sendHandler} />));

//       fireEvent.change(getByTestId("outlined-basic"), {
//         target: {
//           value: "New Text",
//         },
//       });
//       fireEvent.click(getByTestId("sendButton"));
//     });

//     it("clears the text field", () => {
//       expect(getByTestId("inputText").value).toEqual("");
//     });
//     it("calls the send handler", () => {
//       expect(sendHandler).toHaveBeenCalledWith("New Text");
//     });
//   });
// });
// //no export, only running the test, a component test.