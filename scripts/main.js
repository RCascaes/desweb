// =====================================   D E C L A R A T I O N S   ===================================== //

let start = true;
let project = false;
let suggestion = false;
let configuration = false;

const mnb_start = document.getElementById("start");
const mnb_project = document.getElementById("project");
const mnb_suggestion = document.getElementById("suggestion");
const mnb_configuration = document.getElementById("configuration");

const img_profile = document.getElementById("profileImage");
const img_updateProfile = document.getElementById("uploadProfileImage");
const inp_profile = document.getElementById("uploadProfile");

// =============================================   M A I N   ============================================= //

mnb_start.addEventListener("click", enableStart);
mnb_project.addEventListener("click", enableProject);
mnb_suggestion.addEventListener("click", enableSuggestion);
mnb_configuration.addEventListener("click", enableConfiguration);

// -------------------------------------- CONFIGURATIONS -------------------------------------- //

img_updateProfile.addEventListener("click", updateImageProfile);

// ========================================   F U N C T I O N S   ======================================== //

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
}

function configurationsHidden() {
    img_updateProfile.setAttribute("hidden", "on");
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