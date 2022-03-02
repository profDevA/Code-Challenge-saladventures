function submitHandler(e) {
  e.preventDefault();
  let address = document.getElementById("input-address").value;
  let amount = document.getElementById("input-amount").value;
  let otp = document.getElementById("input-otp").value;

  if (!address) {
    alert("ETH address can't be empty");
    return
  }
  let reg = /^0x[a-fA-F0-9]{40}$/
  if(!reg.test(address)) {
    alert("Invalid address")
    return
  }
  if (!amount || amount == 0) {
    alert("Please input amount!")
    return;
  }
  if (isNaN(amount)) {
    alert("Input amount should be number!")
    return
  }
  if (!otp) {
    alert("OTP can't be empty!")
    return
  }

  alert("Form submitted successfully")
  // formsumbmit function here
}
