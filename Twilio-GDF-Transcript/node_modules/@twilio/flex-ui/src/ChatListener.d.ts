import * as TwilioChat from "twilio-chat";
export declare class ChatListener {
    static init(client: TwilioChat.Client): void;
    private static handleChannelJoined;
    private static handleChannelLeft;
    private static handleChannelRemoved;
}
