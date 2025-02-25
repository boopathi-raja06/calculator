const but = document.querySelectorAll("button");
const res = document.querySelector(".result");
const ac = document.querySelector("#ac").textContent;
const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".num");
let num = [];
let op = [];
let inp1 = "";
let inp2 = "";
let operation = "";
let result = 0;
operator.forEach((ope) => {
  op.push(ope.textContent);
});
number.forEach((n) => {
  num.push(n.textContent);
});

but.forEach((button) => {
  button.addEventListener("click", (eve) => {
    let n = eve.target.textContent;
    //res.textContent=eve.target.textContent

    if(!isNaN(n) || n === "."){
        if(operation){
            
            inp2+=n;
            res.textContent=inp2

        }
        else{
            inp1+=n
            res.textContent=inp1
        }
    }
    else if(op.includes(n)){
        if(inp1&&inp2){
            result= operate(parseFloat(inp1), parseFloat(inp2), operation);
            res.textContent=result
            inp1=result.toString()
            inp2=""
        }
        operation=n
    }
    else if (n === "=") {
        if (inp1 && inp2 && operation) {
          result = operate(parseFloat(inp1), parseFloat(inp2), operation);
          res.textContent = result;
          inp1 = result.toString();
          inp2 = "";
          operation = "";
        }
    }
    else if(n.toLowerCase()==='ac')
    {
        inp1 = "";
        inp2 = "";
        operation = "";
        result=""
        res.textContent = "";
    }
  });
});

function operate(in1, in2, operation) {
  switch (operation) {
    case "+":
      return in1 + in2;
    case "-":
      return in1 - in2;
    case "*":
      return in1 * in2;
      case "/":
        return in2 !== 0 ? in1 / in2 : "Error"; // Prevent division by zero
      default:
        return 0;
  }
}
