import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  // useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
        color: "#000000",
      },
    },
  },
  colors: {
    red: "#F43F5E", // 今日する
    orange: "#FB923C", // 明日する
    yellow: "#FBBF24", // 今度する
    gray: "#C2C6D2", // テキストのグレーアウト。タスクの追加・編集・削除ボタン
  },
});
