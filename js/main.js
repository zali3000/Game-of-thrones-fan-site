document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector(".site-nav"), toggle=document.querySelector(".nav-toggle");
 if(toggle) toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.setAttribute("aria-expanded",nav.classList.contains("open"));});
 document.querySelectorAll(".site-nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
 attachTilt(".tilt-card",".tilt-card-inner",8);
 attachFlip(".flip-card");
 attachReveal(".reveal");
 const theme=document.body.classList.contains("hotd-theme")?"rgba(138, 31, 31, ":"rgba(217, 98, 43, "; startEmbers(theme);
 initSearch(); initFilters(); initProfiles(); initDetailCards();
});
function attachTilt(selector,innerSelector,maxTilt){document.querySelectorAll(selector).forEach(card=>{const inner=card.querySelector(innerSelector)||card;card.addEventListener("mousemove",e=>{if(window.matchMedia("(hover: none)").matches)return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;inner.style.transform=`rotateX(${-(y-r.height/2)/(r.height/2)*maxTilt}deg) rotateY(${(x-r.width/2)/(r.width/2)*maxTilt}deg) scale(1.02)`});card.addEventListener("mouseleave",()=>inner.style.transform="rotateX(0deg) rotateY(0deg) scale(1)")})}
function attachFlip(selector){document.querySelectorAll(selector).forEach(card=>card.addEventListener("click",()=>{if(window.matchMedia("(hover: none)").matches)card.classList.toggle("flipped")}))}
function attachReveal(selector){const items=document.querySelectorAll(selector);if(!items.length)return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");obs.unobserve(e.target)}}),{threshold:.15});items.forEach(i=>obs.observe(i))}
function startEmbers(color){const canvas=document.getElementById("embers");if(!canvas)return;const ctx=canvas.getContext("2d");let w,h,particles=[];const resize=()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight};addEventListener("resize",resize);resize();const count=matchMedia("(max-width:720px)").matches?18:42;for(let i=0;i<count;i++)particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.5,speed:Math.random()*.6+.2,drift:(Math.random()-.5)*.4,a:Math.random()*.5+.2});if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;function loop(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.speed;p.x+=p.drift;if(p.y<-10){p.y=h+20;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`${color}${p.a})`;ctx.fill()});requestAnimationFrame(loop)}loop()}
function initSearch(){const input=document.querySelector("[data-search]");if(!input)return;const items=[...document.querySelectorAll("[data-search-item]")],empty=document.querySelector(".filter-empty");input.addEventListener("input",()=>{const q=input.value.toLowerCase().trim();let shown=0;items.forEach(i=>{const ok=!q||i.innerText.toLowerCase().includes(q);i.style.display=ok?"":"none";if(ok)shown++});if(empty)empty.style.display=shown?"none":"block"})}
function initFilters(){document.querySelectorAll("[data-filter-group]").forEach(group=>{const buttons=group.querySelectorAll("[data-filter]"), target=group.dataset.filterGroup;const items=document.querySelectorAll(`[data-filter-item="${target}"]`);buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");const val=b.dataset.filter;items.forEach(i=>i.style.display=val==="all"||i.dataset.category===val?"":"none")}))})}
function initProfiles(){
 const modal=document.querySelector('.profile-modal');
 if(!modal)return;
 const title=modal.querySelector('[data-profile-title]'), role=modal.querySelector('[data-profile-role]'), text=modal.querySelector('[data-profile-text]');
 const close=()=>modal.classList.remove('open');
 document.querySelectorAll('.profile-trigger').forEach(btn=>btn.addEventListener('click',e=>{
   e.stopPropagation(); const card=btn.closest('.character-card');
   if(!card)return; title.textContent=card.querySelector('.flip-face.back h3')?.textContent||''; role.textContent=card.querySelector('.flip-face.back .char-title')?.textContent||''; text.textContent=card.querySelector('.flip-face.back p')?.textContent||''; modal.classList.add('open');
 }));
 modal.querySelector('.profile-close')?.addEventListener('click',close); modal.addEventListener('click',e=>{if(e.target===modal)close()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
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
     return `<a class="home-search-result" href="${target}#${item[1].toLowerCase()}-${slug}"><span><strong>${item[0]}</strong>${badge}</span><em>${item[1]}</em></a>`;
   }).join(''):'<div class="home-search-result no-result">No matching result found.</div>';
 });
})();


