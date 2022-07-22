import React from "react";
import "./profile-picture.css";
import Picture from "./me.jpeg";

export default function ProfilePicture() {
  return <img src={Picture} alt="Profile" className="profile-picture" />;
}
