fetch('https://github.com/casjaysdev-sites/static.casjay.pro/raw/master/README.md')
  .then(function (response) {
    return response.text();
  })
  .then(function (body) {
    console.log(res);
    document.body.innerHTML = res;
  });
