// 9.1 Skapa ett nytt object car2 med spread operatorn ...
// Det nya objektet ska updatera speed till 200.

const car = {
  name: "Volvo",
  speed: 100,
};

const car2 = {...car, speed: 200};

// 9.2 Skapa två variabler name och speed genom
// destructuring av objektet car.

const { name, speed} = car;
