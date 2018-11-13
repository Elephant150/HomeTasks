
  function genPass(){
      var pass = "Password =>  ";
      var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for(var i=0;i<15;i++){
          var retVal = Math.floor(Math.random()*char.length);
          pass += char.charAt(retVal);
      }
      return pass;
  }
  console.log(genPass());