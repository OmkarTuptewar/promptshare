import '@styles/global.css';
import { Children } from "react";

export const metadata = {
  title: "promptshare",
  description: "discover and share Ai Prompts",
};

const ROOTLAYOUT = ({children}) => { 
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main> 
      </body>
    </html>
  );
};

export default ROOTLAYOUT;
