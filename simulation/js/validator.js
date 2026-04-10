import { getBoxOrder } from "./main.js";

function convertToLowerCase(inputString) {
  return inputString.toLowerCase();
}

export function isFilled() {
  // checking verilog module
  let fileName = document.getElementById("file-name");
  let VolSrcName = document.getElementById("voltage-source-name");
  let volPos = document.getElementById("voltage-positive-terminal-selector");
  let volNeg = document.getElementById("voltage-negative-terminal-selector");
  let subcktName = document.getElementById("subckt-name");
  let subcktIn1 = document.getElementById("subckt-in1-name");
  let subcktIn2 = document.getElementById("subckt-in2-name");
  let subcktOut = document.getElementById("subckt-out-name");
  let pmos1Name = document.getElementById("pmos1-name");
  let pmos1Drain = document.getElementById("pmos1-drain-terminal");
  let pmos1Gate = document.getElementById("pmos1-gate-terminal");
  let pmos1Source = document.getElementById("pmos1-source-terminal");
  let pmos1Body = document.getElementById("pmos1-body-terminal");
  let nmos1Name = document.getElementById("nmos1-name");
  let nmos1Drain = document.getElementById("nmos1-drain-terminal");
  let nmos1Gate = document.getElementById("nmos1-gate-terminal");
  let nmos1Source = document.getElementById("nmos1-source-terminal");
  let nmos1Body = document.getElementById("nmos1-body-terminal");
  let pmos2Name = document.getElementById("pmos2-name");
  let pmos2Drain = document.getElementById("pmos2-drain-terminal");
  let pmos2Gate = document.getElementById("pmos2-gate-terminal");
  let pmos2Source = document.getElementById("pmos2-source-terminal");
  let pmos2Body = document.getElementById("pmos2-body-terminal");
  let nmos2Name = document.getElementById("nmos2-name");
  let nmos2Drain = document.getElementById("nmos2-drain-terminal");
  let nmos2Gate = document.getElementById("nmos2-gate-terminal");
  let nmos2Source = document.getElementById("nmos2-source-terminal");
  let nmos2Body = document.getElementById("nmos2-body-terminal");
  let endSubckt = document.getElementById("end-subckt-name");
  let gateCallInstance = document.getElementById("gate-call-instance-name");
  let gateCallIn1 = document.getElementById("gate-call-input1");
  let gateCallIn2 = document.getElementById("gate-call-input2");
  let gateCallOut = document.getElementById("gate-call-output");
  let gateCallSubckt = document.getElementById("gate-call-subckt-name");

  let error = "Highlighted part of the code is incomplete.";
  if (fileName.value.trim() == "") {
    printErrors(error, fileName);
    return false;
  }
  if (VolSrcName.value.trim() == "") {
    printErrors(error, VolSrcName);
    return false;
  }
  if (volPos.value === "") {
    printErrors(error, volPos);
    return false;
  }
  if (volNeg.value === "") {
    printErrors(error, volNeg);
    return false;
  }
  if (subcktName.value.trim() == "") {
    printErrors(error, subcktName);
    return false;
  }
  if (subcktOut.value.trim() == "") {
    printErrors(error, subcktOut);
    return false;
  }
  if (subcktIn1.value.trim() == "") {
    printErrors(error, subcktIn1);
    return false;
  }
  if (subcktIn2.value.trim() == "") {
    printErrors(error, subcktIn2);
    return false;
  }
  if (pmos1Name.value.trim() == "") {
    printErrors(error, pmos1Name);
    return false;
  }
  if (pmos1Drain.value.trim() == "") {
    printErrors(error, pmos1Drain);
    return false;
  }
  if (pmos1Gate.value.trim() == "") {
    printErrors(error, pmos1Gate);
    return false;
  }
  if (pmos1Source.value.trim() == "") {
    printErrors(error, pmos1Source);
    return false;
  }
  if (pmos1Body.value.trim() == "") {
    printErrors(error, pmos1Body);
    return false;
  }
  if (nmos1Name.value.trim() == "") {
    printErrors(error, nmos1Name);
    return false;
  }
  if (nmos1Drain.value.trim() == "") {
    printErrors(error, nmos1Drain);
    return false;
  }
  if (nmos1Gate.value.trim() == "") {
    printErrors(error, nmos1Gate);
    return false;
  }
  if (nmos1Source.value.trim() == "") {
    printErrors(error, nmos1Source);
    return false;
  }
  if (nmos1Body.value.trim() == "") {
    printErrors(error, nmos1Body);
    return false;
  }
  if (pmos2Name.value.trim() == "") {
    printErrors(error, pmos2Name);
    return false;
  }
  if (pmos2Drain.value.trim() == "") {
    printErrors(error, pmos2Drain);
    return false;
  }
  if (pmos2Gate.value.trim() == "") {
    printErrors(error, pmos2Gate);
    return false;
  }
  if (pmos2Source.value.trim() == "") {
    printErrors(error, pmos2Source);
    return false;
  }
  if (pmos2Body.value.trim() == "") {
    printErrors(error, pmos2Body);
    return false;
  }
  if (nmos2Name.value.trim() == "") {
    printErrors(error, nmos2Name);
    return false;
  }
  if (nmos2Drain.value.trim() == "") {
    printErrors(error, nmos2Drain);
    return false;
  }
  if (nmos2Gate.value.trim() == "") {
    printErrors(error, nmos2Gate);
    return false;
  }
  if (nmos2Source.value.trim() == "") {
    printErrors(error, nmos2Source);
    return false;
  }
  if (nmos2Body.value.trim() == "") {
    printErrors(error, nmos2Body);
    return false;
  }
  if (endSubckt.value.trim() == "") {
    printErrors(error, endSubckt);
    return false;
  }
  if (gateCallInstance.value.trim() == "") {
    printErrors(error, gateCallInstance);
    return false;
  }
  if (gateCallIn1.value.trim() == "") {
    printErrors(error, gateCallIn1);
    return false;
  }
  if (gateCallIn2.value.trim() == "") {
    printErrors(error, gateCallIn2);
    return false;
  }
  if (gateCallOut.value.trim() == "") {
    printErrors(error, gateCallOut);
    return false;
  }
  if (gateCallSubckt.value.trim() == "") {
    printErrors(error, gateCallSubckt);
    return false;
  }
  return true;
}

