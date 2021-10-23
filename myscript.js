//var email = document.getElementsByClassName("o4KIk")[0];

//var password = document.getElementsByClassName("o4KIk")[1];

//var login = document.getElementsByTagName('button')[0];

var email = document.getElementsByName("email")[0];

var password = document.getElementsByName("password")[0];

var login = document.getElementsByClassName("xBRdB ZYq7T _xpjA kmijQ FJv1f")[0];

var uemail = 'yashwanthsrivathsava@gmail.com';

var upassword = 'yashwanth20';

function autofill() {
  email.value = uemail;
  password.value = upassword;
  login.click();
}