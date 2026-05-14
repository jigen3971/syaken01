function calculate(){

  const carType = document.getElementById("carType").value;
  const period = document.getElementById("jibaisekiPeriod").value;
  const weightTax = Number(document.getElementById("weightTax").value);

  let jibaiseki = 0;
  let inshi = 2200;
  let daikou = 5000;

  // 軽自動車
  if(carType === "kei"){

    if(period == "24"){
      jibaiseki = 17540;
    }

    if(period == "25"){
      jibaiseki = 18160;
    }

    if(period == "12"){
      jibaiseki = 11440;
    }

    if(period == "13"){
      jibaiseki = 11800;
    }

  }

  // 普通車 2000cc未満
  if(carType === "small"){

    if(period == "24"){
      jibaiseki = 17650;
    }

    if(period == "25"){
      jibaiseki = 18240;
    }

    if(period == "12"){
      jibaiseki = 11500;
    }

    if(period == "13"){
      jibaiseki = 11870;
    }

  }

  // 普通車 2000cc以上
  if(carType === "large"){

    if(period == "24"){
      jibaiseki = 17650;
    }

    if(period == "25"){
      jibaiseki = 18240;
    }

    if(period == "12"){
      jibaiseki = 11500;
    }

    if(period == "13"){
      jibaiseki = 11870;
    }

  }

  // 小型トラック
  if(carType === "truckSmall"){

    if(period == "12"){
      jibaiseki = 12900;
    }

    if(period == "13"){
      jibaiseki = 13480;
    }

  }

  // 大型トラック
  if(carType === "truckLarge"){

    if(period == "12"){
      jibaiseki = 12900;
    }

    if(period == "13"){
      jibaiseki = 13480;
    }

  }

  const total = jibaiseki + inshi + daikou + weightTax;

  document.getElementById("jibaiseki").textContent =
    jibaiseki.toLocaleString();

  document.getElementById("inshi").textContent =
    inshi.toLocaleString();

  document.getElementById("daikou").textContent =
    daikou.toLocaleString();

  document.getElementById("total").textContent =
  total.toLocaleString() + "円";

}
function setWeightTax(amount){
  document.getElementById("weightTax").value = amount;
}
document.querySelectorAll(".tax-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("weightTax").value = btn.dataset.tax;
    calculateTotal();
  });
});