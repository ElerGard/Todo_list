let regForm = document.querySelector('#registration-form');
let logForm = document.querySelector('#login-form');

logForm.addEventListener('submit', function(event) {
    event.preventDefault();
        $.ajax({
            type: "GET",
            url: 'php/user.php',
            data: $(this).serialize(),
            success: function(response) {
                var jsonData = JSON.parse(response); 

                if (jsonData.success == "1") {
                    localStorage.setItem('account', jsonData.user['username']);
                    location.href = 'index.html';
                } else {
                    alert('Invalid Credentials!');
                }
           }
       });
});

regForm.addEventListener('submit', function(event) {
    event.preventDefault();
        $.ajax({
            type: "POST",
            url: 'php/user.php',
            data: $(this).serialize(),
            success: function(response) {
                var jsonData = JSON.parse(response); 

                if (jsonData.success == "1") {
                    localStorage.setItem('account', jsonData.user['username']);
                    location.href = 'index.html';
                } else {
                    alert('Login already used');
                }
           }
       });
});

document.querySelector('#reg').addEventListener('click', function() {
    changeVisibility(logForm);
    changeVisibility(regForm);

});

let changeVisibility = (form) => {
    if (form.getAttribute('style') == 'display: none;') {
        form.removeAttribute('style');
    } else {
        form.setAttribute('style', 'display: none;');
    }
}