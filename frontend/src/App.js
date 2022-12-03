import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<List />}/>
          <Route path="create" element={<Create />}/>
          <Route path="edit/:id" element={<Edit />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
