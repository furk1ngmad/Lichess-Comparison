const form = document.querySelector("form");
const list_1 = document.querySelector("#list-1");
const list_2 = document.querySelector("#list-2");

const fetchLichessDataAndUpdate = async (username, list) => {
  const data = await fetch(`https://lichess.org/api/user/${username}`);
  const extdata = await data.json();
  const points = [
    `BULLET: ${extdata.perfs.bullet.rating}`,
    `BLITZ: ${extdata.perfs.blitz.rating}`,
    `RAPID: ${extdata.perfs.rapid.rating}`,
    `CLASSICAL: ${extdata.perfs.classical.rating}`,
  ];

  for (let i = 0; i < 4; i++) {
    list.children[i].textContent = points[i];
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const first_user = document.getElementById("first_user").value;
  const second_user = document.getElementById("second_user").value;
  fetchLichessDataAndUpdate(first_user, list_1);
  fetchLichessDataAndUpdate(second_user, list_2);
});
