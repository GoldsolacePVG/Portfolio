var img_index = 0;
var my_img_list = new Array();
// Src
my_img_list[0] = "../../img/projects/MH_Web.png";

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

  aux_doc_img = my_img_list[0];
  document.getElementById("project_img").src = aux_doc_img;
}