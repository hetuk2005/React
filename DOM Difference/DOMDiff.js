const timmer = () => {
  let h2 = document.getElementById("timer");
  h2.innerHTML = "";

  let time = new Date().toLocaleTimeString();

  h2.append(time);
};

setInterval(timmer, 1000);
