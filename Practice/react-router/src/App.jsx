import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import Faq from "./Pages/help/Faq";
import Contact from "./Pages/help/Contact";
import NotFound from "./Pages/NotFound";
import Careers from "./Pages/careers/Careers";
import CareersLayout from "./Layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      
      {/* Help section with nested routes */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Redirect base /help to FAQ or another default page if needed */}
        <Route index element={<Faq />} />
      </Route>
      <Route path="careers" element={<CareersLayout/>}>
      <Route index element={<Careers/>}/>
      </Route>
      {/* Catch-all route for 404 errors */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;