export function printErrors(errorMsg, errorID) {
  document.getElementById("result").innerHTML = errorMsg;
  document.getElementById("result").classList.remove("text-success");
  document.getElementById("result").classList.add("text-danger");
  if (errorID) {
    errorID.classList.add("highlight");
    setTimeout(function () {
      errorID.classList.remove("highlight");
    }, 3000);
  }
}

export function isValid() {
  // checking the order of the codeblocks
  const boxOrder1 = getBoxOrder("spice-code");
  let container = document.getElementById("container");
  if (
    boxOrder1[0] !== "1" ||
    boxOrder1[1] !== "2" ||
    boxOrder1[2] !== "3" ||
    boxOrder1[3] !== "4" ||
    boxOrder1[4] !== "5" ||
    boxOrder1[5] !== "6" ||
    boxOrder1[6] !== "7"
  ) {
    let msg = "Please rearrange the code blocks in the correct order.";
    printErrors(msg, container);
    return false;
  }

  // Checking if the node and variable names are valid
  let fileName = document.getElementById("file-name");
  let VolSrcName = document.getElementById("voltage-source-name");
  let subcktName = document.getElementById("subckt-name");
  let subcktIn1 = document.getElementById("subckt-in1-name");
  let subcktIn2 = document.getElementById("subckt-in2-name");
  let subcktOut = document.getElementById("subckt-out-name");
  let pmos1Name = document.getElementById("pmos1-name");
  let nmos1Name = document.getElementById("nmos1-name");
  let pmos2Name = document.getElementById("pmos2-name");
  let nmos2Name = document.getElementById("nmos2-name");
  let endSubckt = document.getElementById("end-subckt-name");
  let gateCallInstance = document.getElementById("gate-call-instance-name");
  let gateCallSubckt = document.getElementById("gate-call-subckt-name");

  var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;
  if (!regex.test(VolSrcName.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, VolSrcName);
    return false;
  }
  if (!regex.test(subcktName.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, subcktName);
    return false;
  }
  if (!regex.test(subcktIn1.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, subcktIn1);
    return false;
  }
  if (!regex.test(subcktIn2.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, subcktIn2);
    return false;
  }
  if (!regex.test(subcktOut.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, subcktOut);
    return false;
  }
  if (!regex.test(pmos1Name.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, pmos1Name);
    return false;
  }
  if (!regex.test(nmos1Name.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, nmos1Name);
    return false;
  }
  if (!regex.test(pmos2Name.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, pmos2Name);
    return false;
  }
  if (!regex.test(nmos2Name.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, nmos2Name);
    return false;
  }
  if (!regex.test(endSubckt.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, endSubckt);
    return false;
  }
  if (!regex.test(gateCallInstance.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, gateCallInstance);
    return false;
  }
  if (!regex.test(gateCallSubckt.value.trim())) {
    let msg = "Invalid Name.";
    printErrors(msg, gateCallSubckt);
    return false;
  }

  // mapping variables
  const variableMap = new Map();
  const variableSubcktMap = new Map();
  let variableList = [
    "ptm_45nm.txt",
    "supply",
    "lmin",
    "wmin",
    "wp",
    convertToLowerCase(VolSrcName.value.trim()),
    convertToLowerCase(subcktName.value.trim()),
    convertToLowerCase(gateCallInstance.value.trim()),
    "V1",
    "vdd",
    "gnd",
  ];
  let variableSubcktList = [
    convertToLowerCase(subcktName.value.trim()),
    convertToLowerCase(pmos1Name.value.trim()),
    convertToLowerCase(pmos2Name.value.trim()),
    convertToLowerCase(nmos1Name.value.trim()),
    convertToLowerCase(nmos2Name.value.trim()),
    "vdd",
    "gnd",
    "wmin",
    "lmin",
  ];
  let variables_regular = [VolSrcName, subcktName, gateCallInstance];
  let subcktVars = [subcktName, pmos1Name, nmos1Name, pmos2Name, nmos2Name];

  // Iterate over the variable list
  for (let variable in variableList) {
    // Check if the variable already exists in the Map
    if (variableMap.has(variableList[variable])) {
      // If it exists, increment the count by 1
      let count = variableMap.get(variableList[variable]);
      variableMap.set(variableList[variable], count + 1);
    } else {
      // If it doesn't exist, set the count to 1
      variableMap.set(variableList[variable], 1);
    }
  }
  // Iterate over the variable list subckt
  for (let variable in variableSubcktList) {
    // Check if the variable already exists in the Map
    if (variableSubcktMap.has(variableSubcktList[variable])) {
      // If it exists, increment the count by 1
      let count = variableSubcktMap.get(variableSubcktList[variable]);
      variableSubcktMap.set(variableSubcktList[variable], count + 1);
    } else {
      // If it doesn't exist, set the count to 1
      variableSubcktMap.set(variableSubcktList[variable], 1);
    }
  }
  // checking if variables names declared more than once
  for (let variable in variables_regular) {
    if (
      variableMap.get(
        convertToLowerCase(variables_regular[variable].value.trim())
      ) > 1
    ) {
      let msg = "Highlighted variable declared more than once";
      printErrors(msg, variables_regular[variable]);
      return false;
    }
  }
  for (let variable in subcktVars) {
    if (
      variableSubcktMap.get(
        convertToLowerCase(subcktVars[variable].value.trim())
      ) > 1
    ) {
      let msg = "Highlighted variable declared more than once";
      printErrors(msg, subcktVars[variable]);
      return false;
    }
  }
  // checking if file name matches
  if (fileName.value.trim() !== "PTM_45nm.txt") {
    let msg = "There is no file defined with the name " + fileName.value.trim();
    printErrors(msg, fileName);
    return false;
  }

  // checking if voltage source name is not equal to vdd
  if (convertToLowerCase(VolSrcName.value.trim()) === "vdd") {
    let msg =
      "Name of the voltage source cannot be vdd as this variable already in use";
    printErrors(msg, VolSrcName);
    return false;
  }
  if (
    gateCallInstance.value.trim()[0] != "x" &&
    gateCallInstance.value.trim()[0] != "X"
  ) {
    let msg =
      "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'";
    printErrors(msg, gateCallInstance);
    return false;
  }
  if (pmos1Name.value.trim()[0] != "m" && pmos1Name.value.trim()[0] != "M") {
    let msg =
      "When instantiating a MOSFET, the name of the instance must always start with 'm' or 'M'";
    printErrors(msg, pmos1Name);
    return false;
  }
  if (nmos1Name.value.trim()[0] != "m" && nmos1Name.value.trim()[0] != "M") {
    let msg =
      "When instantiating a MOSFET, the name of the instance must always start with 'm' or 'M'";
    printErrors(msg, nmos1Name);
    return false;
  }
  if (pmos2Name.value.trim()[0] != "m" && pmos2Name.value.trim()[0] != "M") {
    let msg =
      "When instantiating a MOSFET, the name of the instance must always start with 'm' or 'M'";
    printErrors(msg, pmos2Name);
    return false;
  }
  if (nmos2Name.value.trim()[0] != "m" && nmos2Name.value.trim()[0] != "M") {
    let msg =
      "When instantiating a MOSFET, the name of the instance must always start with 'm' or 'M'";
    printErrors(msg, nmos2Name);
    return false;
  }
  return true;
}

