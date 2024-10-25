function SendMail(){
    (function(){
        emailjs.init("ofpMmkfJE2NgEqjLl");
    })();
    //
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_owizqbp", "template_lo8s3qd", params).then(function (res)
    {
        alert('Message Sent! You\'ll be getting a response soon');
    })
}


