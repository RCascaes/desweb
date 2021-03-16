// =====================================   D E C L A R A T I O N S   ===================================== //

const mnb_start = document.getElementById("start");
const mnb_project = document.getElementById("project");
const mnb_suggestion = document.getElementById("suggestion");
const mnb_configuration = document.getElementById("configuration");

// =============================================   M A I N   ============================================= //

mnb_start.addEventListener("click", enableStart);
mnb_project.addEventListener("click", enableProject);
mnb_suggestion.addEventListener("click", enableSuggestion);
mnb_configuration.addEventListener("click", enableConfiguration);

// ========================================   F U N C T I O N S   ======================================== //

function enableStart() {console.log("start")}
function enableProject() {console.log("project")}
function enableSuggestion() {console.log("suggestion")}
function enableConfiguration() {console.log("configuration")}