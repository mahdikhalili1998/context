import Userpage from "./components/Userpage";
import Provider from "./context/Provider";

function App() {
  return (
    <>
      <Provider>
        <Userpage />
      </Provider>
    </>
  );
}

export default App;
