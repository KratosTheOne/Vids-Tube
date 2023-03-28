import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      }
    ]
  },
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**
 * 
 * Head
 * Body
 *  Sidebar
 *    Menu Items
 *  Main Container
 *    Buttons List
 *    Video Container
 *      Video List
 * 
 */