let slides = 
[
    {
        "slide": 1,
        "info": 'Welcome to our new site experience click the next button below ( <span><i class="fwd-txt fa-solid fa-caret-right"></i></span> ) to explore the changes we have made.',
        "title": 'New Menu Tour',
    },
    {"slide":2,
    "info":"Here you can find some our favorite links.",
    "title": 'Exposed Links',
  },
    {"slide":3,
    "info":"These buttons lead you to your Account Options, Contact Us, Deals and pending Cart.",
    "title": 'User Info, Contact US & Your Cart',
  },
    {"slide":4,
    "info":"This menu button opens all the content our site has to offer you.",
    "title": 'Menu Button',
  },

    {"slide":5,
    "info":"Our new menu has been created to make all that we have to offer easily accesible",
    "title": 'New Menu',
  },
    {"slide":6,
    "info":'Menu items designated with a chevron ( <span class="chevron"><i aria-hidden="true" class="fa-solid fa-chevron-right"></i></span> ) will open the subcategories that fall under this category.',
    "title": 'Categories',
  },
    {"slide":7,
    "info":"Here you can find the subcategories organized and listed for your convenience",
    "title": 'Subcategories',
  },
    {"slide":8,
    "info":'If you have any questions about these updates please <a class="contact-link" href="https://www.lifeextension.com/quest-com">Contact Us</a> today.',
    "title": 'Questions',
  },

];

GLOBAL_CUR=0

function forward() {
  
    cur = GLOBAL_CUR;
    cur++;
    document.getElementById('bck').disabled = false;
    if (slides[cur].slide == slides.length) {
        document.getElementById('fwd').disabled = true;
        document.getElementById('end').disabled = false;
    }
    document.getElementById('num').textContent = slides[cur].slide;
    document.getElementById('txt').innerHTML = slides[cur].info;
    document.getElementById('slide').src = "slide-" + slides[cur].slide + ".jpg";
    document.getElementById('page-modal').textContent = slides[cur].title;
  
    
    GLOBAL_CUR = cur;
}

function back() {
    cur = GLOBAL_CUR-1;
    document.getElementById('fwd').disabled = false;
    if (slides[cur].slide == 1) {
        document.getElementById('bck').disabled = true;
        document.getElementById('end').disabled = true;
    }
    document.getElementById('num').textContent = slides[cur].slide;
    document.getElementById('txt').innerHTML = slides[cur].info;
    document.getElementById('slide').src = "slide-" + slides[cur].slide + ".jpg";
    document.getElementById('page-modal').textContent = slides[cur].title;
    localStorage.setItem("cur", cur);
    GLOBAL_CUR = cur;
}

function reset(){
  GLOBAL_CUR=0;
    localStorage.setItem("cur", 0);
    document.getElementById('txt').innerHTML = slides[0].slide+". "+slides[0].info;
    document.getElementById('num').textContent = slides[0].slide;
    document.getElementById('slide').src = "slide-" + slides[0].slide + ".jpg";
    document.getElementById('bck').disabled = true;
    document.getElementById('fwd').disabled = false;
    document.getElementById('page-modal').textContent = slides[0].title;
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
var cur = 1;

if (document.getElementById('staticBackdrop')){
const myModalEl = document.getElementById('staticBackdrop')
myModalEl.addEventListener('hidden.bs.modal', event => {
 cur=1;
})
}
