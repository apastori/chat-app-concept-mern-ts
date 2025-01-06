import { Emoji } from "./Emoji";
import { IUserConversationAPI } from "./IUserConversationAPI";

export interface IConversationProps {
    conversation: IUserConversationAPI,
    lastIdx: boolean,
    emoji: Emoji
}