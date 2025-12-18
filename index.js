function register(){
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const type=document.getElementById('type').value;

    let fee = 0;

    if(course ==='frontend') fee = 20000;
    else if(course ==='backend') fee = 25000;
    else if(course ==='fullstack') fee = 30000;
    if(type ==='student') fee = fee -5000;

    if(name === '' || course === '' || type === ''){
       document.getElementById('output').innerText = 'Please fill all the fields';
        return;
    }
    document.getElementById('output').innerText = `Hello ${name}, you have successfully registered for the ${course} course. Your total fee is $${fee}.`;
}