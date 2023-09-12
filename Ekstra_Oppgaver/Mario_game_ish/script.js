// Model
const app = document.getElementById('app');
let cur_item = 0;

const chara = [
   { name: 'Mario', hp: 200, img: './img/mario.png' },
   { name: 'Luigi', hp: 140, img: './img/luigi.png' },
   { name: 'Peach', hp: 100, img: './img/peach.png' },
   { name: 'Yoshi', hp: 80, img: './img/yoshi.png' },
   { name: 'Bowser', hp: 300, img: './img/bowser.png' },
];
const charaCopy = [200, 140, 100, 80, 300];

let items = [
   { name: '', img: './img/hp/empty.png', hover: 'Empty', effect: null, type: null },
   { name: 'Heart', img: './img/hp/heartFull.png', hover: 'Heals 100 hp', effect: 50, type: 'heal' },
   { name: 'Nuke', img: './img/hp/BigBomb.png', hover: 'Does 50 DMG', effect: -50, type: 'dmgEnemy' },
   { name: 'Shrom', img: './img/hp/shrom.png', hover: 'heals 15 hp', effect: 15, type: 'heal' },
   { name: 'Shrom', img: './img/hp/shrom.png', hover: 'heals 15 hp', effect: 25, type: 'poisonSelf' },
   { name: 'Bomb', img: './img/hp/bomb.png', hover: 'Does 25 dmg', effect: -25, type: 'dmgEnemy' },
   { name: 'Bomb', img: './img/hp/bomb.png', hover: 'Does 25 dmg', effect: -25, type: 'dmgSelf' },
   { name: 'Lucky bomb', img: './img/hp/bwshrom.png', hover: 'Heals bowser, or has a chance to deal dmg', effect: 150, type: 'ran' },
];

let itemHis = [
   { action: '' },
   { action: 'You used the heart you found. it has a positve effect.', type: 'hp' },
   { action: 'You nuked the enemy, the enemy has taken ', type: 'dmg' },
   { action: 'You have eaten a noraml shrom, you gain ', type: 'hp' },
   { action: "Bowser was a sneacky son of a bitch, you've been poisend. You lost ", type: 'hp' },
   { action: 'You have thrown the bomb, you deal', type: 'dmg' },
   { action: 'Bowser has rigged the bomb, you take ', type: 'dmg' },
   { action: 'You deal dmg to bowser for', type: 'hp', action2: 'Bad luck, you healed bowser for ' },

];

let actions = [
   'You hit bowser for',
   'You searched the proxity for an item.'
];

let lenOfItems = items.length;
/*
action:"Bowser was a sneacky son of a bitch, you've been poisend."
action:'eaten a normal shrom' ,
action:'Bomb' ,


*/
let cooldownTimer = 0;
// 2 
let cooldownOnSearch = 2;
//4
let cooldownOnUse = 4;

// Controller///////////////////////////////////////////////////////////////////////////////////////

function addToHistory(itemInd, value, buttonType) {
   let itemUse = /*HTML*/ `<li>${itemHis[itemInd].action} ${value} ${itemHis[itemInd].type}!!</li>`;
   let itemUseRan = /*HTML*/ `<li>${itemHis[itemInd].action2} ${value} hp!!</li>`;
   let hit =  /*HTML*/ `<li>You've Hit browser for ${value} dmg!</li>`;
   let foundItem = /*HTML*/ `<li>You have found a item: ${items[itemInd].name}</li> `;
   let noItem = /*HTML*/ `<li>You Found no item</li>`;
   let bowserHit = /*HTML*/ `<li>You got Hit for ${value} dmg!</li>`;
   let story = '';
   if (buttonType === 'hit') story = hit;
   if (buttonType === 'foundNo') story = noItem;
   if (buttonType === 'foundYes') story = foundItem;
   if (buttonType === 'useItem') story = itemUse;
   if (buttonType === 'useItemRan') story = itemUseRan;
   if (buttonType === 'bowserHit') story = bowserHit;

   document.getElementById('history').innerHTML += story;
};
function hit(i) {
   let dmgDealt = playerDmg()
   chara[4].hp -= dmgDealt;
   updateFight(i)
   addToHistory(i, dmgDealt, 'hit')
   changeIt(i, 'down')
   bowserTurn(i)
};

function clearHistory() {
   let ave = ` `
   document.getElementById('history').innerHTML = ave;
}
function winLossCheck(i, itemSelector, buttonPos) {
   let bowser = chara[4].hp;
   let mainChar = chara[i].hp;

   //Hit button
   if (buttonPos == 1) {
      if (mainChar <= 0) lostScreen()
      else if (bowser <= 0) winScreen()
      else hit(i);
      return;
      //Use item
   } else if (buttonPos == 2) {
      if (mainChar <= 0) lostScreen();
      else if (bowser <= 0) winScreen();
      else useItem(i, itemSelector);
      return;
      //Get Random item
   } else if (buttonPos == 3) {
      if (mainChar <= 0) lostScreen();
      else if (bowser <= 0) winScreen();
      else getRanItem(i);
      return;
   }
};




function bowserTurn(i) {
   let dmg = bowserDmg()
   chara[i].hp -= dmg;
   addToHistory(0, dmg, 'bowserHit')
   updateFight(i)
}

function changeIt(i, a) {
   if (a === 'upp') cooldownTimer += cooldownOnUse;
   if (a === 'down') cooldownTimer--;
   if (a === 'click') cooldownTimer = cooldownOnSearch;
   updateFight(i);
};

