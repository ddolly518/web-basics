window.onload = function () {
    const mediaEl = document.getElementById("demo");
  
    window.addEventListener("resize", function () {
      window.innerWidth >= 960
        ? (mediaEl.innerHTML = "무")
        : window.innerWidth >= 760
        ? (mediaEl.innerHTML = "야")
        : (mediaEl.innerHTML = "호");
    });
  };