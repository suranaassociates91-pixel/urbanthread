/* ============ YAHAN APNI DETAILS BADLO ============ */
var PHONE = "";   // shop ka WhatsApp number, jaise "919928302871" (91 se shuru, bina + ya space). Khali rakhoge toh button chhup jayega.

/* Har kapde ke liye: name, category, daam, sizes.
   Asli photo lagani ho toh front/back ki PNG (transparent background) images/ folder mein daalo
   aur neeche front:"images/tee1-front.png", back:"images/tee1-back.png" likh do.
   Photo na ho toh drawing dikhegi. */
var PRODUCTS = [
  {name:"Oversized Graphic Tee",   type:"tee",    color:"#3b5b8c", ink:"#f1efe9", price:399,  sizes:"S M L XL",     front:"", back:""},
  {name:"Slim Fit Check Shirt",    type:"shirt",  color:"#2f6f5e", ink:"#f1efe9", price:799,  sizes:"M L XL",       front:"", back:""},
  {name:"Fleece Pullover Hoodie",  type:"hoodie", color:"#1d1f26", ink:"#a6ff00", price:1199, sizes:"M L XL XXL",   front:"", back:""},
  {name:"Baggy Fit Jeans",         type:"jeans",  color:"#4a6a99", ink:"#f1efe9", price:999,  sizes:"28 30 32 34",  front:"", back:""},
  {name:"Varsity Zip Jacket",      type:"jacket", color:"#9b2f2f", ink:"#f1efe9", price:1599, sizes:"M L XL",       front:"", back:""},
  {name:"Plain Cotton Tee",        type:"tee",    color:"#d9d2bf", ink:"#15161a", price:299,  sizes:"S M L XL",     front:"", back:""},
  {name:"Casual Cargo Shorts",     type:"shorts", color:"#6b6a4d", ink:"#f1efe9", price:549,  sizes:"28 30 32 34",  front:"", back:""},
  {name:"Washed Black Tank Top",   type:"tank",   color:"#2b2c31", ink:"#f1efe9", price:349,  sizes:"S M L XL",     front:"", back:""},
  {name:"Plain White Shirt",       type:"shirt",  color:"#f4f2ec", ink:"#15161a", price:699,  sizes:"M L XL",       front:"", back:""}
];
var TICKER = ["Urban Thread","Boys ke sab kapde","Mandapiya Tower, Bijainagar","Naya stock aaya hai","T-Shirt","Shirt","Hoodie","Jacket","Jeans"];
/* ================================================== */

