const upperSet="ABCDEFGHIJKLMNOPQsyRSTUVWXYZ"
const LowerSet="abcdefghijklmnopqrstuvwxyz"
const SymbolSet="!@#$%^&***()_=/"
const NumberSet="1234567890"

const passBox = document.getElementById("pass-box")
const totalChar=document.getElementById("total-char")
const upperInput= document.getElementById("upper-case")
const lowerInput=document.getElementById("lower-case")
const numberInput=document.getElementById("number")
const symbolInpute= document.getElementById("symbols")

const getRandomData=(dataSet)=>
{
    return dataSet[Math.floor(Math.random()*dataSet.length)]

}


const generatePassword = (password = "")=>
{
if(upperInput.checked)
{
    password += getRandomData(upperSet)
}
if(lowerInput.checked)
{
    password += getRandomData(LowerSet)
}
   
    if(numberInput.checked)
    {
        password+=getRandomData(NumberSet)
    }

    if(symbolInpute.checked)
    {
       password+=getRandomData(SymbolSet)
    }
    
    if(password.length <totalChar.value)
    {
        return generatePassword(password)
    }
    passBox.innerHTML=(password)
}
     


document.getElementById("btn").addEventListener("click",function()
{
    generatePassword()
})