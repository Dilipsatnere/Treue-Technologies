var income = document.getElementById("income");

var outcome = document.getElementById("outcome");

var inn = document.getElementById("inn");

var out = document.getElementById("out");


income.addEventListener("input", function () {
  let f = this.value;

  // for meter
  if (inn.value === "meter" && out.value === "feet") {
    let i = f * 3.28;
    outcome.value = i;
  }
  if (inn.value === "meter" && out.value === "kilometer") {
    let i = f / 1000;
    outcome.value = i;
  }
  if (inn.value === "meter" && out.value === "centimeter") {
    let i = f * 100;
    outcome.value = i;
  }
  if (inn.value === "meter" && out.value === "meter") {
    let i = f ;
    outcome.value = i;
  }

  //   for feet conversion
  if (inn.value === "feet" && out.value === "meter") {
    let i = f / 3.28;
    outcome.value = i;
  }
  if (inn.value === "feet" && out.value === "kilometer") {
    let i = f / 3281;
    outcome.value = i;
  }
  if (inn.value === "feet" && out.value === "centimeter") {
    let i = f * 30.48;
    outcome.value = i;
  }
  if (inn.value === "feet" && out.value === "feet") {
    let i = f ;
    outcome.value = i;
  }

  //   for centimeter conversion
  if (inn.value === "centimeter" && out.value === "meter") {
    let i = f / 100;
    outcome.value = i;
  }
  if (inn.value === "centimeter" && out.value === "kilometer") {
    let i = f / 100000;
    outcome.value = i;
  }
  if (inn.value === "centimeter" && out.value === "feet") {
    let i = f / 30.48;
    outcome.value = i;
  }
  if (inn.value === "centimeter" && out.value === "centimeter") {
    let i = f ;
    outcome.value = i;
  }

  //   for kilometer conversion
  if (inn.value === "kilometer" && out.value === "meter") {
    let i = f * 1000;
    outcome.value = i;
  }
  if (inn.value === "kilometer" && out.value === "centimeter") {
    let i = f * 100000;
    outcome.value = i;
  }
  if (inn.value === "kilometer" && out.value === "feet") {
    let i = f * 3281;
    outcome.value = i;
  }
  if (inn.value === "kilometer" && out.value === "kilometer") {
    let i = f ;
    outcome.value = i;
  }
});

outcome.addEventListener("input", function () {
  let i = this.value;

  // for meter
  if (inn.value === "meter" && out.value === "feet") {
    let j = i / 3.28;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "meter" && out.value === "kilometer") {
    let j = i * 1000;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "meter" && out.value === "centimeter") {
    let j = i / 100;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "meter" && out.value === "meter") {
    let j = i ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }

  // for feet
  if (inn.value === "feet" && out.value === "feet") {
    let j = i ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "feet" && out.value === "kilometer") {
    let j = i * 3281;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "feet" && out.value === "centimeter") {
    let j = i / 30.48;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "feet" && out.value === "meter") {
    let j = i * 3.28 ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }

   // for centimeter
   if (inn.value === "centimeter" && out.value === "centimeter") {
    let j = i ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "centimeter" && out.value === "kilometer") {
    let j = i * 100000;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "centimeter" && out.value === "feet") {
    let j = i * 30.48;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "centimeter" && out.value === "meter") {
    let j = i * 100 ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }

   // for kilometer
   if (inn.value === "kilometer" && out.value === "kilometer") {
    let j = i ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "kilometer" && out.value === "centimeter") {
    let j = i / 100000;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "kilometer" && out.value === "feet") {
    let j = i / 3281;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
  if (inn.value === "kilometer" && out.value === "meter") {
    let j = i / 1000 ;
    if (!Number.isInteger(j)) {
      j = j.toFixed(2);
    }
    income.value = j;
  }
});
