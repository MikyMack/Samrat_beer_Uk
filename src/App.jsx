import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../my-project/src/components/Loader/Loader"

// Lazy load your pages
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Products = lazy(() => import('./Pages/Products'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className='bg-black overflow-hidden'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
