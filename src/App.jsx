import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./screens/Movies";
import MoviesDetails from "./screens/MoviesDetails";
import ActorsDetails from "./screens/ActorsDetails";
import Profile from "./screens/Profile";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <NavBar />
      <Box sx={{ height: "70px" }}>
        <Box sx={{ flexGrow: 1, padding: "2em" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movies/:id" element={<MoviesDetails />} />
              <Route path="/actors/:id" element={<ActorsDetails />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
