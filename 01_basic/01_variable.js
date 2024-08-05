const accountId = 125555 //initialize once
let accEmail="aksh122@gmail.com" // most uses
var accPassword ="456457"
accCity="Bls"
let accState;

//accountId =2 // error
accEmail ="at@gmail.com"
accPassword ="5456"
accCity="baripada"

console.log(accountId);

console.table([accountId, accEmail , accPassword , accCity, accState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/