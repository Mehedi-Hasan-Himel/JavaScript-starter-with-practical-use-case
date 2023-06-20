navigator.geolocation.getCurrentPosition(function (position) {
  let altitude = position.coords.altitude;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let speed = position.coords.speed;

  document.write("Altitude: " + altitude + "<br>");
  document.write("latitude: " + latitude + "<br>");
  document.write("longitude: " + longitude + "<br>");
  document.write("speed: " + speed + "<br>");
});
