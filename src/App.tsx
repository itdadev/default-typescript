import React, { useState } from "react";

import { QueryClientProvider } from "react-query";
import { queryClient } from "@utils/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "@routes/Router";

import { ThemeProvider } from "@emotion/react";
import { dark, light } from "./theme";

function App() {
  const [themeMode, setThemeMode] = useState(light);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      <ThemeProvider theme={themeMode}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
