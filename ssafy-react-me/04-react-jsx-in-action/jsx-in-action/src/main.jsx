import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  // 개발하는 동안 컴포넌트가 순수한가 순수한지 않은가 검사
  <StrictMode>
    <App />
  </StrictMode>
);