/* Universal card detail viewer + richer archive details. */
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
   modal.innerHTML='<div class="detail-backdrop"></div><div class="detail-dialog" role="dialog" aria-modal="true" aria-label="Details"><button class="detail-close" type="button" aria-label="Close">×</button><div class="detail-content"></div></div>';
   document.body.appendChild(modal);
 }
 const content=modal.querySelector('.detail-content');
 const close=()=>{modal.classList.remove('open');document.body.classList.remove('detail-open');setTimeout(()=>modal.hidden=true,180);};
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
const makeCharacterModal=(profile,detail,title,clone,img,section)=>{
  const role=profile?.role || clone.querySelector('.char-title')?.textContent?.trim() || 'Character';
  const house=profile?.house || 'Westeros';
  const faction=profile?.faction || '';
  const description=profile?.profile || detail?.description || '';
  const traits=profile?.traits || 'Leadership • Loyalty • Strategy • Survival';
  const importance=profile?.importance || description;
  const imageHTML=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||title)}"></div>` : '';
  return `<div class="detail-layout character-detail-layout"><div class="detail-media-column character-detail-media">${imageHTML}<div class="detail-media-caption"><span>${escapeHTML(house)}</span><b>CHARACTER ARCHIVE</b></div></div><div class="detail-info character-detail-info"><div class="character-detail-scroll"><div class="character-profile-head"><span class="detail-kicker">${escapeHTML(section)}${faction?` · ${escapeHTML(faction)}`:''}</span><h2>${escapeHTML(title)}</h2><p class="character-role">${escapeHTML(role)}</p><div class="detail-divider"></div><div class="character-meta"><div><b>HOUSE</b><span>${escapeHTML(house)}</span></div><div><b>KNOWN AS</b><span>${escapeHTML(profile?.known||title)}</span></div><div><b>ROLE</b><span>${escapeHTML(role)}</span></div>${faction?`<div><b>FACTION</b><span>${escapeHTML(faction)}</span></div>`:''}</div></div><div class="character-detail-sections"><section class="detail-section"><h3>Biography</h3><p>${escapeHTML(description)}</p></section><section class="detail-section"><h3>Key Characteristics</h3><p>${escapeHTML(traits)}</p></section><section class="detail-section"><h3>Story Importance</h3><p>${escapeHTML(importance)}</p></section></div></div></div></div>`;
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
   const image=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||finalTitle)}"></div>` : '';
   const characterProfile=page==='characters' ? CHARACTER_PROFILES[`${era}/${page}/${normalize(title)}`] : null;
   content.innerHTML=characterProfile ? makeCharacterModal(characterProfile,detail,finalTitle,clone,img,section) : `<div class="detail-layout"><div class="detail-media-column">${image}<div class="detail-media-caption"><span>${escapeHTML(section)}</span><b>ARCHIVE ENTRY</b></div></div><div class="detail-info"><span class="detail-kicker">${escapeHTML(section)}</span><h2>${escapeHTML(finalTitle)}</h2><div class="detail-divider"></div><div class="detail-copy">${makeSections(detail,page,finalTitle,clone)}</div></div></div>`;
   // Reset every relevant scroll container so each archive entry opens from the top.
   content.scrollTop=0;
   modal.scrollTop=0;
   const dialog=modal.querySelector('.detail-dialog');
   if(dialog) dialog.scrollTop=0;
   modal.hidden=false;
   document.body.classList.add('detail-open');
   requestAnimationFrame(()=>{ content.scrollTop=0; modal.scrollTop=0; if(dialog) dialog.scrollTop=0; modal.classList.add('open'); });
 };
 cards.forEach(card=>card.addEventListener('click',e=>{
   if(e.target.closest('a,button'))return;
   e.preventDefault(); e.stopPropagation(); openCard(card);
 }));
 modal.querySelector('.detail-close')?.addEventListener('click',close);
 modal.querySelector('.detail-backdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();});
 const hash=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
 if(hash){
   const wanted=hash.replace(/^[^-]+-/,'');
   const target=cards.find(c=>normalize(cardTitle(c))===wanted || normalize(c.innerText).includes(wanted));
   if(target)setTimeout(()=>openCard(target),120);
 }
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
