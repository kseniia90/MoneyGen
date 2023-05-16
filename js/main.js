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
    $this.siblings(".warning-your-tasks").toggleClass("hide");
    $this.siblings(".warning-new-tasks").toggleClass("hide");
  });

  // task display
  // $(".checklist__item").on("click", function (e) {
  //   e.preventDefault();
  //   var $this = $(this);
  //   $this.toggleClass("open");
  //   $(".checklist__item__checkbox", this).addClass("done");
  //   $(".task-status", this).addClass("active");
  //   $(".task-status__circle", this).addClass("active");
  // });
});
