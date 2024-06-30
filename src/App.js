import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([{
  path: '/',
  element : <Body/>,
  children : [
    {
      path: '/',
      element : <MainContainer/>
    },
    {
      path : 'watch',
      element : <WatchPage/>
    },
    {
      path : 'demo',
      element : <Demo/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
