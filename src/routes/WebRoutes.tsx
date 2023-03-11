import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ForgotPassword } from "../components/Auth/ForgotPassword";
import { Login } from "../components/Auth/Login";
import { Profile } from "../components/Auth/Profile";
import { Device } from "../components/Device/Device";
import { Home } from "../components/Home/Home";

export const WebRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/device" element={<Device />} />
      </Routes>
    </>
  );
};
