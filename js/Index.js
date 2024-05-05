//1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
//valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.

// let dollar = prompt("Dollar daxil edin: ");
// let valuta = prompt("Valuta daxil edin: ");

// switch (valuta.toLocaleLowerCase()) {
//   case "eur":
//     dollar *= 0.93;
//     break;
//   case "uah":
//     dollar *= 39.26;
//     break;
//   case "azn":
//     dollar *= 1.7;
//     break;
// }
// console.log(`pul ${dollar}$`);

//2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
//300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim.

// 1 ci varyant
// let mebleg = prompt("meblegi daxil edin: ");
// let endirimliMebleg = 0;
// if (mebleg >= 200 && mebleg < 300) {
//   endirimliMebleg = mebleg * 0.97;
// } else if (mebleg >= 300 && mebleg < 500) {
//   endirimliMebleg = mebleg * 0.95;
// } else if (mebleg >= 500) {
//   endirimliMebleg = mebleg * 0.93;
// }
// console.log("mebleg :>> ", mebleg);
// console.log("endirimliMebleg :>> ", endirimliMebleg);

//2 ci varyant

// function endrimFunction(mebleg, min, max, maxLimit = false) {
//   if (mebleg >= min && (mebleg < max || maxLimit)) {
//     return true;
//   }
// }

// let mebleg = prompt("meblegi daxil edin: ");
// let endirimliMebleg = 0;
// switch (true) {
//   case endrimFunction(mebleg, 200, 300):
//     endirimliMebleg = mebleg * 0.97;
//     break;
//   case endrimFunction(mebleg, 300, 500):
//     endirimliMebleg = mebleg * 0.95;
//     break;
//   case endrimFunction(mebleg, 500, 0, true):
//     endirimliMebleg = mebleg * 0.97;
//     break;
// }
// console.log("mebleg :>> ", mebleg);
// console.log("endirimliMebleg :>> ", endirimliMebleg);

//3. İstifadəçidən dairənin perimetri və kvadratın perimetri soruş və belə bir dairənin göstərilən
//kvadrata sığacağını müəyyənləşdir.

// let daireRdius = prompt("dairenin radiusunu daxil dein: ");
// let kvadratRdius = prompt("kvadratin radiusunu daxil dein: ");

// daireRdius = Number(daireRdius);
// kvadratRdius = Number(kvadratRdius);

// if (daireRdius <= kvadratRdius) {
//   console.log("sigacaq");
// } else {
//   console.log("sigmiyacaq");
// }

//4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
//Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər.

// class Question {
//   question;
//   answer;
//   wrongAnswers;

//   constructor(question, answer, wrongAnswers) {
//     (this.question = question),
//       (this.answer = answer),
//       (this.wrongAnswers = wrongAnswers);
//   }

//   getQuestion() {
//     console.log(this.question);

//     let strQuestion = "";
//     let randomStr = Math.floor(Math.random() * 3);
//     let indexWA = 0;

//     for (let i = 0; i < 3; i += 1) {
//       if (i == randomStr) {
//         strQuestion += this.answer + "  ";
//         continue;
//       }

//       strQuestion += this.wrongAnswers[indexWA] + "  ";
//       indexWA += 1;
//     }
//     console.log(strQuestion);
//   }
// }

// let arrQuestions = [
//   new Question("1 ilde nece fesil olur", 4, [3, 6]),
//   new Question("1 ay da nece gun olur", 30, [25, 7]),
//   new Question("masinin nece tekeri olur", 4, [8, 3]),
//   new Question("dunyada nece qite var", 6, [7, 3]),
//   new Question("hefdenin nece gunu olur", 7, [6, 10]),
// ];
// let bal = 0;

// for (let i = 0; i < 3; i += 1) {
//   let randomQuestion = Math.floor(Math.random() * arrQuestions.length);
//   arrQuestions[randomQuestion].getQuestion();

//   let cavab = prompt("suali cavablayin: ");
//   if (cavab == arrQuestions[randomQuestion].answer) {
//     bal += 2;
//     console.log("Dugru cavab");
//     continue;
//   }
//   console.log("Yanlis cavab");
// }
// console.log("bal: ", bal);

