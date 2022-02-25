import {Heading} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';

export const Lane = () => {
    return (
        <div>
            <Heading>今日する</Heading>
            <Input placeholder='タスクを追加する'/>
        </div>
    );
}