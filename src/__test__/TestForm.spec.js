import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import TestForm from "../components/TestForm";

describe("<TestForm />", () => {
  let getByTestId;

  afterEach(cleanup);

  describe("clicking the send button", () => {
    let sendHandler;

    beforeEach(async () => {
      sendHandler = jest.fn().mockName("sendHandler");
      ({ getByTestId } = render(<TestForm onSend={sendHandler} />));

      fireEvent.change(getByTestId("messageText"), {
        target: {
          value: "New Message",
        },
      });
      fireEvent.click(getByTestId("sendButton"));
    });

    it("clears the text field", () => {
      expect(getByTestId("messageText").value).toEqual("");
    });
    it("calls the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New Message");
    });
  });
});
//no export, only running the test, a component test.