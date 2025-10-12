let firstPassword = document.querySelector('#enterPass')
let confirmPassword = document.querySelector('#confirmPass')
let messageTxt = document.querySelector('.messageTxt')

confirmPassword.addEventListener('keyup', () => {

    if (firstPassword.value === confirmPassword.value) {

        messageTxt.innerHTML = "password matched ✔"
        messageTxt.style.color = '#7FFF00'
        confirmPassword.style.marginTop = '-2%'

        setTimeout(() => {
            confirmPassword.style.borderTop = '1.5px solid white'
        }, 900);

    } else {

        messageTxt.innerHTML = "Does not matched ‼"
        messageTxt.style.color = 'red'
        confirmPassword.style.marginTop = '2%'
        confirmPassword.style.borderTop = '1.5px solid red'

    }

})