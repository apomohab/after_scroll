
let sections = document.querySelectorAll(".section");

const parentUL = document.getElementById("navlist");

sections.forEach((el, ind) => {
  let dataInfo = el.getAttribute("data-info");
  let idInfo = el.getAttribute("id");
  console.log(dataInfo);
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "mylist" + (ind + 1));
  listItem.innerHTML = `<a href=#${idInfo}>${dataInfo}</a>`;
  parentUL.appendChild(listItem);
  console.log(Math.ceil(el.getBoundingClientRect().top));
});

parentUL.classList.add("created");




function scrollToTop() {
  window.scrollTo(0, 0);
}

const sectPos = arr => {
  let sectPositions = [];
  arr.forEach(el =>
    sectPositions.push(
      Math.ceil(el.getBoundingClientRect().top + window.scrollY)
    )
  );
  return sectPositions;
};
const sectMidPos = arr => {
  let sectMidPosition = arr.reduce((acc, val, ind) => {
    if (ind < arr.length - 1) {
      acc[ind] = Math.ceil(
        arr[ind] + (Math.abs(arr[ind + 1] - arr[ind]) * 3) / 4
      );
    }
    return acc;
  }, []);
  return sectMidPosition;
};



window.addEventListener('scroll', e => {
  checkPoints = sectMidPos(sectPos(pageSections));
  let pos = window.scrollY;
  let myPos;
  for (let i = 0; i < checkPoints.length; ++i) {
    myPos = checkPoints.length;
    if (pos < checkPoints[i]) {
      myPos = i;
      break;
    }
  }
  // Set sections as active
  for (let i = 0; i < pageSections.length; ++i) {
    if (i === myPos) {
      document.querySelector('.navlist' + (i + 1)).classList.add('active-item');
    } else {
      document.querySelector('.navlist' + (i + 1)).classList.remove('active-item');
    }
  }
});