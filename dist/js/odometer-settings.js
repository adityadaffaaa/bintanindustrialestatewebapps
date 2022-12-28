const lLahan = document.querySelector("#l-lahan");
const jmlTenants = document.querySelector("#jml-tenants");
const jmlPekerjaan = document.querySelector("#jml-pekerjaan");

const odoLahan = new Odometer({
  el: lLahan,
});

const odoTenants = new Odometer({
  el: jmlTenants,
});

const odoPekerjaan = new Odometer({
  el: jmlPekerjaan,
});

setTimeout(() => {
  lLahan.innerHTML = 4000;
}, 100);

setTimeout(() => {
  jmlTenants.innerHTML = 17;
});

setTimeout(() => {
  jmlPekerjaan.innerHTML = 6100;
});
