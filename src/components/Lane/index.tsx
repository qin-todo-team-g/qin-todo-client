import {Box, Flex, Spacer, Heading, Input, Icon} from '@chakra-ui/react'
import {AiFillPlusCircle} from 'react-icons/ai';
import {VFC} from "react";

type Props = {
    color: string
    title: string
}

export const Lane: VFC<Props> = (props) => {
    return (
        <Box minW={426}>
            <Heading mb={6} color={props.color}>{props.title}</Heading>
            <Flex alignItems={'center'}>
                <Icon as={AiFillPlusCircle} w={6} h={6} mr={2} color="gray"/>
                <Spacer/>
                <Input border={'none'} placeholder='タスクを追加する'/>
            </Flex>
        </Box>
    );
}