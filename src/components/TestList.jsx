import React from "react";

const TestList = props => {
    const { messages } = props;
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={`message-${index}`}>{message}</li>
            ))}
        </ul>
    )
}

export default TestList;