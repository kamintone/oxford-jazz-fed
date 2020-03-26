import React from 'react';

function Payment() {
  return (
    <div id="App-content">
      <div className="App-section">
        <p style={{color: "red", fontWeight: "bold"}}>Payment can now be made by online bank transfer to:<br /><span style={{color: "black", fontSize: "1.2em"}}>Sort Code: 20-98-48<br />Account No: 70680486 (Oxfordshire Jazz Federation)</span><br /> with your name or initials as reference, or by PayPal, using the <em>Pay Now</em> button below.
        </p>
        <div style={{backgroundColor: "blue", textAlign: "left", width: "158px", marginTop: "6px", marginLeft: "15px", paddingLeft: "8px", paddingTop: "8px", borderRadius: "5px"}}>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            {/* <input type="hidden" name="hosted_button_id" value="F6P83BV84CQ52" /> */}
            <input type="hidden" name="hosted_button_id" value="FG75E42Q96GKG" />
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_paynow_LG.gif" border="0" name="submit" height="35px" alt="PayPal – The safer, easier way to pay online!" title="PayPal – The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
        <p style={{color: "red", fontWeight: "bold"}}>If you use either of these methods of payment, please also <a href="mailto:dorothy.giacomin@gmail.com">email Dorothy</a> confirming that you have paid, and include your address so that she can send your membership card.
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  )
}

export default Payment