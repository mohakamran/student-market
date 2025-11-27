import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import QueryProvider from "./providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <QueryProvider>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
