// =====================================   D E C L A R A T I O N S   ===================================== //

let start = true;
let project = false;
let suggestion = false;
let configuration = false;

// -------------------------------------- HEADER -------------------------------------- //

const inp_menu = document.getElementById("menu");
const nav_menu = document.getElementById("navbar");

const mnb_start = document.getElementById("start");
const mnb_project = document.getElementById("project");
const mnb_suggestion = document.getElementById("suggestion");
const mnb_configuration = document.getElementById("configuration");

const div_header = document.getElementById("boxHeader");

const img_profile = document.getElementById("profileImage");
const img_updateProfile = document.getElementById("uploadProfileImage");
const inp_profile = document.getElementById("uploadProfile");

const lpd_age = document.querySelectorAll(".age");
const lpd_email = document.querySelectorAll(".email");
const lpd_phone = document.querySelectorAll(".phone");

const ttl_name = document.getElementById("profileName");

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

const div_configuration = document.getElementById("boxConfiguration");

const inp_name = document.getElementById("inpProfileName");
const inp_age = document.getElementById("inpAge");
const inp_email = document.getElementById("inpEmail");
const inp_phone = document.getElementById("inpPhone");

const btn_apply = document.getElementById("btnApply");

// =============================================   M A I N   ============================================= //

// -------------------------------------- HEADER -------------------------------------- //

inp_menu.addEventListener("click", openMenu);

mnb_start.addEventListener("click", enableStart);
mnb_project.addEventListener("click", enableProject);
mnb_suggestion.addEventListener("click", enableSuggestion);
mnb_configuration.addEventListener("click", enableConfiguration);

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

img_updateProfile.addEventListener("click", updateImageProfile);
inp_phone.addEventListener("blur", addNumberPhone);
btn_apply.addEventListener("click", applyConfiguration);

// ========================================   F U N C T I O N S   ======================================== //

// -------------------------------------- HEADER -------------------------------------- //

function openMenu() {
    let isChecked = inp_menu.checked;
    if (isChecked) {
        nav_menu.classList.add("navbarLittle");
        div_header.classList.add("pushHeader");
        div_header.classList.remove("backHeader");
    } else {
        nav_menu.classList.remove("navbarLittle");
        div_header.classList.remove("pushHeader");
        div_header.classList.add("backHeader");
    }
}

function enableStart() {
    if (start) {
        return;
    }
    callDisplayHidden();
    project = suggestion = configuration = false;
    start = true;
}

function enableProject() {
    if (project) {
        return;
    }
    callDisplayHidden();
    start = suggestion = configuration = false;
    project = true;
}

function enableSuggestion() {
    if (suggestion) {
        return;
    }
    callDisplayHidden();
    start = project = configuration = false;
    suggestion = true;
}

function enableConfiguration() {
    if (configuration) { 
        return;
    }
    callDisplayHidden();
    configurationsDisplay();
    start = project = suggestion = false;
    configuration = true;    
}

function callDisplayHidden(){
    switch (true) {
        case start:{
            
            break;
        }
        case project:{
            
            break;
        }
        case suggestion:{
            
            break;
        }
        case configuration:{
            configurationsHidden();
            break;
        }
    }
}

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

function configurationsDisplay() {
    img_updateProfile.removeAttribute("hidden");
    div_configuration.removeAttribute("hidden");
}

function configurationsHidden() {
    img_updateProfile.setAttribute("hidden", "on");
    div_configuration.setAttribute("hidden", "on");
}

function updateImageProfile() {
    inp_profile.click();
}

window.addEventListener('load', function() {
    inp_profile.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            img_profile.onload = () => {
                URL.revokeObjectURL(img_profile.src);  // no longer needed, free memory
            }
            img_profile.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
});

function applyConfiguration() {
    let containsName = inp_name.value.length > 0; 
    let name = inp_name.value;
    let containsAge = Number(inp_age.value) > 0;
    let age = Number(inp_age.value);
    let containsEmail = inp_email.value.length > 0;
    let email = inp_email.value;
    let containsPhone = inp_phone.value.length > 0;
    let phone = inp_phone.value;
    
    if (containsName) {
        if (isNaN(name)) {
            ttl_name.textContent = name;
        }
    }

    if (containsAge) {
        if (age > 0 && age <= 120) {
            lpd_age.forEach(element => element.textContent = "Idade: " + age);
        }
    }

    if (containsEmail) {
        if (emailVerify(email)) {
            lpd_email.forEach(element => element.textContent = "E-mail: " + email);
        }
    }

    if (containsPhone) {
        if (!phoneVerify(phone)) {
            return;
        }
        lpd_phone.forEach(phone => phone.textContent = "Fone: " + inp_phone.value);
    }

    inp_name.value = "";
    inp_age.value = "";
    inp_email.value = "";
    inp_phone.value = "";
}

function emailVerify(email) {
    let eSize = email.length;
    let atSign = email.indexOf("@");
    let userName = email.substring(0, atSign);
    let domainName = email.substring(atSign+1, eSize);

    // Verificar se existe dois pontos juntos no domínio do e-mail.
    let indexPoint;
    let passPoint = true;
    for (let i = 0; i < domainName.length; i++) {
        let char = domainName[i];
        if (char == ".") {
            if ((i - indexPoint - 1) != 0) {
                indexPoint = i;
            } else {
                passPoint = false;
            }
        }
    }

    if ((atSign) && (passPoint) &&
    (userName.length >= 1) &&
    (domainName.length >= 3) &&
    (domainName.indexOf("@") == -1) &&
    (userName.indexOf(" ") == -1) &&
    (domainName.indexOf(" ") == -1) &&
    (domainName.indexOf(".") >= 1) &&
    (domainName.lastIndexOf(".") < domainName.length - 1)) {
        return true;
    }
    return false;
} 

function phoneVerify() {
    const phoneSize = inp_phone.value.length;

    if (phoneSize == 16) {
        return true;
    }
    return false;
}

function addNumberPhone(event) {
    var x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + ' ' + x[3] + '-' + x[4];
}