//5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
//keçidini nəzərə alın, həmçinin dövr varlığını.
//Ev tapşırığı №3

// let gun = prompt("Gun daxil dein: ");
// let ay = prompt("ay daxil dein: ");
// let il = prompt("il daxil dein: ");

// il = Number(il);
// let gunYoxla = true;

// while (gunYoxla) {
//   switch (ay) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       if (gun + 1 > 31) {
//         gun -= 31;
//         ay += 1;
//       } else {
//         gun += 1;
//         gunYoxla = false;
//       }
//       break;
//     case 2:
//     case 9:
//       if (gun + 1 > 29) {
//         gun -= 29;
//         ay += 1;
//       } else {
//         gun += 1;
//         gunYoxla = false;
//       }
//       break;
//     case 4:
//     case 6:
//     case 11:
//       if (gun + 1 > 30) {
//         gun -= 30;
//         ay += 1;
//       } else {
//         gun += 1;
//         gunYoxla = false;
//       }
//       break;
//   }
//   if (ay > 12) {
//     ay -= 12;
//     il += 1;
//   }
// }

// let ayYoxla = true;
// while (ayYoxla) {
//   if (ay > 12) {
//     ay -= 12;
//     il += 1;
//   } else {
//     ayYoxla = false;
//   }
// }

// console.log(`il ${il} | ay ${ay} | gun ${gun}`);

//6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
//istifadəçi OK düyməsini basana qədər belə davam edir.

// function ayiGuneCevir(ay) {
//   let toplamGun = 0;
//   while (true) {
//     switch (ay) {
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         toplamGun += 31;
//         break;
//       case 2:
//       case 9:
//         toplamGun += 29;
//         break;
//       case 4:
//       case 6:
//       case 11:
//         toplamGun += 30;
//         break;
//     }

//     ay -= 1;
//     if (ay == 0) {
//       return toplamGun;
//     }
//   }
// }

// function hefdeninGununTap(hefdeNum) {
//   switch (hefdeNum) {
//     case 1:
//       return "1 ci gun";
//     case 2:
//       return "2 ci gun";
//     case 3:
//       return "3 cu gun";
//     case 4:
//       return "4 cu gun";
//     case 5:
//       return "cume gunnu";
//     case 6:
//       return "6 ci gun";
//     case 7:
//       return "bazar gunu";
//   }
// }
// let hefdeninGunu = new Date();
// while (true) {
//   let hefdeNum =
//     hefdeninGunu.getFullYear() * 360 +
//     ayiGuneCevir(hefdeninGunu.getMonth() + 1) +
//     hefdeninGunu.getDate();
//   let taplanGun = hefdeninGununTap((hefdeNum % 7) + 1);
//   console.log(taplanGun);

//   let devamCavabi = prompt('Devam etmek isteyitisizse "ok" yazin');
//   if (devamCavabi.toLocaleLowerCase() == "ok") {
//     hefdeninGunu.setDate(hefdeninGunu.getDate() + 1);
//   } else {
//     break;
//   }
// }

//7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
//rəqəmlərlə vurun.

// for (let i = 2; i < 9; i += 1) {
//   for (let j = 1; j < 11; j += 1) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//—-----------------------------------
//Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
//orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
//1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
//2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
//yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
//olduğunu nəzərə alın.

// class Car {
//   model;
//   year;
//   saataSureti;

//   constructor(model, year, saataSureti) {
//     this.model = model;
//     this.year = year;
//     this.saataSureti = saataSureti;
//   }

//   getInfo() {
//     console.log("model: ", this.model);
//     console.log("year: ", this.year);
//     console.log("saatdaki sureti: ", this.saataSureti);
//   }

//   yolunVaxtiniTap(mesafe) {
//     console.log("vaxda :>> ", mesafe / this.saataSureti);
//   }
// }

// let car1 = new Car("benwe", 2017, 120);

// car1.getInfo();
// car1.yolunVaxtiniTap(180);
