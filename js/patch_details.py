from pathlib import Path
from bs4 import BeautifulSoup
import json, re

root=Path('/mnt/data/westeros_work/site/Westeros_Redesigned')

def norm(s):
    return re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')

D={
'got/houses': {
'House Stark': ('House', 'The Starks are the old northern house of Winterfell, known for duty, endurance and a deep connection to the North. Their words, “Winter Is Coming,” are less a slogan than a warning: survival requires preparation, loyalty and the ability to endure hardship.'),
'House Lannister': ('House', 'The Lannisters are one of Westeros’s richest and most politically powerful families, ruling from Casterly Rock and using wealth as carefully as armies. Their red-and-gold lion represents pride, ambition and the belief that power must be protected at almost any cost.'),
'House Targaryen': ('House', 'House Targaryen ruled Westeros for generations after Aegon the Conqueror united the kingdoms with dragons. Their history is filled with spectacular victories, family rivalries and the dangerous idea that royal blood gives a person the right to rule.'),
'House Baratheon': ('House', 'The Baratheons rose to the Iron Throne after Robert’s Rebellion and became closely tied to the politics of the crown. Their reputation for physical strength and fierce tempers made them formidable, but internal divisions repeatedly weakened the family.'),
'House Greyjoy': ('House', 'The Greyjoys rule the Iron Islands, where life is shaped by harsh seas, raiding traditions and a culture built around independence. Their ambition is summed up by the phrase “We Do Not Sow”: they prefer taking what they need to depending on the mainland.'),
'House Tyrell': ('House', 'The Tyrells of Highgarden combine wealth, fertile lands and careful political maneuvering. Unlike houses that rely mainly on military force, they often build influence through alliances and marriage, making them one of the most important players in the struggle for the crown.'),
'House Martell': ('House', 'House Martell rules Dorne from Sunspear and follows customs that differ from much of the rest of Westeros. The family is famous for patience, pride and a long memory, especially when seeking justice for wrongs committed against the Dornish.'),
'House Arryn': ('House', 'The Arryns are the ancient rulers of the Vale, protected by mountains and the formidable Eyrie. Their lands are difficult to invade, giving the family a strategic advantage, while their connections to other great houses make them important during succession crises.'),
'House Tully': ('House', 'House Tully rules the Riverlands from Riverrun, a region positioned between several competing powers. Because the Riverlands sit at the center of so many conflicts, the Tullys are repeatedly forced to choose alliances while trying to protect their people from armies passing through.'),
},
'got/characters': {
'Jon Snow': ('Character', 'Jon Snow begins his story as an outsider at Winterfell and later joins the Night’s Watch, believing that service beyond the Wall will give his life a clear purpose. His experience there changes him, forcing him to understand the threat posed by the White Walkers and the importance of the people he once knew only as enemies.'),
'Daenerys Targaryen': ('Character', 'Daenerys grows from an exiled young woman into a powerful queen with three dragons and a huge following. Her journey is built around liberation, reclaiming her family’s throne and proving that she can rule differently from the kings who came before her. As her power grows, so does the difficult question of what she is willing to do to achieve her vision.'),
'Tyrion Lannister': ('Character', 'Tyrion survives in a world that constantly underestimates him because of his appearance and his family position. His greatest weapons are intelligence, wit and an understanding of political motives. From King’s Landing to exile and war, he repeatedly proves that knowing how people think can be as valuable as knowing how to fight.'),
'Arya Stark': ('Character', 'Arya’s journey is one of survival and transformation. After losing her family’s protection, she learns to travel alone, fight, disguise herself and eventually use the training of the Faceless Men. Beneath all that training, however, remains a strong connection to her identity and her determination to survive on her own terms.'),
'Sansa Stark': ('Character', 'Sansa begins with an idealized view of royal life but is forced to grow quickly after becoming trapped in the politics of King’s Landing. Her experiences teach her patience, observation and political awareness. By the end of her journey, she is no longer simply surviving the game of power; she understands how to play it.'),
'Cersei Lannister': ('Character', 'Cersei is fiercely protective of her children and determined to preserve her family’s position. She uses marriage, fear, alliances and ruthless political calculation to hold power. Her greatest strength is her refusal to surrender, but that same determination repeatedly pushes her toward decisions that isolate her.'),
'Jaime Lannister': ('Character', 'Jaime is introduced as a celebrated knight whose reputation is complicated by the choices he has made for his family. His journey gradually exposes the conflict between honor, loyalty and love. Away from the safety of his family’s influence, he is forced to question the identity he built for himself.'),
'Bran Stark': ('Character', 'Bran’s fall from Winterfell changes his life completely and eventually leads him toward the mystical history of Westeros. As the Three-Eyed Raven, he becomes a keeper of memories and knowledge rather than a conventional warrior. His role becomes especially important because understanding the past is essential to confronting the future.'),
},
'got/dragons': {
'Drogon': ('Dragon', 'Drogon is Daenerys Targaryen’s largest and most aggressive dragon, named after Khal Drogo. He becomes a symbol of her return to power and is frequently the most visible expression of her military strength. His size and destructive ability make him terrifying on a battlefield, but his bond with Daenerys is also deeply personal.'),
'Rhaegal': ('Dragon', 'Rhaegal is one of Daenerys’s three dragons, named after her brother Rhaegar Targaryen. His green-and-bronze appearance distinguishes him from his siblings, while his presence represents the continuation of Targaryen blood and the return of dragons to the world.'),
'Viserion': ('Dragon', 'Viserion is named after Daenerys’s brother Viserys and is one of the three dragons born from the petrified eggs given to Daenerys. His story becomes especially tragic because he is separated from his siblings and later transformed into a weapon against the living.'),
},
'got/cities': {
"King's Landing": ('City', 'King’s Landing is the political heart of the Seven Kingdoms and the seat of the Iron Throne. Its crowded streets, royal palace and harbor make it both powerful and vulnerable. Almost every major political struggle eventually reaches the city because controlling King’s Landing means controlling the machinery of government.'),
'Winterfell': ('City', 'Winterfell is the ancestral seat of House Stark and one of the most important strongholds in the North. Its ancient walls, hot springs and position along northern routes make it both a home and a defensive center. For the Stark family, Winterfell represents identity, memory and belonging.'),
'Braavos': ('City', 'Braavos is a wealthy Free City built around canals and islands, famous for trade, ships and the mysterious House of Black and White. It stands outside the politics of the Seven Kingdoms while still influencing events through money, information and highly trained assassins.'),
'Dragonstone': ('City', 'Dragonstone is the ancestral island fortress of House Targaryen, built around volcanic stone and surrounded by the sea. Its association with dragons and Targaryen rule gives it enormous symbolic importance. For claimants to the throne, holding Dragonstone can be a declaration that their royal heritage still matters.'),
'Highgarden': ('City', 'Highgarden is the beautiful and wealthy seat of House Tyrell, surrounded by the fertile lands of the Reach. Its agricultural wealth gives the Tyrells enormous influence because food is one of the most important sources of power during wartime.'),
'Castle Black': ('City', 'Castle Black is the principal headquarters of the Night’s Watch on the Wall. It is less a comfortable castle than a military outpost, responsible for defending the realm from threats beyond the Wall. Its importance becomes clear when the supernatural danger in the North begins to grow.'),
'Meereen': ('City', 'Meereen is one of the great slave cities of Slaver’s Bay and becomes a major test of Daenerys’s ability to govern. Conquering the city is easier than maintaining peace inside it, forcing her to confront the difficult difference between destroying an old system and building a stable new one.'),
'Sunspear': ('City', 'Sunspear is the capital of Dorne and the seat of House Martell. Its desert setting, distinctive architecture and independent culture reflect Dorne’s separation from the traditions of the other kingdoms. It becomes an important center of resistance and political calculation.'),
},
'got/chronicle': {
'A King Dies Hunting': ('Chronicle', 'King Robert Baratheon’s hunting accident becomes the spark that exposes the instability beneath the royal court. With Robert dying and no secure succession, competing families immediately begin positioning themselves for control. The event matters because the Seven Kingdoms are about to enter a war that had been building quietly for years.'),
"The King's Hand Loses His Head": ('Chronicle', 'Ned Stark’s execution destroys the possibility of a peaceful political settlement and turns the conflict into open war. His death shocks the North and gives Robb Stark the motivation to raise an army. It also demonstrates how quickly the rules of honor can collapse when power is placed above justice.'),
'Wildfire on the Blackwater': ('Chronicle', 'The Battle of the Blackwater becomes one of the defining battles for control of King’s Landing. Tyrion’s use of wildfire helps destroy much of the attacking fleet, while the defenders struggle to keep the city from falling. The battle proves that strategy, preparation and political alliances can matter as much as raw numbers.'),
'The North Remembers': ('Chronicle', 'The North continues to resist Lannister control even after Robb Stark’s campaign is broken. The phrase captures the idea that political defeat does not automatically erase loyalty or memory. Northern resistance later becomes part of the larger effort to restore the Stark family and reclaim Winterfell.'),
'A Queen Crosses the Sea': ('Chronicle', 'Daenerys’s arrival in Westeros marks the moment her long exile finally turns into a direct struggle for the throne. She brings dragons, armies and a claim based on Targaryen blood, but she also discovers that Westeros is more complicated than the political world she left behind.'),
'The Dead Walk South': ('Chronicle', 'The Army of the Dead finally breaks through the Wall and brings the supernatural threat directly into the Seven Kingdoms. Former enemies must reconsider old rivalries because the danger is no longer a distant legend. The event changes the war from a contest for political power into a fight for survival.'),
'Two Battles, One Bastard': ('Chronicle', 'Jon Snow’s battles against the forces surrounding Winterfell and the larger armies of the realm highlight his transformation from an uncertain outsider into a central military leader. His victories carry a cost, but they also help restore Stark influence in the North.'),
'The City Burns': ('Chronicle', 'The destruction of King’s Landing becomes one of the darkest turning points of the war. Victory is achieved through overwhelming force, but the civilian cost changes how allies and enemies view the person who ordered it. The event shows how the pursuit of absolute victory can destroy the legitimacy a ruler hopes to gain.'),
'The Throne Melts': ('Chronicle', 'The Iron Throne is destroyed after the final struggle for power, ending the physical symbol around which generations of rulers fought. Instead of immediately crowning another hereditary monarch, the surviving leaders choose a new political arrangement. The moment closes the cycle of conquest, rebellion and succession that defined the story.'),
},
'hotd/houses': {
'House Targaryen': ('House', 'House Targaryen is the ruling dynasty at the center of the Dance of the Dragons. Its greatest strength is also its greatest danger: dragons give the family unmatched military power, but the question of succession turns that power inward. The civil war shows how quickly a royal family can become its own worst enemy.'),
'House Hightower': ('House', 'House Hightower is one of the richest and most influential families in Westeros, based in Oldtown. The family builds power through wealth, learning, political relationships and proximity to the royal court. During the succession crisis, the Hightowers become central players in deciding who controls the throne.'),
'House Velaryon': ('House', 'House Velaryon is a powerful seafaring family whose wealth comes from ships, trade and control of Driftmark. Corlys Velaryon’s ambition brings the family close to the Targaryen succession, while its navy gives whichever side it supports a major strategic advantage.'),
'House Strong': ('House', 'House Strong of Harrenhal becomes deeply connected to the royal succession through Lyonel Strong and his sons. Their story shows how dangerous proximity to the throne can be: political success can bring influence, but it can also make a family the target of suspicion, rivalry and revenge.'),
},
'hotd/characters': {
'Rhaenyra Targaryen': ('Character', 'Rhaenyra is named heir by her father Viserys and spends much of her life defending that decision. She grows from a rebellious young princess into a determined claimant who understands that inheritance alone may not be enough to secure power. The civil war forces her to balance family loyalty, motherhood and the brutal demands of kingship.'),
'Daemon Targaryen': ('Character', 'Daemon is Viserys’s younger brother, a skilled warrior and one of the most unpredictable members of the Targaryen family. He is ambitious, impulsive and fiercely loyal to the people he considers his own. His relationship with Rhaenyra becomes central to the succession struggle and brings both strength and volatility to her claim.'),
'King Viserys I': ('Character', 'Viserys I wants peace and stability after becoming king, and he tries to preserve his family by refusing to let old disagreements become open war. His decision to name Rhaenyra heir is historically important, but his failure to secure a universally accepted succession plan leaves the realm dangerously divided after his death.'),
'Alicent Hightower': ('Character', 'Alicent begins as a close companion to Rhaenyra but becomes queen after marrying Viserys. As her children grow, her fears about their safety and inheritance intensify. She becomes one of the key figures behind the Green faction, believing that placing her son on the throne is necessary to protect her family.'),
'Aegon II Targaryen': ('Character', 'Aegon II becomes king when the Greens crown him after Viserys’s death, despite Rhaenyra being the named heir. He is not naturally suited to the enormous responsibility placed upon him, and the war gradually transforms him into a hardened and damaged ruler. His claim becomes one of the central causes of the civil war.'),
'Aemond Targaryen': ('Character', 'Aemond is one of the most formidable warriors of the Targaryen civil war and rides Vhagar, the largest living dragon. His desire to prove himself and his long-running rivalry with Rhaenyra’s family make him a dangerous force. His actions repeatedly turn political tension into irreversible bloodshed.'),
'Otto Hightower': ('Character', 'Otto Hightower is a highly experienced political operator who serves as Hand of the King. He views royal succession through the lens of stability and his family’s security, and he works carefully to place Aegon on the throne. His ability to plan several moves ahead makes him one of the Greens’ most important strategists.'),
'Corlys Velaryon': ('Character', 'Corlys Velaryon, known as the Sea Snake, builds House Velaryon into an extraordinary maritime power. His ambition leads him to seek a stronger place for his family within the royal succession. Even when his personal plans fail, his ships, wealth and experience make him one of the most valuable allies in the war.'),
'Rhaenys Targaryen': ('Character', 'Rhaenys is a Targaryen princess who once had a serious claim to the throne but was passed over in favor of Viserys. That history gives her a unique understanding of the injustice and uncertainty surrounding succession. She becomes a powerful supporter of Rhaenyra while carrying the memory of what her own family lost.'),
'Criston Cole': ('Character', 'Criston Cole rises from a relatively modest background to become a respected knight and eventually Lord Commander of the Kingsguard. His personal history with Rhaenyra becomes tangled with resentment, pride and politics. He ultimately becomes one of the Green faction’s most aggressive military leaders.'),
},
'hotd/dragons': {
'Syrax': ('Dragon', 'Syrax is Rhaenyra Targaryen’s dragon and one of the clearest symbols of her royal identity. She is not known primarily as a battlefield predator like Vhagar, but her bond with Rhaenyra represents the ancient connection between Targaryen rulers and dragons. Syrax is especially important as Rhaenyra’s claim moves from ceremony into war.'),
'Caraxes': ('Dragon', 'Caraxes, the Blood Wyrm, is Daemon Targaryen’s fearsome red dragon. His unusual shape and aggressive nature make him an intimidating presence in battle. Caraxes is closely associated with Daemon’s reckless courage, and together they become one of the most dangerous combinations on Rhaenyra’s side.'),
'Vhagar': ('Dragon', 'Vhagar is the largest and oldest of the major dragons active during the Dance of the Dragons. Having survived for generations, she represents the overwhelming destructive power available to the Targaryens. Under Aemond’s control, Vhagar becomes a decisive weapon whose presence can change the balance of an entire battle.'),
'Meleys': ('Dragon', 'Meleys, the Red Queen, is ridden by Rhaenys Targaryen and is among the fastest and most experienced dragons of the era. Her reputation gives Rhaenys significant military power, while her fate demonstrates how costly the civil war becomes when dragons are turned against members of the same family.'),
'Sunfyre': ('Dragon', 'Sunfyre is Aegon II’s golden dragon, famous for his striking appearance and close association with the king. Although admired for his beauty, Sunfyre becomes involved in the brutal reality of the civil war. His injuries and survival mirror the physical and political damage suffered by Aegon himself.'),
'Dreamfyre': ('Dragon', 'Dreamfyre is an older dragon associated with the Targaryen royal family and ridden by Helaena. She is less prominent as a battlefield weapon than Vhagar or Caraxes, but her existence reflects the deep connection between the royal family and the dwindling population of living dragons.'),
},
'hotd/cities': {
'King’s Landing': ('City', 'King’s Landing is the center of royal government and the place where the succession crisis becomes a struggle for immediate control. The Red Keep, council chambers and surrounding city all become part of the political battlefield. Whoever controls the capital can claim the appearance of legitimacy, even when the succession itself is disputed.'),
'Dragonstone': ('City', 'Dragonstone is the traditional seat of the Targaryen heir and the base from which Rhaenyra organizes her claim. Its volcanic landscape and ancient Targaryen symbolism make it more than a fortress; it is a physical statement that the old royal succession still has a living claimant.'),
'Driftmark': ('City', 'Driftmark is the island seat of House Velaryon and a center of naval power. Its importance comes from both its location and its wealthy seafaring family. During the civil war, control of Driftmark and its fleet can influence supply routes and determine how quickly armies and messages can move.'),
'Oldtown': ('City', 'Oldtown is one of the oldest and most important cities in Westeros, home to the Hightowers and the Citadel. Its scholars, wealth and religious institutions give it influence far beyond its walls. Because House Hightower is deeply involved in the succession crisis, Oldtown becomes an important source of political and logistical power.'),
'Harrenhal': ('City', 'Harrenhal is a colossal but cursed-looking fortress in the Riverlands, famous for its enormous size and dark history. Its strategic position makes it valuable during war, while its association with House Strong ties it directly to the political struggle. Controlling Harrenhal means gaining a powerful base in the center of the realm.'),
'Storm’s End': ('City', 'Storm’s End is the ancient Baratheon stronghold and one of the most important castles in the stormlands. Its loyalty matters because the Baratheons can provide soldiers and political legitimacy to a claimant. The castle becomes especially significant when rival envoys attempt to secure support during the succession crisis.'),
},
'hotd/chronicle': {
'An Heir Is Named': ('Chronicle', 'Viserys I publicly names Rhaenyra as his heir after the death of his son. The decision is meant to provide certainty, but it creates a precedent that becomes increasingly difficult to defend once Viserys later has sons. Rhaenyra’s appointment is the foundation of her claim and the source of the Greens’ eventual challenge.'),
'A Second Marriage, A Second Family': ('Chronicle', 'Viserys marries Alicent Hightower and begins a second family of royal children. The marriage changes the balance of power at court because Alicent’s sons now have a direct connection to the throne. What begins as a family decision eventually becomes the central succession conflict of the realm.'),
'The King Dies': ('Chronicle', 'Viserys’s death removes the one person capable of keeping the competing branches of his family together. The Greens move quickly to crown Aegon, while Rhaenyra’s supporters prepare to defend her inheritance. His death transforms years of tension into an open contest for the Iron Throne.'),
'Aegon Is Crowned': ('Chronicle', 'Aegon II is crowned in King’s Landing by the Green faction, creating a rival monarchy while Rhaenyra is still the named heir. The speed of the coronation is politically important because it gives the Greens control of the capital and allows them to present Aegon as the lawful king.'),
'A Prince Falls From the Sky': ('Chronicle', 'The death of Lucerys Velaryon after his encounter with Aemond and Vhagar turns political rivalry into personal vengeance. The loss convinces many characters that reconciliation is no longer possible. From this point, the war becomes increasingly brutal as both sides seek retaliation.'),
'Dragonseeds and Desperation': ('Chronicle', 'As the war intensifies, both sides need more dragons and riders to survive. The search for people with Targaryen blood who might bond with unclaimed dragons becomes a desperate gamble. The effort shows how the Greens and Blacks are forced to use every advantage available as their traditional royal dragons are lost.'),
"The Battle Above the God's Eye": ('Chronicle', 'Daemon Targaryen and Aemond Targaryen finally meet in one of the most dramatic dragon confrontations of the war. Riding Caraxes and Vhagar, they carry a personal rivalry into the sky above the God’s Eye. The encounter is devastating for both sides and becomes a defining moment in the history of the Dance.'),
"King's Landing Falls": ('Chronicle', 'Rhaenyra’s forces eventually take King’s Landing, giving the Blacks control of the capital and the Iron Throne. Yet capturing the city does not end the war. Political resistance, economic pressure and the continued existence of rival forces show that occupying the capital is very different from securing lasting rule.'),
'The War Turns Again': ('Chronicle', 'The fortunes of the Greens and Blacks repeatedly reverse as dragons, armies and alliances disappear. Victories become temporary and even successful commanders struggle to maintain control. The shifting balance demonstrates how the Dance destroys the stability that both factions originally claimed they were fighting to protect.'),
"A Council Ends What Dragons Couldn't": ('Chronicle', 'After the greatest violence of the Dance, a political council helps bring the conflict toward an end. The settlement demonstrates an important truth of the civil war: dragons can win battles, but they cannot create lasting legitimacy or peace. Westeros must eventually return to negotiation and political compromise.'),
},
}
# Add storyline cards as clickable detail cards, and ensure all relevant cards have a detail key.
for era in ['got','hotd']:
    for page in ['houses','characters','dragons','cities','chronicle','storyline']:
        p=root/era/(page+'.html')
        if not p.exists(): continue
        soup=BeautifulSoup(p.read_text(), 'html.parser')
        # Chronicle/timeline/storyline cards often lacked the search attribute in older builds.
        candidates=soup.select('.timeline-card, .city-card, .house-card, .character-card, .dragon-card, [class*="storyline-card"]')
        for c in candidates:
            if not c.has_attr('data-search-item'):
                # only add to cards that contain a meaningful heading
                h=c.select_one('h1,h2,h3,h4,.title,.name,.city-name,.dragon-name')
                if h: c['data-search-item']=''
        p.write_text(str(soup), encoding='utf-8')

