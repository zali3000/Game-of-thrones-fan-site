document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector(".site-nav"), toggle=document.querySelector(".nav-toggle");
 if(toggle) toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.setAttribute("aria-expanded",nav.classList.contains("open"));});
 document.querySelectorAll(".site-nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
 attachTilt(".tilt-card",".tilt-card-inner",8);
 attachFlip(".flip-card");
 attachReveal(".reveal");
 const theme=document.body.classList.contains("hotd-theme")?"rgba(138, 31, 31, ":"rgba(217, 98, 43, "; startEmbers(theme);
 initSearch(); initFilters(); initProfiles(); initFavorites(); initDetailCards(); initWesterosMap();
 // Final URL-driven card opener. It runs after initDetailCards has attached click handlers.
 setTimeout(()=>{
   const params=new URLSearchParams(location.search);
   const requested=(params.get("open")||location.hash.replace(/^#/,"")).trim().toLowerCase();
   if(!requested)return;
   const target=document.getElementById(requested) || [...document.querySelectorAll("[data-search-item]")].find(card=>{
     const id=(card.id||"").toLowerCase();
     const title=(card.querySelector("h1,h2,h3,h4,.title,.name,.city-name,.dragon-name")?.textContent||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
     const short=requested.replace(/^[^-]+-/,'');
     return id===requested || title===requested || title===short;
   });
   if(target){
     target.scrollIntoView({block:"center",behavior:"auto"});
     target.click();
     if(params.has("open")){
       const clean=new URL(location.href); clean.searchParams.delete("open");
       history.replaceState(null,"",clean.pathname+clean.hash);
     }
   }
 },250);
});
function attachTilt(selector,innerSelector,maxTilt){document.querySelectorAll(selector).forEach(card=>{const inner=card.querySelector(innerSelector)||card;card.addEventListener("mousemove",e=>{if(window.matchMedia("(hover: none)").matches)return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;inner.style.transform=`rotateX(${-(y-r.height/2)/(r.height/2)*maxTilt}deg) rotateY(${(x-r.width/2)/(r.width/2)*maxTilt}deg) scale(1.02)`});card.addEventListener("mouseleave",()=>inner.style.transform="rotateX(0deg) rotateY(0deg) scale(1)")})}
function attachFlip(selector){document.querySelectorAll(selector).forEach(card=>card.addEventListener("click",()=>{if(window.matchMedia("(hover: none)").matches)card.classList.toggle("flipped")}))}
function attachReveal(selector){const items=document.querySelectorAll(selector);if(!items.length)return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");obs.unobserve(e.target)}}),{threshold:.15});items.forEach(i=>obs.observe(i))}
function startEmbers(color){const canvas=document.getElementById("embers");if(!canvas||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const ctx=canvas.getContext("2d");let w,h,particles=[];const resize=()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight};addEventListener("resize",resize);resize();const count=matchMedia("(max-width:720px)").matches?18:42;for(let i=0;i<count;i++)particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.5,speed:Math.random()*.6+.2,drift:(Math.random()-.5)*.4,a:Math.random()*.5+.2});function loop(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.speed;p.x+=p.drift;if(p.y<-10){p.y=h+20;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`${color}${p.a})`;ctx.fill()});requestAnimationFrame(loop)}loop()}
function initArchiveFiltering(){
 const inputs=[...document.querySelectorAll("[data-search]")];
 const groups=[...document.querySelectorAll("[data-filter-group]")];
 const items=[...document.querySelectorAll("[data-search-item]")];
 if(!items.length)return;
 const empty=document.querySelector(".filter-empty");
 const state={query:"",filters:{}};
 const categoryFor=(item,target)=>{
   const direct=item.dataset.category||item.dataset[target]||item.dataset.faction||item.dataset.color;
   if(direct)return direct.toLowerCase();
   if(target==="house")return (item.querySelector(".region")?.textContent||"").trim().toLowerCase().replace(/\s+/g,"-");
   return "";
 };
 const apply=()=>{
   const q=state.query.toLowerCase(); let shown=0;
   items.forEach(item=>{
     let ok=!q||item.innerText.toLowerCase().includes(q);
     for(const [target,val] of Object.entries(state.filters)){if(val!=="all"&&categoryFor(item,target)!==val){ok=false;break;}}
     item.style.display=ok?"":"none"; if(ok)shown++;
   });
   if(empty)empty.style.display=shown?"none":"block";
   groups.forEach(g=>{const c=g.querySelector("[data-filter-count]");if(c)c.textContent=`${shown} ${shown===1?"result":"results"}`;});
 };
 inputs.forEach(input=>input.addEventListener("input",()=>{state.query=input.value.trim();apply();}));
 groups.forEach(group=>{
   const target=group.dataset.filterGroup; state.filters[target]="all";
   group.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
     group.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active")); button.classList.add("active");
     state.filters[target]=button.dataset.filter.toLowerCase(); apply();
   }));
 });
 apply();
}
function initSearch(){initArchiveFiltering()}
function initFilters(){}
function initProfiles(){
 const modal=document.querySelector('.profile-modal');
 if(!modal)return;
 const title=modal.querySelector('[data-profile-title]'), role=modal.querySelector('[data-profile-role]'), text=modal.querySelector('[data-profile-text]');
 let lastTrigger=null;
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');lastTrigger?.focus();lastTrigger=null;};
 const trapFocus=e=>{if(e.key!=='Tab'||!modal.classList.contains('open'))return;const focusables=[...modal.querySelectorAll('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 document.querySelectorAll('.profile-trigger').forEach(btn=>btn.addEventListener('click',e=>{
   e.stopPropagation(); const card=btn.closest('.character-card');
   if(!card)return; lastTrigger=btn; title.textContent=card.querySelector('.flip-face.back h3')?.textContent||''; role.textContent=card.querySelector('.flip-face.back .char-title')?.textContent||''; text.textContent=card.querySelector('.flip-face.back p')?.textContent||''; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); requestAnimationFrame(()=>modal.querySelector('.profile-close')?.focus());
 }));
 modal.querySelector('.profile-close')?.addEventListener('click',close); modal.addEventListener('click',e=>{if(e.target===modal)close()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')close();trapFocus(e)});
}

// Unified Westeros navigation, era-aware search and mobile menu
(function(){
 const menu=document.querySelector('.home-menu-btn');
 const mobile=document.querySelector('.mobile-home-nav');
 if(menu&&mobile){
   menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});
   mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
 }
 const searchBtn=document.querySelector('.home-search-btn');
 if(!searchBtn)return;
 let panel=document.querySelector('.home-search-panel');
 if(!panel){
   panel=document.createElement('div'); panel.className='home-search-panel'; panel.hidden=true;
   panel.innerHTML='<div class="search-box"><button type="button" class="search-close" aria-label="Close search">×</button><label for="homeSearch">SEARCH WESTEROS</label><input id="homeSearch" type="search" placeholder="Search houses, characters, dragons, cities..." autocomplete="off"><div id="homeSearchResults"></div></div>';
   document.body.appendChild(panel);
 }
 const close=panel.querySelector('.search-close'), input=panel.querySelector('#homeSearch'), results=panel.querySelector('#homeSearchResults');
 const isMainHome=document.body.classList.contains('westeros-home') || document.body.classList.contains('main-home');
 const era=document.body.classList.contains('hotd-theme')?'hotd':document.body.classList.contains('got-theme')?'got':null;

 // Search index. The main Westeros homepage gets both eras; an era page gets only its own era.
 const searchData={
   got:[
    ['House Stark','House','got/houses.html'],['House Lannister','House','got/houses.html'],['House Targaryen','House','got/houses.html'],['House Baratheon','House','got/houses.html'],['House Greyjoy','House','got/houses.html'],['House Tyrell','House','got/houses.html'],['House Martell','House','got/houses.html'],['House Arryn','House','got/houses.html'],['House Tully','House','got/houses.html'],
    ['Jon Snow','Character','got/characters.html'],['Daenerys Targaryen','Character','got/characters.html'],['Tyrion Lannister','Character','got/characters.html'],['Arya Stark','Character','got/characters.html'],['Sansa Stark','Character','got/characters.html'],['Cersei Lannister','Character','got/characters.html'],['Jaime Lannister','Character','got/characters.html'],['Bran Stark','Character','got/characters.html'],
    ['Drogon','Dragon','got/dragons.html'],['Rhaegal','Dragon','got/dragons.html'],['Viserion','Dragon','got/dragons.html'],
    ["King's Landing",'City','got/cities.html'],['Winterfell','City','got/cities.html'],['Braavos','City','got/cities.html'],['Dragonstone','City','got/cities.html'],['Highgarden','City','got/cities.html'],['Castle Black','City','got/cities.html'],['Meereen','City','got/cities.html'],['Sunspear','City','got/cities.html'],
    ['The Chronicle','Chronicle','got/chronicle.html'],['The Storyline','Storyline','got/storyline.html']
   ],
   hotd:[
    ['House Targaryen','House','hotd/houses.html'],['House Hightower','House','hotd/houses.html'],['House Velaryon','House','hotd/houses.html'],['House Strong','House','hotd/houses.html'],
    ['Rhaenyra Targaryen','Character','hotd/characters.html'],['Daemon Targaryen','Character','hotd/characters.html'],['King Viserys I','Character','hotd/characters.html'],['Alicent Hightower','Character','hotd/characters.html'],['Aegon II Targaryen','Character','hotd/characters.html'],['Aemond Targaryen','Character','hotd/characters.html'],['Otto Hightower','Character','hotd/characters.html'],['Corlys Velaryon','Character','hotd/characters.html'],['Rhaenys Targaryen','Character','hotd/characters.html'],['Criston Cole','Character','hotd/characters.html'],
    ['Syrax','Dragon','hotd/dragons.html'],['Caraxes','Dragon','hotd/dragons.html'],['Vhagar','Dragon','hotd/dragons.html'],['Meleys','Dragon','hotd/dragons.html'],['Sunfyre','Dragon','hotd/dragons.html'],['Dreamfyre','Dragon','hotd/dragons.html'],
    ["King’s Landing",'City','hotd/cities.html'],['Dragonstone','City','hotd/cities.html'],['Driftmark','City','hotd/cities.html'],['Oldtown','City','hotd/cities.html'],['Harrenhal','City','hotd/cities.html'],["Storm’s End",'City','hotd/cities.html'],
    ['The Chronicle','Chronicle','hotd/chronicle.html'],['The Storyline','Storyline','hotd/storyline.html']
   ]
 };
 const data=isMainHome ? [...searchData.got.map(x=>[...x,'GAME OF THRONES']),...searchData.hotd.map(x=>[...x,'HOUSE OF THE DRAGON'])] : (era?searchData[era]:[]);
 const open=()=>{panel.hidden=false;setTimeout(()=>input?.focus(),40)};
 const shut=()=>{panel.hidden=true;if(input)input.value='';if(results)results.innerHTML='';};
 searchBtn.addEventListener('click',open); close?.addEventListener('click',shut); panel.addEventListener('click',e=>{if(e.target===panel)shut()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){shut();mobile?.classList.remove('open');}});
 input?.addEventListener('input',()=>{
   const q=input.value.toLowerCase().trim(); if(!results)return;
   if(!q){results.innerHTML='';return;}
   const matches=data.filter(item=>item[0].toLowerCase().includes(q) || item[1].toLowerCase().includes(q));
   results.innerHTML=matches.length?matches.map(item=>{
     const badge=item[3]?`<small>${item[3]}</small>`:'';
     const slug=item[0].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
     let target=item[2];
     if(!isMainHome) target=target.replace(/^got\//,'').replace(/^hotd\//,'');
     const hashable=!['chronicle','storyline'].includes(item[1].toLowerCase()); const href=hashable?`${target}#${item[1].toLowerCase()}-${slug}`:target; return `<a class="home-search-result" href="${href}"><span><strong>${item[0]}</strong>${badge}</span><em>${item[1]}</em></a>`;
   }).join(''):'<div class="home-search-result no-result">No matching result found.</div>';
 });
})();


