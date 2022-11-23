var ad = JSON.parse(localStorage.getItem("st")) || [];
display(ad);


function display(ad) {
  document.getElementById("data").innerHTML = "";
  ad.map(function (ele,index) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var name = document.createElement("p");
    var course = document.createElement("p");
    var unit = document.createElement("p");
    var batch = document.createElement("p");
    course.innerText = ele.course;
    unit.innerText = ele.unit;
    batch.innerText = ele.batch;
    img.src = ele.image;
    name.innerHTML = ele.name;
    var rem = document.createElement("button");
    rem.addEventListener("click", function () {
      remove(ele,index);
    });
    rem.innerText = "Remove";
    div.append(name, img, course, unit, batch, rem);
    console.log("de");
    document.getElementById("data").append(div);
  
    
  

  });
}



var trush=JSON.parse(localStorage.getItem("trush"))||[];
console.log(trush);
function remove(a,ele) {
  var update=ad.splice(ele, 1);
  display(ad);
  localStorage.setItem("st", JSON.stringify(ad));
  trush.push(update);
  count(ad);
  localStorage.setItem("trush",JSON.stringify(trush));
  window.location.reload();

}


function count(ad) {
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
count(ad);

// window.localStorage.clear();