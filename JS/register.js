let loginForm = document.getElementById("form-box")

loginForm.addEventListener("submit", (e)=> {
    
    e.preventDefault()
    
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let name = document.getElementById("username")
    let rules = document.getElementById("rules")
    error.innerHTML = ""

    if(!emailValidation(email.value))
    {
        error.innerHTML = "Invalid Email!"
        return
    }

    if(!passwordValidation(password.value))
    {
        error.innerHTML = "Invalid Password!"
        return
    }

    if(name.value.length < 5 || name.value.length > 10)
    {
        error.innerHTML = "Invalid Name!"
        return
    }

    if(!rules.checked)
    {
        error.innerHTML = "You must agree to the Terms of Service"
        return
    }
})

function emailValidation(email)
{
    return email.endsWith('.com')
}

function passwordValidation(password)
{
    let length = password.length

    let trueAlpha = false
    let trueNumeric = false

    for(let i=0; i<length; i++)
    {
        let code = password.charCodeAt(i)

        if(!isNaN(password[i]))
        {
            trueNumeric = true
        }

        if((code >= 65 && code <= 90) || (code>= 97 && code <=122))
        {
            trueAlpha = true
        }
    }
    if(trueAlpha && trueNumeric)
    {
        return true
    } else {
        return false
    }
}