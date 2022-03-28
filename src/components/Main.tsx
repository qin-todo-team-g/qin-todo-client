import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import { LANE_VALUES } from "../const/lane_values";
import { Header } from "./Header";
import { Lane } from "./Lane";
import axios from "axios";

export const Main = () => {
  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } =
    useAuth0();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({});
        setToken(accessToken);
      } catch (e: any) {
        console.log(e.message);
      }
    };
    getToken();
  }, []);

  const fetchTasks = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    console.log(`Bearer ${token}`);
    axios
      .get("http://localhost:3001/api/v1/tasks", headers)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((e) => console.error(e));
  };

  const fetchPublic = () => {
    axios
      .get("http://localhost:3001/public")
      .then((res) => {
        return console.log(res.data);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <>
          <Button onClick={() => logout()}>ログアウト</Button>
          <Button onClick={() => fetchTasks()}>タスク一覧取得</Button>
          <Button onClick={() => fetchPublic()}>puclic</Button>
        </>
      ) : (
        <Button onClick={() => loginWithRedirect()}>ログイン</Button>
      )}
      <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={8} px="24px">
        {LANE_VALUES.map((val) => {
          return <Lane color={val.color} title={val.title} />;
        })}
      </SimpleGrid>
    </>
  );
};
