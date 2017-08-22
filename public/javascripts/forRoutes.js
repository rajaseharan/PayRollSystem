function allowance() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/allw');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}

function psign() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/psign');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}

function searchfor() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/search');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
    }

function update1() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/update1');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}

function ded() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/ded');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}

function viewdetails() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/view_details');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}



function empmenu() {

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://127.0.0.1:3000/emp_menu');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}

function index() {

    var form = document.createElement('form');
    form.setAttribute('method', 'get');
    form.setAttribute('action', 'http://127.0.0.1:3000/');
    form.style.display = 'hidden';
    document.body.appendChild(form);
    form.submit();
}