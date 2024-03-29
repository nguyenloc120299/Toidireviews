import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';

export default function NotFound() {
    return (
        <Box textAlign="center" py={10} px={6} h="100vh">
            <Center h={'100%'}>
                <Box>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        bgGradient="linear(to-r, red.400, red.600)"
                        backgroundClip="text">
                        404
                    </Heading>
                    <Text color={'gray.500'} fontSize={'3xl'} mb={6}>
                        Không tìm thấy trang
                    </Text>
                </Box>
            </Center>
        </Box>
    );
}