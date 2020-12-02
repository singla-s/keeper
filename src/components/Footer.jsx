import React from 'react';

var year = new Date().getFullYear();
var FooterText = "Copyright " + year;

function Footer(){
 return <div className="footerDiv">
        <footer>{FooterText}</footer>
      </div>
}
export default Footer;