
 //console.log(process.argv);

function readPassword(){
  var myArgs = process.argv.slice(2);
  return myArgs[0];
}
 //console.log('myArgs: ', myArgs);
var input =  readPassword();
obfuscate(input);

function obfuscate( password ){
  //console.log("test");

  //var password = readPassword();
  var outputPassword = "";

  for (var i = 0, len = password.length; i < len; i++) {
    switch( password[i] ){
    case 'a':
      outputPassword += "4";
      break;

    case 'e':
      outputPassword += "3";
      break;

    case 'o':
      outputPassword += "0";
      break;

    case 'l':
      outputPassword += "1";
      break;

    default:
      outputPassword += password[i];
      break;
    }
  }
  //console.log( outputPassword );
  return outputPassword;
}


