import "scrollmagic";

var controller = new ScrollMagic.Controller();
var pinnedElement = document.querySelector(".two");
var scene = new ScrollMagic.Scene({
  offset: 100,
  duration: 400,
  triggerElement: pinnedElement,
});
pinnedElement(pinnedElement);

controller.addScene(scene);
