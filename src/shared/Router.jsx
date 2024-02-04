import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import defaultAvatar from "assets/defaultAvatar.png";
import fakeData from "fakeData.json";

const Router = () => {
  const [mailList, setMailList] = useState(fakeData);
  const options = {
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              defaultAvatar={defaultAvatar}
              mailList={mailList}
              setMailList={setMailList}
              options={options}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              defaultAvatar={defaultAvatar}
              mailList={mailList}
              setMailList={setMailList}
              options={options}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
