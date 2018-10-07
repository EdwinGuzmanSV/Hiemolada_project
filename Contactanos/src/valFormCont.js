function valiform(){
       var nom= document.getElementById("fullname").value;
       var expregnom = /(^([A-Za-z]+)$)|^$/;
       var emai = document.getElementById("email").value;
       var expregemail = /(^([A-Za-z]{1})([A-Za-z0-9_-]+)(@{1})([A-Za-z0-9]+)(.{1})([A-Za-z]{1,3})$)|^$/;
       var num = document.getElementById("phone").value;
       var expregnum = /(^([2|6|7]{1})([1-9]{3})( |-|)([0-9]{4})$)|^$/;
       if(expregnom.test(nom));
       else
            alert("El nombre no es correcto");
       if(expregemail.test(emai));
       else
            alert("El email no es correcto");
       if(expregnum.test(num));
       else
            alert("El numero no es correcto");
}