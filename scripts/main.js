// =====================================   D E C L A R A T I O N S   ===================================== //

let start = true;
let project = false;
let suggestion = false;
let configuration = false;

// -------------------------------------- HEADER -------------------------------------- //

const div_menu = document.getElementById("boxMenu");
const inp_menu = document.getElementById("menu");
const div_littleMenu = document.getElementById("littleMenu");
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

// ---------------------------------------- PROJECT ------------------------------------------- //

const div_project = document.getElementById("boxProject");

// --------------------------------------- SUGGESTION ----------------------------------------- //

const div_suggestion = document.getElementById("boxSuggestion");

const pha_sugAlert = document.getElementById("phaSugAlert");
const sec_sugAlert = document.getElementById("secSugAlert");

const sec_sugSubmit = document.getElementById("secSugSubmit");

const inp_sugName = document.getElementById("inpSugName");
const inp_sugEmail = document.getElementById("inpSugEmail");
const txt_suggestion = document.getElementById("txtSuggestion");

const btn_submit = document.getElementById("btnSubmit");

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

const div_configuration = document.getElementById("boxConfiguration");

const pha_confAlert = document.getElementById("phaConfAlert");
const sec_confAlert = document.getElementById("secConfAlert");

const sec_submit = document.getElementById("secSubmit");

const sel_menu = document.getElementById("fixedMenu");
const sel_font = document.getElementById("font");
const sel_sectionStyle = document.getElementById("sectionStyle");
const inp_name = document.getElementById("inpProfileName");
const inp_age = document.getElementById("inpAge");
const inp_email = document.getElementById("inpEmail");
const inp_phone = document.getElementById("inpPhone");

const txt_personalInformations = document.getElementById("txtPersonalInformations");
const txt_academicEducation = document.getElementById("txtAcademicEducation");
const txt_experiences = document.getElementById("txtExperiences");

const inp_primaryColor = document.getElementById("inpPrimaryColor");
const inp_primaryFont = document.getElementById("inpPrimaryFont");
const inp_secondaryColor = document.getElementById("inpSecondaryColor");
const inp_secondaryFont = document.getElementById("inpSecondaryFont");

const btn_apply = document.getElementById("btnApply");

// ------------------------------------------ FOOTER ------------------------------------------ //

const div_showPPandTU = document.getElementById("showPPandTU");
var btn_ok;

const div_PPandTU = document.getElementById("PPandTU");

const btn_firstPrivacyPolicy = document.getElementById("firstPrivacyPolicy");
const btn_firstTermsUse = document.getElementById("firstTermsUse");
const btn_understood = document.getElementById("understood");

const btn_privacyPolicy = document.getElementById("privacyPolicy");
const btn_termsUse = document.getElementById("termsUse");

// =============================================   M A I N   ============================================= //

// ------------------------------------------ HEADER ------------------------------------------ //

inp_menu.addEventListener("click", openMenu);

mnb_start.addEventListener("click", enableStart);
mnb_project.addEventListener("click", enableProject);
mnb_suggestion.addEventListener("click", enableSuggestion);
mnb_configuration.addEventListener("click", enableConfiguration);

// ---------------------------------------- SUGGESTION ---------------------------------------- //

btn_submit.addEventListener("click", submitSuggestion);

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

img_updateHeader.addEventListener("click", updateImageHeader);
img_updateProfile.addEventListener("click", updateImageProfile);

inp_phone.addEventListener("blur", addNumberPhone);

btn_apply.addEventListener("click", applyConfiguration);

// ------------------------------------------ FOOTER ------------------------------------------ //

btn_firstPrivacyPolicy.addEventListener("click", openPrivacyPolicy);
btn_firstTermsUse.addEventListener("click", openTermsUse);
btn_understood.addEventListener("click", understood);

btn_privacyPolicy.addEventListener("click", openPrivacyPolicy);
btn_termsUse.addEventListener("click", openTermsUse);

// ========================================   F U N C T I O N S   ======================================== //

// -------------------------------------- HEADER -------------------------------------- //

