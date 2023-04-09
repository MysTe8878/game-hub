import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (gameQuary: GameQuery) =>
    useData<Game>
        (
            "/games",
            {
                params: {
                    genres: gameQuary.genre?.id,
                    platforms: gameQuary.platform?.id
                }
            }, [
            gameQuary
        ]);


export default useGames