function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status== "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("one.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
  education(data.education);
});
var main=document.querySelector(".flex-parent");
function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h3");
  email.innerHTML=basic.email;
  profile.appendChild(email);
  var photo=document.createElement("img");
  photo.src=basic.photo;
  profile.appendChild(photo);

}
var right=document.createElement("div");
right.classList.add("content-child");
main.appendChild(right);
function education(education){
var e1=document.createElement("div");
e1.classList.add("edu");
right.appendChild(e1);
var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent="Education Details";
h1.appendChild(document.createElement("HR"));
//console.log(right);
 e1.appendChild(h1);
  //function educationinfo(education){
   for(i in education){
           var h2=document.createElement("h2");
             h2.classList.add("edu1");
    h2.innerHTML=education[i].course;
          h1.appendChild(h2);
      var h3=document.createElement("h3");
      h3.classList.add("edu2");
      h3.textContent=education[i].college;
      h2.appendChild(h3);
      var ul=document.createElement("ul");
      ul.classList.add("edu3");
      h3.appendChild(ul);
      for(j in education){
      var li=document.createElement("li");
      li.style.display="block";
      li.textContent=education[i].data[j];
      ul.appendChild(li);
    }

    }
 }
 console.log(right);
