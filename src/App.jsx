import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyles';
import './App.css';
import { darkTheme, lightTheme } from './components/Themes';
import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

//Endpoints html pages
const Main = lazy(() => import('./components/Main'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const WorkPage = lazy(() => import('./components/WorkPage'));
const MySkillsPage = lazy(() => import('./components/MySkillsPage'));
import LoadingScreen from './components/LoadingScreen';

// import BlogPage from './components/BlogPage';
// import AboutPage from './components/AboutPage';
// import WorkPage from './components/WorkPage';
// import MySkillsPage from './components/MySkillsPage';

//Diferente manera de realizar el enrrutado de la aplicacion
/* const router = createBrowserRouter([
  { name: 'Home', path: '/', element: <Main /> },
  { name: 'About', path: '/about', element: <AboutPage /> },
  { name: 'Blog', path: '/blog', element: <BlogPage /> },
  { name: 'Work', path: '/work', element: <WorkPage /> },
  { name: 'Skills', path: '/skills', element: <MySkillsPage /> },
]); */

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* <RouterProvider router={router} /> -> Otra manera de hacer el enrrutado */}
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
