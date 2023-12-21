import logo from './logo.svg';
import './scss/style.scss';
import { RecoilRoot } from 'recoil';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { } from './recoil'


function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Suspense fallback={loading}>
            <Routes>
              
            </Routes>
          </Suspense>
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