function openMenu() {
    let isChecked = inp_menu.checked;
    if (isChecked) {
        nav_menu.classList.add("pushNavbar");
        nav_menu.classList.remove("backNavbar");
        div_header.classList.add("pushHeader");
        div_header.classList.remove("backHeader");
    } else {
        nav_menu.classList.remove("pushNavbar");
        nav_menu.classList.add("backNavbar");
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
    inp_menu.checked = false;
    openMenu();
}

function enableProject() {
    if (project) {
        return;
    }
    hideCurrentScreen();
    projectDisplay();
    start = suggestion = configuration = false;
    project = true;
    inp_menu.checked = false;
    openMenu();
}

function enableSuggestion() {
    if (suggestion) {
        return;
    }
    hideCurrentScreen();
    suggestionDisplay();
    start = project = configuration = false;
    suggestion = true;
    inp_menu.checked = false;
    openMenu();
}

function enableConfiguration() {
    if (configuration) { 
        return;
    }
    hideCurrentScreen();
    configurationsDisplay();
    start = project = suggestion = false;
    configuration = true;   
    inp_menu.checked = false;
    openMenu(); 
}

function hideCurrentScreen(){
    switch (true) {
        case start:{
            startHidden();
            break;
        }
        case project:{
            projectHidden();
            break;
        }
        case suggestion:{
            suggestionHidden();
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

// ---------------------------------------- PROJECT ------------------------------------------- //

function projectDisplay() {
    div_project.removeAttribute("hidden");
}

function projectHidden() {
    div_project.setAttribute("hidden", "on");
}

// --------------------------------------- SUGGESTION ----------------------------------------- //

function suggestionDisplay() {
    div_suggestion.removeAttribute("hidden");
}

function suggestionHidden() {
    div_suggestion.setAttribute("hidden", "on");
    sec_sugAlert.setAttribute("hidden", "on");
    sec_sugSubmit.setAttribute("hidden", "on");
}

function submitSuggestion() {
    let message = "Os seguintes campos não foram preenchidos corretamente:";
    const regex = /[0-9]/;

    const containsSugName = inp_sugName.value.length > 0;
    const sugName = inp_sugName.value;
    const containsSugEmail = inp_sugEmail.value.length > 0;
    const sugEmail = inp_sugEmail.value;
    const containsSuggestion = txt_suggestion.value.length > 0;
    const suggestion = txt_suggestion.value;

    if (containsSugName) {
        if (regex.test(sugName)) {
            message += "<br>- Campo nome não pode conter números.";
        }
        if (sugName.length < 3) {
            message += "<br>- Campo nome precisa conter ao menos 3 caracteres.";
        } 
    } else {
        message += "<br>- Campo nome é obrigatório.";
    }

    if (containsSugEmail) {
        if (!emailVerify(sugEmail)) {
            message += "<br>- Campo e-mail inválido.";
        } 
    } else {
        message += "<br>- Campo e-mail é obrigatório.";
    }

    if (!containsSuggestion) {
        message += "<br>- Campo sugestão é obrigatório.";
    }

    if (message.includes("<br>")) {
        pha_sugAlert.innerHTML = message;
        sec_sugAlert.removeAttribute("hidden");
        sec_sugSubmit.setAttribute("hidden", "on");
    } else {
        sec_sugAlert.setAttribute("hidden", "on");
        sec_sugSubmit.removeAttribute("hidden");
    }
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
    sec_confAlert.setAttribute("hidden", "on");
    sec_submit.setAttribute("hidden", "on");
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
            img_header.removeAttribute("hidden");
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
    let message = "Os seguintes campos não foram preenchidos corretamente:";
    const regex = /[0-9]/;

    const menu = sel_menu.value;
    const font = sel_font.value;
    const sectionStyle = sel_sectionStyle.value;
    const secStyle1 = div_start.querySelectorAll(".sectionConfiguration");
    const secStyle2 = div_start.querySelectorAll(".sectionConfiguration2");

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

    const updatePrimaryColor = inp_primaryColor.value != document.body.style.getPropertyValue('--primary-color');
    const primaryColor = inp_primaryColor.value;
    const updatePrimaryFont = inp_primaryFont.value != document.body.style.getPropertyValue('--primary-font-color');
    const primaryFont = inp_primaryFont.value;
    const updateSecondaryColor = inp_secondaryColor.value != document.body.style.getPropertyValue('--secondary-color');
    const secondaryColor = inp_secondaryColor.value;
    const updateSecondaryFont = inp_secondaryFont.value != document.body.style.getPropertyValue('--secondary-font-color');
    const secondaryFont = inp_secondaryFont.value;
    
    switch (menu) {
        case "1": {
            div_littleMenu.classList.remove("fixedMenu");
            nav_menu.classList.remove("fixedMenu");
            break;
        }
        case "2": {
            div_littleMenu.classList.add("fixedMenu");
            nav_menu.classList.add("fixedMenu");
            break;
        }
    }
    switch (font) {
        case "1": {
            document.body.style.setProperty("--font-family", "Arial");
            break;
        }
        case "2": {
            document.body.style.setProperty("--font-family", "Franklin Gothic Medium");
            break;
        }
        case "3": {
            document.body.style.setProperty("--font-family", "Georgia");
            break;
        }
        case "4": {
            document.body.style.setProperty("--font-family", "Times New Roman");
            break;
        }
        case "5": {
            document.body.style.setProperty("--font-family", "Verdana");
            break;
        }
    }
    switch (sectionStyle) {
        case "1": {
            if (secStyle2.length > 0){
                secStyle2.forEach(element => element.setAttribute("class", "sectionConfiguration center"));
                div_project.querySelector(".sectionConfiguration2").setAttribute("class", "sectionConfiguration center");
            }
            break;
        }
        case "2": {
            if (secStyle1.length > 0){
                secStyle1.forEach(element => element.setAttribute("class", "sectionConfiguration2 center"));
                div_project.querySelector(".sectionConfiguration").setAttribute("class", "sectionConfiguration2 center");
            }
            break;
        }
    }

    if (containsName) {
        if (regex.test(name)) {
            message += "<br>- Campo nome não pode conter números.";
        } else if (name.length < 3) {
            message += "<br>- Campo nome precisa conter ao menos 3 caracteres.";
        } else {
            ttl_name.textContent = name;
        }
    }
    if (containsAge) {
        if (age > 120) {
            message += "<br>- Campo idade deve ser maior que 0 e menor que 120.";
        } else {
            lpd_age.forEach(element => element.textContent = "Idade: " + age);
        }
    }
    if (containsEmail) {
        if (!emailVerify(email)) {
            message += "<br>- Campo e-mail inválido.";
        } else {
            lpd_email.forEach(element => element.textContent = "E-mail: " + email);
        }
    }
    if (containsPhone) {
        if (!phoneVerify(phone)) {
            message += "<br>- Campo de telefone precisa ter 11 dígitos.";
        } else {
            lpd_phone.forEach(element => element.textContent = "Fone: " + phone);
        }
    }

    if (containsPersonalInformation) {
        let contentConvert = removeCode(personalInformations);
        pha_personalInformations.innerHTML = contentConvert;
    }
    if (containsAcademicEducation) {
        let contentConvert = removeCode(academicEducation);
        pha_academicEducation.innerHTML = contentConvert;
    }
    if (containsExperiences) {
        let contentConvert = removeCode(experiences);
        pha_experiences.innerHTML = contentConvert;
    }

    if (updatePrimaryColor) {        
        document.body.style.setProperty("--primary-color", primaryColor);
    }
    if (updatePrimaryFont) {        
        document.body.style.setProperty("--primary-font-color", primaryFont);
    }
    if (updateSecondaryColor) {        
        document.body.style.setProperty("--secondary-color", secondaryColor);
    }
    if (updateSecondaryFont) {        
        document.body.style.setProperty("--secondary-font-color", secondaryFont);
    }

    if (message.includes("<br>")) {
        pha_confAlert.innerHTML = message;
        sec_confAlert.removeAttribute("hidden");
        sec_submit.setAttribute("hidden", "on");
    } else {
        sec_confAlert.setAttribute("hidden", "on");
        sec_submit.removeAttribute("hidden");
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

function removeCode(inputText){
    let remove = inputText.split("<");
    let add = remove.join("");
    inputText = add;
    
    remove = inputText.split(">");
    add = remove.join("");
    inputText = add;
    
    remove = inputText.split("\n");
    add = remove.join("<br>");
    inputText = add;

    return inputText;
}

// ------------------------------------------ FOOTER ------------------------------------------ //

function openPrivacyPolicy() {
    let addSecPP = `<section class="secPPandTU center brdSolid rad10">
        <h2>Políticas de Privacidade</h2>
        <p class="phaMargin">O que está sendo coletado: este projeto não possui base de dados, portanto o nome, idade, e-mail e 
        telefone inseridos, não serão armazenados em nenhum local.</p>
        <p class="phaMargin">Qual a finalidade da coleta: a finalidade disto é inteiramente por aprendizado, portando não há coleta 
        de dados.</p>
        <p class="phaMargin">Compartilhamento de dados: todos os dados serão armazenados em seus neurônios, uma vez que este projeto
        não tem onde armazenar os dados, logo, não há o que compartilhar também.</p>
        <p class="phaMargin">Tempo que os dados serão armazenados: estes dados serão armazenados enquanto estiverem em sua 
        conciência, e talvez até enquanto estiver em seu subconciente, mas logo cairá no limbo.</p>
        <p class="phaMargin">O responsável pelos armazenamento dos dados: hehehe.</p>
        <p class="phaMargin">Direitos dos titulares: você tem todo o direito de solicitar correções, descarte, bloqueio ou 
        anonimização de dados, até mesmo a revogação do consentimento, de tudo isto que nem é armazenado.</p>
        <button id="btnOk" class="btnSubmit center brdSolid rad5">OK</button>`;
    
    div_showPPandTU.innerHTML = addSecPP;
    div_showPPandTU.removeAttribute("hidden");
    
    btn_ok = document.getElementById("btnOk");
    btn_ok.addEventListener("click", closePPandTU);
}

function openTermsUse() {
    let addSecPP = `<section class="secPPandTU center brdSolid rad10">
        <h2>Termos de Uso</h2>
        <p class="phaMargin">Aqui os termos de uso...</p>
        <p class="phaMargin">Aqui tudo pode ser copiado sem nossa autorização. Também não haverá atualizações de dados.</p>
        <p class="phaMargin">Nada é salvo neste site, então não há com que se preocupar. Também não nos responsábilizamos por qualquer interferência 
        de terceiros.</p>
        <p class="phaMargin">Estes termos e a política de privacidade podem ser alterados a qualquer momento.</p>
        <button id="btnOk" class="btnSubmit center brdSolid rad5">OK</button>`;

    div_showPPandTU.innerHTML = addSecPP;
    div_showPPandTU.removeAttribute("hidden");
    
    btn_ok = document.getElementById("btnOk");
    btn_ok.addEventListener("click", closePPandTU);
}

function closePPandTU() {
    div_showPPandTU.setAttribute("hidden", "on");
}

function understood() {
    div_PPandTU.setAttribute("hidden", "on");
}