export function printObsTableNAND() {
  let correct = true;
  let alternateNorCorrect = false;
  let alternateCorrect = false;
  let subcktName = document.getElementById("subckt-name");
  let subcktIn1 = document.getElementById("subckt-in1-name");
  let subcktIn2 = document.getElementById("subckt-in2-name");
  let subcktOut = document.getElementById("subckt-out-name");
  let pmos1Name = document.getElementById("pmos1-name");
  let pmos1Drain = document.getElementById("pmos1-drain-terminal");
  let pmos1Gate = document.getElementById("pmos1-gate-terminal");
  let pmos1Source = document.getElementById("pmos1-source-terminal");
  let pmos1Body = document.getElementById("pmos1-body-terminal");
  let nmos1Name = document.getElementById("nmos1-name");
  let nmos1Drain = document.getElementById("nmos1-drain-terminal");
  let nmos1Gate = document.getElementById("nmos1-gate-terminal");
  let nmos1Source = document.getElementById("nmos1-source-terminal");
  let nmos1Body = document.getElementById("nmos1-body-terminal");
  let pmos2Name = document.getElementById("pmos2-name");
  let pmos2Drain = document.getElementById("pmos2-drain-terminal");
  let pmos2Gate = document.getElementById("pmos2-gate-terminal");
  let pmos2Source = document.getElementById("pmos2-source-terminal");
  let pmos2Body = document.getElementById("pmos2-body-terminal");
  let nmos2Name = document.getElementById("nmos2-name");
  let nmos2Drain = document.getElementById("nmos2-drain-terminal");
  let nmos2Gate = document.getElementById("nmos2-gate-terminal");
  let nmos2Source = document.getElementById("nmos2-source-terminal");
  let nmos2Body = document.getElementById("nmos2-body-terminal");
  let endSubckt = document.getElementById("end-subckt-name");
  let gateCallInstance = document.getElementById("gate-call-instance-name");
  let gateCallIn1 = document.getElementById("gate-call-input1");
  let gateCallIn2 = document.getElementById("gate-call-input2");
  let gateCallOut = document.getElementById("gate-call-output");
  let gateCallSubckt = document.getElementById("gate-call-subckt-name");
  var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;

  let p1 = false,
    p2 = false,
    n1 = false,
    n2 = false;

  // checking subckt connection
  const out = convertToLowerCase(subcktOut.value.trim());
  const in1 = convertToLowerCase(subcktIn1.value.trim());
  const in2 = convertToLowerCase(subcktIn2.value.trim());

  const p1_drain = convertToLowerCase(pmos1Drain.value.trim());
  const p1_gate = convertToLowerCase(pmos1Gate.value.trim());
  const p1_source = convertToLowerCase(pmos1Source.value.trim());
  const p1_body = convertToLowerCase(pmos1Body.value.trim());
  // Standard arrangement check
  if (
    p1_drain === out &&
    (p1_gate === in1 || p1_gate === in2) &&
    p1_source === "vdd" &&
    p1_body === "vdd"
  ) {
    p1 = true;
  }
  // Alternate arrangement: allow swapped source/drain or gate assignments
  if (
    p1_drain === "vdd" &&
    p1_source === out &&
    (p1_gate === in1 || p1_gate === in2) &&
    p1_body === "vdd"
  ) {
    alternateCorrect = true;
  }

  const p2_drain = convertToLowerCase(pmos2Drain.value.trim());
  const p2_gate = convertToLowerCase(pmos2Gate.value.trim());
  const p2_source = convertToLowerCase(pmos2Source.value.trim());
  const p2_body = convertToLowerCase(pmos2Body.value.trim());
  if (
    p2_drain === out &&
    (p2_gate === in1 || p2_gate === in2) &&
    p1_gate !== p2_gate &&
    p2_source === "vdd" &&
    p2_body === "vdd"
  ) {
    p2 = true;
  }
  if (
    p2_drain === "vdd" &&
    p2_source === out &&
    (p2_gate === in1 || p2_gate === in2) &&
    p1_gate !== p2_gate &&
    p2_body === "vdd"
  ) {
    alternateCorrect = true;
  }

  const n1_drain = convertToLowerCase(nmos1Drain.value.trim());
  const n1_gate = convertToLowerCase(nmos1Gate.value.trim());
  const n1_source = convertToLowerCase(nmos1Source.value.trim());
  const n1_body = convertToLowerCase(nmos1Body.value.trim());
  if (
    n1_drain === out &&
    (n1_gate === in1 || n1_gate === in2) &&
    n1_gate === p2_gate &&
    (n1_body === "0" || n1_body === "gnd")
  ) {
    if (
      n1_source !== "vdd" &&
      n1_source !== "0" &&
      n1_source !== "gnd" &&
      n1_source !== "Wp" &&
      n1_source !== "Wmin" &&
      n1_source !== "Lmin" &&
      n1_source !== convertToLowerCase(pmos1Name.value.trim()) &&
      n1_source !== convertToLowerCase(pmos2Name.value.trim()) &&
      n1_source !== convertToLowerCase(nmos1Name.value.trim()) &&
      n1_source !== convertToLowerCase(nmos2Name.value.trim()) &&
      n1_source != in1 &&
      n1_source !== in2 &&
      n1_source !== out
    ) {
      if (regex.test(nmos1Source.value.trim())) {
        n1 = true;
      }
    }
  }
  // Alternate NMOS arrangement: allow swapped drain/source
  if (
    n1_source === out &&
    (n1_gate === in1 || n1_gate === in2) &&
    n1_gate === p2_gate &&
    (n1_body === "0" || n1_body === "gnd")
  ) {
    if (
      n1_drain !== "vdd" &&
      n1_drain !== "0" &&
      n1_drain !== "gnd" &&
      n1_drain !== "Wp" &&
      n1_drain !== "Wmin" &&
      n1_drain !== "Lmin" &&
      n1_drain !== convertToLowerCase(pmos1Name.value.trim()) &&
      n1_drain !== convertToLowerCase(pmos2Name.value.trim()) &&
      n1_drain !== convertToLowerCase(nmos1Name.value.trim()) &&
      n1_drain !== convertToLowerCase(nmos2Name.value.trim()) &&
      n1_drain != in1 &&
      n1_drain !== in2 &&
      n1_drain !== out
    ) {
      if (regex.test(nmos1Drain.value.trim())) {
        alternateCorrect = true;
      }
    }
  }

  const n2_drain = convertToLowerCase(nmos2Drain.value.trim());
  const n2_gate = convertToLowerCase(nmos2Gate.value.trim());
  const n2_source = convertToLowerCase(nmos2Source.value.trim());
  const n2_body = convertToLowerCase(nmos2Body.value.trim());
  if (
    n2_drain === n1_source &&
    (n2_gate === in1 || n2_gate === in2) &&
    n2_gate === p1_gate &&
    (n2_source === "0" || n2_source === "gnd") &&
    (n2_body === "gnd" || n2_body === "0")
  ) {
    n2 = true;
  }
  // Alternate NMOS arrangement: allow swapped drain/source
  if (
    n2_source === n1_source &&
    (n2_gate === in1 || n2_gate === in2) &&
    n2_gate === p1_gate &&
    (n2_drain === "0" || n2_drain === "gnd") &&
    (n2_body === "gnd" || n2_body === "0")
  ) {
    alternateCorrect = true;
  }

  if (p1 !== true || p2 !== true || n1 !== true || n2 !== true) {
    correct = false;
  }

  if (in1 === in2 || in1 === out || in2 === out) {
    correct = false;
    alternateCorrect = false;
  }

  // checking if voltage source declared correctly
  let volPos = document.getElementById("voltage-positive-terminal-selector");
  let volNeg = document.getElementById("voltage-negative-terminal-selector");
  if (volPos.value !== "vdd") {
    correct = false;
    alternateCorrect = false;
  }
  if (volNeg.value === "vdd" || volNeg.value === "1.1") {
    correct = false;
    alternateCorrect = false;
  }

  if (
    convertToLowerCase(endSubckt.value.trim()) !==
    convertToLowerCase(subcktName.value.trim())
  ) {
    correct = false;
    alternateCorrect = false;
  }
  // checking the subcircuit calling
  if (
    convertToLowerCase(gateCallIn1.value.trim()) !== "a" &&
    convertToLowerCase(gateCallIn1.value.trim()) !== "b"
  ) {
    correct = false;
    alternateCorrect = false;
  }
  if (
    convertToLowerCase(gateCallIn2.value.trim()) !== "a" &&
    convertToLowerCase(gateCallIn2.value.trim()) !== "b"
  ) {
    correct = false;
    alternateCorrect = false;
  }
  if (
    convertToLowerCase(gateCallIn1.value.trim()) ===
    convertToLowerCase(gateCallIn2.value.trim())
  ) {
    correct = false;
    alternateCorrect = false;
  }
  if (convertToLowerCase(gateCallOut.value.trim()) !== "out") {
    correct = false;
    alternateCorrect = false;
  }
  if (
    convertToLowerCase(gateCallSubckt.value.trim()) !==
    convertToLowerCase(subcktName.value.trim())
  ) {
    correct = false;
    alternateCorrect = false;
  }

  if (correct === true) {
    document.getElementById("obs-table").innerHTML = `<div>
    <div class="is-size-4">Report</div>
    <pre>
        Circuit: *nand_gate*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v1: no DC value, transient time 0 value used

        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        out                                        1.1
        a                                            0
        xn.p                                 0.0415738
        b                                            0
        v2#branch                          2.53458e-12
        v1#branch                          2.53458e-12
        vvdd#branch                       -6.38633e-12

         Reference value :  3.43210e-08
        No. of Data Rows : 8364
    </pre>
    <div class="is-size-4">Input graph</div>
    <img src='images/nand_input.png' alt='image of nand input graph'>
    <div class="is-size-4">Output graph</div>
    <img src='images/nand_output.png' alt='image of nand output graph'>
</div>`;
    document.getElementById("result").innerHTML =
      "<span>&#10003;</span> Success";
    document.getElementById("result").className = "text-success";
  } else if (alternateCorrect === true) {
    document.getElementById("obs-table").innerHTML = `<div>
    <div class=\"is-size-4\">Report</div>
    <pre>
        Circuit: *nand_gate*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v1: no DC value, transient time 0 value used

        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        out                                        1.1
        a                                            0
        xn.p                                 0.0415738
        b                                            0
        v2#branch                          2.53458e-12
        v1#branch                          2.53458e-12
        vvdd#branch                       -6.38633e-12

         Reference value :  3.43210e-08
        No. of Data Rows : 8364
    </pre>
    <div class=\"is-size-4\">Input graph</div>
    <img src='images/nand_input.png' alt='image of nand input graph'>
    <div class=\"is-size-4\">Output graph</div>
    <img src='images/nand_output.png' alt='image of nand output graph'>
    <div class=\"is-size-5 has-text-info\" style=\"margin-top:1em;\">Your arrangement is correct, even though it differs from the diagram. Multiple transistor arrangements are possible for this logic gate.</div>
</div>`;
    document.getElementById("result").innerHTML =
      "<span>&#10003;</span> Success (Alternate Arrangement)";
    document.getElementById("result").className = "text-success";
  } else {
    document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
    document.getElementById("result").className = "text-danger";
  }
  return;
}

