import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SurveyForms from './pages/SurveyForms';
import Preview from './pages/Preview';
import Submit from './pages/Submit';
import Layout from './components/common/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SurveyForms />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/submit" element={<Submit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