/* Universal card detail viewer + richer archive details. */
function initFavorites(){
 const items=[...document.querySelectorAll('[data-search-item]')];
 if(!items.length)return;
 const KEY='westeros-favorites-v1';
 let saved={};
 try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){saved={}};
 const pageKey=()=>{
   const path=location.pathname.replace(/\\/g,'/');
   const parts=path.split('/').filter(Boolean);
   const era=parts.includes('hotd')?'hotd':'got';
   return era+'|'+(parts[parts.length-1]||'index.html');
 };
 const keyFor=item=>pageKey()+'|'+(item.id||item.dataset.searchItemId||item.querySelector('h1,h2,h3,h4,.title,.name')?.textContent||'item').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
 const isFav=item=>!!saved[keyFor(item)];
 const write=()=>{try{localStorage.setItem(KEY,JSON.stringify(saved))}catch(e){}};
 const updateButtons=()=>items.forEach(item=>{const b=item.querySelector('[data-favorite-button]');if(!b)return;const on=isFav(item);b.classList.toggle('is-favorite',on);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'Remove from favorites':'Add to favorites');b.title=on?'Remove from favorites':'Add to favorites';b.textContent=on?'★':'☆';});
 items.forEach(item=>{
   if(item.querySelector('[data-favorite-button]'))return;
   const b=document.createElement('button'); b.type='button'; b.className='favorite-button'; b.dataset.favoriteButton=''; b.textContent='☆'; b.title='Add to favorites'; b.setAttribute('aria-pressed','false');
   b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const k=keyFor(item);if(saved[k])delete saved[k];else saved[k]=true;write();updateButtons();item.classList.toggle('is-favorite-card',!!saved[k]);});
   item.appendChild(b);
 });
 const filterHost=document.querySelector('.archive-filters');
 if(filterHost && !filterHost.querySelector('[data-favorites-filter]')){
   const b=document.createElement('button');b.type='button';b.className='filter-btn favorites-filter';b.dataset.favoritesFilter='';b.setAttribute('aria-pressed','false');b.textContent='☆ FAVORITES';
   filterHost.appendChild(b);
   let active=false;
   b.addEventListener('click',()=>{active=!active;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));items.forEach(item=>{item.style.display=active&&!isFav(item)?'none':''});const empty=document.querySelector('.filter-empty');if(empty){const visible=items.some(i=>i.style.display!=='none');empty.style.display=visible?'none':'';}});
 }
 updateButtons();
}
function initDetailCards(){
 const cards=[...document.querySelectorAll('.westeros-page [data-search-item]')];
 if(!cards.length)return;
 const DETAILS={
  "got/houses/house-stark": {
    "section": "House",
    "description": "The Starks are the old northern house of Winterfell, known for duty, endurance and a deep connection to the North. Their words, “Winter Is Coming,” are less a slogan than a warning: survival requires preparation, loyalty and the ability to endure hardship."
  },
  "got/houses/house-lannister": {
    "section": "House",
    "description": "The Lannisters are one of Westeros’s richest and most politically powerful families, ruling from Casterly Rock and using wealth as carefully as armies. Their red-and-gold lion represents pride, ambition and the belief that power must be protected at almost any cost."
  },
  "got/houses/house-targaryen": {
    "section": "House",
    "description": "House Targaryen ruled Westeros for generations after Aegon the Conqueror united the kingdoms with dragons. Their history is filled with spectacular victories, family rivalries and the dangerous idea that royal blood gives a person the right to rule."
  },
  "got/houses/house-baratheon": {
    "section": "House",
    "description": "The Baratheons rose to the Iron Throne after Robert’s Rebellion and became closely tied to the politics of the crown. Their reputation for physical strength and fierce tempers made them formidable, but internal divisions repeatedly weakened the family."
  },
  "got/houses/house-greyjoy": {
    "section": "House",
    "description": "The Greyjoys rule the Iron Islands, where life is shaped by harsh seas, raiding traditions and a culture built around independence. Their ambition is summed up by the phrase “We Do Not Sow”: they prefer taking what they need to depending on the mainland."
  },
  "got/houses/house-tyrell": {
    "section": "House",
    "description": "The Tyrells of Highgarden combine wealth, fertile lands and careful political maneuvering. Unlike houses that rely mainly on military force, they often build influence through alliances and marriage, making them one of the most important players in the struggle for the crown."
  },
  "got/houses/house-martell": {
    "section": "House",
    "description": "House Martell rules Dorne from Sunspear and follows customs that differ from much of the rest of Westeros. The family is famous for patience, pride and a long memory, especially when seeking justice for wrongs committed against the Dornish."
  },
  "got/houses/house-arryn": {
    "section": "House",
    "description": "The Arryns are the ancient rulers of the Vale, protected by mountains and the formidable Eyrie. Their lands are difficult to invade, giving the family a strategic advantage, while their connections to other great houses make them important during succession crises."
  },
  "got/houses/house-tully": {
    "section": "House",
    "description": "House Tully rules the Riverlands from Riverrun, a region positioned between several competing powers. Because the Riverlands sit at the center of so many conflicts, the Tullys are repeatedly forced to choose alliances while trying to protect their people from armies passing through."
  },
  "got/characters/jon-snow": {
    "section": "Character",
    "description": "Jon Snow begins his story as an outsider at Winterfell and later joins the Night’s Watch, believing that service beyond the Wall will give his life a clear purpose. His experience there changes him, forcing him to understand the threat posed by the White Walkers and the importance of the people he once knew only as enemies."
  },
  "got/characters/daenerys-targaryen": {
    "section": "Character",
    "description": "Daenerys grows from an exiled young woman into a powerful queen with three dragons and a huge following. Her journey is built around liberation, reclaiming her family’s throne and proving that she can rule differently from the kings who came before her. As her power grows, so does the difficult question of what she is willing to do to achieve her vision."
  },
  "got/characters/tyrion-lannister": {
    "section": "Character",
    "description": "Tyrion survives in a world that constantly underestimates him because of his appearance and his family position. His greatest weapons are intelligence, wit and an understanding of political motives. From King’s Landing to exile and war, he repeatedly proves that knowing how people think can be as valuable as knowing how to fight."
  },
  "got/characters/arya-stark": {
    "section": "Character",
    "description": "Arya’s journey is one of survival and transformation. After losing her family’s protection, she learns to travel alone, fight, disguise herself and eventually use the training of the Faceless Men. Beneath all that training, however, remains a strong connection to her identity and her determination to survive on her own terms."
  },
  "got/characters/sansa-stark": {
    "section": "Character",
    "description": "Sansa begins with an idealized view of royal life but is forced to grow quickly after becoming trapped in the politics of King’s Landing. Her experiences teach her patience, observation and political awareness. By the end of her journey, she is no longer simply surviving the game of power; she understands how to play it."
  },
  "got/characters/cersei-lannister": {
    "section": "Character",
    "description": "Cersei is fiercely protective of her children and determined to preserve her family’s position. She uses marriage, fear, alliances and ruthless political calculation to hold power. Her greatest strength is her refusal to surrender, but that same determination repeatedly pushes her toward decisions that isolate her."
  },
  "got/characters/jaime-lannister": {
    "section": "Character",
    "description": "Jaime is introduced as a celebrated knight whose reputation is complicated by the choices he has made for his family. His journey gradually exposes the conflict between honor, loyalty and love. Away from the safety of his family’s influence, he is forced to question the identity he built for himself."
  },
  "got/characters/bran-stark": {
    "section": "Character",
    "description": "Bran’s fall from Winterfell changes his life completely and eventually leads him toward the mystical history of Westeros. As the Three-Eyed Raven, he becomes a keeper of memories and knowledge rather than a conventional warrior. His role becomes especially important because understanding the past is essential to confronting the future."
  },
  "got/dragons/drogon": {
    "section": "Dragon",
    "description": "Drogon is Daenerys Targaryen’s largest and most aggressive dragon, named after Khal Drogo. He becomes a symbol of her return to power and is frequently the most visible expression of her military strength. His size and destructive ability make him terrifying on a battlefield, but his bond with Daenerys is also deeply personal."
  },
  "got/dragons/rhaegal": {
    "section": "Dragon",
    "description": "Rhaegal is one of Daenerys’s three dragons, named after her brother Rhaegar Targaryen. His green-and-bronze appearance distinguishes him from his siblings, while his presence represents the continuation of Targaryen blood and the return of dragons to the world."
  },
  "got/dragons/viserion": {
    "section": "Dragon",
    "description": "Viserion is named after Daenerys’s brother Viserys and is one of the three dragons born from the petrified eggs given to Daenerys. His story becomes especially tragic because he is separated from his siblings and later transformed into a weapon against the living."
  },
  "got/cities/king-s-landing": {
    "section": "City",
    "description": "King’s Landing is the political heart of the Seven Kingdoms and the seat of the Iron Throne. Its crowded streets, royal palace and harbor make it both powerful and vulnerable. Almost every major political struggle eventually reaches the city because controlling King’s Landing means controlling the machinery of government."
  },
  "got/cities/winterfell": {
    "section": "City",
    "description": "Winterfell is the ancestral seat of House Stark and one of the most important strongholds in the North. Its ancient walls, hot springs and position along northern routes make it both a home and a defensive center. For the Stark family, Winterfell represents identity, memory and belonging."
  },
  "got/cities/braavos": {
    "section": "City",
    "description": "Braavos is a wealthy Free City built around canals and islands, famous for trade, ships and the mysterious House of Black and White. It stands outside the politics of the Seven Kingdoms while still influencing events through money, information and highly trained assassins."
  },
  "got/cities/dragonstone": {
    "section": "City",
    "description": "Dragonstone is the ancestral island fortress of House Targaryen, built around volcanic stone and surrounded by the sea. Its association with dragons and Targaryen rule gives it enormous symbolic importance. For claimants to the throne, holding Dragonstone can be a declaration that their royal heritage still matters."
  },
  "got/cities/highgarden": {
    "section": "City",
    "description": "Highgarden is the beautiful and wealthy seat of House Tyrell, surrounded by the fertile lands of the Reach. Its agricultural wealth gives the Tyrells enormous influence because food is one of the most important sources of power during wartime."
  },
  "got/cities/castle-black": {
    "section": "City",
    "description": "Castle Black is the principal headquarters of the Night’s Watch on the Wall. It is less a comfortable castle than a military outpost, responsible for defending the realm from threats beyond the Wall. Its importance becomes clear when the supernatural danger in the North begins to grow."
  },
  "got/cities/meereen": {
    "section": "City",
    "description": "Meereen is one of the great slave cities of Slaver’s Bay and becomes a major test of Daenerys’s ability to govern. Conquering the city is easier than maintaining peace inside it, forcing her to confront the difficult difference between destroying an old system and building a stable new one."
  },
  "got/cities/sunspear": {
    "section": "City",
    "description": "Sunspear is the capital of Dorne and the seat of House Martell. Its desert setting, distinctive architecture and independent culture reflect Dorne’s separation from the traditions of the other kingdoms. It becomes an important center of resistance and political calculation."
  },
  "got/chronicle/a-king-dies-hunting": {
    "section": "Chronicle",
    "description": "King Robert Baratheon’s hunting accident becomes the spark that exposes the instability beneath the royal court. With Robert dying and no secure succession, competing families immediately begin positioning themselves for control. The event matters because the Seven Kingdoms are about to enter a war that had been building quietly for years."
  },
  "got/chronicle/the-king-s-hand-loses-his-head": {
    "section": "Chronicle",
    "description": "Ned Stark’s execution destroys the possibility of a peaceful political settlement and turns the conflict into open war. His death shocks the North and gives Robb Stark the motivation to raise an army. It also demonstrates how quickly the rules of honor can collapse when power is placed above justice."
  },
  "got/chronicle/wildfire-on-the-blackwater": {
    "section": "Chronicle",
    "description": "The Battle of the Blackwater becomes one of the defining battles for control of King’s Landing. Tyrion’s use of wildfire helps destroy much of the attacking fleet, while the defenders struggle to keep the city from falling. The battle proves that strategy, preparation and political alliances can matter as much as raw numbers."
  },
  "got/chronicle/the-north-remembers": {
    "section": "Chronicle",
    "description": "The North continues to resist Lannister control even after Robb Stark’s campaign is broken. The phrase captures the idea that political defeat does not automatically erase loyalty or memory. Northern resistance later becomes part of the larger effort to restore the Stark family and reclaim Winterfell."
  },
  "got/chronicle/a-queen-crosses-the-sea": {
    "section": "Chronicle",
    "description": "Daenerys’s arrival in Westeros marks the moment her long exile finally turns into a direct struggle for the throne. She brings dragons, armies and a claim based on Targaryen blood, but she also discovers that Westeros is more complicated than the political world she left behind."
  },
  "got/chronicle/the-dead-walk-south": {
    "section": "Chronicle",
    "description": "The Army of the Dead finally breaks through the Wall and brings the supernatural threat directly into the Seven Kingdoms. Former enemies must reconsider old rivalries because the danger is no longer a distant legend. The event changes the war from a contest for political power into a fight for survival."
  },
  "got/chronicle/two-battles-one-bastard": {
    "section": "Chronicle",
    "description": "Jon Snow’s battles against the forces surrounding Winterfell and the larger armies of the realm highlight his transformation from an uncertain outsider into a central military leader. His victories carry a cost, but they also help restore Stark influence in the North."
  },
  "got/chronicle/the-city-burns": {
    "section": "Chronicle",
    "description": "The destruction of King’s Landing becomes one of the darkest turning points of the war. Victory is achieved through overwhelming force, but the civilian cost changes how allies and enemies view the person who ordered it. The event shows how the pursuit of absolute victory can destroy the legitimacy a ruler hopes to gain."
  },
  "got/chronicle/the-throne-melts": {
    "section": "Chronicle",
    "description": "The Iron Throne is destroyed after the final struggle for power, ending the physical symbol around which generations of rulers fought. Instead of immediately crowning another hereditary monarch, the surviving leaders choose a new political arrangement. The moment closes the cycle of conquest, rebellion and succession that defined the story."
  },
  "hotd/houses/house-targaryen": {
    "section": "House",
    "description": "House Targaryen is the ruling dynasty at the center of the Dance of the Dragons. Its greatest strength is also its greatest danger: dragons give the family unmatched military power, but the question of succession turns that power inward. The civil war shows how quickly a royal family can become its own worst enemy."
  },
  "hotd/houses/house-hightower": {
    "section": "House",
    "description": "House Hightower is one of the richest and most influential families in Westeros, based in Oldtown. The family builds power through wealth, learning, political relationships and proximity to the royal court. During the succession crisis, the Hightowers become central players in deciding who controls the throne."
  },
  "hotd/houses/house-velaryon": {
    "section": "House",
    "description": "House Velaryon is a powerful seafaring family whose wealth comes from ships, trade and control of Driftmark. Corlys Velaryon’s ambition brings the family close to the Targaryen succession, while its navy gives whichever side it supports a major strategic advantage."
  },
  "hotd/houses/house-strong": {
    "section": "House",
    "description": "House Strong of Harrenhal becomes deeply connected to the royal succession through Lyonel Strong and his sons. Their story shows how dangerous proximity to the throne can be: political success can bring influence, but it can also make a family the target of suspicion, rivalry and revenge."
  },
  "hotd/characters/rhaenyra-targaryen": {
    "section": "Character",
    "description": "Rhaenyra is named heir by her father Viserys and spends much of her life defending that decision. She grows from a rebellious young princess into a determined claimant who understands that inheritance alone may not be enough to secure power. The civil war forces her to balance family loyalty, motherhood and the brutal demands of kingship."
  },
  "hotd/characters/daemon-targaryen": {
    "section": "Character",
    "description": "Daemon is Viserys’s younger brother, a skilled warrior and one of the most unpredictable members of the Targaryen family. He is ambitious, impulsive and fiercely loyal to the people he considers his own. His relationship with Rhaenyra becomes central to the succession struggle and brings both strength and volatility to her claim."
  },
  "hotd/characters/king-viserys-i": {
    "section": "Character",
    "description": "Viserys I wants peace and stability after becoming king, and he tries to preserve his family by refusing to let old disagreements become open war. His decision to name Rhaenyra heir is historically important, but his failure to secure a universally accepted succession plan leaves the realm dangerously divided after his death."
  },
  "hotd/characters/alicent-hightower": {
    "section": "Character",
    "description": "Alicent begins as a close companion to Rhaenyra but becomes queen after marrying Viserys. As her children grow, her fears about their safety and inheritance intensify. She becomes one of the key figures behind the Green faction, believing that placing her son on the throne is necessary to protect her family."
  },
  "hotd/characters/aegon-ii-targaryen": {
    "section": "Character",
    "description": "Aegon II becomes king when the Greens crown him after Viserys’s death, despite Rhaenyra being the named heir. He is not naturally suited to the enormous responsibility placed upon him, and the war gradually transforms him into a hardened and damaged ruler. His claim becomes one of the central causes of the civil war."
  },
  "hotd/characters/aemond-targaryen": {
    "section": "Character",
    "description": "Aemond is one of the most formidable warriors of the Targaryen civil war and rides Vhagar, the largest living dragon. His desire to prove himself and his long-running rivalry with Rhaenyra’s family make him a dangerous force. His actions repeatedly turn political tension into irreversible bloodshed."
  },
  "hotd/characters/otto-hightower": {
    "section": "Character",
    "description": "Otto Hightower is a highly experienced political operator who serves as Hand of the King. He views royal succession through the lens of stability and his family’s security, and he works carefully to place Aegon on the throne. His ability to plan several moves ahead makes him one of the Greens’ most important strategists."
  },
  "hotd/characters/corlys-velaryon": {
    "section": "Character",
    "description": "Corlys Velaryon, known as the Sea Snake, builds House Velaryon into an extraordinary maritime power. His ambition leads him to seek a stronger place for his family within the royal succession. Even when his personal plans fail, his ships, wealth and experience make him one of the most valuable allies in the war."
  },
  "hotd/characters/rhaenys-targaryen": {
    "section": "Character",
    "description": "Rhaenys is a Targaryen princess who once had a serious claim to the throne but was passed over in favor of Viserys. That history gives her a unique understanding of the injustice and uncertainty surrounding succession. She becomes a powerful supporter of Rhaenyra while carrying the memory of what her own family lost."
  },
  "hotd/characters/criston-cole": {
    "section": "Character",
    "description": "Criston Cole rises from a relatively modest background to become a respected knight and eventually Lord Commander of the Kingsguard. His personal history with Rhaenyra becomes tangled with resentment, pride and politics. He ultimately becomes one of the Green faction’s most aggressive military leaders."
  },
  "hotd/dragons/syrax": {
    "section": "Dragon",
    "description": "Syrax is Rhaenyra Targaryen’s dragon and one of the clearest symbols of her royal identity. She is not known primarily as a battlefield predator like Vhagar, but her bond with Rhaenyra represents the ancient connection between Targaryen rulers and dragons. Syrax is especially important as Rhaenyra’s claim moves from ceremony into war."
  },
  "hotd/dragons/caraxes": {
    "section": "Dragon",
    "description": "Caraxes, the Blood Wyrm, is Daemon Targaryen’s fearsome red dragon. His unusual shape and aggressive nature make him an intimidating presence in battle. Caraxes is closely associated with Daemon’s reckless courage, and together they become one of the most dangerous combinations on Rhaenyra’s side."
  },
  "hotd/dragons/vhagar": {
    "section": "Dragon",
    "description": "Vhagar is the largest and oldest of the major dragons active during the Dance of the Dragons. Having survived for generations, she represents the overwhelming destructive power available to the Targaryens. Under Aemond’s control, Vhagar becomes a decisive weapon whose presence can change the balance of an entire battle."
  },
  "hotd/dragons/meleys": {
    "section": "Dragon",
    "description": "Meleys, the Red Queen, is ridden by Rhaenys Targaryen and is among the fastest and most experienced dragons of the era. Her reputation gives Rhaenys significant military power, while her fate demonstrates how costly the civil war becomes when dragons are turned against members of the same family."
  },
  "hotd/dragons/sunfyre": {
    "section": "Dragon",
    "description": "Sunfyre is Aegon II’s golden dragon, famous for his striking appearance and close association with the king. Although admired for his beauty, Sunfyre becomes involved in the brutal reality of the civil war. His injuries and survival mirror the physical and political damage suffered by Aegon himself."
  },
  "hotd/dragons/dreamfyre": {
    "section": "Dragon",
    "description": "Dreamfyre is an older dragon associated with the Targaryen royal family and ridden by Helaena. She is less prominent as a battlefield weapon than Vhagar or Caraxes, but her existence reflects the deep connection between the royal family and the dwindling population of living dragons."
  },
  "hotd/cities/king-s-landing": {
    "section": "City",
    "description": "King’s Landing is the center of royal government and the place where the succession crisis becomes a struggle for immediate control. The Red Keep, council chambers and surrounding city all become part of the political battlefield. Whoever controls the capital can claim the appearance of legitimacy, even when the succession itself is disputed."
  },
  "hotd/cities/dragonstone": {
    "section": "City",
    "description": "Dragonstone is the traditional seat of the Targaryen heir and the base from which Rhaenyra organizes her claim. Its volcanic landscape and ancient Targaryen symbolism make it more than a fortress; it is a physical statement that the old royal succession still has a living claimant."
  },
  "hotd/cities/driftmark": {
    "section": "City",
    "description": "Driftmark is the island seat of House Velaryon and a center of naval power. Its importance comes from both its location and its wealthy seafaring family. During the civil war, control of Driftmark and its fleet can influence supply routes and determine how quickly armies and messages can move."
  },
  "hotd/cities/oldtown": {
    "section": "City",
    "description": "Oldtown is one of the oldest and most important cities in Westeros, home to the Hightowers and the Citadel. Its scholars, wealth and religious institutions give it influence far beyond its walls. Because House Hightower is deeply involved in the succession crisis, Oldtown becomes an important source of political and logistical power."
  },
  "hotd/cities/harrenhal": {
    "section": "City",
    "description": "Harrenhal is a colossal but cursed-looking fortress in the Riverlands, famous for its enormous size and dark history. Its strategic position makes it valuable during war, while its association with House Strong ties it directly to the political struggle. Controlling Harrenhal means gaining a powerful base in the center of the realm."
  },
  "hotd/cities/storm-s-end": {
    "section": "City",
    "description": "Storm’s End is the ancient Baratheon stronghold and one of the most important castles in the stormlands. Its loyalty matters because the Baratheons can provide soldiers and political legitimacy to a claimant. The castle becomes especially significant when rival envoys attempt to secure support during the succession crisis."
  },
  "hotd/chronicle/an-heir-is-named": {
    "section": "Chronicle",
    "description": "Viserys I publicly names Rhaenyra as his heir after the death of his son. The decision is meant to provide certainty, but it creates a precedent that becomes increasingly difficult to defend once Viserys later has sons. Rhaenyra’s appointment is the foundation of her claim and the source of the Greens’ eventual challenge."
  },
  "hotd/chronicle/a-second-marriage-a-second-family": {
    "section": "Chronicle",
    "description": "Viserys marries Alicent Hightower and begins a second family of royal children. The marriage changes the balance of power at court because Alicent’s sons now have a direct connection to the throne. What begins as a family decision eventually becomes the central succession conflict of the realm."
  },
  "hotd/chronicle/the-king-dies": {
    "section": "Chronicle",
    "description": "Viserys’s death removes the one person capable of keeping the competing branches of his family together. The Greens move quickly to crown Aegon, while Rhaenyra’s supporters prepare to defend her inheritance. His death transforms years of tension into an open contest for the Iron Throne."
  },
  "hotd/chronicle/aegon-is-crowned": {
    "section": "Chronicle",
    "description": "Aegon II is crowned in King’s Landing by the Green faction, creating a rival monarchy while Rhaenyra is still the named heir. The speed of the coronation is politically important because it gives the Greens control of the capital and allows them to present Aegon as the lawful king."
  },
  "hotd/chronicle/a-prince-falls-from-the-sky": {
    "section": "Chronicle",
    "description": "The death of Lucerys Velaryon after his encounter with Aemond and Vhagar turns political rivalry into personal vengeance. The loss convinces many characters that reconciliation is no longer possible. From this point, the war becomes increasingly brutal as both sides seek retaliation."
  },
  "hotd/chronicle/dragonseeds-and-desperation": {
    "section": "Chronicle",
    "description": "As the war intensifies, both sides need more dragons and riders to survive. The search for people with Targaryen blood who might bond with unclaimed dragons becomes a desperate gamble. The effort shows how the Greens and Blacks are forced to use every advantage available as their traditional royal dragons are lost."
  },
  "hotd/chronicle/the-battle-above-the-god-s-eye": {
    "section": "Chronicle",
    "description": "Daemon Targaryen and Aemond Targaryen finally meet in one of the most dramatic dragon confrontations of the war. Riding Caraxes and Vhagar, they carry a personal rivalry into the sky above the God’s Eye. The encounter is devastating for both sides and becomes a defining moment in the history of the Dance."
  },
  "hotd/chronicle/king-s-landing-falls": {
    "section": "Chronicle",
    "description": "Rhaenyra’s forces eventually take King’s Landing, giving the Blacks control of the capital and the Iron Throne. Yet capturing the city does not end the war. Political resistance, economic pressure and the continued existence of rival forces show that occupying the capital is very different from securing lasting rule."
  },
  "hotd/chronicle/the-war-turns-again": {
    "section": "Chronicle",
    "description": "The fortunes of the Greens and Blacks repeatedly reverse as dragons, armies and alliances disappear. Victories become temporary and even successful commanders struggle to maintain control. The shifting balance demonstrates how the Dance destroys the stability that both factions originally claimed they were fighting to protect."
  },
  "hotd/chronicle/a-council-ends-what-dragons-couldn-t": {
    "section": "Chronicle",
    "description": "After the greatest violence of the Dance, a political council helps bring the conflict toward an end. The settlement demonstrates an important truth of the civil war: dragons can win battles, but they cannot create lasting legitimacy or peace. Westeros must eventually return to negotiation and political compromise."
  }
};
 const STORYLINE_DETAILS={
  "got/storyline/a-king-dies-hunting": {
    "section": "Storyline",
    "description": "Robert Baratheon’s death removes the fragile protection that had kept rival ambitions under control. Ned Stark’s investigation, Cersei’s fear of exposure and the question of succession all collide in this moment. What looks like an accident becomes the opening move of the political chain that eventually tears the realm apart."
  },
  "got/storyline/the-king-s-hand-loses-his-head": {
    "section": "Storyline",
    "description": "Ned Stark’s execution changes the story from a court investigation into a continent-wide struggle. Robb’s decision to march south, Arya’s escape and Sansa’s captivity all grow out of the same shock. The event proves that even a respected lord can be sacrificed when competing claims to power become more important than law."
  },
  "got/storyline/wildfire-on-the-blackwater": {
    "section": "Storyline",
    "description": "The Blackwater is where King’s Landing nearly falls before Tyrion’s preparations help save it. The battle strengthens the Lannister position, damages Stannis’s campaign and establishes Tyrion as a serious political and military thinker. It also shows how one carefully prepared weapon can alter the outcome of a much larger attack."
  },
  "got/storyline/the-north-remembers": {
    "section": "Storyline",
    "description": "After the Stark cause suffers devastating losses, the North does not simply disappear from the story. Hidden loyalties, surviving members of House Stark and resistance movements keep the idea of independence alive. The storyline gradually turns survival into restoration, showing that political power can be lost without loyalty being forgotten."
  },
  "got/storyline/a-queen-crosses-the-sea": {
    "section": "Storyline",
    "description": "Daenerys finally brings the Targaryen struggle back to Westeros after building power across the Narrow Sea. Her dragons and armies give her a realistic path to the throne, but her arrival also creates a clash between inherited claim and the support of the people and leaders already living in Westeros."
  },
  "got/storyline/the-dead-walk-south": {
    "section": "Storyline",
    "description": "The Wall’s fall changes the scale of the entire story. The political struggle becomes secondary to humanity’s survival as the Army of the Dead moves south. Characters who spent years fighting each other are forced to cooperate, while Jon and Daenerys must convince skeptical leaders that an ancient threat is now real."
  },
  "got/storyline/two-battles-one-bastard": {
    "section": "Storyline",
    "description": "Jon Snow’s rise is tied to battles that make him increasingly important to the future of the North. His leadership earns respect, but his victories also attract attention from people who question his identity and authority. The storyline builds toward the revelation that Jon’s place in the world is far more complicated than he believed."
  },
  "got/storyline/the-city-burns": {
    "section": "Storyline",
    "description": "The fall of King’s Landing should have been the final step toward victory, but the destruction of the city changes the meaning of that victory. The surviving leaders realize that defeating an enemy is not enough if the methods used make peaceful rule impossible. Former allies begin to reconsider who should hold power."
  },
  "got/storyline/the-throne-melts": {
    "section": "Storyline",
    "description": "The destruction of the Iron Throne ends the object that motivated generations of conquest. With the symbol of absolute monarchy gone, the surviving leaders experiment with a different way of choosing a ruler. After so much violence, the future depends less on possessing a chair and more on reaching an agreement."
  },
  "hotd/storyline/an-heir-is-named": {
    "section": "Storyline",
    "description": "Rhaenyra’s appointment as heir gives Viserys’s reign a clear direction, but it also creates a promise that must survive future changes at court. The storyline follows how that declaration shapes Rhaenyra’s identity, her supporters and the expectations of the realm. Years later, everyone must decide whether the king’s word still controls the succession."
  },
  "hotd/storyline/a-second-marriage-a-second-family": {
    "section": "Storyline",
    "description": "Viserys’s marriage to Alicent creates a second branch of the royal family, and the political consequences grow with every child born from it. A king can love his family without being able to give every member a place in the line of succession. That tension eventually becomes impossible to contain."
  },
  "hotd/storyline/the-king-dies": {
    "section": "Storyline",
    "description": "Viserys’s death removes the barrier between the Green and Black factions. The speed with which the Greens act shows that the succession has been planned for years, while Rhaenyra’s absence from the capital gives them an immediate advantage. The story now shifts from family disagreement to a war in which every decision carries irreversible consequences."
  },
  "hotd/storyline/aegon-is-crowned": {
    "section": "Storyline",
    "description": "Aegon’s coronation creates a direct challenge to Rhaenyra’s inheritance and gives the Greens control of the symbols of royal authority. Once the crown is placed on his head, compromise becomes much harder because both factions can point to a crowned monarch as proof of legitimacy. The ceremony becomes a political weapon as much as a celebration."
  },
  "hotd/storyline/a-prince-falls-from-the-sky": {
    "section": "Storyline",
    "description": "Lucerys’s death is the emotional point where the conflict between the young members of the two families becomes a blood feud. Aemond’s pursuit and Vhagar’s power produce a death that neither side can easily undo. From here, grief and revenge begin driving the war as strongly as questions of inheritance."
  },
  "hotd/storyline/dragonseeds-and-desperation": {
    "section": "Storyline",
    "description": "The Blacks’ search for new dragonriders shows how quickly the war consumes the advantages that once made the Targaryens powerful. Recruiting dragonseeds expands the number of people who can influence the conflict, but it also introduces uncertainty because dragons cannot simply be treated like ordinary military equipment. The gamble becomes necessary because the old generation is disappearing."
  },
  "hotd/storyline/the-battle-above-the-god-s-eye": {
    "section": "Storyline",
    "description": "Daemon and Aemond carry years of resentment into a confrontation that represents the personal side of the Dance. Their dragons turn a family rivalry into one of the most destructive duels of the war. The tragedy is symmetrical: two powerful Targaryens destroy each other while fighting for a throne neither can truly keep."
  },
  "hotd/storyline/king-s-landing-falls": {
    "section": "Storyline",
    "description": "When Rhaenyra takes King’s Landing, the Blacks finally possess the capital they have fought to control. Yet the victory reveals a central weakness of the war: holding the throne does not guarantee obedience. Financial pressure, political opposition and continuing military threats mean that Rhaenyra inherits not a peaceful kingdom but a capital surrounded by enemies."
  },
  "hotd/storyline/the-war-turns-again": {
    "section": "Storyline",
    "description": "The Dance repeatedly changes direction as dragons die, armies switch sides and political decisions create unexpected consequences. No victory is permanent. This part of the story emphasizes exhaustion: the factions keep fighting even as the original reasons for the conflict become buried beneath grief, revenge and the need to survive."
  },
  "hotd/storyline/a-council-ends-what-dragons-couldn-t": {
    "section": "Storyline",
    "description": "The final political settlement demonstrates the limits of military power. After the deaths of so many dragons and members of the royal family, the remaining leaders need a solution that can outlast the battlefield. The council represents a return to negotiation and succession politics, proving that even a dynasty built on dragons ultimately depends on people agreeing to recognize its ruler."
  }
};
 let modal=document.querySelector('.detail-modal');
 if(!modal){
   modal=document.createElement('div'); modal.className='detail-modal'; modal.hidden=true;
   modal.innerHTML='<div class="detail-backdrop"></div><div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detailModalTitle"><button class="detail-close" type="button" aria-label="Close">×</button><div class="detail-content"></div></div>'; modal.setAttribute('aria-hidden','true');
   document.body.appendChild(modal);
 }
 const content=modal.querySelector('.detail-content');
 let detailTrigger=null;
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('detail-open');detailTrigger?.focus();detailTrigger=null;setTimeout(()=>modal.hidden=true,180);};
 const trapDetailFocus=e=>{if(e.key!=='Tab'||!modal.classList.contains('open'))return;const f=[...modal.querySelectorAll('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const cardTitle=card=>card.querySelector('h1,h2,h3,h4,.title,.name,.city-name,.dragon-name')?.textContent?.trim() || card.innerText.trim().split('\n')[0] || '';
 const pageInfo=()=>{
   const path=location.pathname.toLowerCase();
   const era=path.includes('/hotd/')?'hotd':path.includes('/got/')?'got':null;
   const page=(path.split('/').pop()||'index.html').replace(/\.html$/,'')||'index';
   return {era,page};
 };
 const escapeHTML=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
 const CHARACTER_PROFILES={
  "got/characters/jon-snow":{house:"Stark",role:"King in the North",known:"Jon Snow",profile:"A reluctant leader whose identity, loyalty and sense of duty place him at the center of the struggle for the North and the war against the dead.",traits:"Duty • Loyalty • Leadership • Resilience",importance:"Jon connects the political conflict of Westeros with the existential threat beyond the Wall. His choices repeatedly force him to choose between personal loyalty and the survival of the realm."},
  "got/characters/daenerys-targaryen":{house:"Targaryen",role:"Mother of Dragons",known:"Daenerys Stormborn",profile:"An exiled princess who grows into a powerful queen, building an army and returning to Westeros with three dragons and a claim to the Iron Throne.",traits:"Ambition • Compassion • Power • Determination",importance:"Daenerys represents the return of Targaryen power and dragons. Her journey also explores how the desire to liberate others can become complicated when absolute power is within reach."},
  "got/characters/tyrion-lannister":{house:"Lannister",role:"Hand of the Queen",known:"The Imp",profile:"A politically gifted survivor who relies on intelligence, wit and an understanding of people rather than physical strength.",traits:"Intelligence • Wit • Strategy • Adaptability",importance:"Tyrion repeatedly influences major events through counsel and political strategy, proving that power in Westeros is not always won with a sword."},
  "got/characters/arya-stark":{house:"Stark",role:"No One",known:"Arya Stark",profile:"A Stark daughter whose journey through war, disguise and the Faceless Men transforms her into a highly capable survivor while preserving her fierce sense of identity.",traits:"Courage • Independence • Stealth • Determination",importance:"Arya shows the personal cost of the Stark family’s destruction and the lengths one survivor can go to reclaim agency and justice."},
  "got/characters/sansa-stark":{house:"Stark",role:"Lady of Winterfell",known:"Sansa of Winterfell",profile:"A survivor of court politics who learns patience, observation and diplomacy before becoming a confident political leader.",traits:"Patience • Diplomacy • Intelligence • Resolve",importance:"Sansa’s story turns vulnerability into political strength and demonstrates that understanding power can be as important as wielding it."},
  "got/characters/cersei-lannister":{house:"Lannister",role:"Queen of the Seven Kingdoms",known:"Cersei Lannister",profile:"A fiercely protective queen who uses political calculation, alliances and fear to defend her family and maintain her grip on power.",traits:"Ambition • Ruthlessness • Loyalty • Political Skill",importance:"Cersei embodies the dangerous relationship between family loyalty and political power, repeatedly choosing control even when the cost is isolation."},
  "got/characters/jaime-lannister":{house:"Lannister",role:"The Kingslayer",known:"The Kingslayer",profile:"A celebrated knight whose reputation hides a difficult struggle between love, loyalty, duty and the kind of man he wants to become.",traits:"Swordsmanship • Loyalty • Honor • Conflict",importance:"Jaime’s journey challenges the difference between reputation and character, gradually revealing the person beneath the Kingslayer title."},
  "got/characters/bran-stark":{house:"Stark",role:"The Three-Eyed Raven",known:"Bran the Broken",profile:"A Stark who loses the life he knew and becomes a keeper of memory and ancient knowledge with an unusual view of Westeros’s past and future.",traits:"Memory • Vision • Knowledge • Mystery",importance:"Bran represents the connection between history and destiny. His transformation makes knowledge itself a form of power."},
  "hotd/characters/rhaenyra-targaryen":{house:"Targaryen",role:"Princess / Queen claimant",known:"The Realm’s Delight",faction:"BLACK",profile:"Named heir by Viserys I, Rhaenyra spends her life defending her right to succeed her father as the realm fractures around her claim.",traits:"Determination • Defiance • Family • Authority",importance:"Rhaenyra is the central figure of the succession crisis. Her claim turns a family disagreement into a civil war that reshapes the Targaryen dynasty."},
  "hotd/characters/daemon-targaryen":{house:"Targaryen",role:"Prince / Warrior",known:"The Rogue Prince",faction:"BLACK",profile:"Viserys’s younger brother, a formidable warrior whose ambition, impulsiveness and loyalty make him one of the most unpredictable figures in the Dance.",traits:"Ambition • Combat • Impulsiveness • Loyalty",importance:"Daemon brings military strength and volatility to Rhaenyra’s side, making his personal choices closely connected to the wider succession struggle."},
  "hotd/characters/king-viserys-i":{house:"Targaryen",role:"King of the Seven Kingdoms",known:"Viserys I Targaryen",faction:"ROYAL",profile:"A king who values peace and family unity, but whose unresolved succession leaves the realm vulnerable to division after his death.",traits:"Peace • Family • Tradition • Diplomacy",importance:"Viserys’s decision to name Rhaenyra heir becomes the foundation of the conflict. His failure to secure that succession is one of the war’s defining causes."},
  "hotd/characters/alicent-hightower":{house:"Hightower",role:"Queen / Green leader",known:"Queen Alicent",faction:"GREEN",profile:"Once Rhaenyra’s close companion, Alicent becomes queen and gradually turns into one of the strongest defenders of her children’s claim to the throne.",traits:"Devotion • Fear • Politics • Resolve",importance:"Alicent transforms a personal relationship into a political divide, becoming one of the principal forces behind the Green faction."},
  "hotd/characters/aegon-ii-targaryen":{house:"Targaryen",role:"King of the Seven Kingdoms",known:"Aegon II Targaryen",faction:"GREEN",profile:"Crowned by the Greens after Viserys’s death, Aegon becomes the rival claimant whose coronation makes peaceful compromise far more difficult.",traits:"Privilege • Conflict • Survival • Power",importance:"Aegon’s coronation creates the direct rival claim at the heart of the Dance and gives the Greens a crowned monarch around whom they can rally."},
  "hotd/characters/aemond-targaryen":{house:"Targaryen",role:"Prince / Dragonrider",known:"Aemond One-Eye",faction:"GREEN",profile:"A formidable Targaryen warrior who rides Vhagar and carries a long-running rivalry with Rhaenyra’s family into the civil war.",traits:"Discipline • Pride • Combat • Vengeance",importance:"Aemond’s actions repeatedly turn political tension into personal bloodshed, making him one of the war’s most consequential military figures."},
  "hotd/characters/otto-hightower":{house:"Hightower",role:"Hand of the King",known:"Ser Otto Hightower",faction:"GREEN",profile:"An experienced political strategist who views succession through the lens of royal stability and his family’s security.",traits:"Strategy • Influence • Patience • Ambition",importance:"Otto demonstrates how decisions made inside the royal court can shape events far beyond the throne room."},
  "hotd/characters/corlys-velaryon":{house:"Velaryon",role:"Lord of the Tides",known:"The Sea Snake",faction:"BLACK",profile:"A legendary seafarer who builds House Velaryon into a major maritime power and seeks a stronger place for his family within the royal succession.",traits:"Ambition • Seamanship • Wealth • Leadership",importance:"Corlys brings ships, wealth and military reach to the Black cause, giving the succession struggle a powerful naval dimension."},
  "hotd/characters/rhaenys-targaryen":{house:"Targaryen",role:"Princess / Dragonrider",known:"The Queen Who Never Was",faction:"BLACK",profile:"A Targaryen princess who was once passed over for the throne and carries a personal understanding of the uncertainty surrounding succession.",traits:"Pride • Wisdom • Restraint • Courage",importance:"Rhaenys represents the memory of an earlier succession decision and brings experience, caution and immense symbolic weight to Rhaenyra’s cause."},
  "hotd/characters/criston-cole":{house:"Cole",role:"Lord Commander of the Kingsguard",known:"Ser Criston Cole",faction:"GREEN",profile:"A skilled knight whose personal history with Rhaenyra becomes tangled with resentment, pride and political allegiance.",traits:"Swordsmanship • Pride • Loyalty • Resentment",importance:"Criston shows how personal conflict can become political fuel, eventually turning a private grievance into a major military commitment."}
};
const CHARACTER_RELATIONS={
 "got/characters/jon-snow":[['Arya Stark','Character','got/characters.html#arya-stark'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['Rhaegal','Dragon','got/dragons.html#rhaegal'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/daenerys-targaryen":[['Jon Snow','Character','got/characters.html#jon-snow'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Drogon','Dragon','got/dragons.html#drogon'],['Rhaegal','Dragon','got/dragons.html#rhaegal'],['Viserion','Dragon','got/dragons.html#viserion'],['House Targaryen','House','got/houses.html#targaryen'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/tyrion-lannister":[['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Jaime Lannister','Character','got/characters.html#jaime-lannister'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['Jon Snow','Character','got/characters.html#jon-snow'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/arya-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/sansa-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Arya Stark','Character','got/characters.html#arya-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Petyr Baelish','Character','got/characters.html#petyr-baelish'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/cersei-lannister":[['Jaime Lannister','Character','got/characters.html#jaime-lannister'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/jaime-lannister":[['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Brienne of Tarth','Character','got/characters.html#brienne-of-tarth'],['Jon Snow','Character','got/characters.html#jon-snow'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/bran-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Arya Stark','Character','got/characters.html#arya-stark'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Theon Greyjoy','Character','got/characters.html#theon-greyjoy'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "hotd/characters/rhaenyra-targaryen":[['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Jacaerys Velaryon','Character','characters.html#jacaerys-velaryon'],['Rhaenys Targaryen','Character','characters.html#rhaenys-targaryen'],['Syrax','Dragon','dragons.html#syrax'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/daemon-targaryen":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Corlys Velaryon','Character','characters.html#corlys-velaryon'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Caraxes','Dragon','dragons.html#caraxes'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/king-viserys-i":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['House Targaryen','House','houses.html#targaryen'],['King’s Landing','Location','cities.html#kings-landing']],
 "hotd/characters/alicent-hightower":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Helaena Targaryen','Character','characters.html#helaena-targaryen'],['House Hightower','House','houses.html#hightower'],['Oldtown','Location','cities.html#oldtown']],
 "hotd/characters/aegon-ii-targaryen":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Helaena Targaryen','Character','characters.html#helaena-targaryen'],['Sunfyre','Dragon','dragons.html#sunfyre'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/aemond-targaryen":[['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Lucerys Velaryon','Character','characters.html#lucerys-velaryon'],['Vhagar','Dragon','dragons.html#vhagar'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/otto-hightower":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['House Hightower','House','houses.html#hightower'],['Oldtown','Location','cities.html#oldtown']],
 "hotd/characters/corlys-velaryon":[['Rhaenys Targaryen','Character','characters.html#rhaenys-targaryen'],['Laena Velaryon','Character','characters.html#laena-velaryon'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Jacaerys Velaryon','Character','characters.html#jacaerys-velaryon'],['House Velaryon','House','houses.html#velaryon'],['Driftmark','Location','cities.html#driftmark']],
 "hotd/characters/rhaenys-targaryen":[['Corlys Velaryon','Character','characters.html#corlys-velaryon'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Laena Velaryon','Character','characters.html#laena-velaryon'],['House Velaryon','House','houses.html#velaryon'],['Meleys','Dragon','dragons.html#meleys'],['Driftmark','Location','cities.html#driftmark']],
 "hotd/characters/criston-cole":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['House Hightower','House','houses.html#hightower'],['King’s Landing','Location','cities.html#kings-landing']]
};
const CHARACTER_RELATIONSHIP_TYPES={
 'jon snow|arya stark':'SIBLINGS','jon snow|sansa stark':'SIBLINGS','jon snow|bran stark':'SIBLINGS','jon snow|daenerys targaryen':'ALLIES • ROMANCE',
 'daenerys targaryen|jon snow':'ALLIES • ROMANCE','daenerys targaryen|tyrion lannister':'ADVISOR • ALLY','daenerys targaryen|cersei lannister':'RIVALS',
 'tyrion lannister|cersei lannister':'SIBLINGS • RIVALS','tyrion lannister|jaime lannister':'SIBLINGS','tyrion lannister|daenerys targaryen':'ADVISOR • ALLY','tyrion lannister|jon snow':'ALLIES',
 'arya stark|sansa stark':'SIBLINGS','arya stark|bran stark':'SIBLINGS','sansa stark|bran stark':'SIBLINGS','sansa stark|jon snow':'SIBLINGS',
 'cersei lannister|jaime lannister':'TWINS • LOVERS','jaime lannister|cersei lannister':'TWINS • LOVERS','jaime lannister|tyrion lannister':'SIBLINGS',
 'bran stark|jon snow':'SIBLINGS','bran stark|arya stark':'SIBLINGS',
 'rhaenyra targaryen|daemon targaryen':'SPOUSES • ALLIES','rhaenyra targaryen|king viserys i':'FATHER • DAUGHTER','rhaenyra targaryen|alicent hightower':'FORMER FRIENDS • RIVALS','rhaenyra targaryen|aegon ii targaryen':'RIVAL CLAIMANTS','rhaenyra targaryen|aemond targaryen':'FAMILY • RIVALS',
 'daemon targaryen|king viserys i':'BROTHERS','daemon targaryen|rhaenyra targaryen':'SPOUSES • ALLIES','daemon targaryen|aemond targaryen':'FAMILY • ALLIES',
 'king viserys i|rhaenyra targaryen':'FATHER • DAUGHTER','king viserys i|daemon targaryen':'BROTHERS','king viserys i|alicent hightower':'SPOUSES',
 'alicent hightower|rhaenyra targaryen':'FORMER FRIENDS • RIVALS','alicent hightower|aegon ii targaryen':'MOTHER • SON','alicent hightower|otto hightower':'FATHER • DAUGHTER',
 'aegon ii targaryen|aemond targaryen':'BROTHERS','aegon ii targaryen|otto hightower':'GRANDFATHER • GRANDSON','aemond targaryen|rhaenyra targaryen':'FAMILY • RIVALS',
 'otto hightower|aegon ii targaryen':'GRANDFATHER • GRANDSON','otto hightower|rhaenyra targaryen':'POLITICAL RIVALS','otto hightower|alicent hightower':'FATHER • DAUGHTER',
 'corlys velaryon|rhaenys targaryen':'SPOUSES','corlys velaryon|rhaenyra targaryen':'ALLIES','rhaenys targaryen|rhaenyra targaryen':'FAMILY • ALLIES',
 'criston cole|alicent hightower':'ALLIES','criston cole|rhaenyra targaryen':'FORMER LOVERS • RIVALS','criston cole|daemon targaryen':'RIVALS','criston cole|aegon ii targaryen':'ALLIES'
};
const relationshipType=(from,to)=>{
 const a=normalize(from),b=normalize(to);
 return CHARACTER_RELATIONSHIP_TYPES[`${a}|${b}`] || CHARACTER_RELATIONSHIP_TYPES[`${b}|${a}`] || 'CONNECTED';
};
const characterRelationshipsHTML=(key,currentEra)=>{
 const eraPrefix=currentEra==='hotd'?'hotd':'got';
 const items=(CHARACTER_RELATIONS[key]||[]).filter(([name,type])=>type==='Character' && !!CHARACTER_PROFILES[`${eraPrefix}/characters/${normalize(name)}`]);
 if(!items.length)return '';
 const slug=s=>normalize(s);
 const file='characters.html';
 return `<section class="detail-section character-relationships-section"><div class="character-relationships-head"><div><span class="detail-section-label">Character Network</span><h3>Character Relationships</h3></div><span class="character-relationships-count">${items.length} CONNECTION${items.length===1?'':'S'}</span></div><p class="character-relationships-intro">Key personal, family, political, and rival connections for ${escapeHTML(key.split('/').pop().replace(/-/g,' '))}.</p><div class="character-relationships-grid">${items.map(([name])=>{const target=`character-${slug(name)}`;const href=`${file}?open=${encodeURIComponent(target)}`;return `<a class="character-relationship-card" href="${escapeHTML(href)}"><span class="character-relationship-type">${escapeHTML(relationshipType(key.split('/').pop(),name))}</span><b>${escapeHTML(name)}</b><em>VIEW CHARACTER →</em></a>`;}).join('')}</div></section>`;
};
const relatedHTML=(key,currentEra)=>{
 const allItems=CHARACTER_RELATIONS[key]||[];
 if(!allItems.length)return '';
 const slug=s=>normalize(s);
 const relationshipNames=new Set(allItems.filter(([,type])=>type==='Character').map(([name])=>slug(name)));
 const items=allItems.filter(([name,type])=>type!=='Character' || !relationshipNames.has(slug(name)));
 if(!items.length)return '';
 const localUrl=(name,type)=>{
   const era=currentEra==='hotd'?'hotd':'got';
   const file=type==='Character'?'characters.html':type==='House'?'houses.html':type==='Dragon'?'dragons.html':type==='Location'?'cities.html':'';
   if(!file)return '#';
   const prefix=type==='Character'?'character-':type==='House'?'house-house-':type==='Dragon'?'dragon-':'city-';
   const targetId=`${prefix}${slug(name)}`;
   return `${file}?open=${encodeURIComponent(targetId)}`;
 };
 const validItems=items.filter(([name,type])=>{
   if(type!=='Character') return true;
   return !!CHARACTER_PROFILES[`${currentEra==='hotd'?'hotd':'got'}/characters/${slug(name)}`];
 });
 if(!validItems.length)return '';
 return `<section class="detail-section related-content-section"><h3>Related Content</h3><p class="related-content-intro">Explore houses, dragons, places, and other archive connections to ${escapeHTML(key.split('/').pop().replace(/-/g,' '))}. Character-to-character connections are shown separately above.</p><div class="related-content-grid">${validItems.map(([name,type])=>`<a class="related-content-card" href="${escapeHTML(localUrl(name,type))}"><span>${escapeHTML(type)}</span><b>${escapeHTML(name)}</b><em>EXPLORE →</em></a>`).join('')}</div></section>`;
};
const makeCharacterModal=(profile,detail,title,clone,img,section,era)=>{
  const role=profile?.role || clone.querySelector('.char-title')?.textContent?.trim() || 'Character';
  const house=profile?.house || 'Westeros';
  const faction=profile?.faction || '';
  const description=profile?.profile || detail?.description || '';
  const traits=profile?.traits || 'Leadership • Loyalty • Strategy • Survival';
  const importance=profile?.importance || description;
  const imageHTML=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||title)}" loading="lazy" decoding="async"></div>` : '';
  return `<div class="detail-layout character-detail-layout"><div class="detail-media-column character-detail-media">${imageHTML}<div class="detail-media-caption"><span>${escapeHTML(house)}</span><b>CHARACTER ARCHIVE</b></div></div><div class="detail-info character-detail-info"><div class="character-detail-scroll"><div class="character-profile-head"><span class="detail-kicker">${escapeHTML(section)}${faction?` · ${escapeHTML(faction)}`:''}</span><h2>${escapeHTML(title)}</h2><p class="character-role">${escapeHTML(role)}</p><div class="detail-divider"></div><div class="character-meta"><div><b>HOUSE</b><span>${escapeHTML(house)}</span></div><div><b>KNOWN AS</b><span>${escapeHTML(profile?.known||title)}</span></div><div><b>ROLE</b><span>${escapeHTML(role)}</span></div>${faction?`<div><b>FACTION</b><span>${escapeHTML(faction)}</span></div>`:''}</div></div><div class="character-detail-sections"><section class="detail-section"><h3>Biography</h3><p>${escapeHTML(description)}</p></section><section class="detail-section"><h3>Key Characteristics</h3><p>${escapeHTML(traits)}</p></section><section class="detail-section"><h3>Story Importance</h3><p>${escapeHTML(importance)}</p></section>${characterRelationshipsHTML(`${era}/characters/${normalize(title)}`,era)}${relatedHTML(`${era}/characters/${normalize(title)}`,era)}</div></div></div></div>`;
};
const makeSections=(detail,page,title,clone)=>{
   const raw=detail?.description || clone.querySelector('p,.lore,.city-card-content')?.innerText?.trim() || clone.innerText.trim();
   const parts=raw.split(/(?<=[.!?])\s+/).filter(Boolean);
   let story=parts.slice(0, Math.max(2, Math.ceil(parts.length*.55))).join(' ');
   let impact=parts.slice(Math.max(2, Math.ceil(parts.length*.55))).join(' ') || raw;
   let labels=['The Story','Why It Matters'];
   if(page==='chronicle'){labels=['What Happened','Historical Impact'];}
   if(page==='storyline'){labels=['Story Arc','Turning Point'];}
   if(detail?.why){impact=detail.why;}
   const extra=detail?.takeaway || '';
   return `<section class="detail-section"><h3>${labels[0]}</h3><p>${escapeHTML(story)}</p></section><section class="detail-section"><h3>${labels[1]}</h3><p>${escapeHTML(impact)}</p></section>${extra?`<section class="detail-section detail-takeaway"><h3>Remember This</h3><p>${escapeHTML(extra)}</p></section>`:''}`;
 };
 const openCard=card=>{
   detailTrigger=card;
   const {era,page}=pageInfo();
   const title=cardTitle(card);
   const detail=DETAILS[`${era}/${page}/${normalize(title)}`] || STORYLINE_DETAILS[`${era}/${page}/${normalize(title)}`];
   const clone=card.cloneNode(true);
   clone.removeAttribute('data-search-item');
   clone.classList.remove('tilt-card','flip-card','flipped','unified-card');
   clone.querySelectorAll('[data-profile],.profile-trigger,.flip-hint,.card-detail-hint').forEach(x=>x.remove());
   clone.querySelectorAll('.tilt-card-inner').forEach(x=>x.style.transform='none');
   const img=clone.querySelector('img');
   const finalTitle=detail ? title : (clone.querySelector('h1,h2,h3,h4')?.textContent?.trim() || title);
   const section=detail?.section || (page==='chronicle'?'Chronicle':page==='storyline'?'Storyline':'Westeros Archive');
   const image=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||finalTitle)}" loading="lazy" decoding="async"></div>` : '';
   const characterProfile=page==='characters' ? CHARACTER_PROFILES[`${era}/${page}/${normalize(title)}`] : null;
   content.innerHTML=characterProfile ? makeCharacterModal(characterProfile,detail,finalTitle,clone,img,section,era) : `<div class="detail-layout"><div class="detail-media-column">${image}<div class="detail-media-caption"><span>${escapeHTML(section)}</span><b>ARCHIVE ENTRY</b></div></div><div class="detail-info"><span class="detail-kicker">${escapeHTML(section)}</span><h2 id="detailModalTitle">${escapeHTML(finalTitle)}</h2><div class="detail-divider"></div><div class="detail-copy">${makeSections(detail,page,finalTitle,clone)}</div></div></div>`;
   const heading=content.querySelector('h2,h1,h3'); if(heading){heading.id='detailModalTitle';modal.querySelector('.detail-dialog')?.setAttribute('aria-labelledby','detailModalTitle');}
   // Reset every relevant scroll container so each archive entry opens from the top.
   content.scrollTop=0;
   modal.scrollTop=0;
   const dialog=modal.querySelector('.detail-dialog');
   if(dialog) dialog.scrollTop=0;
   modal.hidden=false; modal.setAttribute('aria-hidden','false');
   document.body.classList.add('detail-open');
   requestAnimationFrame(()=>{ content.scrollTop=0; modal.scrollTop=0; if(dialog) dialog.scrollTop=0; modal.classList.add('open'); modal.querySelector('.detail-close')?.focus(); });
 };
 window.__westerosOpenCityCard=openCard;
 cards.forEach(card=>card.addEventListener('click',e=>{
   if(e.target.closest('a,button'))return;
   e.preventDefault(); e.stopPropagation(); openCard(card);
 }));
 modal.querySelector('.detail-close')?.addEventListener('click',close);
 modal.querySelector('.detail-backdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();trapDetailFocus(e);});
 const openTargetById=id=>{
   if(!id)return false;
   const clean=decodeURIComponent(String(id).replace(/^#/,'')).toLowerCase();
   const target=document.getElementById(clean);
   if(target && cards.includes(target)){openCard(target);return true;}
   const wanted=clean.replace(/^[^-]+-/,'');
   const fallback=cards.find(c=>normalize(c.id||'')===clean || normalize(cardTitle(c))===wanted);
   if(fallback){openCard(fallback);return true;}
   return false;
 };
 const hash=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
 const openHashTarget=()=>{
   const raw=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
   if(!raw)return false;
   const targetId=raw;
   const byId=document.getElementById(targetId);
   if(byId && cards.includes(byId)){
     openCard(byId);
     return true;
   }
   const wanted=raw.replace(/^[^-]+-/,'');
   const target=cards.find(c=>normalize(cardTitle(c))===wanted || normalize(c.innerText).includes(wanted));
   if(target){openCard(target);return true;}
   return false;
 };
 if(location.hash)setTimeout(openHashTarget,120);
 window.addEventListener('hashchange',()=>setTimeout(openHashTarget,40));
 document.addEventListener('click',e=>{
   const link=e.target.closest('.related-content-card');
   if(!link)return;
   const href=link.getAttribute('href');
   if(!href || href==='#')return;
   const url=new URL(href,location.href);
   const id=decodeURIComponent(url.hash.replace(/^#/,'')).toLowerCase();
   if(!id)return;

   // Same-page related content: open the requested card immediately.
   if(url.pathname===location.pathname){
     const target=document.getElementById(id);
     if(target && cards.includes(target)){
       e.preventDefault();
       history.pushState(null,'',url.hash);
       openCard(target);
     }
     return;
   }

   // Cross-page related content: save the exact destination, stop the browser's
   // default anchor navigation, then navigate explicitly. This guarantees the
   // destination page has the pending target before it reloads.
   e.preventDefault();
   url.searchParams.set('open',id);
   window.location.assign(url.href);
 });

 // Restore a cross-page Related Content click after navigation. Works for
 // Character, House, Dragon and Location cards.
 const openPendingRelatedTarget=()=>{
   let pending=null;
   try{pending=JSON.parse(sessionStorage.getItem('westerosRelatedTarget')||'null');}catch(err){}
   if(!pending || !pending.path || !pending.hash)return;
   const samePath=pending.path===location.pathname || pending.path.replace(/\/$/,'')===location.pathname.replace(/\/$/,'');
   if(!samePath)return;
   try{sessionStorage.removeItem('westerosRelatedTarget');}catch(err){}
   const id=decodeURIComponent(pending.hash.replace(/^#/,'')).toLowerCase();
   const target=document.getElementById(id);
   if(target && cards.includes(target)){
     setTimeout(()=>openCard(target),60);
     return;
   }
   // Fallback for file:// paths or minor ID differences.
   const wanted=id.replace(/^[^-]+-/,'');
   const fallback=cards.find(c=>normalize(c.id||'')===id || normalize(cardTitle(c))===wanted);
   if(fallback)setTimeout(()=>openCard(fallback),60);
 };
 setTimeout(()=>{
   const openParam=new URLSearchParams(location.search).get('open');
   if(openParam && openTargetById(openParam)){
     const clean=new URL(location.href); clean.searchParams.delete('open');
     history.replaceState(null,'',clean.pathname+clean.hash);
   }
   openPendingRelatedTarget();
 },120);
}


/* Main-home section chooser: every section first asks which era to open. */
document.addEventListener('DOMContentLoaded', function(){
  const chooser=document.getElementById('eraChooser');
  if(!chooser) return;
  const got=document.getElementById('chooseGot');
  const hotd=document.getElementById('chooseHotd');
  const close=()=>{chooser.hidden=true;chooser.setAttribute('aria-hidden','true');document.body.classList.remove('chooser-open');};
  document.querySelectorAll('[data-era-section]').forEach(link=>{
    link.addEventListener('click',function(e){
      e.preventDefault();
      const section=this.dataset.eraSection;
      got.href='got/'+section+'.html';
      hotd.href='hotd/'+section+'.html';
      chooser.hidden=false;chooser.setAttribute('aria-hidden','false');document.body.classList.add('chooser-open');
    });
  });
  chooser.querySelectorAll('[data-close-era-chooser]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!chooser.hidden) close();});
});


/* Interactive Westeros & Essos Map */
function initWesterosMap(){
 const root=document.querySelector('[data-westeros-map]');
 if(!root)return;
 const mapArt=root.querySelector('[data-map-art]');
 const info=root.querySelector('[data-map-info]');
 const nameEl=root.querySelector('[data-map-name]');
 const regionEl=root.querySelector('[data-map-region]');
 const descEl=root.querySelector('[data-map-description]');
 const realmLabel=root.querySelector('[data-map-realm-label]');
 const regionLabel=root.querySelector('[data-map-region-label]');
 const link=root.querySelector('[data-map-link]');
 const imageWrap=root.querySelector('[data-map-image-wrap]');
 const imageEl=root.querySelector('[data-map-image]');
 const archiveStatus=root.querySelector('[data-map-archive-status]');
 const buttons=[...root.querySelectorAll('[data-map-realm]')];
 let activeRealm='westeros';
 let selected=null;
 const locations={
  westeros:[
   {id:'castle-black',name:'Castle Black',region:'The Wall',x:48,y:10,dx:5,dy:-3,description:'A principal fortress of the Night’s Watch beneath the Wall, guarding the northern frontier.'},
   {id:'last-hearth',name:'Last Hearth',region:'The North',x:57,y:14,dx:5,dy:-3,description:'The northern seat of House Umber, near the edge of the lands beneath the Wall.'},
   {id:'karhold',name:'Karhold',region:'The North',x:58,y:20,dx:5,dy:5,description:'The ancient castle of House Karstark in the northern interior.'},
   {id:'winterfell',name:'Winterfell',region:'The North',x:44,y:24,dx:6,dy:-3,description:'The ancient Stark seat and political heart of the North.',card:'#city-winterfell'},
   {id:'bear-island',name:'Bear Island',region:'The North',x:28,y:25,dx:5,dy:-3,description:'The rugged island home of House Mormont in the Sunset Sea.'},
   {id:'the-dreadfort',name:'The Dreadfort',region:'The North',x:64,y:26,dx:5,dy:-3,description:'The grim Bolton stronghold in the northern interior.'},
   {id:'deepwood-motte',name:'Deepwood Motte',region:'The North',x:32,y:29,dx:5,dy:5,description:'A wooded stronghold on the western coast of the North.'},
   {id:'barrowton',name:'Barrowton',region:'The North',x:48,y:31,dx:5,dy:5,description:'One of the North’s largest settlements, surrounded by the ancient barrows.'},
   {id:'torrhens-square',name:"Torrhen's Square",region:'The North',x:39,y:33,dx:5,dy:-3,description:'A fortified northern settlement on the shores of a great lake.'},
   {id:'white-harbor',name:'White Harbor',region:'The North',x:59,y:39,dx:5,dy:5,description:'The North’s great port and seat of House Manderly.'},
   {id:'moat-cailin',name:'Moat Cailin',region:'The Neck',x:49,y:37,dx:-8,dy:-3,description:'A ruined fortress controlling the key causeway between the North and the south.'},
   {id:'pyke',name:'Pyke',region:'The Iron Islands',x:16,y:51,dx:4,dy:-3,description:'The Greyjoy seat on the storm-lashed Iron Islands.'},
   {id:'lordsport',name:'Lordsport',region:'The Iron Islands',x:18,y:48,dx:5,dy:5,description:'The principal harbor settlement of Pyke and the Greyjoy domain.'},
   {id:'old-wyk',name:'Old Wyk',region:'The Iron Islands',x:11,y:46,dx:5,dy:-3,description:'The sacred heart of the ironborn and site of ancient kingsmoots.'},
   {id:'harlaw',name:'Harlaw',region:'The Iron Islands',x:21,y:46,dx:5,dy:-3,description:'A major island of the Iron Islands and seat of powerful House Harlaw.'},
   {id:'seagard',name:'Seagard',region:'The Riverlands',x:37,y:45,dx:5,dy:-3,description:'A fortified port on the western coast of the Riverlands.'},
   {id:'riverrun',name:'Riverrun',region:'The Riverlands',x:49,y:49,dx:5,dy:-3,description:'The Tully seat at the meeting of the Tumblestone and Red Fork.',card:'#city-riverrun'},
   {id:'harrenhal',name:'Harrenhal',region:'The Riverlands',x:56,y:51,dx:5,dy:6,description:'A vast ruined castle whose position makes it one of the Riverlands’ great prizes.',card:'#city-harrenhal'},
   {id:'darry',name:'Darry',region:'The Riverlands',x:59,y:57,dx:5,dy:-3,description:'The ancient seat of House Darry on the kingsroad.'},
   {id:'saltpans',name:'Saltpans',region:'The Riverlands',x:64,y:46,dx:5,dy:-3,description:'A small but strategically placed river port on the coast.'},
   {id:'maidenpool',name:'Maidenpool',region:'The Crownlands',x:67,y:51,dx:5,dy:-3,description:'A fortified harbor on the Bay of Crabs and an important Crownlands port.'},
   {id:'stoney-sept',name:'Stoney Sept',region:'The Riverlands',x:48,y:62,dx:5,dy:5,description:'A market town and sept at an important crossroads in the Riverlands.'},
   {id:'the-eyrie',name:'The Eyrie',region:'The Vale',x:73,y:49,dx:6,dy:-3,description:'The Arryn seat high in the Mountains of the Moon.',card:'#city-the-eyrie'},
   {id:'gulltown',name:'Gulltown',region:'The Vale',x:81,y:43,dx:6,dy:-3,description:'The Vale’s great harbor and a major eastern trading port.'},
   {id:'runestone',name:'Runestone',region:'The Vale',x:83,y:52,dx:5,dy:5,description:'The ancient Royce stronghold on the eastern coast of the Vale.'},
   {id:'casterly-rock',name:'Casterly Rock',region:'The Westerlands',x:20,y:66,dx:4,dy:-3,description:'The colossal Lannister stronghold overlooking the Sunset Sea.'},
   {id:'lannisport',name:'Lannisport',region:'The Westerlands',x:23,y:70,dx:5,dy:5,description:'A wealthy western port city at the foot of Casterly Rock.'},
   {id:'golden-tooth',name:'The Golden Tooth',region:'The Westerlands',x:31,y:61,dx:5,dy:-3,description:'A heavily fortified mountain pass controlling the eastern approach to the Westerlands.'},
   {id:'kayce',name:'Kayce',region:'The Westerlands',x:11,y:73,dx:5,dy:-3,description:'A western coastal stronghold in the Westerlands.'},
   {id:'crakehall',name:'Crakehall',region:'The Westerlands',x:25,y:78,dx:5,dy:5,description:'The ancestral seat of House Crakehall in the western Reachlands.'},
   {id:'kings-landing',name:"King's Landing",region:'The Crownlands',x:65,y:69,dx:6,dy:5,description:'The capital of the Seven Kingdoms and seat of the Iron Throne.',card:'#city-king-s-landing'},
   {id:'rosby',name:'Rosby',region:'The Crownlands',x:67,y:60,dx:5,dy:-3,description:'A Crownlands castle and settlement close to the capital.'},
   {id:'stokeworth',name:'Stokeworth',region:'The Crownlands',x:70,y:64,dx:5,dy:5,description:'The seat of House Stokeworth on the roads north of King’s Landing.'},
   {id:'duskendale',name:'Duskendale',region:'The Crownlands',x:72,y:59,dx:5,dy:-3,description:'An old walled port city on the eastern coast of the Crownlands.'},
   {id:'dragonstone',name:'Dragonstone',region:'Blackwater Bay',x:79,y:70,dx:6,dy:5,description:'The volcanic Targaryen stronghold at the mouth of Blackwater Bay.',card:'#city-dragonstone'},
   {id:'driftmark',name:'Driftmark',region:'Blackwater Bay',x:84,y:73,dx:6,dy:5,description:'The island seat of House Velaryon and center of its maritime power.',card:'#city-driftmark'},
   {id:'highgarden',name:'Highgarden',region:'The Reach',x:34,y:77,dx:5,dy:5,description:'The fertile Tyrell seat at the heart of the Reach.',card:'#city-highgarden'},
   {id:'bitterbridge',name:'Bitterbridge',region:'The Reach',x:45,y:72,dx:5,dy:-3,description:'A strategically important crossing over the Mander.'},
   {id:'ashford',name:'Ashford',region:'The Reach',x:41,y:80,dx:5,dy:5,description:'A market town and castle on the roads of the southern Reach.'},
   {id:'horn-hill',name:'Horn Hill',region:'The Reach',x:39,y:85,dx:5,dy:-3,description:'The seat of House Tarly in the southern Reach.'},
   {id:'tumbleton',name:'Tumbleton',region:'The Reach',x:56,y:75,dx:5,dy:5,description:'A river town on the Mander and a key crossing between the Reach and Crownlands.'},
   {id:'oldtown',name:'Oldtown',region:'The Reach',x:30,y:88,dx:5,dy:5,description:'One of Westeros’s oldest cities, home to the Citadel and Hightower.',card:'#city-oldtown'},
   {id:'the-arbor',name:'The Arbor',region:'The Reach',x:22,y:94,dx:5,dy:-3,description:'The wealthy island domain of House Redwyne, famed for its vineyards and fleet.'},
   {id:'storm-s-end',name:"Storm's End",region:'The Stormlands',x:61,y:82,dx:6,dy:5,description:'The ancient Baratheon fortress on the stormy eastern coast.',card:'#city-storm-s-end'},
   {id:'rain-house',name:'Rain House',region:'The Stormlands',x:69,y:87,dx:5,dy:5,description:'The coastal seat of House Wylde on Shipbreaker Bay.'},
   {id:'nightsong',name:'Nightsong',region:'The Stormlands',x:49,y:85,dx:5,dy:-3,description:'A fortified marcher castle guarding the roads toward Dorne.'},
   {id:'tarth',name:'Tarth',region:'The Stormlands',x:79,y:85,dx:5,dy:5,description:'The Sapphire Isle, home of House Tarth.'},
   {id:'sunspear',name:'Sunspear',region:'Dorne',x:69,y:94,dx:6,dy:-3,description:'The Martell seat and capital of Dorne.',card:'#city-sunspear'},
   {id:'plankytown',name:'Planky Town',region:'Dorne',x:76,y:96,dx:-10,dy:-3,description:'A floating river port at the mouth of the Greenblood.'},
   {id:'yronwood',name:'Yronwood',region:'Dorne',x:53,y:93,dx:-5,dy:-3,description:'A powerful Dornish stronghold guarding the Boneway.'},
   {id:'starfall',name:'Starfall',region:'Dorne',x:39,y:94,dx:5,dy:5,description:'The ancestral seat of House Dayne in western Dorne.'},
   {id:'hellholt',name:'Hellholt',region:'Dorne',x:58,y:96,dx:5,dy:5,description:'A desert stronghold in eastern Dorne.'}
  ],



  essos:[
   {id:'braavos',name:'Braavos',region:'Free Cities',x:10,y:13,dx:5,dy:-3,description:'The great lagoon city of canals, merchants, the Iron Bank and the Titan.',card:'#city-braavos'},
   {id:'pentos',name:'Pentos',region:'Free Cities',x:8,y:25,dx:5,dy:-3,description:'A wealthy Free City on the western coast of Essos.'},
   {id:'lorath',name:'Lorath',region:'Free Cities',x:13,y:33,dx:5,dy:5,description:'An island-bound Free City east of Braavos.'},
   {id:'norvos',name:'Norvos',region:'Free Cities',x:25,y:22,dx:5,dy:-3,description:'A powerful Free City known for its bells and priesthood.'},
   {id:'qohor',name:'Qohor',region:'Free Cities',x:28,y:29,dx:5,dy:5,description:'The forest city famous for its blacksmiths and Unsullied defense.'},
   {id:'myr',name:'Myr',region:'Free Cities',x:16,y:49,dx:5,dy:-3,description:'A major Free City renowned for lace, lenses and craftsmanship.'},
   {id:'tyrosh',name:'Tyrosh',region:'Free Cities',x:8,y:55,dx:5,dy:5,description:'An island Free City famous for dyed hair, trade and sellswords.'},
   {id:'lys',name:'Lys',region:'Free Cities',x:15,y:68,dx:5,dy:-3,description:'A wealthy island city famed for pleasure houses and perfumes.'},
   {id:'volantis',name:'Volantis',region:'Free Cities',x:28,y:69,dx:5,dy:5,description:'The ancient Rhoynar-influenced city at the mouth of the Rhoyne.'},
   {id:'vaes-dothrak',name:'Vaes Dothrak',region:'Dothraki Sea',x:38,y:31,dx:5,dy:-3,description:'The sacred city of the Dothraki, set beside the Mother of Mountains.'},
   {id:'mantarys',name:'Mantarys',region:'Slaver’s Bay',x:43,y:60,dx:5,dy:-3,description:'A ruined and feared city west of the ruins of Old Ghis.'},
   {id:'old-ghis',name:'Old Ghis',region:'Slaver’s Bay',x:48,y:62,dx:5,dy:5,description:'The ancient Ghiscari heartland, remembered through ruins and imperial history.'},
   {id:'meereen',name:'Meereen',region:'Slaver’s Bay',x:56,y:61,dx:5,dy:-3,description:'The largest of the great slave cities, built around the Great Pyramid.',card:'#city-meereen'},
   {id:'yunkai',name:'Yunkai',region:'Slaver’s Bay',x:62,y:64,dx:5,dy:-3,description:'The Yellow City of Slaver’s Bay, famed for its wealth and slave markets.'},
   {id:'astapor',name:'Astapor',region:'Slaver’s Bay',x:69,y:66,dx:5,dy:5,description:'The Red City, known for its Unsullied and brick-built pyramids.'},
   {id:'qarth',name:'Qarth',region:'Jade Sea',x:78,y:72,dx:5,dy:5,description:'A wealthy gateway city between the Red Waste and the Jade Sea.'},
   {id:'vaes-tolorro',name:'Vaes Tolorro',region:'Red Waste',x:64,y:54,dx:5,dy:-3,description:'A ruined city encountered on the long road through the Red Waste.'},
   {id:'valyria',name:'Valyria',region:'Smoking Sea',x:66,y:82,dx:5,dy:5,description:'The shattered heart of the old Valyrian Freehold, surrounded by the Smoking Sea.'},
   {id:'hesh',name:'Hesh',region:'Yi Ti',x:72,y:17,dx:5,dy:-3,description:'A major city in the distant lands east of the Bone Mountains.'},
   {id:'yi-ti',name:'Yi Ti',region:'Far East',x:84,y:12,dx:5,dy:-3,description:'The vast and ancient civilization of the far eastern world.'},
   {id:'leng',name:'Leng',region:'Jade Sea',x:90,y:20,dx:5,dy:5,description:'A large island kingdom in the eastern Jade Sea.'},
   {id:'ibben',name:'Ibben',region:'Shivering Sea',x:49,y:7,dx:5,dy:-3,description:'A cold northern island realm known for its seafarers and whalers.'}
  ]
 };
 function imageFor(realm){const base=(document.body.classList.contains('westeros-home')?'assets/':'../assets/');return realm==='essos'?base+'essos-map-realistic.webp':base+'westeros-map-realistic.webp';}
 function labelFor(realm){return realm==='essos'?'ESSOS':'WESTEROS';}
 function markerMarkup(data,realm){
   const aria=realm==='essos'?'Interactive location markers on a realistic map of Essos':'Interactive location markers on a realistic map of Westeros';
   return `<svg class="map-marker-layer" viewBox="0 0 100 100" aria-label="${aria}"><defs><filter id="markerGlow"><feGaussianBlur stdDeviation=".7" result="b"></feGaussianBlur><feMerge><feMergeNode in="b"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>${data.map(loc=>`<g class="map-marker ${loc.kind||'location'}" data-map-id="${escapeHTML(loc.id)}" tabindex="0" role="button" aria-label="${escapeHTML(loc.name)}, ${escapeHTML(loc.region)}" transform="translate(${loc.x} ${loc.y})"><circle class="map-marker-pulse" r="1.8"></circle><circle class="map-marker-ring" r="2.3"></circle><path class="map-marker-crown" d="M-1.4-.9L-.7-.1 0-1.2.7-.1 1.4-.9 1.05 1.15H-1.05Z"></path><circle class="map-marker-core" r=".72"></circle><text class="map-marker-label" x="${loc.dx}" y="${loc.dy}">${escapeHTML(loc.name)}</text></g>`).join('')}</svg>`;
 }
 function render(realm){
   activeRealm=realm;
   buttons.forEach(b=>b.classList.toggle('active',b.dataset.mapRealm===realm));
   const data=locations[realm];
   const src=imageFor(realm);
   const existingBase=mapArt.querySelector('.map-realistic-base');
   const existingImg=existingBase?.querySelector('img');
   const swapImage=()=>{
     const oldImg=mapArt.querySelector('.map-realistic-base img');
     if(oldImg){oldImg.classList.add('is-switching');}
     const img=new Image();
     img.decoding='async';
     img.onload=()=>{
       const base=mapArt.querySelector('.map-realistic-base') || (()=>{const el=document.createElement('div');el.className='map-realistic-base';mapArt.prepend(el);return el;})();
       const next=document.createElement('img');
       next.src=src;
       next.alt=`Detailed realistic terrain map of ${labelFor(realm)}`;
       next.draggable=false;
       next.decoding='async';
       base.replaceChildren(next);
     };
     img.onerror=()=>{
       if(existingImg) existingImg.classList.remove('is-switching');
     };
     img.src=src;
   };
   if(existingBase && existingImg && existingImg.getAttribute('src')===src){
     existingImg.alt=`Detailed realistic terrain map of ${labelFor(realm)}`;
   }else{
     swapImage();
   }
   mapArt.querySelector('.map-marker-layer')?.remove();
   mapArt.querySelector('[data-map-tooltip]')?.remove();
   mapArt.insertAdjacentHTML('beforeend',`${markerMarkup(data,realm)}<div class="map-tooltip" data-map-tooltip></div>`);
   mapArt.dataset.realm=realm;
   mapArt.querySelectorAll('.map-marker').forEach(marker=>{
     const loc=data.find(x=>x.id===marker.dataset.mapId); if(!loc)return;
     marker.addEventListener('mouseenter',()=>showTooltip(marker,loc));
     marker.addEventListener('mouseleave',hideTooltip);
     marker.addEventListener('focus',()=>showTooltip(marker,loc));
     marker.addEventListener('blur',hideTooltip);
     marker.addEventListener('click',()=>select(loc,marker));
     marker.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(loc,marker);}});
   });
   const same=selected&&data.find(x=>x.id===selected.id);
   if(same){const marker=mapArt.querySelector(`[data-map-id="${CSS.escape(same.id)}"]`); if(marker)select(same,marker,false); else resetInfo();}
   else resetInfo();
 }
 function showTooltip(marker,loc){
   const tip=mapArt.querySelector('[data-map-tooltip]'); if(!tip)return;
   tip.innerHTML=`<strong>${escapeHTML(loc.name)}</strong><span>${escapeHTML(loc.region)}</span>`;
   tip.classList.add('show');
   const box=mapArt.getBoundingClientRect(), mr=marker.getBoundingClientRect();
   tip.style.left=`${Math.min(Math.max(mr.left-box.left+14,8),Math.max(8,mapArt.clientWidth-240))}px`;
   tip.style.top=`${Math.max(8,mr.top-box.top-12)}px`;
 }
 function hideTooltip(){mapArt.querySelector('[data-map-tooltip]')?.classList.remove('show');}
 function findCard(loc){
   return loc.card ? document.querySelector(loc.card) : document.querySelector(`[data-city="${CSS.escape(loc.id)}"]`);
 }
 function focusAndOpenCard(loc){
   const card=findCard(loc);
   if(!card) return false;
   document.querySelectorAll('.map-card-target').forEach(c=>c.classList.remove('map-card-target'));
   card.classList.add('map-card-target');
   card.setAttribute('tabindex','-1');
   card.setAttribute('data-map-selected','true');
   card.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
   setTimeout(()=>{
     try{card.focus({preventScroll:true});}catch(e){card.focus();}
     if(typeof window.__westerosOpenCityCard==='function'){
       window.__westerosOpenCityCard(card);
     } else {
       card.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
     }
   },260);
   setTimeout(()=>{card.classList.remove('map-card-target');card.removeAttribute('data-map-selected');},5200);
   return true;
 }
 function resetInfo(){
   selected=null;
   mapArt.querySelectorAll('.map-marker.selected').forEach(m=>m.classList.remove('selected'));
   if(nameEl) nameEl.textContent=activeRealm==='essos'?'Essos':'Westeros';
   if(regionEl) regionEl.textContent=activeRealm==='essos'?'Explore the Free Cities, Slaver’s Bay and the far eastern lands.':'Explore the Seven Kingdoms, from the Wall to Dorne.';
   if(descEl) descEl.textContent='Select a marker to reveal its location story, regional context and direct connection to the city archive.';
   if(realmLabel) realmLabel.textContent=labelFor(activeRealm);
   if(regionLabel) regionLabel.textContent='—';
   if(link) link.hidden=true;
   if(imageWrap) imageWrap.hidden=true;
   if(archiveStatus) archiveStatus.textContent='Choose a marked location to explore its archive entry.';
 }
 function select(loc,marker,scroll=true){
   selected=loc;
   mapArt.querySelectorAll('.map-marker.selected').forEach(m=>m.classList.remove('selected'));
   marker.classList.add('selected'); hideTooltip();
   if(nameEl) nameEl.textContent=loc.name; if(regionEl) regionEl.textContent=loc.region; if(descEl) descEl.textContent=loc.description;
   if(realmLabel) realmLabel.textContent=labelFor(activeRealm); if(regionLabel) regionLabel.textContent=loc.region;
   const card=findCard(loc);
   const cardImg=card?.querySelector('.city-photo img');
   if(cardImg && imageWrap && imageEl){
     imageEl.src=cardImg.currentSrc || cardImg.src;
     imageEl.alt=cardImg.alt || loc.name;
     imageWrap.hidden=false;
   }else if(imageWrap) imageWrap.hidden=true;
   if(card){
     if(link){ link.hidden=false; link.href=loc.card || `#${card.id}`; link.textContent='OPEN CITY ENTRY ';
     const span=document.createElement('span'); span.textContent='↗'; link.appendChild(span); }
     if(archiveStatus) archiveStatus.textContent='City archive found — selecting this location will focus the matching card and open its full detail view.';
     link.onclick=e=>{e.preventDefault();focusAndOpenCard(loc);};
   } else {
     if(link) link.hidden=true;
     if(archiveStatus) archiveStatus.textContent='Map reference only — this location does not yet have a dedicated city card in this archive.';
   }
   if(scroll) {
     if(card) setTimeout(()=>focusAndOpenCard(loc),120);
     else if(window.matchMedia('(max-width:980px)').matches) info.scrollIntoView({behavior:'smooth',block:'nearest'});
   }
 }
 root.querySelector('[data-map-reset]')?.addEventListener('click',()=>{resetInfo();mapArt.querySelector('.map-marker')?.focus();});
 buttons.forEach(b=>b.addEventListener('click',()=>{const realm=b.dataset.mapRealm;if(realm!==activeRealm)render(realm);}));
 render('westeros');
}
