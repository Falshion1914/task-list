let elem = document.createElement("input");
elem.onkeydown = events;
document.body.appendChild(elem);
elem = document.createElement("button");
elem.innerHTML = "click";
document.body.appendChild(elem);
const parent = document.getElementById("container");
const list = document.createElement("ul");
parent.appendChild(list);
function srt(name) {
  document.querySelector("ul").innerHTML = "";
  if (localStorage.tasks !== undefined) {
    const arr = JSON.parse(localStorage.tasks).data;
    for (let i = 0; i < arr.length; i++) {
      const temp = document.createElement("li");
      temp.innerHTML = arr[i];
      list.appendChild(temp);
    }
  }
}
srt();
function events(e) {
  if (e.which === 13 || e.which === 1) {
    const val = document.getElementsByTagName("input")[0].value;
    vals = val.replace(/\s+/g, "");
    if (val !== undefined && vals !== "") {
      if (localStorage.tasks !== undefined) {
        const obj = JSON.parse(localStorage.tasks);
        obj.data.push(val);
        obj.data.sort();
        localStorage.tasks = JSON.stringify(obj);
      } else {
        localStorage.tasks = JSON.stringify({ data: [val] });
      }
      const el = document.createElement("li");
      el.innerHTML = val;
      list.appendChild(el);
      srt();
    }
    document.getElementsByTagName("input")[0].value = "";
  }
}

elem.onclick = events;
