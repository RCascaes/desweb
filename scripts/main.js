// ==========================================   G E N E R A L   ========================================== //

let start = true;
let project = false;
let suggestion = false;
let configuration = false;

// -------------------------------------- FUNCTIONS -------------------------------------- //

function emailVerify(email) {
    let eSize = email.length;
    let atSign = email.indexOf("@");
    let userName = email.substring(0, atSign);
    let domainName = email.substring(atSign+1, eSize);

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

// ===========================================   H E A D E R   =========================================== //

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

// -------------------------------------- EXECUTION -------------------------------------- //

inp_menu.addEventListener("click", openMenu);

mnb_start.addEventListener("click", enableStart);
mnb_project.addEventListener("click", enableProject);
mnb_suggestion.addEventListener("click", enableSuggestion);
mnb_configuration.addEventListener("click", enableConfiguration);

// -------------------------------------- FUNCTIONS -------------------------------------- //

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

// ============================================   S T A R T   ============================================ //

const div_start = document.getElementById("boxStart");

const pha_personalInformations = document.getElementById("personalInformations");
const pha_academicEducation = document.getElementById("academicEducation");
const pha_experiences = document.getElementById("experiences");

// -------------------------------------- FUNCTIONS -------------------------------------- //

function startDisplay() {
    div_start.removeAttribute("hidden");
}

function startHidden() {
    div_start.setAttribute("hidden", "on");
}

// ==========================================   P R O J E C T   ========================================== //

const div_project = document.getElementById("boxProject");

// -------------------------------------- FUNCTIONS -------------------------------------- //

function projectDisplay() {
    div_project.removeAttribute("hidden");
}

function projectHidden() {
    div_project.setAttribute("hidden", "on");
}

// =======================================   S U G G E S T I O N   ======================================= //

const div_suggestion = document.getElementById("boxSuggestion");

const pha_sugAlert = document.getElementById("phaSugAlert");
const sec_sugAlert = document.getElementById("secSugAlert");

const sec_sugSubmit = document.getElementById("secSugSubmit");

const inp_sugName = document.getElementById("inpSugName");
const inp_sugEmail = document.getElementById("inpSugEmail");
const txt_suggestion = document.getElementById("txtSuggestion");

const btn_submit = document.getElementById("btnSubmit");

// -------------------------------------- EXECUTION -------------------------------------- //

btn_submit.addEventListener("click", submitSuggestion);

// -------------------------------------- FUNCTIONS -------------------------------------- //

function suggestionDisplay() {
    div_suggestion.removeAttribute("hidden");
}

function suggestionHidden() {
    div_suggestion.setAttribute("hidden", "on");
    sec_sugAlert.setAttribute("hidden", "on");
    sec_sugSubmit.setAttribute("hidden", "on");
}

function submitSuggestion() {
    let message = "Os seguintes campos n??o foram preenchidos corretamente:";
    const regex = /[0-9]/;

    const containsSugName = inp_sugName.value.length > 0;
    const sugName = inp_sugName.value;
    const containsSugEmail = inp_sugEmail.value.length > 0;
    const sugEmail = inp_sugEmail.value;
    const containsSuggestion = txt_suggestion.value.length > 0;
    const suggestion = txt_suggestion.value;

    if (containsSugName) {
        if (regex.test(sugName)) {
            message += "<br>- Campo nome n??o pode conter n??meros.";
        }
        if (sugName.length < 3) {
            message += "<br>- Campo nome precisa conter ao menos 3 caracteres.";
        } 
    } else {
        message += "<br>- Campo nome ?? obrigat??rio.";
    }

    if (containsSugEmail) {
        if (!emailVerify(sugEmail)) {
            message += "<br>- Campo e-mail inv??lido.";
        } 
    } else {
        message += "<br>- Campo e-mail ?? obrigat??rio.";
    }

    if (!containsSuggestion) {
        message += "<br>- Campo sugest??o ?? obrigat??rio.";
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

// ====================================   C O N F I G U R A T I O N   ==================================== //

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

// -------------------------------------- EXECUTION -------------------------------------- //

img_updateHeader.addEventListener("click", updateImageHeader);
img_updateProfile.addEventListener("click", updateImageProfile);

inp_phone.addEventListener("blur", addNumberPhone);

btn_apply.addEventListener("click", applyConfiguration);

// -------------------------------------- FUNCTIONS -------------------------------------- //

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

function addNumberPhone(event) {
    var x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + ' ' + x[3] + '-' + x[4];
}

function applyConfiguration() {
    let message = "Os seguintes campos n??o foram preenchidos corretamente:";
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
            message += "<br>- Campo nome n??o pode conter n??meros.";
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
            message += "<br>- Campo e-mail inv??lido.";
        } else {
            lpd_email.forEach(element => element.textContent = "E-mail: " + email);
        }
    }
    if (containsPhone) {
        if (!phoneVerify(phone)) {
            message += "<br>- Campo de telefone precisa ter 11 d??gitos.";
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

function phoneVerify() {
    const phoneSize = inp_phone.value.length;

    if (phoneSize == 16) {
        return true;
    }
    return false;
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

// ===========================================   F O O T E R   =========================================== //

const div_showPPandTU = document.getElementById("showPPandTU");
var btn_ok;

const div_PPandTU = document.getElementById("PPandTU");

const btn_firstPrivacyPolicy = document.getElementById("firstPrivacyPolicy");
const btn_firstTermsUse = document.getElementById("firstTermsUse");
const btn_understood = document.getElementById("btnUnderstood");

const btn_privacyPolicy = document.getElementById("privacyPolicy");
const btn_termsUse = document.getElementById("termsUse");

// -------------------------------------- EXECUTION -------------------------------------- //

btn_firstPrivacyPolicy.addEventListener("click", openPrivacyPolicy);
btn_firstTermsUse.addEventListener("click", openTermsUse);
btn_understood.addEventListener("click", understood);

btn_privacyPolicy.addEventListener("click", openPrivacyPolicy);
btn_termsUse.addEventListener("click", openTermsUse);

// -------------------------------------- FUNCTIONS -------------------------------------- //

function openPrivacyPolicy() {
    let addSecPP = `<section class="secPPandTU center brdSolid">
        <h2>Pol??ticas de Privacidade</h2>
        <p>O que est?? sendo coletado: este projeto n??o possui base de dados, portanto o nome, idade, e-mail e 
        telefone inseridos, n??o ser??o armazenados em nenhum local.</p>
        <p>Qual a finalidade da coleta: a finalidade disto ?? inteiramente por aprendizado, portando n??o h?? coleta 
        de dados.</p>
        <p>Compartilhamento de dados: todos os dados ser??o armazenados em seus neur??nios, uma vez que este projeto
        n??o tem onde armazenar os dados, logo, n??o h?? o que compartilhar tamb??m.</p>
        <p>Tempo que os dados ser??o armazenados: estes dados ser??o armazenados enquanto estiverem em sua 
        conci??ncia, e talvez at?? enquanto estiver em seu subconciente, mas logo cair?? no limbo.</p>
        <p>O respons??vel pelos armazenamento dos dados: ningu??m.</p>
        <p>Direitos dos titulares: voc?? tem todo o direito de solicitar corre????es, descarte, bloqueio ou 
        anonimiza????o de dados, at?? mesmo a revoga????o do consentimento, de tudo isto que nem ?? armazenado.</p>
        <button id="btnOk" class="btnSubmit center brdSolid">OK</button>`;
    
    div_showPPandTU.innerHTML = addSecPP;
    div_showPPandTU.removeAttribute("hidden");
    
    btn_ok = document.getElementById("btnOk");
    btn_ok.addEventListener("click", closePPandTU);
}

function openTermsUse() {
    let addSecPP = `<section class="secPPandTU center brdSolid">
        <h2>Termos de Uso</h2>
        <p>Aqui os termos de uso...</p>
        <p>Aqui tudo pode ser copiado sem nossa autoriza????o. Tamb??m n??o haver?? atualiza????es de dados.</p>
        <p>Nada ?? salvo neste site, ent??o n??o h?? com que se preocupar. Tamb??m n??o nos respons??bilizamos por qualquer interfer??ncia 
        de terceiros.</p>
        <p>Estes termos e a pol??tica de privacidade podem ser alterados a qualquer momento.</p>
        <button id="btnOk" class="btnSubmit center brdSolid">OK</button>`;

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