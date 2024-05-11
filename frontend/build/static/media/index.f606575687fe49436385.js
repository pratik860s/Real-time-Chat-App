import React from"react";import ReactDOM from"react-dom/client";import"./index.css";import App from"./App";import reportWebVitals from"./reportWebVitals";import{ChakraProvider}from"@chakra-ui/react";import{BrowserRouter}from"react-router-dom";import ChatProvider from"./Context/ChatProvider";import{jsx as _jsx}from"react/jsx-runtime";import{Fragment as _Fragment}from"react/jsx-runtime";const root=ReactDOM.createRoot(document.getElementById("root"));root.render(_jsx(_Fragment,{children:_jsx(BrowserRouter,{children:_jsx(ChakraProvider,{children:_jsx(ChatProvider,{children:_jsx(App,{})})})})})),reportWebVitals();