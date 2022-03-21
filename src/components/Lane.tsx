import { Box, Flex, Spacer, Heading, Input, Icon } from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, VFC } from "react";
import { fetchTasks } from "../apis/tasks";

type Props = {
  color: string;
  title: string;
};

export const Lane: VFC<Props> = (props) => {
  useEffect(() => {
    fetchTasks().then((data) => console.log(data));
  }, []);

  return (
    <Box mt={{ sm: 8 }}>
      <Heading mb={4} size={"lg"} color={props.color}>
        {props.title}
      </Heading>
      <Flex alignItems={"center"}>
        <Icon as={AiFillPlusCircle} w={6} h={6} mr={2} color="gray" />
        <Spacer />
        <Input border={"none"} placeholder="タスクを追加する" />
      </Flex>
    </Box>
  );
};
