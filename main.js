// Initialize Firebase
var config = {
    apiKey: "AIzaSyARqa-uMjWssJAtvVeBVAgTLIGQX1msAoE",
    authDomain: "contactform-2b1bc.firebaseapp.com",
    databaseURL: "https://contactform-2b1bc.firebaseio.com",
    projectId: "contactform-2b1bc",
    storageBucket: "",
    messagingSenderId: "247212784766"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var city = getInputVal('city');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, city, email, phone, message);
  
    //alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },5000);
  
    // EARSE CONTACT FORM
    document.getElementById('contactForm').reset();
  }
  
  // CALL VALUE
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, city, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      city:city,
      email:email,
      phone:phone,
      message:message
    });
  }