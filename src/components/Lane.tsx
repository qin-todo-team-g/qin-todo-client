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
import { createTask } from "../apis/tasks";

type Props = {
  color: string;
  title: string;
  token: string;
};

export type param = {
  task_type: number;
  title: string;
  is_done: boolean;
  user_id: number;
};

const initialState = {
  task_type: 0,
  title: "init",
  is_done: false,
  user_id: 1,
};

export const Lane: VFC<Props> = (props) => {
  const [TodoText, setTodoText] = useState<string>("");
  const [TodayTodos, setTodayTodos] = useState<string[]>([]);
  const [params, setParams] = useState<param>(initialState);

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onSubmitTodoText = () => {
    // setParams((prevParams) => {
    //   const newParams = { ...prevParams, title: TodoText };
    //   return newParams;
    // });
    setParams({ ...params, title: TodoText });

    createTask(params, props.token).then((data) => {
      // setTodayTodos((prevTodayTodos) => {
      //   const newTodayTodos = [...prevTodayTodos, data.task.title];
      //   return newTodayTodos;
      // });]
      setTodayTodos([...TodayTodos, data.task.title]);
    });
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
              <ListItem key={index} p="2">
                <Checkbox colorScheme="red">
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
