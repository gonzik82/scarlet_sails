var step = "380";
var list, сlassSection, direction, btn, obj;
var i = 0;

function moveUp(obj, сlassSection, direction) {
  btn = document.querySelector(сlassSection).querySelectorAll("button");
  list = document.querySelector(сlassSection).querySelectorAll("ul");
  console.log(сlassSection);
  console.log(direction);
  console.log(btn);
  console.log(obj);
  if (obj == btn[0]) {
    console.log("Двигаем влево");
    moveleft();
    if ($(btn[1]).prop('disabled')) {
      $(btn[1]).removeAttr('disabled')
    };
    $(obj).attr('disabled', 'disabled');

  } else {
    console.log("Двигаем вправо");
    moveright();
    $(obj).attr('disabled', 'disabled');
    if ($(btn[0]).prop('disabled')) {
      $(btn[0]).removeAttr('disabled')
    };

  }


}

function moveleft() {

  $(list).css({
    transform: "translateY(0)",
    // transition: ".6s transform"
  });
  $(list).addClass("jsmove jsmove--left");

}

function moveright() {

  $(list).css({

    transform: "translateY(-" + step + "px)",
    // transition: ".6s transform"
  });


}