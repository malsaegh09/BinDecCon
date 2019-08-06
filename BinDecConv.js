var $ = function(id) {
    return document.getElementById(id);
};
function clrscrn (){
    $("form").reset();
    $("txtOut").innerHTML = "";
    $("txtIn").focus();
}
window.onload = function() {
    $("btnClear").onclick = clrscrn;
    $("btnConvert").onclick = convert;
    $("txtIn").focus();
};

function convert() {
   var val = $("txtIn").value;
   if(val === ""){
       alert("no value entered for conversion");
       return;
   }
    var cT = document.getElementsByName("tType");
    if (cT[0].checked) {
        var dval = parseInt(val);
        if (isNaN(dval)){
            alert("Input value is not a number");
        }else if (val % 1 !==0){
            alert(" Number is not an integer");
        }else if (dval <= 0){
            alert ("Input value must be a positive Integer");
        }else {
            convertByArray(dval);
        }
    }else if (cT[1].checked) {
        var bval = parseInt(val);
        if (isNaN(bval)) {
            alert("Input value is not a number");
        } else if ((val % 1) !==0) {
            alert("Input value cannot include fraction or decimal");
        } else if (val.search(/^[10]+$/) === -1 ) {
            alert("Input value can only be 1s and 0s.");
           }else {
      convertTodecimal(bval);
        }
  } else {
    alert("Please select a conversion type.");
  }
}
// end of convert

// method to reverse the string
function reverseString(s) {
    return s.split("").reverse().join("");
}

// method to convert the binary number into decimal
function convertTodecimal(bval){
    strval = reverseString(bval+"");
    var term,sum = 0;
    for(var i = 0;i<strval.length;i++){
        if(strval[i]==1){
            term = Math.pow(2,i);
            $("txtCalc").value =  $("txtCalc").value+" Their is a "+term+" in the value ( 2 ^"+i+") \n";
            sum = sum+term;
        }
    }
       $("txtOut").value = sum;
}
function convertByArray(dval){
    var rA = new Array();
    var r,i,j;
    
    i=0;
    while (dval > 0){
        r = dval % 2;
        rA[i] = r;
        var nV = (dval - r) /2;
        $("txtCalc").value = $("txtCalc").value +
                "Decimal " +dval + " divided by 2 = " +nV +
                " w/Remainder of: " + r + "\n";
        i += 1;
        dval = nV;
    }
    for(j=rA.length-1; j>=0; j--){
        $("txtOut").value = $("txtOut").value + rA[j];
    }
}
