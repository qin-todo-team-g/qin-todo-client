import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import { LANE_VALUES } from "../const/lane_values";
import { Header } from "./Header";
import { Lane } from "./Lane";
import { fetchTasks } from "../apis/tasks";
import { fetchPublic } from "../apis/public";

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

  const getTasks = () => {
    fetchTasks(token).then((data) => console.log(data));
  };

  const getPublic = () => {
    fetchPublic().then((data) => console.log(data));
  };

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <>
          <Button onClick={() => logout()}>ログアウト</Button>
          <Button onClick={() => getTasks()}>タスク一覧取得</Button>
          <Button onClick={() => getPublic()}>テストAPI(非認証)</Button>
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
