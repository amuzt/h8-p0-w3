 var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
 dataHandling2(input);

 function dataHandling2(input) {
   input.splice(1, 1, 'Roman Alamsyah Elsharawy');
   input.splice(2, 1, 'Provinsi Bandar Lampung');
   input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
   console.log(input);

   var ana = input[3].split('/');
   switch (ana[1]) {
     case '01': {
       console.log('Januari');
       break;
     }
     case '02': {
       console.log('Febuari');
       break;
     }
     case '03': {
       console.log('Maret');
       break;
     }
     case '04': {
       console.log('April');
       break;
     }
     case '05': {
       console.log('Mei');
       break;
     }
     case '06': {
       console.log('Juni');
       break;
     }
     case '07': {
       console.log('Juli');
       break;
     }
     case '08': {
       console.log('Agustus');
       break;
     }
     case '09': {
       console.log('September');
       break;
     }
     case '10': {
       console.log('Oktober');
       break;
     }
     case '11': {
       console.log('November');
       break;
     }
     case '12': {
       console.log('Desember');
       break;
     }


   }

   var ana = ana;
   console.log(ana.sort((function (value1, value2) {
     return value2 - value1;
   })));
   console.log(ana);
   console.log(input[1].slice(0, 15))

 }




 /**
  * keluaran yang diharapkan (pada console)
  *
  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
  * Mei
  * ["1989", "21", "05"]
  * 21-05-1989
  * Roman Alamsyah
  */