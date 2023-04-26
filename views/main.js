//api
// const script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=ae1c9a511444270cacfc9e1194001979";
// document.head.appendChild(script);

//root만든것
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

//header
const header = document.createElement("div");
header.id = "header";
root.appendChild(header);

//nav
const nav = document.createElement("div");
nav.id = "nav";
header.appendChild(nav);

//nav안에 ul
const navList = document.createElement("ul");
nav.appendChild(navList);

// 그안에 li
const info = document.createElement("li");
const infoLink = document.createElement("a");
infoLink.href = "#";
infoLink.textContent = "정보공유";
info.appendChild(infoLink);
navList.appendChild(info);

const signUp = document.createElement("li");
const signUpLink = document.createElement("a");
signUpLink.href = "#";
signUpLink.textContent = "회원가입";
signUp.appendChild(signUpLink);
navList.appendChild(signUp);

const login = document.createElement("li");
const loginLink = document.createElement("a");
loginLink.href = "#";
loginLink.textContent = "로그인";
login.appendChild(loginLink);
navList.appendChild(login);

// map
const map = document.createElement("div");
map.id = "map";
root.appendChild(map);

// map>content
const mapContents = document.createElement("div");
mapContents.id = "myMap";
map.appendChild(mapContents);

// detail ㅅ상세
const detailContent = document.createElement("div");
detailContent.id = "detailContent";
detailContent.style.display = "none";
detailContent.textContent = "상세내용";
map.appendChild(detailContent);