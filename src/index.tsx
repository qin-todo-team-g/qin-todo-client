import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, SimpleGrid} from '@chakra-ui/react';
import { theme } from './theme';
import { Header } from './components/Header'
import {Lane} from "./components/Lane";
import {LANE_VALUES} from "./const/lane_values";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <Header />
        <SimpleGrid columns={{base: 1, sm: 3}} spacing={8} px='24px'>
            {LANE_VALUES.map((val) => {
                return (
                    <Lane color={val.color} title={val.title} key={val.title}/>
                );
            })}
        </SimpleGrid>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
