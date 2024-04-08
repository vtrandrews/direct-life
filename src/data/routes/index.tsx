import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../../pages/home";
import ActivityPage from "../../pages/activity";

export const RoutesRedirect = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity" element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRedirect;
