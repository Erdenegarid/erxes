import * as React from "react";
import { IMessageDocument } from "../../../../../types";
import { SimpleMessage } from "./";

type Props = {
  message: IMessageDocument;
  conversationFirstMessage: IMessageDocument;
};

const TwitterMessage = (props: Props) => {
  const { conversationFirstMessage, message } = props;

  if (
    !message.customer ||
    !message.customer.twitterData ||
    (!conversationFirstMessage.customer ||
      !conversationFirstMessage.customer.twitterData)
  )
    return null;

  const firstTwitterData = conversationFirstMessage.customer.twitterData;
  const currentTwitterData = message.customer.twitterData;

  return (
    <SimpleMessage
      {...props}
      isStaff={firstTwitterData.id_str !== currentTwitterData.id_str || false}
    />
  );
};

export default TwitterMessage;
