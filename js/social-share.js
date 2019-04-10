(function() {
  function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params =
      "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
      top +
      ",left=" +
      left;
    window.open(url, "NewWindow", params);
  }

  document
    .querySelector(".social-share.facebook")
    .addEventListener("click", function(e) {
        url = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(document.URL);
      socialWindow(url);
    });

  document
    .querySelector(".social-share.twitter")
    .addEventListener("click", function(e) {
        url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(document.URL);
      socialWindow(url);
    });

  document
    .querySelector(".social-share.linkedin")
    .addEventListener("click", function(e) {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.URL);
      socialWindow(url);
    });

    document
        .querySelector(".social-share.email")
        .addEventListener("click", function (e) {
            url = "mailto:?subject=" + encodeURIComponent(document.title) + "&body=" + encodeURIComponent(document.URL);
            socialWindow(url);
        });

})();
