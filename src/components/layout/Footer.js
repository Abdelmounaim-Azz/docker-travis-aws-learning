import React from "react";
import "./footer.css";
export default () => {
  return (
    <footer class="section footer">
      <div class="container">
        <div class="row">
          <div class=" mx-auto align-self-center order-1">
            <p class="copyright">
              copyright &copy; Abdelmounaim AZZIZA
              <span id="date"></span>. all rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
