import ThemeProvider from "./theme/ThemeProvider";
import RouterProvider from "./RouterProvider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
