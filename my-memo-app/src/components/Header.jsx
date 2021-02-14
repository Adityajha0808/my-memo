import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";

function Header() {
  return (
    <div>
      <header>
        <h1>
          <DehazeIcon className="icon" />
          <div class="myinfo">- Developed by Aditya</div> My Memo
        </h1>
      </header>
      <h3 className="info">Keep all of your daily chores here!</h3>
    </div>
  );
}

export default Header;
