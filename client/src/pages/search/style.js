import { Box, Text } from "@chakra-ui/react"

export const BoxLayput = ({ children }) => {
    return (
        <Box
            position="relative"
            width="100%"
            padding="10px 14px"
            borderRadius="10px"
            backgroundColor="#fff"
            boxShadow=" 0 2px 8px #dddd"
            mb={10}
        >
            {children}
        </Box>
    )
}
export const TextTitleFilter = ({ children }) => {
    return (
        <Text as={'h2'}
            color="rgba(0, 0, 0, .85)"
            fontWeight="500"
            fontSize={'1.5rem'}
            p={"12px 16px"}
        >
            {children}
        </Text>
    )
}