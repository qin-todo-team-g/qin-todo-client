import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, Container, Flex} from '@chakra-ui/react';
import { theme } from './theme';
import {Lane} from "./components/Lane";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <Container maxW={'container.lg'}>
            <Flex>
                <Lane color={"red"} title={"今日する"}/>
                <Lane color={"orange"} title={"明日する"}/>
                <Lane color={"yellow"} title={"今度する"}/>
            </Flex>
        </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
