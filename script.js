$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
    try {
        var name = document.getElementById("logName").value;
        var password = document.getElementById("logPassword").value;

        var logNamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var logPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!logNamePattern.test(name)) {
            alert('Please enter a valid username (minimum 5 characters, alphanumeric only)');
            document.getElementById("logName").value = "";
            return false;
        }

        if (!logPasswordPattern.test(password)) {
            alert('Please enter a valid password with at least 8 characters, at least one uppercase letter, at least one lowercase letter, at least one digit (0-9), and at least one special character');
            document.getElementById("logPassword").value = "";
            return false;
        }
        else {
             
            window.location.href ="index.html";
            return false;
        }

        return true;
    } catch (error) {
        alert(error.message);
        return false; 
    } finally {
        
    }
}

function validateForm() {
    try {
        var email = document.getElementById('signEmail').value;
        var username = document.getElementById('signName').value;
        var password = document.getElementById('signPassword').value;
        var cpassword = document.getElementById('cpassword').value;

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            document.getElementById("signEmail").value = ""; 
            return false;
        }

        if (username.length < 5 || !username.match(/^[a-zA-Z0-9]+$/)) {
            alert('Please enter a valid username (minimum 5 characters, alphanumeric only)');
            document.getElementById("signName").value = ""; 
            return false;
        }

        if (!passwordPattern.test(password)) {
            alert('Please enter a valid password (minimum 8 characters, at least one uppercase, one lowercase, one digit, and one special character)');
            document.getElementById("signPassword").value = ""; 
            return false;
        }

        if (password !== cpassword) {
            alert('Passwords do not match');
            document.getElementById("cpassword").value = ""; 
            return false;
        }

        else {
             
            window.location.href ="index.html";
            return false;
        }

        return true; // Form will submit if validation passes

    } catch (error) {
        alert(error.message);
        return false; 
    } finally {
        
    }
}