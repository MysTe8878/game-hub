import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {

    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
    return (
        <Badge colorScheme={color} fontSize='20px' paddingX={3} borderRadius='4px'>{score}</Badge>
    )
}

export default CriticScore
