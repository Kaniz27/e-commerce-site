import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import TopHeader from "../Components/Header/TopHeader";
import BottomFooter from "../Components/BottomFotter/BottomFooter";

const Root = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </div>
  );
};

export default Root;
