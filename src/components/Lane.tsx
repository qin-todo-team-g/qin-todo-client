import {Heading} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { AiFillPlusCircle } from 'react-icons/ai';

export const Lane = () => {
    return (
        <div>
            <Heading color="red">今日する</Heading>
            <Icon color="gray" as={AiFillPlusCircle} />
            <Input placeholder='タスクを追加する'/>
        </div>
    );
}