// preload home page
window.setTimeout(function () {
  document.body.classList.add("loaded_hiding");
}, 1400);
window.setTimeout(function () {
  document.body.classList.add("loaded");
  document.body.classList.remove("loaded_hiding");
}, 1500);

$(function () {
  // accordion
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $(".accordion__arrow").removeClass("accordion__rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion__arrow", this).toggleClass("accordion__rotate");
    // $this.siblings(".warning-your-tasks").toggleClass("hide");
    // $this.siblings(".warning-new-tasks").toggleClass("hide");
  });

  // task display
  $(".checklist__item").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.addClass("open");
    $(".checklist__item__checkbox", this).addClass("done");
    $(".task-status", this).addClass("green");
    $(".task-status__circle", this).toggleClass("red");
  });

  // mark in red money-limit
  $(".method-link-mobile").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    $(".limit-gift").removeClass("red");
    $(".limit-gift").text( "From 10$" );
    $this.siblings(".limit-mobile").toggleClass("red");
    $this.siblings(".limit-mobile").text("You don't have enough money");
  });

  $(".method-link-gift").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    $(".limit-mobile").removeClass("red");
    $(".limit-mobile").text( "From 10$" );
    $this.siblings(".limit-gift").toggleClass("red");
    $this.siblings(".limit-gift").text("You don't have enough money");
  });
});

//copy the text inside the input
function myFunction() {
  const copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  // alert("Copied text: " + copyText.value);
}
