var img_index = 0;
var my_img_list = new Array();
// Src
my_img_list[0] = "resources/img/projects/MH_Web.png";
my_img_list[1] = "resources/img/projects/Space_Wars.png";
my_img_list[2] = "resources/img/projects/Godai.png";
my_img_list[3] = "resources/img/projects/MHPixelLogo.png";
my_img_list[4] = "resources/img/projects/TheRobotEscape.png";

ChangeImg(img_index);

function AddIndex(){
  img_index += 1;
  if(img_index > my_img_list.length - 1){img_index = 0;}
  ChangeImg(img_index);
}

function SubstractIndex(){
  img_index -= 1;
  if(img_index < 0){img_index = my_img_list.length - 1;}
  ChangeImg(img_index);
}

function ChangeImg(index){
  var aux_doc = document.getElementById("project_img");
  var aux_doc_img = document.getElementById("project_img").src;

  aux_doc_img = my_img_list[index];
  document.getElementById("project_img").src = aux_doc_img;

  switch (index) {
    case 0:
      document.getElementById("project_title").innerHTML = "Monster Hunter Website";
      document.getElementById("project_title").style.left = "45%";
      document.getElementById("project_desc").innerHTML = "<p>This final year project consists in a thematic website of the game <i>Monster Hunter</i>, developed by the company Capcom. <br><br> In this website we will find some information of the game, a part from a <i>contact form</i> & a <i>generic CV</i>.</p>"
      document.getElementById("tech_used").style.width = "400px";
      document.getElementById("tech_used").style.left = "44%";
      document.getElementById("tech_used").innerHTML = "<img src='https://img.shields.io/badge/-HTML-FF4600?labelColor=2C2C2C&style=for-the-badge&logo=html5&logoColor=white' height='27px'><img src='https://img.shields.io/badge/-CSS-008FFF?labelColor=2C2C2C&style=for-the-badge&logo=css3&logoColor=white'><img src='https://img.shields.io/badge/-JavaScript-FFE800?labelColor=2C2C2C&style=for-the-badge&logo=javascript&logoColor=white'>";
    break;
    case 1:
      document.getElementById("project_title").innerHTML = "Space Wars";
      document.getElementById("project_title").style.left = "48%";
      document.getElementById("project_desc").innerHTML = "<p>This project was an assignment for the subject <i>Videogames Design</i>.<br><br>This game is based on many 2D arcade games of the <i>Bullet Hell</i> gender <br><br> where you will need to complete 3 waves of enemies to win the game.</p>";
      document.getElementById("tech_used").style.width = "180px";
      document.getElementById("tech_used").style.left = "47.3%";
      document.getElementById("tech_used").innerHTML = "<img src='https://img.shields.io/badge/-Unity-gray?labelColor=2c2c2c&style=for-the-badge&logo=unity'/><img src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white&labelColor=101010'/>";
    break;
    case 2:
      document.getElementById("project_title").innerHTML = "Godai";
      document.getElementById("project_title").style.left = "50%";
      document.getElementById("project_desc").innerHTML = "<p>This project was an assignment for the subject <i>Videogames Engines</i>.<br><br>This game is based on many 2D arcade games of the <i>Fighting</i> gender <br><br> where you will be able to play against other player in the same computer.</p>";
      document.getElementById("tech_used").style.width = "180px";
      document.getElementById("tech_used").style.left = "47.3%";
      document.getElementById("tech_used").innerHTML = "<img src='https://img.shields.io/badge/-Unity-gray?labelColor=2c2c2c&style=for-the-badge&logo=unity'/><img src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white&labelColor=101010'/>";
    break;
    case 3:
      document.getElementById("project_title").innerHTML = "Monster Hunter Pixel";
      document.getElementById("project_title").style.left = "45%";
      document.getElementById("project_desc").innerHTML = "<p></p>";
      document.getElementById("tech_used").style.width = "180px";
      document.getElementById("tech_used").style.left = "47.3%";
      document.getElementById("tech_used").innerHTML = "<img src='https://img.shields.io/badge/-Unity-gray?labelColor=2c2c2c&style=for-the-badge&logo=unity'/><img src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white&labelColor=101010'/>";
    break;
    case 4:
      document.getElementById("project_title").innerHTML = "The Robot Escape";
      document.getElementById("project_desc").innerHTML = "<p></p>";
      document.getElementById("tech_used").style.width = "180px";
      document.getElementById("tech_used").style.left = "47.3%";
      document.getElementById("tech_used").innerHTML = "<img src='https://img.shields.io/badge/-Unity-gray?labelColor=2c2c2c&style=for-the-badge&logo=unity'/><img src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white&labelColor=101010'/>";
    break;
  }
}