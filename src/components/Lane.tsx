import { Box } from "@chakra-ui/react"
import {Flex, Spacer} from '@chakra-ui/react'
import {Heading} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';
import {Icon} from '@chakra-ui/react';
import {AiFillPlusCircle} from 'react-icons/ai';

export const Lane = () => {
    return (
        <div>
            <Box maxW={426}>
                <Heading mb={6} color="red">今日する</Heading>
                <Flex alignItems={'center'}>
                    <Icon as={AiFillPlusCircle} w={6} h={6} mr={2} color="gray"/>
                    <Spacer/>
                    <Input border={'none'} placeholder='タスクを追加する'/>
                </Flex>
            </Box>
        </div>
    );
}