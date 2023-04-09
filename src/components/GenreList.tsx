import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <HStack justifyContent='center'><Spinner
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
    /></HStack>
    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id}
                    paddingY="5px"
                >
                    <HStack>
                        <Image marginRight='5px' boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList
