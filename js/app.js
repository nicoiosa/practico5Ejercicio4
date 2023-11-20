setInterval(showTime, 1000);
setInterval(showDate, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let currentTime = hour + " : " + min + " : " + sec;
  const clock = document.getElementById("clock");
  clock.innerHTML = currentTime;
}
function showDate() {
  let date = new Date();
  let dayW = date.getDay();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  switch (dayW) {
    case 0:
      dayW = "Domingo";
      break;
    case 1:
      dayW = "Lunes";
      break;
    case 2:
      dayW = "Martes";
      break;
    case 3:
      dayW = "Miercoles";
      break;
    case 4:
      dayW = "Jueves";
      break;
    case 5:
      dayW = "Viernes";
      break;
    case 6:
      dayW = "Sabado";
      break;
  }
  switch (month) {
    case 0:
      month = "Enero";
      break;
    case 1:
      month = "Febrero";
      break;
    case 2:
      month = "Marzo";
      break;
    case 3:
      month = "Abril";
      break;
    case 4:
      month = "Mayo";
      break;
    case 5:
      month = "Junio";
      break;
    case 6:
      month = "Julio";
      break;
    case 7:
      month = "Agosto";
      break;
    case 8:
      month = "Septiembre";
      break;
    case 9:
      month = "Octubre";
      break;
    case 10:
      month = "Noviembre";
      break;
    case 11:
      month = "Diciembre";
      break;
  }
  let currentDate = `${dayW} ${day} de ${month} de ${year}`;
  const dateClock = document.getElementById("dateClock");
  dateClock.innerHTML = currentDate;
}
