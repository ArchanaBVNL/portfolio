
/*
- Configure the Navigation element for Mobile Screen Size.
- This is applicable for all web pages in my portfolio.
*/
(function () {
    const body = document.getElementsByTagName('body')[0];
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    /* Navigation */
    // configure hamburger menu for mobile screen.
    const mobileMenu = () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("mobile-navigation-active");
    };

    //  configure close menu for mobile screen.
    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("mobile-navigation-active");
    };

    // if in mobile mode then add event listener to hamburger menu element.
    if (hamburger != undefined) {
        hamburger.addEventListener("click", mobileMenu);
    }

    // if in mobile mode then add event listener to close menu element.
    if (navLink != undefined) {
        navLink.forEach(n => n.addEventListener("click", closeMenu));
    }
})();

/*------------------
 *** Home Page ****
-------------------*/

// Home Page: get and display random quote using free API.
const getQuote = async () => {
    // get page elements to display quote and its author.
    const quote = document.querySelector("blockquote p");
    const em = document.querySelector("blockquote em");

    // if on Home Page then fetch and display quote.
    if (quote != undefined && em != undefined) {
        try {
            // fetch random quote.
            const response = await fetch("https://api.quotable.io/random?maxLength=100");
            // quote is a json object containing - "content" & "author".
            const data = await response.json();

            // on success display quote and its author.
            if (response.ok) {
                if(data.content != undefined && data.content != null) {
                    quote.innerHTML = data.content;
                }
                if(data.author != undefined && data.author != null) {
                    em.innerHTML = "-" + data.author;
                }
            } else {
                //do not display quotation mark if fetch fails to return a quote.
                document.querySelector("blockquote").remove();
            }
        }
        catch (e) {
             //do not display quotation mark on error.
            document.querySelector("blockquote").remove();
        }
    }
};

/* 
- Home Page: configure Resume button.
- Call getQuote() method to load random quote using an API.
*/
(function () {
    const btnResume = document.getElementById("btnResume");
    // if on Home page then on click of Resume open resume.pdf.
    if (btnResume != undefined) {
        btnResume.addEventListener('click', () => {
            window.open('https://archanab.me/archanabhogaraju.pdf', '_blank');
        });
    }

    // call method to load random quote
    getQuote();

})();

/*---------------------
 *** About Me Page ****
----------------------*/

/* 
- About Me Page: initialize the list of hobby images.
- add event listener to browse through images.
*/
(function () {
    // get prevImage icon element.
    const prevImage = document.getElementById('previousImage')
    // get nxtImage icon element.
    const nxtImage = document.getElementById('nextImage')
    // intialize hobby images list.
    const hobbyImages = [
        "images/hobbies/adventure.svg",
        "images/hobbies/cooking.svg",
        "images/hobbies/gardening.svg",
        "images/hobbies/painting.svg",
        "images/hobbies/photography.svg",
        "images/hobbies/exploring.svg"
    ];
    // if in About Me page then add an event listener to display previous image.
    if (prevImage != undefined) {
        prevImage.addEventListener('click', function () {
            // call method to show previous image.
            previousImage(hobbyImages);
        })
    }
    // if in About Me page then add an event listener to display next image.
    if (nxtImage != undefined) {
        // call method to show next image.
        nxtImage.addEventListener('click', function () {
            nextImage(hobbyImages);
        })
    }
})();

/* 
- About Me Page: method to show next image in gallery.
*/
const nextImage = (hobbyImages) => {

    let image = document.getElementById("hobby-image");

    // find the image file name.
    var image_temp = image.src.split('/');
    var image_name = image_temp[image_temp.length - 1];
    // set the relative path.
    var image_path = `images/hobbies/${image_name}`;

    // get the index of current image.
    let index = hobbyImages.indexOf(image_path);

    // if current image is last image then display first image on list.
    // else display next image on list.
    if (index == hobbyImages.length - 1) {
        image.src = hobbyImages[0];
    } else {
        image.src = hobbyImages[index + 1];
    }
};

