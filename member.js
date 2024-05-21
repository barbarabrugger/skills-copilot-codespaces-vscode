function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  if (memberValue == "1") {
    document.getElementById("skills1").style.display = "block";
    document.getElementById("skills2").style.display = "none";
  } else if (memberValue == "2") {
    document.getElementById("skills1").style.display = "block";
    document.getElementById("skills2").style.display = "block";
  } else {
    document.getElementById("skills1").style.display = "none";
    document.getElementById("skills2").style.display = "none";
  }
}