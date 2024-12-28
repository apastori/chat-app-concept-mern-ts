import { Message } from "./Message"

export const MultiMessages = () => {
    return (
        <div className="px-4 flex-1 overflow-auto">
            <Message />
            <Message /> 
            <Message />             
        </div>
    )
}