function foo() {
  let cc = document.getElementById("cname").value;
  console.log(cc);
  async function foo1() {
    let data = await fetch(`https://api.covid19api.com/dayone/country/${cc}`);
    let result = await data.json();
    console.log(result);

    // document.getElementById("country").innerHTML=`<div>  ${code}</div>`
    for (var i in result) {
      var compute = result[i].Confirmed;
      var code = result[i].CountryCode;
      var date = result[i].Date;
      var death = result[i].Deaths;
      var div = document.createElement("div");
      div.innerHTML = `<div> Date: ${date}</div> <div>Confirmed cases:${compute}</div>  <div>Death: ${death}</div> `;
      document.body.append(div);
    }
  }
  foo1();
}
