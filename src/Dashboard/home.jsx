import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const DashHome = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      home
    </button>
  );
};
