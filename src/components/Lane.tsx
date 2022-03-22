import { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Icon,
  Spacer,
  Input,
} from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { VFC } from "react";

type Props = {
  color: string;
  title: string;
};

export const Lane: VFC<Props> = (props) => {
  const [TodoText, setTodoText] = useState<string>("");
  const [TodayTodos, setTodayTodos] = useState<string[]>([]);

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onSubmitTodoText = () => {
    setTodayTodos([...TodayTodos, TodoText]);
    setTodoText("");
  };

  return (
    <Box mt={{ sm: 8 }}>
      <Heading mb={4} size={"lg"} color={props.color}>
        {props.title}
      </Heading>
      <Flex alignItems={"center"}>
        <List>
          {TodayTodos.map((todo: string, index) => {
            return (
              <ListItem key={index}>
                <Checkbox colorScheme="red" checked={true}>
                  <p>{todo}</p>
                </Checkbox>
              </ListItem>
            );
          })}
        </List>
      </Flex>
      <Flex alignItems={"center"}>
        <Icon as={AiFillPlusCircle} w={6} h={6} mr={2} color="gray" />
        <Spacer />
        <Input
          border={"none"}
          placeholder="タスクを追加する"
          value={TodoText}
          onChange={onChangeTodoText}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmitTodoText();
            }
          }}
        />
      </Flex>
    </Box>
  );
};
