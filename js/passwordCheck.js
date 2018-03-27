function PasswordChecker(wrapperId, passwordInputFieldId, passwordSubmitButtonId) {

    //following are attributes which could be seen as "constants"
    this.successClass = "success";
    this.warningClass = "warning";
    this.errorClass = "error";

    this.minLength = 8;

    //this attributes are set with our constructor
    this.wrapperField = document.getElementById(wrapperId);
    this.passwordField = document.getElementById(passwordInputFieldId);
    this.passwordSubmitButton = document.getElementById(passwordSubmitButtonId);


    var that = this; //a trick because this is a keyword and means diffrent things in a new context! Especially when you work with events or if you call functions outside your class "this" won't mean you!

    //TODO start
    //now for the events which should fire:
    //if we leave the password field (focus is lost) - JavaScript Method "onblur" for an input field in our case the field this.passwordField
    //if we enter the password field (focus is set) - JavaScript Method "onfocus" for an input field - again in our case the field this.passwordField
    //if we are in the password field an enter text - JavaScript Method "onkeyup" or "onkeup" - again in our case the field this.passwordField
    //if we try to click the submit button - JavaScript Method "onclick" - in our case this.passwordSubmitButton

    this.passwordField.onblur = function() {
        //the keyword "this" is always referring to its context.
        //onblur is an event which happens in "passwordField" -> so the keyword "this" would refer to the passwordField NOT to our class
        //therefore we previously saved "this" in a variable called "that"
        that.check();
    };

    //TODO implement the other events in the exact same way!




    //TODO end

    this.check = function() {
        //we can only check if every field which with given Id exists
        //one of them would be null if one Id wouldn't exist therefore following statement would fail
        if(this.wrapperField && this.passwordField && this.passwordSubmitButton) {

            var longEnough = this.checkForLength();
            var hasSpecialChars = this.checkForSpecialCharacters();

            //if it is long enough and has a special character - everything is fine
            if(longEnough && hasSpecialChars) {
                this.wrapperField.className = this.successClass;
                this.passwordSubmitButton.disabled = false;
            } else if(!hasSpecialChars && longEnough) { //if it is long enough but it has no special character set class warning
                this.wrapperField.className = this.warningClass;
                this.passwordSubmitButton.disabled = true;
            } else { //if it is not long enough set class error
                this.wrapperField.className = this.errorClass;
                this.passwordSubmitButton.disabled = true;
            }


        } else {
            //obviously a field is null (we weren't able to find it)
            console.error("A Id given to PasswordChecker doesn't exist!");

            //one could improve this by telling the Developer which Id(s) are null...
        }
    };

    /*
    This method should return true if the length of passwordField value is greater or equal to this.minLength
     */
    this.checkForLength = function() {
        return (this.minLength <= this.passwordField.value.length);
    };

    /*
    This method returns true if no special Character is found - otherwise false
     */
    this.checkForSpecialCharacters = function() {
        return (this.passwordField.value.match(/[!§$_.:,;]/));
    };
}

document.addEventListener("DOMContentLoaded", function() {
    var myPasswordChecker = new PasswordChecker("passwordWrapper", "password", "submitPassword");
});
