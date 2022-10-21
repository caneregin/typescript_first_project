import React from 'react'
import { CardWrapper, CardTop, CardBottom, Setup, Delivery } from './styled/index'
import { Joke, FlagKeys, Category} from "../common/type"

interface JokeItemProps{
    joke: Joke
}
const JokeItem: React.FC<JokeItemProps> = ({joke}) => {
    const flags = Object.keys(joke.flags)
    .filter((key)=>joke.flags[key as FlagKeys])
    .join(",")
  return (
    <CardWrapper>
        <CardTop>
            {joke.type === "single" ? (
                <p>{joke.joke}</p>
            ) : (
                <>
                <Setup>{joke.setup}</Setup>
                <Delivery>{joke.delivery}</Delivery>
                </>
            )}
        </CardTop>
        <CardBottom>
            <p>{joke.category}</p>
        </CardBottom>
    </CardWrapper>
  )
}

export default JokeItem