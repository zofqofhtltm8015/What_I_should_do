
function Login()
{


    const username = document.getElementById('UserID').value;
    const userpassword = document.getElementById('UserPassword').value;
    axios({
            method: "POST",
            url: "https://reqres.in/api/login",
            data: {
                "email" : username,
                "password" : userpassword
            }
           
    })
    .then((data) =>
        {
            alert('로그인 성공!')
            location.href='What_Should_I_do.html';

        })
        .catch((error)=>{
            alert('회원정보 오류!');
        })
}

function register()
{
    location.href='login-index.html';

}