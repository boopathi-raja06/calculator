const but=document.querySelectorAll("button")
const res=document.querySelector(".result")
const operator=document.querySelectorAll(".operator")
const number=document.querySelectorAll(".num")
let num=[]
let op=[]
operator.forEach(ope=>{
    op.push(ope.textContent)
})
number.forEach(n=>{
    num.push(n.textContent)
})

but.forEach(button=>{
    button.addEventListener("click",(eve)=>{
       res.textContent=eve.target.textContent
    })
})