/* 
- About Me Page: method to show previous image in gallery.
*/
const previousImage = (hobbyImages) => {
    let image = document.getElementById("hobby-image");

    // find the image file name.
    var image_temp = image.src.split('/');
    var image_name = image_temp[image_temp.length - 1];
    // set the relative path.
    var image_path = `images/hobbies/${image_name}`;

    // get the index of current image.
    let index = hobbyImages.indexOf(image_path);

     // if current image is first image then display last image on list.
    // else display previous image on list.
    if (index == 0) {
        image.src = hobbyImages[hobbyImages.length - 1];
    } else {
        image.src = hobbyImages[index - 1];
    }
};

/*------------------
 *** Contact Page ****
-------------------*/
/* 
- Reset Button Event handling to reset the Contact Form contents.
- Clear all error messages (if any).
- Clear all text on Contact Form when an email confirmation message is closed.
*/
(function () {

    // get reset and close message elements of Contact page
    const resetBtn = document.getElementById('resetBtn');
    const closeMessage = document.getElementById('closeMessage');

    // if reset button on contact page is clicked then clear all contents of the form
    if (resetBtn != undefined) {
        resetBtn.addEventListener('click', (e) => {
            nameError.textContent = '';
            emailError.textContent = '';
            msgError.textContent = '';

            // Also, remove the user full name and email from the local storage
            clearLocalStorage();
        })
    }

    // if close email confirmation is clicked then clear the values of contact form
    // Also, hide the email confirmation message displayed on screen
    if (closeMessage != undefined) {
        closeMessage.addEventListener('click', (e) => {
            document.getElementById("hideConfirmation").classList.remove('showSubmitMessage')
            document.getElementById("hideConfirmation").classList.add('hideSubmitMessage')
            fullName.value = '';
            email.value = '';
            message.value = '';
        })
    }

})();

/* 
- Contact Page: Add event listeners for LinkedIn, Twitter and Email buttons.
*/
(function () {
    const btnLinkedIn = document.getElementById("btnLinkedin");
    const btnTwitter = document.getElementById("btnTwitter");
    const btnEmail = document.getElementById("btnEmail");
    
    // LinkedIn: on click open linkedIn profile in new page.
    if (btnLinkedIn != undefined) {
        btnLinkedIn.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/archanabhogaraju/', '_blank');
        });
    }

    // Twitter: on click open twitter profile in new page.
    if (btnTwitter != undefined) {
        btnTwitter.addEventListener('click', () => {
            window.open('https://twitter.com/arcbee', '_blank');
        });
    }

    // Email: on click open email client.
    if (btnEmail != undefined) {
        btnEmail.addEventListener('click', () => {
            window.location.href = "mailto:archanap@bu.edu";
        });
    }
})();

/* 
- Contact Page: configure "Contact Form" and add event listener to it.
- Submit Button event handling.
- Validate all inputs and Submit only if Valid.
- Do not Submit if any input is invalid.
*/
(function () {
    const contactForm = document.getElementById('contactForm');

    // if on Contact Page then validate all the elements while user is entering.
    if (contactForm != undefined) {
        contactForm.addEventListener('submit', (e) => {

            // initially set flag to false.
            let isFullNameValid = false
            let isEmailValid = false
            let isMsgValid = false

            // call method to validate full name.
            isFullNameValid = validateFullName(fullName, nameError);
            // call method to validate email.
            isEmailValid = validateEmail(email, emailError);
            // call method to validate message.
            isMsgValid = validateMessage(message, msgError);

            // if invalid input then do not submit form.
            if (!isFullNameValid || !isEmailValid || !isMsgValid) {
                e.preventDefault();
            } else {
                // else if valid input then display email sent confirmation text.
                e.preventDefault();

                // also, store the user "full name" and "email" in local storage.
                updateLocalStorage(fullName, email);

                // enable page element to show email submit message.
                document.getElementById("hideConfirmation").classList.remove('hideSubmitMessage')
                document.getElementById("hideConfirmation").classList.add('showSubmitMessage')
            }
        })
    }
})();

