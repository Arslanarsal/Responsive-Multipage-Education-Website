$(`#menu-close`).click(() => {
  $("nav .navigation ul").removeClass("active");
});

$(`#menu-btn`).click(() => {
  $("nav .navigation ul").addClass("active");
});
