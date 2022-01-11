
function testGS() {

  var url = "https://script.googleusercontent.com/a/macros/squidux.com/echo?user_content_key=EOUlK-lGHYBgdFiD3hb6nPmXGY18K8etgzUSJ3r7GXPpoKo-ZDkjzynj2FcUzT_OYTFI-BWsMmTODtxJrhcKLogeNa2Ffpopm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_1eW5Ce608BnJTZrT1DbxNQzlbkztLVs84O1hNz59xNvpo-6IG1ag8u0Kw0_-Lk07RhqhCWlLQMIRTk1bZ3DcGebzfUiz6W5M&lib=MiF4mhWbo4LFspa_pvrVhknt_3hX4JE0S"
  fetch(url)
      .then(d => d.json())
      .then(d => {
        document.getElementById('app').textContent= "cool!";
      });

}


document.getElementById('btn').addEventListener("click",testGS);