export function printObsTableNOR() {
  let correct = true;
  let subcktName = document.getElementById("subckt-name");
  let subcktIn1 = document.getElementById("subckt-in1-name");
  let subcktIn2 = document.getElementById("subckt-in2-name");
  let subcktOut = document.getElementById("subckt-out-name");
  let pmos1Name = document.getElementById("pmos1-name");
  let pmos1Drain = document.getElementById("pmos1-drain-terminal");
  let pmos1Gate = document.getElementById("pmos1-gate-terminal");
  let pmos1Source = document.getElementById("pmos1-source-terminal");
  let pmos1Body = document.getElementById("pmos1-body-terminal");
  let nmos1Name = document.getElementById("nmos1-name");
  let nmos1Drain = document.getElementById("nmos1-drain-terminal");
  let nmos1Gate = document.getElementById("nmos1-gate-terminal");
  let nmos1Source = document.getElementById("nmos1-source-terminal");
  let nmos1Body = document.getElementById("nmos1-body-terminal");
  let pmos2Name = document.getElementById("pmos2-name");
  let pmos2Drain = document.getElementById("pmos2-drain-terminal");
  let pmos2Gate = document.getElementById("pmos2-gate-terminal");
  let pmos2Source = document.getElementById("pmos2-source-terminal");
  let pmos2Body = document.getElementById("pmos2-body-terminal");
  let nmos2Name = document.getElementById("nmos2-name");
  let nmos2Drain = document.getElementById("nmos2-drain-terminal");
  let nmos2Gate = document.getElementById("nmos2-gate-terminal");
  let nmos2Source = document.getElementById("nmos2-source-terminal");
  let nmos2Body = document.getElementById("nmos2-body-terminal");
  let endSubckt = document.getElementById("end-subckt-name");
  let gateCallIn1 = document.getElementById("gate-call-input1");
  let gateCallIn2 = document.getElementById("gate-call-input2");
  let gateCallOut = document.getElementById("gate-call-output");
  let gateCallSubckt = document.getElementById("gate-call-subckt-name");
  var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;

  let p1 = false,
    p2 = false,
    n1 = false,
    n2 = false;

  // checking subckt connection
  const out = convertToLowerCase(subcktOut.value.trim());
  const in1 = convertToLowerCase(subcktIn1.value.trim());
  const in2 = convertToLowerCase(subcktIn2.value.trim());

  const p1_drain = convertToLowerCase(pmos1Drain.value.trim());
  const p1_gate = convertToLowerCase(pmos1Gate.value.trim());
  const p1_source = convertToLowerCase(pmos1Source.value.trim());
  const p1_body = convertToLowerCase(pmos1Body.value.trim());
  // Standard arrangement
  if (
    p1_drain === out &&
    (p1_gate === in1 || p1_gate === in2) &&
    p1_body === "vdd"
  ) {
    if (
      p1_source !== "vdd" &&
      p1_source !== "0" &&
      p1_source !== "gnd" &&
      p1_source !== "Wp" &&
      p1_source !== "Wmin" &&
      p1_source !== "Lmin" &&
      p1_source !== convertToLowerCase(pmos1Name.value.trim()) &&
      p1_source !== convertToLowerCase(pmos2Name.value.trim()) &&
      p1_source !== convertToLowerCase(nmos1Name.value.trim()) &&
      p1_source !== convertToLowerCase(nmos2Name.value.trim()) &&
      p1_source != in1 &&
      p1_source !== in2 &&
      p1_source !== out
    ) {
      if (regex.test(pmos1Source.value.trim())) {
        p1 = true;
      }
    }
  }
  // Alternate arrangement: allow swapped source/drain
  if (
    p1_source === out &&
    (p1_gate === in1 || p1_gate === in2) &&
    p1_body === "vdd"
  ) {
    if (
      p1_drain !== "vdd" &&
      p1_drain !== "0" &&
      p1_drain !== "gnd" &&
      p1_drain !== "Wp" &&
      p1_drain !== "Wmin" &&
      p1_drain !== "Lmin" &&
      p1_drain !== convertToLowerCase(pmos1Name.value.trim()) &&
      p1_drain !== convertToLowerCase(pmos2Name.value.trim()) &&
      p1_drain !== convertToLowerCase(nmos1Name.value.trim()) &&
      p1_drain !== convertToLowerCase(nmos2Name.value.trim()) &&
      p1_drain != in1 &&
      p1_drain !== in2 &&
      p1_drain !== out
    ) {
      if (regex.test(pmos1Drain.value.trim())) {
        alternateNorCorrect = true;
      }
    }
  }

  const p2_drain = convertToLowerCase(pmos2Drain.value.trim());
  const p2_gate = convertToLowerCase(pmos2Gate.value.trim());
  const p2_source = convertToLowerCase(pmos2Source.value.trim());
  const p2_body = convertToLowerCase(pmos2Body.value.trim());
  if (
    p2_drain === p1_source &&
    (p2_gate === in1 || p2_gate === in2) &&
    p1_gate !== p2_gate &&
    p2_source === "vdd" &&
    p2_body === "vdd"
  ) {
    p2 = true;
  }
  if (
    p2_source === p1_source &&
    (p2_gate === in1 || p2_gate === in2) &&
    p1_gate !== p2_gate &&
    p2_drain === "vdd" &&
    p2_body === "vdd"
  ) {
    alternateNorCorrect = true;
  }

  const n1_drain = convertToLowerCase(nmos1Drain.value.trim());
  const n1_gate = convertToLowerCase(nmos1Gate.value.trim());
  const n1_source = convertToLowerCase(nmos1Source.value.trim());
  const n1_body = convertToLowerCase(nmos1Body.value.trim());
  if (
    n1_drain === out &&
    (n1_gate === in1 || n1_gate === in2) &&
    n1_gate === p2_gate &&
    (n1_body === "0" || n1_body === "gnd") &&
    (n1_source === "0" || n1_source === "gnd")
  ) {
    n1 = true;
  }
  // Alternate NMOS arrangement: allow swapped drain/source
  if (
    n1_source === out &&
    (n1_gate === in1 || n1_gate === in2) &&
    n1_gate === p2_gate &&
    (n1_body === "0" || n1_body === "gnd") &&
    (n1_drain === "0" || n1_drain === "gnd")
  ) {
    alternateNorCorrect = true;
  }

  const n2_drain = convertToLowerCase(nmos2Drain.value.trim());
  const n2_gate = convertToLowerCase(nmos2Gate.value.trim());
  const n2_source = convertToLowerCase(nmos2Source.value.trim());
  const n2_body = convertToLowerCase(nmos2Body.value.trim());
  if (
    n2_drain === out &&
    (n2_gate === in1 || n2_gate === in2) &&
    n2_gate === p1_gate &&
    (n2_source === "0" || n2_source === "gnd") &&
    (n2_body === "gnd" || n2_body === "0")
  ) {
    n2 = true;
  }
  if (
    n2_source === out &&
    (n2_gate === in1 || n2_gate === in2) &&
    n2_gate === p1_gate &&
    (n2_drain === "0" || n2_drain === "gnd") &&
    (n2_body === "gnd" || n2_body === "0")
  ) {
    alternateNorCorrect = true;
  }

  if (p1 !== true || p2 !== true || n1 !== true || n2 !== true) {
    correct = false;
  }
  // checking if voltage source declared correctly
  let volPos = document.getElementById("voltage-positive-terminal-selector");
  let volNeg = document.getElementById("voltage-negative-terminal-selector");
  if (volPos.value !== "vdd") {
    correct = false;
    alternateNorCorrect = false;
  }
  if (volNeg.value === "vdd" || volNeg.value === "1.1") {
    correct = false;
    alternateNorCorrect = false;
  }

  if (
    convertToLowerCase(endSubckt.value.trim()) !==
    convertToLowerCase(subcktName.value.trim())
  ) {
    correct = false;
    alternateNorCorrect = false;
  }
  // checking the subcircuit calling
  if (
    convertToLowerCase(gateCallIn1.value.trim()) !== "a" &&
    convertToLowerCase(gateCallIn1.value.trim()) !== "b"
  ) {
    correct = false;
    alternateNorCorrect = false;
  }
  if (
    convertToLowerCase(gateCallIn2.value.trim()) !== "a" &&
    convertToLowerCase(gateCallIn2.value.trim()) !== "b"
  ) {
    correct = false;
    alternateNorCorrect = false;
  }
  if (
    convertToLowerCase(gateCallIn1.value.trim()) ===
    convertToLowerCase(gateCallIn2.value.trim())
  ) {
    correct = false;
    alternateNorCorrect = false;
  }
  if (convertToLowerCase(gateCallOut.value.trim()) !== "out") {
    correct = false;
    alternateNorCorrect = false;
  }
  if (
    convertToLowerCase(gateCallSubckt.value.trim()) !==
    convertToLowerCase(subcktName.value.trim())
  ) {
    correct = false;
    alternateNorCorrect = false;
  }

  if (correct === true) {
    document.getElementById("obs-table").innerHTML = `<div>
    <div class="is-size-4">Report</div>
    <pre>
        Circuit: *nor_gate*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v1: no DC value, transient time 0 value used

        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        out                                        1.1
        a                                            0
        b                                            0
        xn.p                                       1.1
        v2#branch                          2.53457e-12
        v1#branch                          2.53458e-12
        vvdd#branch                         -9.154e-12

        No. of Data Rows : 8364
    </pre>
    <div class="is-size-4">Input graph</div>
    <img src='images/nor_input.png' alt='image of nor input graph'>
    <div class="is-size-4">Output graph</div>
    <img src='images/nor_output.png' alt='image of nor output graph'>
</div>`;
    document.getElementById("result").innerHTML =
      "<span>&#10003;</span> Success";
    document.getElementById("result").className = "text-success";
  } else if (alternateNorCorrect === true) {
    document.getElementById("obs-table").innerHTML = `<div>
    <div class=\"is-size-4\">Report</div>
    <pre>
        Circuit: *nor_gate*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v1: no DC value, transient time 0 value used

        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        out                                        1.1
        a                                            0
        b                                            0
        xn.p                                       1.1
        v2#branch                          2.53457e-12
        v1#branch                          2.53458e-12
        vvdd#branch                         -9.154e-12

        No. of Data Rows : 8364
    </pre>
    <div class=\"is-size-4\">Input graph</div>
    <img src='images/nor_input.png' alt='image of nor input graph'>
    <div class=\"is-size-4\">Output graph</div>
    <img src='images/nor_output.png' alt='image of nor output graph'>
    <div class=\"is-size-5 has-text-info\" style=\"margin-top:1em;\">Your arrangement is correct, even though it differs from the diagram. Multiple transistor arrangements are possible for this logic gate.</div>
</div>`;
    document.getElementById("result").innerHTML =
      "<span>&#10003;</span> Success (Alternate Arrangement)";
    document.getElementById("result").className = "text-success";
  } else {
    document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
    document.getElementById("result").className = "text-danger";
  }
  return;
}
