var ad = JSON.parse(localStorage.getItem("st")) || [];

display(ad);

function storeData() {
  event.preventDefault();
  let form = document.getElementById("studentData");
  var name = form.name.value;
  var course = form.course.value;
  var unit = form.unit.value;
  var image = form.image.value;
  var batch = form.batch.value;
  form.innerHTML;
  function students(n, c, u, i, b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `pw${b}`;
  }
  let s1 = new students(name, course, unit, image, batch);
  ad.push(s1);

  localStorage.setItem("st", JSON.stringify(ad));
  form.name.value.innerHTML = "";
  course.innerHTML = "";
  window.location.reload();
}
function display(ad){ 
// calculate
function count() {
  var object = {};
  for (let i = 0; i < ad.length; i++) {
    if (!object[ad[i].batch]) {
      object[ad[i].batch] = 0;
    }
  }
  for (let i = 0; i < ad.length; i++) {
    object[ad[i].batch]++;
  }

  for (const key in object) {
    var span = document.createElement("span");
    span.setAttribute("id", "span");
    span.innerText = key + "-" + object[key] + "|";
    document.getElementById("navbar").append(span);
  }
}
count();
}

