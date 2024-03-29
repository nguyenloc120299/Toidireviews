import { Heading, Text, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const DetailTop = (props) => {
    return (
        <>
            {
                props.name && props.intro && props.address ?
                    <>
                        <Heading size={'xl'} as='h1' py={1}>
                            {props.name}
                        </Heading>
                        <Text fontSize={'lg'} py={1} whiteSpace={'break-spaces'}>
                            {props.intro}
                        </Text>
                        <Text fontSize={'lg'} py={1}>
                            {props.address}
                        </Text>
                    </>
                    :
                    <SkeletonText w={'100%'} noOfLines={3} borderRadius="lg" height={'10'} py={1}></SkeletonText>
            }

        </>
    )
}

export default DetailTop