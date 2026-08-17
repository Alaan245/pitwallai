import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Analyzer from "./pages/Analyzer";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<Analyzer />} />
      <Route path="/tarifs" element={<Pricing />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/cgu" element={<CGU />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
