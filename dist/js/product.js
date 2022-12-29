window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedHeader = header.offsetTop;
  const backTop = document.querySelector("#back-top");
  if (window.pageYOffset > fixedHeader) {
    header.classList.add("bg-neutral10");
    header.classList.add("shadow-default");
    backTop.classList.remove("hidden");
    setTimeout(() => {
      backTop.classList.remove("translate-y-32");
      backTop.classList.add("translate-y-0");
      backTop.classList.remove("opacity-0");
      backTop.classList.add("opacity-100");
    }, 500);
  } else {
    header.classList.remove("bg-neutral10");
    header.classList.remove("shadow-default");
    backTop.classList.remove("translate-y-0");
    backTop.classList.add("translate-y-32");
    backTop.classList.remove("opacity-100");
    backTop.classList.add("opacity-0");
    setTimeout(() => {
      backTop.classList.add("hidden");
    }, 100);
  }
};
