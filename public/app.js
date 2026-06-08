
// document.getElementById("db").addEventListener("click", function(event){
//      // Show an alert to notify the user
//      alert("Do you really want to delete this chat ?");

//      // Submit the form after the alert (automatically happens after alert is dismissed)
//     document.getElementById("df").submit();
// });


document.getElementByClassName("db").addEventListener("click", function (event) {
    const userConfirmed = confirm("Do you really want to delete this chat?");
    if (userConfirmed) {
        document.getElementByClassName("df").submit();
    } else {
        event.preventDefault();
    }
});