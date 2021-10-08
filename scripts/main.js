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

const img_header = document.getElementById("headerImage");
const img_updateHeader = document.getElementById("uploadHeaderImage");
const inp_header = document.getElementById("uploadHeader");

const img_profile = document.getElementById("profileImage");
const img_updateProfile = document.getElementById("uploadProfileImage");
const inp_profile = document.getElementById("uploadProfile");

const lpd_age = document.querySelectorAll(".age");
const lpd_email = document.querySelectorAll(".email");
const lpd_phone = document.querySelectorAll(".phone");

const ttl_name = document.getElementById("profileName");

// ------------------------------------------ START ------------------------------------------- //

const div_start = document.getElementById("boxStart");

const pha_personalInformations = document.getElementById("personalInformations");
const pha_academicEducation = document.getElementById("academicEducation");
const pha_experiences = document.getElementById("experiences");

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

const div_configuration = document.getElementById("boxConfiguration");

const inp_name = document.getElementById("inpProfileName");
const inp_age = document.getElementById("inpAge");
const inp_email = document.getElementById("inpEmail");
const inp_phone = document.getElementById("inpPhone");

const txt_personalInformations = document.getElementById("txtPersonalInformations");
const txt_academicEducation = document.getElementById("txtAcademicEducation");
const txt_experiences = document.getElementById("txtExperiences");

const btn_apply = document.getElementById("btnApply");

// =============================================   M A I N   ============================================= //

// -------------------------------------- HEADER -------------------------------------- //

inp_menu.addEventListener("click", openMenu);

mnb_start.addEventListener("click", enableStart);
mnb_project.addEventListener("click", enableProject);
mnb_suggestion.addEventListener("click", enableSuggestion);
mnb_configuration.addEventListener("click", enableConfiguration);

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

img_updateHeader.addEventListener("click", updateImageHeader);
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
    hideCurrentScreen();
    startDisplay();
    project = suggestion = configuration = false;
    start = true;
}

function enableProject() {
    if (project) {
        return;
    }
    hideCurrentScreen();
    start = suggestion = configuration = false;
    project = true;
}

function enableSuggestion() {
    if (suggestion) {
        return;
    }
    hideCurrentScreen();
    start = project = configuration = false;
    suggestion = true;
}

function enableConfiguration() {
    if (configuration) { 
        return;
    }
    hideCurrentScreen();
    configurationsDisplay();
    start = project = suggestion = false;
    configuration = true;    
}

function hideCurrentScreen(){
    switch (true) {
        case start:{
            startHidden();
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

// ------------------------------------------ START ------------------------------------------- //

function startDisplay() {
    div_start.removeAttribute("hidden");
}

function startHidden() {
    div_start.setAttribute("hidden", "on");
}

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

function configurationsDisplay() {
    img_updateHeader.removeAttribute("hidden");
    img_updateProfile.removeAttribute("hidden");
    div_configuration.removeAttribute("hidden");
}

function configurationsHidden() {
    img_updateHeader.setAttribute("hidden", "on");
    img_updateProfile.setAttribute("hidden", "on");
    div_configuration.setAttribute("hidden", "on");
}

function updateImageHeader() {
    inp_header.click();
}

window.addEventListener('load', function() {
    inp_header.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            img_header.onload = () => {
                URL.revokeObjectURL(img_header.src);  // no longer needed, free memory
            }
            img_header.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
});

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
    const containsName = inp_name.value.length > 0; 
    const name = inp_name.value;
    const containsAge = Number(inp_age.value) > 0;
    const age = Number(inp_age.value);
    const containsEmail = inp_email.value.length > 0;
    const email = inp_email.value;
    const containsPhone = inp_phone.value.length > 0;
    const phone = inp_phone.value;

    const containsPersonalInformation = txt_personalInformations.value.length > 0;
    const personalInformations = txt_personalInformations.value;
    const containsAcademicEducation = txt_academicEducation.value.length > 0;
    const academicEducation = txt_academicEducation.value;
    const containsExperiences = txt_experiences.value.length > 0;
    const experiences = txt_experiences.value;
    
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
        lpd_phone.forEach(element => element.textContent = "Fone: " + phone);
    }

    if (containsPersonalInformation) {
        let removeEnter = personalInformations.split("\n");
        let contentConvert = removeEnter.join("<br>");
        pha_personalInformations.innerHTML = contentConvert;
    }

    if (containsAcademicEducation) {
        let removeEnter = academicEducation.split("\n");
        let contentConvert = removeEnter.join("<br>");
        pha_academicEducation.innerHTML = contentConvert;
    }

    if (containsExperiences) {
        let removeEnter = experiences.split("\n");
        let contentConvert = removeEnter.join("<br>");
        pha_experiences.innerHTML = contentConvert;
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