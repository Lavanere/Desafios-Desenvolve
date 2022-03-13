document.getElementById("fibgenerate").addEventListener("click", function(){
    var fibinput = document.getElementById("fib");
      var fibresult = document.getElementById("result");
      var fiblistresult = document.getElementById("fib-demolist");
  var reg = new RegExp('^[0-9]+$');
      if(fibinput.value == "" || Number.isInteger(fibinput.value))
      {
          fibresult.innerHTML = "<strong>Por Favor Digite o Número</strong>";
          fibinput.focus();
          return false;
      }
      fibresult.innerHTML = "Resultados Fibonacci Gerados para " +fibinput.value;
      var f1 = 0;
      var f2 = 1;
      result = '<li>'+f1+'</li>';
      for(i=0; i < fibinput.value; i++ )
      {
          res = f1 + f2; 
          f1 = f2;
          f2 =  res;
          result += '<li>'+f1+'</li>';
      }
      fiblistresult.innerHTML = result;
});