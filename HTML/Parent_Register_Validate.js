function validateParentFormRegister() {
    var x = document.forms["parentFormRegister"]["ChildFirstName"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return false;
    } else {
        return true;
    }
}
