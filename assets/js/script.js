function btnClick(){
    let btn;

    var name=document.getElementById("name").value.trim();
    var eMail=document.getElementById("email").value.trim();
    var num=document.getElementById("mobile").value.trim();
    var msg=document.getElementById("message").value.trim();


    if(name==="" || eMail==="" || num==="" || msg==="")
    {
        alert('Please fill all fields');
        btn=false;
    }else if(!/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(eMail)){
        alert('Please enter a valid Email adress');

    
        btn=flase;
    }
    else if(!/^\d+$/.test(num)){
        alert('Please enter a valid Phone number');

        btn=false;
    }
    
    return btn;
}