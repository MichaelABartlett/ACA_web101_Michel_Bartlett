const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  // placeForResults.append(`${email} : ${value}`)
  // placeForResults.append(`${phone} : ${value}`)
  // placeForResults.append(`${classmate} : ${value}`)
  // placeForResults.append(`${ResumeSubmission} : ${value}`)
  // placeForResults.append(`${Lindedin} : ${value}`)
  // placeForResults.append(`${CodingAcademyRec} : ${value}`)
  
  // placeForResults.append(`${other} : ${value}`)
  // placeForResults.append(`${radio} : ${value}`)
  // placeForResults.append(`${Comments} : ${value}`)
  // placeForResults.append(`${date} : ${value}`)
  placeForResults.append(document.createElement("br"))
})



// function userInfo() {
//   var = x document.getElementById("name").value;
//   document.getElementById("uInfo").innerHTML = x;
// }