# Inject a full per-card details object and replace the generic modal extraction.
js=root/'js/main.js'
text=js.read_text(encoding='utf-8')
start=text.index('function initDetailCards(){')
end=text.index('\n\n/* Main-home section chooser', start)

# Convert to JSON-ish JS object grouped by key.
entries={}
for group, vals in D.items():
    for title,(k,desc) in vals.items():
        entries[group+'/'+norm(title)]={'section':k,'description':desc}

obj=json.dumps(entries, ensure_ascii=False, indent=2)
# JSON is valid JS object literal.
new=f'''function initDetailCards(){{
 const cards=[...document.querySelectorAll('.westeros-page [data-search-item]')];
 if(!cards.length)return;
 const DETAILS={obj};
 let modal=document.querySelector('.detail-modal');
 if(!modal){{
   modal=document.createElement('div'); modal.className='detail-modal'; modal.hidden=true;
   modal.innerHTML='<div class="detail-backdrop"></div><div class="detail-dialog" role="dialog" aria-modal="true" aria-label="Details"><button class="detail-close" type="button" aria-label="Close">×</button><div class="detail-content"></div></div>';
   document.body.appendChild(modal);
 }}
 const content=modal.querySelector('.detail-content');
 const close=()=>{{modal.classList.remove('open');setTimeout(()=>modal.hidden=true,180);}};
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const cardTitle=card=>card.querySelector('h1,h2,h3,h4,.title,.name,.city-name,.dragon-name')?.textContent?.trim() || card.innerText.trim().split('\\n')[0] || '';
 const pageInfo=()=>{{
   const path=location.pathname.toLowerCase();
   const era=path.includes('/hotd/')?'hotd':path.includes('/got/')?'got':null;
   const page=(path.split('/').pop()||'index.html').replace(/\\.html$/,'')||'index';
   return {{era,page}};
 }};
 const openCard=card=>{{
   const {{era,page}}=pageInfo();
   const title=cardTitle(card);
   const detail=DETAILS[`${{era}}/${{page}}/${{normalize(title)}}`];
   const clone=card.cloneNode(true);
   clone.removeAttribute('data-search-item');
   clone.classList.remove('tilt-card','flip-card','flipped','unified-card');
   clone.querySelectorAll('[data-profile],.profile-trigger,.flip-hint').forEach(x=>x.remove());
   clone.querySelectorAll('.tilt-card-inner').forEach(x=>x.style.transform='none');
   const img=clone.querySelector('img');
   const finalTitle=detail ? title : (clone.querySelector('h1,h2,h3,h4')?.textContent?.trim() || title);
   let description=detail?.description || clone.querySelector('p,.lore,.city-card-content')?.innerText?.trim() || clone.innerText.trim();
   // If a page has not yet received a hand-written entry, keep the original card copy rather than a generic template.
   const image=img ? `<div class="detail-image-wrap"><img src="${{img.getAttribute('src')}}" alt="${{img.getAttribute('alt')||finalTitle}}"></div>` : '';
   const kicker=detail?.section || (page==='chronicle'||page==='storyline'?'Chronicle':'Westeros Archive');
   content.innerHTML=`<div class="detail-layout">${{image}}<div class="detail-info"><span class="detail-kicker">${{kicker}}</span><h2>${{finalTitle}}</h2><div class="detail-copy"><p>${{description}}</p></div></div></div>`;
   modal.hidden=false; requestAnimationFrame(()=>modal.classList.add('open'));
 }};
 cards.forEach(card=>card.addEventListener('click',e=>{{
   if(e.target.closest('a,button'))return;
   e.preventDefault(); e.stopPropagation(); openCard(card);
 }}));
 modal.querySelector('.detail-close')?.addEventListener('click',close);
 modal.querySelector('.detail-backdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{{if(e.key==='Escape'&&modal.classList.contains('open'))close();}});
 const hash=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
 if(hash){{
   const wanted=hash.replace(/^[^-]+-/,'');
   const target=cards.find(c=>normalize(cardTitle(c))===wanted || normalize(c.innerText).includes(wanted));
   if(target)setTimeout(()=>openCard(target),120);
 }}
}}
'''
text=text[:start]+new+text[end:]
js.write_text(text,encoding='utf-8')
print('patched',len(entries),'unique hand-written detail entries')