//Random///////
function playerDmg() {
   return Math.ceil(Math.random() * 11)
};
function bowserDmg() {
   return Math.ceil(Math.random() * 9)
};
function halfHalf() {
   return Math.round(Math.random(0, 1))
};
function getRandomItemNumber() {
   return Math.round((Math.random()) * 6 + 1)
};
//////////


function getRanItem(i) {
   let x = halfHalf()
   let y = getRandomItemNumber()
   changeIt(i, 'click')
   bowserTurn(i)
   if (x == 0) {
      addToHistory(cur_item, null, 'foundNo');
   } else if (x == 1) {
      cur_item = y;
      addToHistory(cur_item, null, 'foundYes');
      updateFight(i)
   }
};



function useItem(i, index) {
   let effect = items[index].effect;
   let type = items[index].type;
   changeIt(i, 'upp')
   bowserTurn(i)
   if (type === 'ran') {
      let x = halfHalf()
      if (x == 1) {
         chara[4].hp += effect
         cur_item = 0
         addToHistory(index, effect, 'useItemRan')
         updateFight(i)
         return;
      } else if (x == 0) {
         chara[4].hp -= effect
         cur_item = 0
         addToHistory(index, effect, 'useItem')
         updateFight(i)
         return;
      }

   }
   // add types off items here
   addToHistory(index, effect, 'useItem')
   if (type === 'heal') {
      chara[i].hp += effect;
      cur_item = 0
   };
   if (type === 'poisonSelf') {
      chara[i].hp -= effect;
      cur_item = 0
   };
   if (type === 'dmgSelf') {
      chara[i].hp += effect;
      cur_item = 0
   };
   if (type === 'dmgEnemy') {
      chara[4].hp += effect
      cur_item = 0
   };
   updateFight(i)
};

// View

//Start on Character screen
updateCharSelect()

//Start on Fight screen
// updateFight(0)


function updateCharSelect() {
   document.getElementById('history').classList.toggle('historyCont');
   let html = /*HTML*/ `
   <h1>Choose your character</h1>
   <div class="img_cont">
   <div class="border pic_box" onclick="startFight(0)">  <img src="${chara[0].img}" alt="Mario" style="width:100px"></div>
   <div class="border pic_box" onclick="startFight(1)">  <img src="${chara[1].img}" alt="Luigi" style="width:100px"></div>
   <div class="border pic_box" onclick="startFight(2)">  <img src="${chara[2].img}" alt="Peach" style="width:100px"></div>
   <div class="border pic_box" onclick="startFight(3)">  <img src="${chara[3].img}" alt="Yoshi" style="width:100px"></div>
   </div>
   <div class="vs">Vs</div>
   <div class="bowser"onclick="updateFight(4)"><img src="${chara[4].img}" alt="Bowser" style="width:300px"></div>
   <br><div><h2><li>To see what an items does hover over it.</li>
   <li>To use item click <tt>use item</tt> button.</li>
   <li>Bowser can also use itmes.</li>
   <li>+2 cooldown on <tt>Search for items</tt></li>
   <li>-1 cooldown on each <tt>Hit</tt></li>
   <li>+1 cooldown on <tt>Use item</tt></li>
   <li>Bowser attacks after your turn.</li></h2>
   </div>
   `;
   document.body.classList.remove('background-img');
   app.innerHTML = html;
};

function startFight(i) {
   document.getElementById('history').classList.toggle('historyCont');
   updateFight(i)
}
function updateFight(i) {
   document.body.classList.add('background-img')
   let health = chara[i].hp;
   let Bhealth = chara[4].hp;
   let offA = null;
   let offB = null;
   if (items[cur_item].effect == null) offA = `disabled`
   else offA = null;

   if (cooldownTimer <= 0) {
      offB = null;
   } else {
      offB = `disabled`
   };


   let html_fight = /*HTML*/ `
   <button onclick="clearHistory()" style="float:right;">clear</button>
   <div class="topbar">
      <div class="hp">HP = ${health}</div>
      <div class="hp">Bowser HP = ${Bhealth} 
         <br>Holding <tt>${items[cur_item].name}</tt> ${cooldownTimer}
      </div>

      <div class="item" title="${items[cur_item].hover}"><img src="${items[cur_item].img}" style="width:50px;"></div>
      
      <button onclick="winLossCheck(${i},${cur_item}, 1)">Hit</button>
      <button onclick="winLossCheck(${i},${cur_item}, 2)" ${offA}>Use item</button>
      <button onclick="winLossCheck(${i},${cur_item}, 3)" ${offB}>Search for items</button>
   </div>
   <div class="fight-cont">
      <div class="chara-fight"> <img src="${chara[i].img}" style="width:100px;"></div>
      <div class="boss-fight">  <img src="${chara[4].img}" style="width:200px;"></div>
   </div>
`;

   app.innerHTML = html_fight;
};



function healAll() {
   chara[0] = charaCopy[0]
   chara[1] = charaCopy[1]
   chara[2] = charaCopy[2]
   chara[3] = charaCopy[3]
   chara[4] = charaCopy[4]
};
function lostScreen() {
   let lose_s = /*HTML*/`
   <h1>Congrats, you lost.</h1>
   <div style="margin-left: 780px; width:100px;">
   <button onclick="reloadAll()">Restart</button>
   </div>
   `
   document.body.classList.remove('background-img')
   app.innerHTML = lose_s;

};
function reloadAll() {
   window.location.reload()
}
function winScreen() {
   let win_s = /*HTML*/`
   <h1>Congrats, you won.</h1>
   <div style="margin-left: 780px; width:100px;">
   <button onclick="reloadAll()">Restart</button>
   </div>
   `
   document.body.classList.remove('background-img')
   app.innerHTML = win_s;

};
