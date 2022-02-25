import {Box} from "@chakra-ui/react"
import {Flex, Spacer} from '@chakra-ui/react'
import {Heading} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';
import {Icon} from '@chakra-ui/react';
import {AiFillPlusCircle} from 'react-icons/ai';

type Props = {
    color: string
    title: string
}

export function Lane(props: Props) {
    return (
        <div>
            <Box minW={426}>
                <Heading mb={6} color={props.color}>{props.title}</Heading>
                <Flex alignItems={'center'}>
                    <Icon as={AiFillPlusCircle} w={6} h={6} mr={2} color="gray"/>
                    <Spacer/>
                    <Input border={'none'} placeholder='タスクを追加する'/>
                </Flex>
            </Box>
        </div>
    );
}