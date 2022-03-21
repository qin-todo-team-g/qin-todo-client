import { useAuth0 } from "@auth0/auth0-react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { LANE_VALUES } from "../const/lane_values";
import { Header } from "./Header";
import { Lane } from "./Lane";

export const Main = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <Header />
      <Button onClick={() => loginWithRedirect()}>ログイン</Button>
      <Button onClick={() => logout()}>ログアウト</Button>
      <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={8} px="24px">
        {LANE_VALUES.map((val) => {
          return <Lane color={val.color} title={val.title} />;
        })}
      </SimpleGrid>
    </>
  );
};
