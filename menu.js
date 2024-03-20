

var cur = 1;

if (document.getElementById('staticBackdrop')){
const myModalEl = document.getElementById('staticBackdrop')
myModalEl.addEventListener('hidden.bs.modal', event => {
 cur=1;
})
}

var modalText= ['Welcome to our new site experience click the next button below ( <span><i class="fwd-txt fa-solid fa-caret-right"></i></span> ) to explore the changes we have made.',
'Here you can find some our favorite links.',
'This links will help you navigate your profile, contact us, see your deals and what you have pending in your cart.', 
'Our menu button opens all the content our site has to offer you.',
'This menu has been created to make all that we have to offer easily accesible',
'Menu items designated with a chevron ( <span class="chevron"><i aria-hidden="true" class="fa-solid fa-chevron-right"></i></span> ) will open the subcategories that fall under this category.',
'Here you can find the subcategories organized and listed for your convenience',
'If you have any questions about these updates please <a class="contact-link" href="https://www.lifeextension.com/quest-com">Contact Us</a> today.'];


var modalPageNum = ['New Menu Tour', 'Exposed Links', 'User Info, Contact US & Your Cart', 'Menu Button', 'New Menu', 'Categories', 'Subcategories', 'Questions',]

function forward() {
  
  cur=cur+1;
  document.getElementById('bck').disabled = false;

    if (cur==8) {
      document.getElementById('fwd').disabled = true
      document.getElementById('end').disabled = false;
    }
  document.getElementById('num').textContent = cur;
  document.getElementById('txt').innerHTML= modalText[cur-1];
  document.getElementById('slide').src="slide-" + cur + ".jpg";
  document.getElementById('page-modal').textContent = modalPageNum[cur-1];
}

function back() {

  cur=cur-1;
  document.getElementById('fwd').disabled = false;
  if (cur==1) {
    document.getElementById('bck').disabled = true;
    document.getElementById('end').disabled = true;
  }
 document.getElementById('num').textContent = cur; 
 document.getElementById('txt').innerHTML = modalText[cur-1]; document.getElementById('slide').src="slide-" + cur + ".jpg";
 document.getElementById('page-modal').textContent = modalPageNum[cur-1];
}

function showTourLink () {
  document.getElementById("tour-link").style.display = "block";

}

function hideToolTip () {
    document.getElementById("tooltip").style.display = "none"; 
    }

    function dismissButton () {
      document.getElementById("tooltip").style.display = "none";
      document.getElementById("tour-link").style.display = "block";
    }

  //  localStorage.setItem("time",new Date())

          // function restartModal () {
         
          //   document.getElementById("tooltip").style.display = "none";
          //   document.getElementById("tour-link").style.display = "block"; 
          //   document.getElementById("tour-link").style.display = "block"; 
           
          //   location.reload();
          // }

          

