

function hideToolTip () {


    document.getElementById("tooltip").style.display = "none";
    
    
    }


    var cur = 1;
var arr = ['1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eprehenderit in.','2. Velit egestas dui id ornare arcu odio ut sem nulla. Tortor condimentum lacinia quis vel eros donec. In fermentum posuere urna nec tincidunt praesent semper feugiat. Sapien et ligula ullamcorper malesuada proin libero. Lectus nulla at volutpat diam ut.','3. Egestas dui id ornare arcu. Massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum vitae. Aliquet risus feugiat in ante metus dictum at tempor commodo.', '4. Magna sit amet purus gravida quis blandit turpis cursus. Vulputate ut pharetra sit amet aliquam id. Vulputate odio ut enim blandit volutpat maecenas. Pulvinar etiam non quam lacus suspendisse faucibus.'];
function forward() {
  cur=cur+1;
  document.getElementById('bck').disabled = false;
  if (cur==4) {
    document.getElementById('fwd').disabled = true
  }
  document.getElementById('num').textContent = cur;
  document.getElementById('txt').textContent = arr[cur-1];
document.getElementById('slide').src="https://auth.lifeextension.com/-/media/lifeextension/scratch/" + cur + ".jpg";
}

function back() {
  cur=cur-1;
  document.getElementById('fwd').disabled = false;
  if (cur==1) {
    document.getElementById('bck').disabled = true;
  }
 document.getElementById('num').textContent = cur; 
 document.getElementById('txt').textContent = arr[cur-1]; document.getElementById('slide').src="https://auth.lifeextension.com/-/media/lifeextension/scratch/" + cur + ".jpg";
}
