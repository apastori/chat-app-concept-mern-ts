import { funEmojis } from "./funEmojis"
import { Emoji } from "../types/Emoji"

export const getRandomEmoji = (): Emoji => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)]
}