(function(){
  var hook='<path d="M100 20v-6c0-8 12-8 12 0" stroke="#7d7f86" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M100 20L44 52M100 20l56 32" stroke="#6f7178" stroke-width="3.2" fill="none" stroke-linecap="round"/>';
  var D={
    tee:function(c,t,b){return '<path d="M62 50L20 78l16 30 24-12v132h80V96l24 12 16-30-42-28q-38 22-78 0z" fill="'+c+'"/><path d="M62 50q38 22 78 0" fill="none" stroke="'+t+'" stroke-width="4" opacity=".45"/>'+(b?'<text x="100" y="170" text-anchor="middle" font-family="Arial Black,Arial" font-size="46" fill="'+t+'" font-weight="900">26</text>':'<text x="100" y="156" text-anchor="middle" font-family="Arial Black,Arial" font-size="15" fill="'+t+'" font-weight="900">URBAN</text>')},
    tank:function(c,t,b){return '<path d="M70 50q-4 40-22 60l8 130h88l8-130q-18-20-22-60l-12 4q-14 28-28 0z" fill="'+c+'"/>'+(b?'<text x="100" y="170" text-anchor="middle" font-family="Arial Black,Arial" font-size="40" fill="'+t+'" font-weight="900">26</text>':'<text x="100" y="150" text-anchor="middle" font-family="Arial Black,Arial" font-size="13" fill="'+t+'" font-weight="900">URBAN</text>')},
    shirt:function(c,t,b){return '<path d="M62 50L18 86l14 124 30 4v12h76v-12l30-4 14-124-44-36-24 18h-32z" fill="'+c+'"/>'+(b?'':'<path d="M100 70v160" stroke="'+t+'" stroke-width="2.5" opacity=".55"/><g fill="'+t+'" opacity=".7"><circle cx="100" cy="96" r="2.5"/><circle cx="100" cy="130" r="2.5"/><circle cx="100" cy="164" r="2.5"/><circle cx="100" cy="198" r="2.5"/></g><path d="M78 50l22 22 22-22" fill="'+t+'" opacity=".3"/>')},
    hoodie:function(c,t,b){return '<path d="M70 46Q100 24 130 46l36 16 28 120-30 8-8-72v90H74v-90l-8 72-30-8 28-120z" fill="'+c+'"/><path d="M70 46q30 36 60 0" fill="none" stroke="'+t+'" stroke-width="4" opacity=".5"/>'+(b?'':'<path d="M92 80v38M108 80v38" stroke="'+t+'" stroke-width="3" opacity=".7"/><path d="M76 174h48l8 40H68z" fill="'+t+'" opacity=".18"/>')},
    jacket:function(c,t,b){return '<path d="M66 46l-40 22-10 150 30 4 4-100h20v110h60V122h20l4 100 30-4-10-150-40-22-34 22z" fill="'+c+'"/><path d="M66 46l34 22 34-22" fill="none" stroke="'+t+'" stroke-width="4" opacity=".5"/>'+(b?'<text x="100" y="150" text-anchor="middle" font-family="Arial Black,Arial" font-size="36" fill="'+t+'" font-weight="900">26</text>':'<path d="M100 68v156" stroke="'+t+'" stroke-width="3" opacity=".65"/>')},
    jeans:function(c,t,b){return '<path d="M58 46h84l8 190h-46l-4-120-4 120H50z" fill="'+c+'"/><path d="M58 46h84v14H58z" fill="'+t+'" opacity=".3"/>'+(b?'<path d="M66 100h26v22H66zM108 100h26v22h-26z" fill="none" stroke="'+t+'" stroke-width="2.5" opacity=".5"/>':'<path d="M100 60v56" stroke="'+t+'" stroke-width="2.5" opacity=".5"/><path d="M62 64q10 16 22 8M138 64q-10 16-22 8" stroke="'+t+'" stroke-width="2.5" fill="none" opacity=".5"/>')},
    shorts:function(c,t,b){return '<path d="M58 46h84l10 110h-48l-4-44-4 44H48z" fill="'+c+'"/><path d="M58 46h84v14H58z" fill="'+t+'" opacity=".3"/>'+(b?'':'<path d="M100 60v50" stroke="'+t+'" stroke-width="2.5" opacity=".5"/>')}
  };
  var stage=document.getElementById('stage'),box=document.getElementById('items');
  var side='front',pos=4,target=4,slot=120,extra=110,big=2.1,els=[],drag=false,moved=false,sx=0,sp=0,raf=0;
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

  function art(p){
    var photo=side==='back'&&p.back?p.back:p.front;
    if(photo)return '<img src="'+photo+'" alt="'+p.name+'" draggable="false">';
    return '<svg viewBox="0 0 200 250" role="img" aria-label="'+p.name+'">'+hook+D[p.type](p.color,p.ink,side==='back')+'</svg>';
  }
  function build(){
    box.innerHTML='';els=[];
    PRODUCTS.forEach(function(p,i){
      var el=document.createElement('div');el.className='it';el.innerHTML=art(p);
      el.addEventListener('click',function(){if(!moved)go(i)});
      box.appendChild(el);els.push(el);
    });
    size();show();paint();
  }
  function refresh(){els.forEach(function(el,i){el.innerHTML=art(PRODUCTS[i])})}
  function size(){
    var w=stage.clientWidth;
    slot=Math.max(70,Math.min(150,w/8.5));
    extra=slot*(w<600?1.0:1.15);
    big=w<600?1.9:2.1;
  }
  function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
  function paint(){
    var w=stage.clientWidth;
    els.forEach(function(el,i){
      var d=i-pos,a=Math.abs(d);
      var x=d*slot+extra*clamp(d,-1,1);
      var s=1+(big-1)*Math.max(0,1-a);
      var bl=clamp((a-.5)*3.5,0,3.5);
      el.style.transform='translateX(calc(-50% + '+x+'px)) scale('+s+')';
      el.style.filter=bl>.05?'blur('+bl.toFixed(1)+'px)':'none';
      el.style.opacity=clamp(1.1-a*.1,.35,1);
      el.style.zIndex=String(100-Math.round(a*10));
    });
  }
  var cur=-1;
  function show(){
    var i=clamp(Math.round(target),0,PRODUCTS.length-1);if(i===cur)return;cur=i;
    document.getElementById('name').textContent=PRODUCTS[i].name;
  }
  function go(i){target=clamp(i,0,PRODUCTS.length-1);show();loop()}
  function loop(){
    cancelAnimationFrame(raf);
    if(reduce){pos=target;paint();return}
    (function step(){pos+=(target-pos)*.14;if(Math.abs(target-pos)<.002){pos=target;paint();return}paint();raf=requestAnimationFrame(step)})();
  }
  stage.addEventListener('pointerdown',function(e){drag=true;moved=false;sx=e.clientX;sp=pos;cancelAnimationFrame(raf);stage.classList.add('drag');try{stage.setPointerCapture(e.pointerId)}catch(_){}});
  stage.addEventListener('pointermove',function(e){
    if(!drag)return;var dx=e.clientX-sx;if(Math.abs(dx)>6)moved=true;
    pos=clamp(sp-dx/(slot*1.3),0,PRODUCTS.length-1);target=pos;paint();show();
  });
  function end(){if(!drag)return;drag=false;stage.classList.remove('drag');target=Math.round(pos);show();loop();setTimeout(function(){moved=false},0)}
  stage.addEventListener('pointerup',end);stage.addEventListener('pointercancel',end);
  stage.addEventListener('wheel',function(e){e.preventDefault();var d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;target=clamp(target+(d>0?1:-1)*.5,0,PRODUCTS.length-1);target=Math.round(target*2)/2;show();loop();clearTimeout(stage._w);stage._w=setTimeout(function(){target=Math.round(target);show();loop()},140)},{passive:false});
  document.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(Math.round(target)+1);if(e.key==='ArrowLeft')go(Math.round(target)-1);if(e.key==='Escape')closeSheet()});
  document.getElementById('toggle').addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;side=b.dataset.side;
    Array.prototype.forEach.call(this.children,function(o){o.setAttribute('aria-pressed',o===b)});refresh();
  });
  /* availability sheet */
  var sheet=document.getElementById('sheet');
  function closeSheet(){sheet.hidden=true}
  document.getElementById('avail').addEventListener('click',function(){
    var p=PRODUCTS[clamp(Math.round(target),0,PRODUCTS.length-1)];
    document.getElementById('sName').textContent=p.name;
    document.getElementById('sMeta').textContent='Boys ke liye. Sizes:';
    document.getElementById('sSizes').innerHTML=p.sizes.split(' ').map(function(s){return '<span>'+s+'</span>'}).join('');
    document.getElementById('sPrice').textContent='₹'+p.price+' (sample daam)';
    var wa=document.getElementById('wa');
    if(PHONE){wa.className='wa';wa.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent('Hi, Urban Thread: '+p.name+' available hai?')}else{wa.className='wa off'}
    sheet.hidden=false;
  });
  document.getElementById('close').onclick=closeSheet;
  sheet.addEventListener('click',function(e){if(e.target===sheet)closeSheet()});
  var s=TICKER.join('  •  ')+'  •  ';document.getElementById('mq').textContent=s+s+s+s;
  addEventListener('resize',function(){size();paint()});
  build();
})();