/* 
- Contact Page: Method to load latest user "full name" and "email" from local storage.
*/
const getLocalStorage = () => {
    // fetch contact json with "name" and "email".
    let details = JSON.parse(localStorage.getItem("contact"))

    // if found return details else return null.
    if (details != undefined) {
        return details
    } else {
        return null;
    }
}

/* 
- Contact Form: Fetch last user "name" and "email" from local storage.
- Initialize corresponding Contact Form inputs with their values.
*/
(function () {
    // call method get user name and email from local storage.
    const contactDetails = getLocalStorage();

    // found then intialize the contact form input fields.
    if (contactDetails != undefined && contactDetails != null) {
        fullName.value = contactDetails.name;
        email.value = contactDetails.email;
    }
})();

/* 
- Method to store user input - "full name" and "email" in local storage.
*/
const updateLocalStorage = (fullName, email) => {
    const userInfo = { "name": fullName.value, "email": email.value };
    localStorage.setItem("contact", JSON.stringify(userInfo));
}

/* 
- Method to clear user input - "full name" and "email" in local storage.
- It is called when a Reset button is pressed on the Contact Form.
*/
const clearLocalStorage = () => {
    let details = JSON.parse(localStorage.getItem("contact"))
    if (details != undefined) {
        // remove user details from local storage if Reset is clicked.
        localStorage.removeItem("contact");
    }
}

/* 
- Contact Page: configure "Contact Form" input fields.
- Validate all inputs on keyup and if needed display corresponding error message.
*/
(function () {
    // Initialize variables for Contact Page and add event listeners.
    // for Contact Full Name
    const fullName = document.getElementById('fullName')
    let errorFullName = document.getElementById('nameError')

    if (fullName != undefined && errorFullName != undefined) {
        fullName.addEventListener('keyup', function () {
            validateFullName(fullName, errorFullName)
        })
    }

    // for Contact Email Id
    const emailId = document.getElementById('email')
    let emailError = document.getElementById('emailError')

    if (emailId != undefined && emailError != undefined) {
        emailId.addEventListener('keyup', function () {
            validateEmail(emailId, emailError)
        })
    }

    // for Message field
    const msg = document.getElementById('message')
    let msgError = document.getElementById('msgError')

    if (msg != undefined && msgError != undefined) {
        msg.addEventListener('keyup', function () {
            validateMessage(msg, msgError)
        })
    }

})();

/* 
- Contact Page: validate user entered Full Name.
- Ensure user enters minimum two characters.
- Ensure user enters only alphabets and a space as additional character.
- On incorrect input, display error message.
*/
const validateFullName = (fullName, error) => {
    let errorMessage = "";

    let namePattern = /^[A-Za-z ]+$/;
    if (fullName.value.length < 2) {
        errorMessage = "Please enter a Name with at least two letters.";
        error.textContent = errorMessage;
        fullName.focus()
        return false;
    } else if (!fullName.value.match(namePattern)) {
        errorMessage = "Please enter only alphabets in name.";
        error.textContent = errorMessage;
        fullName.focus()
        return false;
    } else {
        fullName.classList.remove("error");
        error.textContent = "";
        return true;
    }
};

/* 
- Contact Page: validate user entered email.
- Ensure user enters email in valid format.
- On incorrect input, display error message.
*/
const validateEmail = (email, error) => {
    let errorMessage = "";
    let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        errorMessage = "Please enter a vaild email id.";
        error.textContent = errorMessage;
        email.focus()
        return false;
    } else {
        error.textContent = "";
        return true;
    }
};

/* 
- Contact Page: validate user entered message.
- Ensure user enters message at least 2 characters long.
- On incorrect input, display error message.
*/
const validateMessage = (message, error) => {
    let errorMessage = "";
    if (message.value.length < 2) {
        errorMessage = "Please enter a message of at least two characters length.";
        error.textContent = errorMessage;
        message.focus()
        return false;
    } else {
        message.classList.remove("error");
        error.textContent = "";
        return true;
    }
};

