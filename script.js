let params = new URLSearchParams(window.location.search);
document.body.innerHTML += `
<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="two fields">
	<div class="field" id="botname">
        <label>Name</label>
        <div class="ui large labeled input"><input type="text" value="${params.get('name') || "Ryzex"}" placeholder="Nickname" maxlength="17" spellcheck="false" data-ms-editor="true"></div>
      </div>
      <div class="field">
        <label>Room</label>
        <div class="ui large action labeled input" id="roomcode"><div class="ui label">https://gartic.io/ </div><input type="text" value="${params.get('code') || ""}" placeholder="Code"><button id="search" class="ui pink right labeled icon button" data-inverted="" data-tooltip="Take a Look at The Rooms" data-position="bottom center">
        <i class="search icon"></i>
        Rooms
      </button></div>
      </div>
      <div class="field" id="botamount">
        <label>Bot Amount</label>
        <div class="ui large labeled input"><input type="number" value="${params.get('amount') || "20"}" min="1" max="20"></div>
      </div>
    </div>
	
    <div class="two fields">

	<div class="field">
	<label>Bot Image</label>
<div class="ui fluid selection profil bot-image dropdown" tabaindex="0">
  <input type="hidden" name="user">
  <i class="dropdown icon" tabindex="0"><div class="menu" tabindex="-1"></div></i>
  <div class="text"><img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/0.svg">Default</div>
  <div class="menu transition hidden" tabindex="-1">
  <div data-value="0" class="item active selected">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/0.svg">Default</div><div data-value="1" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/1.svg">Man 1</div><div data-value="2" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/2.svg">Man 2</div><div data-value="3" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/3.svg">Man 3</div><div data-value="4" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/4.svg">Man 4</div><div data-value="5" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/5.svg">Man 5</div><div data-value="6" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/6.svg">Man 6</div><div data-value="7" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/7.svg">Man 7</div><div data-value="8" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/8.svg">Man 8</div><div data-value="9" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/9.svg">Man 9</div><div data-value="10" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/10.svg">Man 10</div><div data-value="11" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/11.svg">Man 11</div><div data-value="12" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/12.svg">Man 12</div><div data-value="13" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/13.svg">Man 13</div><div data-value="14" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/14.svg">Man 14</div><div data-value="15" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/15.svg">Man 15</div><div data-value="16" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/16.svg">Man 16</div><div data-value="17" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/17.svg">Man 17</div><div data-value="18" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/18.svg">Man 18</div><div data-value="19" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/19.svg">Girl 1</div><div data-value="20" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/20.svg">Girl 2</div><div data-value="21" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/21.svg">Girl 3</div><div data-value="22" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/22.svg">Girl 4</div><div data-value="23" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/23.svg">Girl 5</div><div data-value="24" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/24.svg">Girl 6</div><div data-value="25" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/25.svg">Girl 7</div><div data-value="26" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/26.svg">Girl 8</div><div data-value="27" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/27.svg">Girl 9</div><div data-value="28" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/28.svg">Girl 10</div><div data-value="29" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/29.svg">Girl 11</div><div data-value="30" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/30.svg">Girl 12</div><div data-value="31" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/31.svg">Girl 13</div><div data-value="32" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/32.svg">Girl 14</div><div data-value="33" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/33.svg">Gril 15</div><div data-value="34" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/34.svg">Gril 16</div><div data-value="35" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/35.svg">Gril 17</div><div data-value="36" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/36.svg">Gril 18</div></div>
  </div>
  </div>

  <div class="field">
        <label>Server Lang</label>
        <div class="ui fluid search join selection dropdown">
  <input type="hidden" name="country">
  <i class="dropdown icon"></i>
  <div class="text"><i class="tr flag"></i>Türkçe</div>
  <div class="menu">

  <div class="item" data-value="8"><i class="tr flag"></i>Türkçe</div>

</div>
 </div>
      </div>
  </div>

  <div class="inline fields">
	<div class="field">
    <div class="ui proxy checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Proxy Mode</label>
    </div></div>
    <div class="field">
    <button class="ui primary button" id="addproxy" style="display: ${params.get('proxy') ? 'block' : 'none'};">Add Proxy</button></div>
    <div class="field">
    <button class="ui inverted red button button" id="clearallproxy" style="display: ${params.get('proxy') ? 'block' : 'none'};">Clear All Proxy</button></div>
    </div>

    <div class="inline fields">
    <div class="field">
    <div class="ui private checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Private Mode</label>
    </div></div>
    <div class="field">
    <button class="ui primary button" style="display: ${params.get('private-mode') ? 'block' : 'none'};" id="LoadUsernameList">Load Username List</button></div>
    <input style="display:none" type="file" id="file-input" accept="application/json">
    </div></div>

    <a href="https://ryzexmrs.github.io/ryzexms.github.io/" target="_blank" class="ui right floated
inverted button"><i class="github icon"></i>Open Source Code</a>    <div class="inline"><button class="ui primary button" id="addbot">Add Bots</button><button class="ui inverted red button" id="clearall">Clear All</button> <button class="ui right labeled icon button" id="watchtheroom">Watch The Room<i class="external link icon"></i></button>
<a href="./bot.html" class="ui right floated
inverted button"><i class="fire icon"></i>User Finder</a>
<a href="https://ryzexmrs.github.io/ryzexms.github.io/" class="ui right floated
inverted button"><i class="fire icon"></i>V1 (Old Version)</a></div> </div>
  </div>
</div>




<div class="ui tutorial modal">
  <div class="header">Important</div>
  <div class="image content">
    <img src="./tutorial.png" class="image">
    <div class="description">
      <p>Your JSON file must be like the one shown in the picture, otherwise you will get an error.</p>
      <p>You don't have to import. If you don't import, it will fetch from the API.</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui approve button">Add</div>
    <div class="ui cancel button">Cancel</div>
  </div>
</div>

<div class="ui inverted segment" id="tool" style="display: none;"><div class="ui inverted form ">
<div class="inline fields"><label>Reports:</label><div class="field"><button class="ui primary button" id="reportdraw">Report Draw</button></div><div class="field"><button class="ui red button" id="kickall">Kick All Players</button></div></div><div class="inline fields"><label>Spam:</label><div class="field"><div class="ui selection spam dropdown">
  <input type="hidden" name="gender">
  <i class="dropdown icon"></i>
  <div class="text">Chat</div>
  <div class="menu">
    <div class="item active selected" data-value="11">Chat</div>
    <div class="item" data-value="13">Answer</div>
  </div></div>
</div><div class="field">
<label>Speed (ms):</label><div class="ui labeled input"><input type="number" value="${params.get('spam-ms') || "960"}" min="960" max="1000000" id="spamms"></div>

</div><div class="field"><div class="ui labeled input" id="spamtext"><input type="text" value="${params.get('spam-text') || ":D"}" placeholder="Spam text" maxlength="1000" spellcheck="false" data-ms-editor="true"></div></div><div class="field"><button class="ui primary compact labeled icon button" id="startspam"><i class="play icon"></i> Start Spam</button></div></div>

<div class="inline fields"><label>Messaging:</label><div class="field"><div class="ui selection messaging dropdown">
  <input type="hidden" name="gender">
  <i class="dropdown icon"></i>
  <div class="text">Chat</div>
  <div class="menu">
    <div class="item active selected" data-value="11">Chat</div>
    <div class="item" data-value="13">Answer</div>
  </div></div>
</div>

<div class="field"><div class="ui labeled input" id="messagetext"><input type="text" value="${params.get('message-text') || "discord.gg/bizbizeyiz"}" placeholder="Message text" maxlength="1000" spellcheck="false" data-ms-editor="true"></div></div><div class="field">
<button class="ui primary button" id="send">Send Message</button></div>
</div>

<div class="inline fields">
<label>Automations:</label><div class="field"><div class="ui kick-the-joiner checkbox">
<input type="checkbox" tabindex="0" class="hidden" >
<label>Kick The Joiner</label>
</div></div>

<div class="field"><div class="ui rejoin checkbox">
<input type="checkbox" tabindex="0" class="hidden" >
<label>Rejoin</label>
</div></div>

<div class="field">
<label>Username Target:</label>
<div class="ui target right labeled left icon input">
  <i class="user icon"></i>
  <input type="text" placeholder="Enter Username">
  <a class="ui tag label">
    Add User
  </a>
</div>
</div>

<div class="field" id="targets">

</div>
</div>

<div class="inline fields">
<label>Drawing Bot:</label>
<div class="field">
<div class="ui drawing-bot checkbox">
<input type="checkbox" tabindex="0" class="hidden" >
<label>Skip The Formality, Draw a Picture Instead</label>
</div>
</div>

<div class="field"><label>Drawing Type:</label><div class="ui selection drawing-type dropdown">
  <input type="hidden" name="gender">
  <i class="dropdown icon"></i>
  <div class="text">Horizontal</div>
  <div class="menu">
    <div class="item active selected" data-value="horizontal">Horizontal</div>
    <div class="item" data-value="vertical">Vertical</div>
    <div class="item" data-value="random">Random</div>
  </div></div>
</div>

<div class="field">
<button class="ui primary button" id="upload">Upload a Picture</button></div>
</div>

<div id="playerlist" class="ui massive inverted relaxed divided list">

  

  </div>
</div>
<div class="ui search modal">
<i class="close icon"></i>
  <div class="header">Rooms</div>
  <div class="ui inverted segment"> 
  <div class="ui inverted secondary pointing menu">
  <a class="item">
  <div class="ui inverted left icon input">
  <input id="search-imput" type="text" placeholder="Search...">
  <i class="search icon"></i>
</div>
</a>
<a class="item">
  <div class="ui floating dropdown labeled search room icon button">
  <i class="world icon"></i>
  <span class="text"><i class="gb flag"></i>English</span>
  <div class="menu">
  <div class="item" data-value="23"><i class="az flag"></i>Azərbaycanca</div>
  <div class="item" data-value="45"><i class="id flag"></i>Bahasa Indonesia</div>
  <div class="item" data-value="11"><i class="cz flag"></i>Čeština</div>
  <div class="item" data-value="14"><i class="de flag"></i>Deutsch</div>
  <div class="item" data-value="2"><i class="gb flag"></i>English</div>
  <div class="item" data-value="3"><i class="es flag"></i>Español</div>
  <div class="item" data-value="4"><i class="fr flag"></i>Français</div>
  <div class="item" data-value="6"><i class="it flag"></i>Italiano</div>
  <div class="item" data-value="44"><i class="hu flag"></i>Magyar</div>
  <div class="item" data-value="18"><i class="nl flag"></i>Nederlands</div>
  <div class="item" data-value="10"><i class="pl flag"></i>Polski</div>
  <div class="item" data-value="1"><i class="pt flag"></i>Português</div>
  <div class="item" data-value="58"><i class="ro flag"></i>Română</div>
  <div class="item" data-value="22"><i class="sk flag"></i>Slovenčina</div>
  <div class="item" data-value="13"><i class="vn flag"></i>Tiếng Việt</div>
  <div class="item" data-value="8"><i class="tr flag"></i>Türkçe</div>
  <div class="item" data-value="21"><i class="bg flag"></i>български език</div>
  <div class="item" data-value="7"><i class="ru flag"></i>Русский</div>
  <div class="item" data-value="40"><i class="il flag"></i>עברית</div>
  <div class="item" data-value="19"><i class="sa flag"></i>العربية</div>
  <div class="item" data-value="34"><i class="ir flag"></i>فارسی</div>
  <div class="item" data-value="12"><i class="th flag"></i>ภาษาไทย</div>
  <div class="item" data-value="16"><i class="cn flag"></i>中文 (简化字)</div>
  <div class="item" data-value="9"><i class="tw flag"></i>中文 (臺灣)</div>
  <div class="item" data-value="17"><i class="hk flag"></i>中文 (香港)</div>
  <div class="item" data-value="20"><i class="kr flag"></i>한국어</div>
  <div class="item" data-value="15"><i class="jp flag"></i>日本語</div>
  </div>
</div>
</a>
<a class="item">
  <div class="ui floating dropdown labeled profil search game icon button">
  <i class="gamepad icon"></i>
  <span class="text">All</span>
  <div class="menu">
  <div class="item" data-value="">All</div>
  <div class="item" data-value="30"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/30.svg?v=1">Others / Generic</div>
  <div class="item" data-value="1"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/1.svg?v=1">General</div>
<div class="item" data-value="28"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/28.svg?v=1">Animes</div>
<div class="item" data-value="2"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/2.svg?v=1">Animals</div>
<div class="item" data-value="3"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/3.svg?v=1">Objects</div>
<div class="item" data-value="4"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/4.svg?v=1">Foods</div>
<div class="item" data-value="5"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/5.svg?v=1">Verbs</div>
<div class="item" data-value="6"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/6.svg?v=1">Jobs</div>
<div class="item" data-value="7"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/7.svg?v=1">Pokemon</div>
<div class="item" data-value="8"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/8.svg?v=1">Movies</div>
<div class="item" data-value="9"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/9.svg?v=1">Cartoons</div>
<div class="item" data-value="10"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/10.svg?v=1">Songs</div>
<div class="item" data-value="11"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/11.svg?v=1">LoL</div>
<div class="item" data-value="12"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/12.svg?v=1">Games</div>
<div class="item" data-value="13"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/13.svg?v=1">Celebrities</div>
<div class="item" data-value="14"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/14.svg?v=1">Marvel / DC</div>
<div class="item" data-value="15"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/15.svg?v=1">TV Series</div>
<div class="item" data-value="16"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/16.svg?v=1">Flags</div>
<div class="item" data-value="17"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/17.svg?v=1">Football</div>
<div class="item" data-value="18"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/18.svg?v=1">Harry Potter</div>
<div class="item" data-value="19"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/19.svg?v=1">Clash Royale</div>
<div class="item" data-value="20"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/20.svg?v=1">Lord of Rings</div>
<div class="item" data-value="21"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/21.svg?v=1">Game of Thrones</div>
<div class="item" data-value="22"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/22.svg?v=1">Dragon Ball</div>
<div class="item" data-value="23"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/23.svg?v=1">Dota</div>
<div class="item" data-value="24"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/24.svg?v=1">Youtubers</div>
<div class="item" data-value="25"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/25.svg?v=1">Streamers</div>
<div class="item" data-value="26"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/26.svg?v=1">Logos</div>
<div class="item" data-value="27"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/27.svg?v=1">Bands</div>
<div class="item" data-value="29"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/29.svg?v=1">Sports</div>
<div class="item" data-value="30"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/30.svg?v=1">Others / Generic</div>
<div class="item" data-value="31"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/31.svg?v=1">Minecraft</div>
<div class="item" data-value="32"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/32.svg?v=1">Fortnite</div>
<div class="item" data-value="33"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/33.svg?v=1">FNAF</div>
<div class="item" data-value="34"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/34.svg?v=1">Star Wars</div>
<div class="item" data-value="35"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/35.svg?v=1">Naruto</div>
<div class="item" data-value="36"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/36.svg?v=1">The Sims</div>
<div class="item" data-value="37"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/37.svg?v=1">Halloween</div>
<div class="item" data-value="38"><img class="ui avatar image" src="https://gartic.io/static/images/subjects/38.svg?v=1">Crazy Theme</div>
  </div>
</div>
</a>
</div>
</div>

  <div class="scrolling content">
    <div class="ui link four inverted segment cards">

    </div>
  </div>
</div>
`;

$('.ui.goodbye.modal')
  .modal('setting', 'closable', false)
  .modal('show')
  ;

$('.profil.bot-image.dropdown').dropdown('set selected', params.get('image') || 0);
$('.search.join.dropdown').dropdown('set selected', params.get('lang') || 2);
$('.drawing-type.dropdown').dropdown('set selected', params.get('drawing-mode') || "horizontal");


if (params.get('kick-the-joiner') || false) {
  $('.kick-the-joiner.checkbox').checkbox('check');
}

if (params.get('rejoin') || false) {
  $('.rejoin.checkbox').checkbox('check');
}

if (params.get('drawing-bot') || false) {
  $('.drawing-bot').checkbox('check');
}

if (params.has('proxy') && params.get('proxy') !== 'false') {
  $('.proxy.checkbox').checkbox('check');
  document.querySelector("#addproxy").style.display = "block";
  document.querySelector("#clearallproxy").style.display = "block";
  $('#botamount .labeled.input').addClass('disabled');
  if (JSON.parse(localStorage.getItem("proxies"))) { $('#botamount .labeled.input input').val(JSON.parse(localStorage.getItem("proxies")).length); }
} else {
  $('.proxy.checkbox').checkbox('uncheck');
  document.querySelector("#addproxy").style.display = "none";
  document.querySelector("#clearallproxy").style.display = "none";
  $('#botamount .labeled.input').removeClass('disabled');
}

if (params.get('code') && params.get('code') !== "") {
  $('.ui.search.join.dropdown').addClass('disabled');
} else {
  $('.ui.search.join.dropdown').removeClass('disabled');
}

if (params.has('private-mode') && params.get('private-mode') !== 'false') {
  $('.private.checkbox').checkbox('check');
  $('.profil.bot-image.dropdown').addClass('disabled');
  $('#botname .input').addClass('disabled');
} else {
  $('.private.checkbox').checkbox('uncheck');
  $('.profil.bot-image.dropdown').removeClass('disabled');
  $('#botname .input').removeClass('disabled');
}

let btn = document.querySelector('#addbot');
let btn2 = document.querySelector('#clearall');
let url = document.querySelector('#roomcode input');
let amount = document.querySelector('#botamount input');
let serverid = document.querySelector('#serverid input');
let watchtheroom = document.querySelector('#watchtheroom');
let fileInput = document.getElementById('file-input');

let reportdraw = document.querySelector('#reportdraw');
let kickall = document.querySelector('#kickall');
let spambutton = document.querySelector('#startspam');
let playerList = document.getElementById('playerlist');

let socketList = [];

let imageUrl = `https://raw.githubusercontent.com/anonimbiri/gartic.io-bot/main/docs/v2/draw.png`;
document.querySelector("#upload").addEventListener("click", function () {
  imageUrl = prompt("Please enter an image URL and make sure the file extension is correct (such as .png, .jpg, .svg).");
  params = new URLSearchParams(window.location.search);
  params.set('image-url', imageUrl);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, '', newUrl);
  iziToast.success({
    position: 'topRight',
    //theme: 'dark',	
    title: 'Successful',
    message: 'The İmage Has Been Uploaded.',
  });
});

function drawImageBot(imageSrc, newWs, playerServerId) {
  const imageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(imageSrc)}`;
  var image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = imageUrl;
  image.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = 767;
    canvas.height = 448;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var scaleToFit = Math.min(canvas.width / image.width, canvas.height / image.height);
    var w = image.width * scaleToFit;
    var h = image.height * scaleToFit;
    var x = (canvas.width - w) / 2;
    var y = (canvas.height - h) / 2;
    ctx.drawImage(image, x, y, w, h);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    switch (params.get('drawing-mode')) {
      case "horizontal":
      default:
        /*for (var y = 0; y < canvas.height; y++) {
          let start_x = null;
          let start_y = null;
          let current_color = null;
          for (var x = 0; x < canvas.width; x++) {
            let index = (y * canvas.width + x) * 4;
            let r = data[index];
            let g = data[index + 1];
            let b = data[index + 2];
            let color = rgbToHex(r, g, b);
            if (color !== current_color) {
              if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
                newWs.send(`42[10,${playerServerId},[5,"${current_color}"]]`);
                newWs.send(`42[10,${playerServerId},[2,${start_x},${start_y},${x},${y}]]`);
              }
              start_x = x;
              start_y = y;
              current_color = color;
            }
          }
          if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
            newWs.send(`42[10,${playerServerId},[5,"${current_color}"]]`);
            newWs.send(`42[10,${playerServerId},[2,${start_x},${start_y},${canvas.width},${y}]]`);
          }*/

        /* let lines = {};
 
         for (var y = 0; y < canvas.height; y++) {
           let start_x = null;
           let start_y = null;
           let current_color = null;
 
           for (var x = 0; x < canvas.width; x++) {
             let index = (y * canvas.width + x) * 4;
             let r = data[index];
             let g = data[index + 1];
             let b = data[index + 2];
             let color = rgbToHex(r, g, b);
 
             if (color !== current_color) {
               if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
                 let line = [start_x, start_y, x, y];
                 if (!lines[current_color]) {
                   lines[current_color] = [];
                 }
                 lines[current_color].push(line);
               }
               start_x = x;
               start_y = y;
               current_color = color;
             }
           }
 
           if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
             let line = [start_x, start_y, canvas.width, y];
             if (!lines[current_color]) {
               lines[current_color] = [];
             }
             lines[current_color].push(line);
           }
         }
 
         let colors = Object.keys(lines);
         let i = 0;
 
         function sendMessage() {
           if (i >= colors.length) {
             clearInterval(intervalId);
             return;
           }
           let color = colors[i];
           newWs.send(`42[10,${playerServerId},[5,"${color}"]]`);
           newWs.send(`42[10,${playerServerId},[3,${lines[color]}]]`);
           i++;
         }
 
         let intervalId = setInterval(sendMessage, 500);*/

        /*let chunks = { color: [], line: [] };
        for (let x = 0; x < canvas.width; x++) {
          let start_x = null;
          let start_y = null;
          let current_color = null;
          for (let y = 0; y < canvas.height; y++) {
            let index = (y * canvas.width + x) * 4;
            let r = data[index];
            let g = data[index + 1];
            let b = data[index + 2];
            let color = rgbToHex(r, g, b);
            if (color !== current_color) {
              if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
                chunks.color.push(`42[10,${playerServerId},[5,"${current_color}"]]`);
                chunks.line.push(`42[10,${playerServerId},[1,6,${start_x},${start_y},${x},${y}]]`);
              }
              start_x = x;
              start_y = y;
              current_color = color;
            }
          }
          if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
            chunks.color.push(`42[10,${playerServerId},[5,"${current_color}"]]`);
            chunks.line.push(`42[10,${playerServerId},[1,6,${start_x},${start_y},${canvas.width},${y}]]`);
          }
        }

        let i = 0;
        let interval = setInterval(() => {
          if (i >= chunks.length) {
            clearInterval(interval);
          } else {
            newWs.send(chunks.color[i]);
            newWs.send(chunks.line[i]);
            i = i + 5;
          }
        }, 200);*/

        function floodFill(canvas, data, x, y, targetColor) {
          let result = [];
          if (data[y * canvas.width + x] !== targetColor) return result;

          let queue = [[x, y]];
          while (queue.length > 0) {
            let [x, y] = queue.shift();
            if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
            if (data[y * canvas.width + x] !== targetColor) continue;
            data[y * canvas.width + x] = -1;
            result.push([x, y]);
            queue.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
          }
          return result;
        }

        let chunks = { color: [], line: [] };
        for (let x = 0; x < canvas.width; x++) {
          for (let y = 0; y < canvas.height; y++) {
            let index = (y * canvas.width + x) * 4;
            let r = data[index];
            let g = data[index + 1];
            let b = data[index + 2];
            let color = rgbToHex(r, g, b);
            if (color !== "FFFFFF") {
              let coords = floodFill(canvas, data, x, y, color);
              chunks.color.push(`42[10,${playerServerId},[5,"${color}"]]`);
              for (let coord of coords) {
                chunks.line.push(`42[10,${playerServerId},[1,6,${coord[0]},${coord[1]},${coord[0]},${coord[1]}]]`);
              }
            }
          }
        }

        let i = 0;
        let interval = setInterval(() => {
          if (i >= chunks.color.length) {
            clearInterval(interval);
          } else {
            newWs.send(chunks.color[i]);
            newWs.send(chunks.line[i]);
            i++;
          }
        }, 1000);



        break;
      case "vertical":
        for (var x = 0; x < canvas.width; x++) {
          let start_x = null;
          let start_y = null;
          let current_color = null;
          for (let y = 0; y < canvas.height; y++) {
            let index = (y * canvas.width + x) * 4;
            let r = data[index];
            let g = data[index + 1];
            let b = data[index + 2];
            let color = rgbToHex(r, g, b);
            if (color !== current_color) {
              if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
                newWs.send(`42[10,${playerServerId},[5,"${current_color}"]]`);
                newWs.send(`42[10,${playerServerId},[1,6,${start_x},${start_y},${x},${y}]]`);
              }
              start_x = x;
              start_y = y;
              current_color = color;
            }
          }
          if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
            newWs.send(`42[10,${playerServerId},[5,"${current_color}"]]`);
            newWs.send(`42[10,${playerServerId},[1,6,${start_x},${start_y},${canvas.width},${y}]]`);
          }
        }
        break;
      case "random":
        let linesArray = [];
        newWs.send(`42[10,${playerServerId},[6,"2"]]`);
        for (let y = 0; y < canvas.height; y++) {
          let start_x = null;
          let start_y = null;
          let current_color = null;
          for (let x = 0; x < canvas.width; x++) {
            let index = (y * canvas.width + x) * 4;
            let r = data[index];
            let g = data[index + 1];
            let b = data[index + 2];
            let color = rgbToHex(r, g, b);
            if (color !== current_color) {
              if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
                linesArray.push({ start_x: start_x, start_y: start_y, end_x: x, end_y: y, color: current_color });
              }
              start_x = x;
              start_y = y;
              current_color = color;
            }
          }
          if (start_x !== null && start_y !== null && current_color !== "xFFFFFF") {
            linesArray.push({ start_x: start_x, start_y: start_y, end_x: canvas.width, end_y: y, color: current_color });
          }
        }

        for (let i = linesArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [linesArray[i], linesArray[j]] = [linesArray[j], linesArray[i]];
        }

        let drawnLines = [];
        for (let i = 0; i < linesArray.length; i++) {
          let line = linesArray[i];
          if (!drawnLines.some(drawnLine => drawnLine.start_x === line.start_x && drawnLine.start_y === line.start_y && drawnLine.end_x === line.end_x && drawnLine.end_y === line.end_y)) {
            newWs.send(`42[10,${playerServerId},[5,"${line.color}"]]`);
            newWs.send(`42[10,${playerServerId},[2,${line.start_x},${line.start_y},${line.end_x},${line.end_y}]]`);
            drawnLines.push(line);
          }
        }
        break;
    }
  };
}

function rgbToHex(r, g, b) {
  if (r === 255 && g === 255 && b === 255) {
    return "xFFFFFF";
  }
  const step = 50;
  const hexR = Math.round(r / step) * step;
  const hexG = Math.round(g / step) * step;
  const hexB = Math.round(b / step) * step;
  return `x${hexR.toString(16).padStart(2, '0').toUpperCase()}${hexG.toString(16).padStart(2, '0').toUpperCase()}${hexB.toString(16).padStart(2, '0').toUpperCase()}`;
}

let people;
document.querySelector("#LoadUsernameList").addEventListener("click", function () {
  updateRoomList();
  $('.ui.tutorial.modal')
    .modal('setting', 'closable', false)
    .modal({
      onApprove: function () {
        fileInput.click();

        fileInput.addEventListener('change', function () {
          let file = fileInput.files[0];
          if (file.type !== 'application/json') {
            alert('Please select a JSON file.');
            return;
          }

          const reader = new FileReader();

          reader.onload = function (event) {
            var data = JSON.parse(event.target.result);
            people = data.people;
            peopleSettings = data.settings;
          };

          reader.readAsText(file);
        });
      }
    })
    .modal('show')
    ;
});

function createLabels() {
  let targets = [];
  const targetParams = new URLSearchParams(window.location.search).get('targets');
  if (targetParams) {
    targets = targetParams.split(',');
  }

  const targetsDiv = document.querySelector("#targets");
  targets.forEach((target) => {
    const label = document.createElement("div");
    const icon = document.createElement("i");
    label.classList.add("ui", "image", "label");
    icon.classList.add("delete", "icon");
    icon.addEventListener("click", function () {
      const index = targets.indexOf(target);
      if (index !== -1) targets.splice(index, 1);
      const params = new URLSearchParams(window.location.search);
      params.set('targets', targets);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
      label.remove();
    });
    label.textContent = target;
    label.appendChild(icon);
    targetsDiv.appendChild(label);
  });

  document.querySelector(".ui.tag.label").addEventListener("click", function () {
    const inputVal = document.querySelector('.target input').value;

    if (targets.includes(inputVal)) { // hedef zaten varsa
      iziToast.info({
        position: 'topRight',
        //theme: 'dark',
        title: 'Not Added',
        message: `${inputVal} is Already in The List!`
      });
      return;
    }

    if (!inputVal) {
      iziToast.info({
        position: 'topRight',
        //theme: 'dark',
        title: 'Not Added',
        message: `You Cannot Add an Empty Username!`
      });
      return;
    }

    targets.push(inputVal); // yeni hedefi diziye ekle

    // yeni hedefi etiket olarak oluştur
    const label = document.createElement("div");
    const icon = document.createElement("i");
    label.classList.add("ui", "image", "label");
    icon.classList.add("delete", "icon");
    icon.addEventListener("click", function () {
      const index = targets.indexOf(inputVal);
      if (index !== -1) targets.splice(index, 1); // hedefi diziden sil
      const params = new URLSearchParams(window.location.search);
      params.set('targets', targets);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
      label.remove(); // etiketi sayfadan sil
    });
    label.textContent = inputVal;
    label.appendChild(icon);
    targetsDiv.appendChild(label);

    // URL parametrelerini güncelle
    const params = new URLSearchParams(window.location.search);
    params.set('targets', targets);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  });
}

// call the function when page is loaded
document.addEventListener("DOMContentLoaded", createLabels);

// call the function when targets array is updated
window.addEventListener("popstate", createLabels);


let subjects = {
  0: "Others / Generic",
  1: "General",
  28: "Animes",
  2: "Animals",
  3: "Objects",
  4: "Foods",
  5: "Verbs",
  6: "Jobs",
  7: "Pokemon",
  8: "Movies",
  9: "Cartoons",
  10: "Songs",
  11: "LoL",
  12: "Games",
  13: "Celebrities",
  14: "Marvel / DC",
  15: "TV Series",
  16: "Flags",
  17: "Football",
  18: "Harry Potter",
  19: "Clash Royale",
  20: "Lord of Rings",
  21: "Game of Thrones",
  22: "Dragon Ball",
  23: "Dota",
  24: "Youtubers",
  25: "Streamers",
  26: "Logos",
  27: "Bands",
  29: "Sports",
  30: "Others / Generic",
  31: "Minecraft",
  32: "Fortnite",
  33: "FNAF",
  34: "Star Wars",
  35: "Naruto",
  36: "The Sims",
  37: "Halloween",
  38: "Crazy Theme"
}

document.querySelector("#search").addEventListener("click", function () {
  updateRoomList();
  $('.ui.search.modal')
    .modal('setting', 'closable', false)
    .modal('show')
    ;
});

document.querySelector("#search-imput").onchange = function () {
  updateRoomList();
}

function updateRoomList() {
  document.querySelector(".ui.link.cards").innerHTML = `
  <div class="ui card">
    <div class="image">
      <div class="ui placeholder">
        <div class="square image"></div>
      </div>
    </div>
    <div class="content">
      <div class="ui placeholder">
        <div class="header">
        <div class="medium line"></div>
          <div class="very short line"></div>
        </div>
      </div>
    </div>
    <div class="extra content">
    <div class="ui placeholder">
    <span class="right floated"><div class="very short line"></div></span>
    <span><div class="very short line"></div></span>
    </div>
    </div>
  </div>  <div class="ui card">
  <div class="image">
    <div class="ui placeholder">
      <div class="square image"></div>
    </div>
  </div>
  <div class="content">
    <div class="ui placeholder">
      <div class="header">
      <div class="medium line"></div>
        <div class="very short line"></div>
      </div>
    </div>
  </div>
  <div class="extra content">
  <div class="ui placeholder">
  <span class="right floated"><div class="very short line"></div></span>
  <span><div class="very short line"></div></span>
  </div>
  </div>
</div>  <div class="ui card">
<div class="image">
  <div class="ui placeholder">
    <div class="square image"></div>
  </div>
</div>
<div class="content">
  <div class="ui placeholder">
    <div class="header">
    <div class="medium line"></div>
      <div class="very short line"></div>
    </div>
  </div>
</div>
<div class="extra content">
<div class="ui placeholder">
<span class="right floated"><div class="very short line"></div></span>
<span><div class="very short line"></div></span>
</div>
</div>
</div>  <div class="ui card">
<div class="image">
  <div class="ui placeholder">
    <div class="square image"></div>
  </div>
</div>
<div class="content">
  <div class="ui placeholder">
    <div class="header">
    <div class="medium line"></div>
      <div class="very short line"></div>
    </div>
  </div>
</div>
<div class="extra content">
<div class="ui placeholder">
<span class="right floated"><div class="very short line"></div></span>
<span><div class="very short line"></div></span>
</div>
</div>
</div>
  <div class="ui card">
    <div class="image">
      <div class="ui placeholder">
        <div class="square image"></div>
      </div>
    </div>
    <div class="content">
      <div class="ui placeholder">
        <div class="header">
        <div class="medium line"></div>
          <div class="very short line"></div>
        </div>
      </div>
    </div>
    <div class="extra content">
    <div class="ui placeholder">
    <span class="right floated"><div class="very short line"></div></span>
    <span><div class="very short line"></div></span>
    </div>
    </div>
  </div>  <div class="ui card">
  <div class="image">
    <div class="ui placeholder">
      <div class="square image"></div>
    </div>
  </div>
  <div class="content">
    <div class="ui placeholder">
      <div class="header">
      <div class="medium line"></div>
        <div class="very short line"></div>
      </div>
    </div>
  </div>
  <div class="extra content">
  <div class="ui placeholder">
  <span class="right floated"><div class="very short line"></div></span>
  <span><div class="very short line"></div></span>
  </div>
  </div>
</div>  <div class="ui card">
<div class="image">
  <div class="ui placeholder">
    <div class="square image"></div>
  </div>
</div>
<div class="content">
  <div class="ui placeholder">
    <div class="header">
    <div class="medium line"></div>
      <div class="very short line"></div>
    </div>
  </div>
</div>
<div class="extra content">
<div class="ui placeholder">
<span class="right floated"><div class="very short line"></div></span>
<span><div class="very short line"></div></span>
</div>
</div>
</div>  <div class="ui card">
<div class="image">
  <div class="ui placeholder">
    <div class="square image"></div>
  </div>
</div>
<div class="content">
  <div class="ui placeholder">
    <div class="header">
    <div class="medium line"></div>
      <div class="very short line"></div>
    </div>
  </div>
</div>
<div class="extra content">
<div class="ui placeholder">
<span class="right floated"><div class="very short line"></div></span>
<span><div class="very short line"></div></span>
</div>
</div>
</div>`;

  fetch(roomsubject ? `https://gartic.io/req/list?search=${document.querySelector("#search-imput").value || ""}&language[]=${roomlang}&subject[]=${roomsubject}` : `https://gartic.io/req/list?search=${document.querySelector("#search-imput").value || ""}&language[]=${roomlang}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector(".ui.link.cards").innerHTML = ``;
      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("ui", "fluid", "image");

        const image = document.createElement("img");
        image.setAttribute("src", `https://gartic.io/static/images/subjects/${item.subject}.svg?v=1`);

        imageDiv.appendChild(image);

        if (item.official) {
          const div = document.createElement('div');
          div.classList.add('ui', 'pink', 'ribbon', 'label');

          const icon = document.createElement('i');
          icon.classList.add('check', 'circle', 'icon');

          div.textContent = 'Official';
          card.classList.add("pink");

          div.insertBefore(icon, div.firstChild);
          imageDiv.appendChild(div);
        }

        const content = document.createElement("div");
        content.classList.add("content");

        const header = document.createElement("div");
        header.classList.add("header");
        header.innerText = subjects[item.subject];

        const meta = document.createElement("div");
        meta.classList.add("meta");

        const subtitle = document.createElement("a");
        subtitle.innerText = item.id;

        meta.appendChild(subtitle);

        content.appendChild(header);
        content.appendChild(meta);

        const extraContent = document.createElement("div");
        extraContent.classList.add("extra", "content");

        const joinSpan = document.createElement("span");
        joinSpan.classList.add("right", "floated");
        joinSpan.innerText = `Rating: ${item.rating || 0}`;

        const friendsSpan = document.createElement("span");
        const userIcon = document.createElement("i");
        userIcon.classList.add("user", "icon");
        friendsSpan.appendChild(userIcon);
        friendsSpan.appendChild(document.createTextNode(`${item.quant} / ${item.max}`));

        extraContent.appendChild(joinSpan);
        extraContent.appendChild(friendsSpan);

        card.addEventListener("click", function () {
          url.value = item.code;
          $('.ui.search.modal')
            .modal('hide')
            ;
        });

        card.appendChild(imageDiv);
        card.appendChild(content);
        card.appendChild(extraContent);
        document.querySelector(".ui.link.cards").appendChild(card)
      });
    })
    .catch(error => console.error(error));
};

let lastRandomSeconds = null;

let peopleSettings;
function waitRandomSeconds() {
  let minSeconds = (people && peopleSettings && peopleSettings && peopleSettings.minSeconds !== undefined) ? peopleSettings.minSeconds : 1;
  let maxSeconds = (people && peopleSettings && peopleSettings && peopleSettings.maxSeconds !== undefined) ? peopleSettings.maxSeconds : 10;

  let randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;

  // If the previous random seconds are within +/- 2 of the current random seconds,
  // generate new random seconds until they are not
  while (lastRandomSeconds && Math.abs(randomSeconds - lastRandomSeconds) <= 2) {
    randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
  }

  iziToast.info({
    position: 'topRight',
    //theme: 'dark',
    title: 'Waiting',
    message: `Next bot Will Join After Randomly Selected ${randomSeconds} Seconds.`
  });

  lastRandomSeconds = randomSeconds;

  return new Promise(resolve => setTimeout(resolve, randomSeconds * 1000));
}

let cooldowns = {};
let messageSent = false;
let rejoin = false;
let warningMessage = true;
btn.addEventListener('click', function () {
  addBot();
});

async function addBot(botAmount) {
  params = new URLSearchParams(window.location.search);
  params.set('name', document.querySelector('#botname div input').value);
  params.set('code', url.value);
  params.set('amount', amount.value);
  params.set('image', profilepicture);
  params.set('lang', serverlang);
  params.set('proxy', document.querySelector('.proxy.checkbox input').checked);
  params.set('private-mode', document.querySelector('.private.checkbox input').checked);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, '', newUrl);
  btn.setAttribute("class", "ui primary disabled loading button");

  let proxylist = JSON.parse(localStorage.getItem("proxies"));

  warningMessage = true;

  const response = await fetch(url.value ? `https://gartic.io/server?check=1&room=${params.get('code')}` : `https://gartic.io/server?check=1&lang=${params.get('lang')}`);
  const data = await response.text();

  let t = botAmount || params.get('amount');

  for (let i = 0; i < t; i++) {


    let modifiedName;
    let modifiedProfil;
    if (params.get('private-mode') === "true") {
      await waitRandomSeconds();
      try {
        let username;
        let gender;

        if (people) {

          if (people.length < 1) {
            warningMessage = false;
          }

          username = people[Math.floor(Math.random() * people.length)].name;
          gender = people[Math.floor(Math.random() * people.length)].gender;

          people = people.filter(function (person) {
            return person.name !== username;
          });

          const regex = /\b[aAá]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aAá]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aAá][^\w\s]*){2,}|\b[ᴬaAá][ˡlL1Ii][ᴸlL1Ii]?[ᴬaAá][ℍhH](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼áaAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[aAá][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼aáAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*\b|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|İsa|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|(?:\W*[\/\*\-+.,:;]\W*)*Y(?:\W*[\/\*\-+.,:;]\W*)*a(?:\W*[\/\*\-+.,:;]\W*)*h(?:\W*[\/\*\-+.,:;]\W*)*v(?:\W*[\/\*\-+.,:;]\W*)*e|(?:\W*[\/\*\-+.,:;]\W*)*İ(?:\W*[\/\*\-+.,:;]\W*)*\b/gi;

          if (regex.test(username)) {
            document.querySelector('#botname div input').value = "mikey";
            username = "";
          }
        }

        if (!username || !gender || !people) {
          const lang = navigator.language.slice(0, 2); // Kullanıcının tarayıcı ayarlarından dil kodunu al
          let response = await fetch(`https://randomuser.me/api/?nat=${lang}`); // Rastgele bir kullanıcı seç
          let data = await response.json();

          // Eğer seçilen ülkede "id" alanı boş olan bir kullanıcı varsa, bu kullanıcının "login.username" özelliğini al
          if (data.results[0].id.value === null) {
            username = data.results[0].name.first;
            gender = data.results[0].gender;
          } else {
            // Eğer seçilen ülkede "id" alanı boş olan bir kullanıcı yoksa, başka bir ülke seç ve tekrar deneyin
            let newLang = lang;
            while (newLang === lang) {
              // Farklı bir ülke seçmek için döngü kullanabilirsiniz
              newLang = getRandomLanguage();
            }
            console.log(newLang);
            response = await fetch(`https://randomuser.me/api/?nat=${newLang}`);
            data = await response.json();
            username = data.results[0].name.first;
            gender = data.results[0].gender;
          }

          function getRandomLanguage() {
            const languages = ["au", "br", "ca", "ch", "de", "dk", "es", "fi", "fr", "gb", "ie", "ir", "no", "nl", "nz", "tr", "us"];
            return languages[Math.floor(Math.random() * languages.length)]; // Rastgele bir dil kodu seç
          }
        }
        modifiedName = username;
        if (gender === "male") {
          modifiedProfil = Math.floor(Math.random() * 19);
        } else if (gender === "female") {
          modifiedProfil = Math.floor(Math.random() * 18) + 19;
        } else {
          modifiedProfil = Math.floor(Math.random() * 37);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      modifiedProfil = params.get('image');

      let name = params.get('name');

      const regex = /\b[aAá]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aAá]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aAá][^\w\s]*){2,}|\b[ᴬaAá][ˡlL1Ii][ᴸlL1Ii]?[ᴬaAá][ℍhH](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼áaAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[aAá][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼aáAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*\b|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|İsa|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|(?:\W*[\/\*\-+.,:;]\W*)*Y(?:\W*[\/\*\-+.,:;]\W*)*a(?:\W*[\/\*\-+.,:;]\W*)*h(?:\W*[\/\*\-+.,:;]\W*)*v(?:\W*[\/\*\-+.,:;]\W*)*e|(?:\W*[\/\*\-+.,:;]\W*)*İ(?:\W*[\/\*\-+.,:;]\W*)*\b/gi;

      if (regex.test(name)) {
        document.querySelector('#botname div input').value = "mikey";
        name = "mikey";
      }
      // Rastgele bir pozisyon seçerek '.' karakteri ekleyelim
      const randomIndex = Math.floor(Math.random() * (name.length + 1));
      modifiedName = name.slice(0, randomIndex) + '឵' + name.slice(randomIndex);
    }

    let socket = null;
    if (params.get('proxy') === "true") {
      if (proxylist) {
        const encodedUrl = btoa(`wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`);
        socket = new WebSocket(`wss://${proxylist[i]}/__cpw.php?u=${encodedUrl}&o=aHR0cHM6Ly9nYXJ0aWMuaW8=`, null);
      } else {
        iziToast.error({
          position: 'topRight',
          //theme: 'dark',	
          title: 'Error',
          message: 'You Need to Add a Proxy First.',
        });
      }
    } else {
      socket = new WebSocket(`wss:${data.split(":")[1]}/socket.io/?EIO=3&transport=websocket`, null);
    }

    socketList.push(socket);

    socket.playerName = modifiedName;
    socket.vote = 0;
    socket.isRoom = false;

    socket.addEventListener('open', (event) => {
      document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    });

    if (!warningMessage) {
      break;
    }

    socket.addEventListener('message', (event) => {

      if (event.data === '40') {
        if (url.value == "") {
          socket.send(`42[1,{"v":20000,"nick":"${modifiedName}","avatar":${modifiedProfil},"idioma":${params.get('lang')}}]`);
        } else {
          socket.send(`42[3,{"v":20000,"nick":"${modifiedName}","avatar":${modifiedProfil},"sala":"${params.get('code').slice(-4)}"}]`);
        }
      } else if (event.data === '42[6,4]') {
        if (warningMessage) {
          warningMessage = false;
          $('.tiny.connection.problem.modal')
            .modal({
              closable: false,
            })
            .modal('show');
        }
      } else if (event.data === '42[6,3]') {
        if (warningMessage) {
          warningMessage = false;
          $('.tiny.full.room.modal')
            .modal({
              closable: false,
            })
            .modal('show');
        }
      } else if (event.data === '41') {
        socket.close();
      }
      if (!event.data.includes('[')) return;
      const data = JSON.parse(event.data.replace(/^\d+/g, ''));
      switch (data[0]) {
        case 5: {
          const playerId = data[2];
          const playerCode = data[1];
          socket.playerId = playerId; // playerId'yi soket nesnesine kaydet
          socket.playerCode = playerCode; // playerCode'yi soket nesnesine kaydet
          socket.players = data[5]; // players'i soket nesnesine kaydet
          socket.isRoom = true;
          socket.send(`42[46,${playerId}]`);
          if (params.get('private-mode') !== "true") { socket.send(`42[11,"${playerId}"," Discord : Ryzex#4347"]`); }
          updateUserList(data[5]);
          iziToast.info({
            position: 'topRight',
            //theme: 'dark',
            title: 'Joined',
            message: `WebSocket ${i} Joined the Server.`
          });
          break;
        }
        case 23: {
          const existingItem = playerList.querySelector(`.item[data-player-id="${data[1].id}"]`);

          socket.players.unshift(data[1]);

          if (!existingItem) {
            let found = socketList.every((s) => s.playerCode !== data[1].id);
            if (!found) return;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.setAttribute('data-player-id', data[1].id);

            const rightContentDiv = document.createElement('div');
            rightContentDiv.classList.add('right', 'floated', 'content');

            const kickButton = document.createElement('div');
            kickButton.classList.add('ui', 'red', 'button');
            kickButton.textContent = 'Kick Player';

            rightContentDiv.appendChild(kickButton);

            const avatarImg = document.createElement('img');
            avatarImg.classList.add('ui', 'avatar', 'image');
            avatarImg.setAttribute("data-name", data[1].nick);
            if (data[1].foto) {
              avatarImg.src = data[1].foto;
            } else {
              avatarImg.src = `https://gartic.io/static/images/avatar/svg/${data[1].avatar}.svg`;
            }
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('content');
            contentDiv.textContent = data[1].nick;

            itemDiv.appendChild(rightContentDiv);
            itemDiv.appendChild(avatarImg);
            itemDiv.appendChild(contentDiv);

            playerList.appendChild(itemDiv);

            kickButton.addEventListener('click', function (event) {
              socketList.forEach((socket) => {
                socket.send(`42[45,${socket.playerId},["${data[1].id}",true]]`);
              });
              iziToast.success({
                position: 'topRight',
                //theme: 'dark',	
                title: 'Successful',
                message: 'the ' + data[1].nick + ' player was kicked',
              });
            });

            let targets = [];
            const targetParams = new URLSearchParams(window.location.search).get('targets');
            if (targetParams) {
              targets = targetParams.split(',');
            }

            if (targets.includes(data[1].nick.replace("឵", ""))) {
              for (const s of socketList) {
                s.send(`42[45,${s.playerId},["${data[1].id}",true]]`);
              }
            }

            var kickTheJoiner = params.get('kick-the-joiner') || false;
            if (kickTheJoiner) {
              let found = socketList.every((s) => s.playerCode !== data[1].id);
              if (!found) return;
              for (const s of socketList) {
                console.log(data);
                if (s.playerCode !== data[1].id) {
                  s.send(`42[45,${s.playerId},["${data[1].id}",true]]`);
                }
              }
            }


          }
          break;
        }
        case 24: {
          const existingItem = playerList.querySelector(`.item[data-player-id="${data[1]}"]`);

          let index = socket.players.findIndex(player => player.id === data[1]);
          if (index !== -1) {
            socket.players.splice(index, 1);
          }

          if (existingItem) {
            existingItem.remove();
          }

          var leaveTheJoiner = params.get('rejoin') || false;
          if (leaveTheJoiner) {
            if (!rejoin) {
              setTimeout(function () {
                rejoin = false;
              }, 1000);
              rejoin = true;
              addBot(2);
            }
          }
          break;
        }
        case 16: {
          const playerId = socket.playerId;
          var drawingBot = params.get('drawing-bot') || false;
          var image_url = params.get('image-url') || imageUrl;
          if (drawingBot === "true") {
            if (!image_url) return socket.send(`42[25,${playerId}]`);
            socket.send(`42[34,${playerId},${Math.round(Math.random())}]`);
            drawImageBot(image_url, socket, playerId, "random");
          } else {
            socket.send(`42[25,${playerId}]`);
          }
          break;
        }
        case 11: {
          if (data[2] === "‫!xd‫") {
            const playerId = socket.playerId;
            socket.send(`42[11,"${playerId}","Hintli kız seven biri bunu kullandı."]`);
            socket.send(`42[24,${playerId}]`);
          }
          if (!messageSent) {
            setTimeout(function () {
              messageSent = false;
            }, 1000);
            messageSent = true;
            if (data[2] === "124235252545623453246523256234") {
              const playerId = socket.playerId;
              const now = Date.now();
              const lastUsed = cooldowns[playerId] || 0;
              const diff = now - lastUsed;
              cooldowns[data[1]] = now;

              const randomIndex = Math.floor(Math.random() * (name.length + 1));

              if (diff < 10000) { // 10 second cooldown
                const message = "Please wait a few seconds before using this command again.";
                socket.send(`42[11,"${playerId}","${message.slice(0, randomIndex) + '឵' + message.slice(randomIndex)}"]`);
                return;
              }

              const message = "Here are the commands: !help, !link, !pp <username> (optional)";
              socket.send(`42[11,"${playerId}","${message.slice(0, randomIndex) + '឵' + message.slice(randomIndex)}"]`);
            }
            if (data[2] === "paylaş") {
              const playerId = socket.playerId;
              const now = Date.now();
              const lastUsed = cooldowns[playerId] || 0;
              const diff = now - lastUsed;

              cooldowns[data[1]] = now;

              const randomIndex = Math.floor(Math.random() * (name.length + 1));

              if (diff < 10000) { // 10 second cooldown
                const message = "Please wait a few seconds before using this command again.";
                socket.send(`42[11,"${playerId}","${message.slice(0, randomIndex) + '឵' + message.slice(randomIndex)}"]`);
                return;
              }

              socket.send(`42[11,"${playerId}","https://discord.gg/keskin"]`);
            }
            if (data[2].startsWith("pfp")) {
              const playerNick = data[2].toLowerCase().split(" ").slice(1).join(" ");
              const playerId = socket.playerId;
              const now = Date.now();
              const lastUsed = cooldowns[playerId] || 0;
              const diff = now - lastUsed;

              const randomIndex = Math.floor(Math.random() * (name.length + 1));

              if (diff < 10000) { // 10 second cooldown
                const message = "Please wait a few seconds before using this command again.";
                socket.send(`42[11,"${playerId}","${message.slice(0, randomIndex) + '឵' + message.slice(randomIndex)}"]`);
                return;
              }

              cooldowns[data[1]] = now;

              let player;
              if (playerNick) {
                player = socket.players.find(player => player.nick.toLowerCase().includes(playerNick));
              } else {
                player = socket.players.find(player => player.id === data[1]);
              }

              if (!player) {
                const message = "The user cannot be found.";
                socket.send(`42[11,"${playerId}","${message.slice(0, randomIndex) + '឵' + message.slice(randomIndex)}"]`);
                return;
              }
              const playerInfo = player?.foto || `https://gartic.io/static/images/avatar/svg/${player?.avatar}.svg`;
              socket.send(`42[11,"${playerId}","${playerInfo}"]`);
            }
            break;
          }
        }
        case 45: {
          const playerId = socket.playrIed;
          const playerCode = socket.playerCode;
          if (data[2] == playerCode) {
            socket.vote++;
            if (socket.vote >= 3) {
              socket.send(`42[24,${playerId}]`);
              addBot(2);
            }
            var audio = new Audio('warning.mp3');
            audio.play();
            audio = null;
            iziToast.warning({
              position: 'topRight',
              //theme: 'dark',
              title: 'Warning',
              message: `A Bot Voted for Throwing a WebSocket ${i}: ${socket.vote}/3`
            });
          }
          break;
        }
        case 19: {
          reportdraw.disabled = true; // Disable the button
          break;
        }
        case 34: {
          reportdraw.disabled = false; // Enable the button again
          break;
        }
      }
    });

    socket.onerror = function (error) {
      console.error(`WebSocket ${i} Connection has Been Closed due to an issue.`);
      socket.isRoom = false;
      /*iziToast.error({
        position: 'topRight',
        //theme: 'dark',	
        title: 'Error',
        message: `WebSocket ${i} Connection has Been Closed due to an issue.`,
      });*/
    };

    socket.onclose = function (event) {
      console.error(`Connection to Server WebSocket ${i} has Been Lost.`);
      socket.isRoom = false;
      /*iziToast.error({
        position: 'topRight',
        //theme: 'dark',	
        title: 'Error',
        message: `Connection to Server WebSocket ${i} has Been Lost.`,
      });*/
    };

  }

  document.querySelector("#tool").style.display = 'block';
  btn.setAttribute("class", "ui primary button");

  iziToast.success({
    position: 'topRight',
    //theme: 'dark',
    title: 'Successful',
    message: 'Creating Bots'
  });

};
btn2.addEventListener("click", function () {
  if (socketList) {
    warningMessage = false;
    socketList.forEach(function (socket) {
      if (socket.readyState === WebSocket.OPEN) {
        if (params.get('private-mode') === "true") { socket.send(`42[11,"${socket.playerId}","sa"]`); }
        socket.close();
        socket.onerror = null;
        socket.onclose = null;
      }
    });

    document.querySelector("#tool").style.display = 'none';
    socketList = [];
    playerList.innerHTML = "";

    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'All Bots Destroyed',
    });
  } else {
    iziToast.error({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Error',
      message: 'Guess No Bots',
    });
  }

});
watchtheroom.addEventListener("click", function () {
  if (url.value != "") {
    window.open(`https://gartic.io/${url.value}/viewer`, 'viewer');
  } else {
    iziToast.error({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Error',
      message: "You didn't give me a code to monitor the room",
    });
  }
});

url.onchange = function () { url.value = url.value.replace("https://gartic.io/", "").replace("/viewer", ""); if (url.value) { $('.ui.search.join.dropdown').addClass('disabled'); } else { $('.ui.search.join.dropdown').removeClass('disabled'); } };

var profilepicture = params.get('image') || 0;
var serverlang = params.get('lang') || 2;
var roomlang = 2;
var roomsubject = "";

function updateUserList(players) {

  const container = document.getElementById('playerlist');

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  players.forEach(player => {
    if (!socketList.find((s) => s.playerCode === player.id)) {

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.setAttribute('data-player-id', player.id);

      const rightContentDiv = document.createElement('div');
      rightContentDiv.classList.add('right', 'floated', 'content');

      const kickButton = document.createElement('div');
      kickButton.classList.add('ui', 'red', 'button');
      kickButton.textContent = 'Kick Player';

      rightContentDiv.appendChild(kickButton);

      const avatarImg = document.createElement('img');
      avatarImg.classList.add('ui', 'avatar', 'image');
      avatarImg.setAttribute("data-name", player.nick);
      if (player.foto) {
        avatarImg.src = player.foto;
      } else {
        avatarImg.src = `https://gartic.io/static/images/avatar/svg/${player.avatar}.svg`;
      }
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      contentDiv.textContent = player.nick;

      itemDiv.appendChild(rightContentDiv);
      itemDiv.appendChild(avatarImg);
      itemDiv.appendChild(contentDiv);

      container.appendChild(itemDiv);

      kickButton.addEventListener('click', function (event) {
        socketList.forEach((socket) => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(`42[45,${socket.playerId},["${player.id}",true]]`);
          }
        });
        iziToast.success({
          position: 'topRight',
          //theme: 'dark',	
          title: 'Successful',
          message: 'the ' + player.nick + ' player was kicked',
        });
      });
    }
  });

}

reportdraw.addEventListener("click", function () {
  reportdraw.disabled = true; // Disable the button
  socketList.forEach((socket) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(`42[35,${socket.playerId}]`);
      //console.log(`WebSocket ${socket.playerId} playerId ile resim rapor edildi`);
    }
  }, () => {
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Drawing Reported',
    });
  });
});


kickall.addEventListener("click", async function () {
  try {
    if (socketList?.length) {
      kickall.disabled = true; // Disable the button
      await Promise.all(socketList.map(async (socket) => {
        if (socket.players?.length) {
          for (let j = 0; j < socket.players.length; j++) {
            const player = socket.players[j];
            const isOpen = (socket) => socket.readyState === WebSocket.OPEN; // Bağlantı açık mı?
            if (!socketList.find((s) => s.playerCode === player.id && isOpen(s))) {
              socket.send(`42[45,${socket.playerId},["${player.id}",true]]`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before sending next message
          }
        }
      }));
      iziToast.success({
        position: 'topRight',
        //theme: 'dark',	
        title: 'Successful',
        message: 'All Players Reported',
      });
      kickall.disabled = false; // Enable the button again
    } else {
      iziToast.error({
        position: 'topRight',
        //theme: 'dark',	
        title: 'Error',
        message: 'Sockets Not Found.',
      });
      kickall.disabled = false; // Enable the button again
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Error',
      message: error.message,
    });
    kickall.disabled = false; // Enable the button again
  }
});

//basic modal

let spam = false;
var spamType = 11;
var messageType = 11;
spambutton.addEventListener("click", function () {
  if (spam == false) {
    startSpamIntervalId()
    spam = true;
    spambutton.innerHTML = '<i class="stop icon"></i> Stop Spam'
    params = new URLSearchParams(window.location.search);
    params.set('spam-text', document.querySelector('#spamtext input').value);
    params.set('spam-ms', document.querySelector('#spamms').value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Spam Started',
    });
  } else {
    clearInterval(spamIntervalId);
    spam = false;
    spambutton.innerHTML = '<i class="play icon"></i> Start Spam'
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',	
      title: 'Successful',
      message: 'Spam Stopped',
    });
  }
});
document.querySelector("#addproxy").addEventListener("click", function () {
  alert("Go to https://gartic.io/ from the opened website and copy the page link. Then come back here and paste it.");
  window.open('https://www.blockaway.net/', 'blockaway');

  /*// Yeni bir pencere açar
  var win = window.open('bank', 'croxyproxy');

  // HTML formu oluşturur
  var form = win.document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", `https://www.stackfront.xyz/servers`);

  var hiddenField = win.document.createElement("input");
  hiddenField.setAttribute("type", "hidden");
  hiddenField.setAttribute("name", "url");
  hiddenField.setAttribute("value", "https://gartic.io/");
  form.appendChild(hiddenField);

  win.document.body.appendChild(form);
  form.submit();*/

  setTimeout(function () {
    window.addEventListener("focus", getProxy);
  }, 500);
});
document.querySelector("#clearallproxy").addEventListener("click", function () {
  localStorage.removeItem('proxies');
  iziToast.success({
    position: 'topRight',
    //theme: 'dark',	
    title: 'Successful',
    message: 'The Proxys Were All Deleted.',
  });
});
$('.proxy.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      document.querySelector("#addproxy").style.display = "block";
      document.querySelector("#clearallproxy").style.display = "block";
      $('#botamount .labeled.input').addClass('disabled');
      if (JSON.parse(localStorage.getItem("proxies"))) { $('#botamount .labeled.input input').val(JSON.parse(localStorage.getItem("proxies")).length); }
    },
    onUnchecked: function () {
      document.querySelector("#addproxy").style.display = "none";
      document.querySelector("#clearallproxy").style.display = "none";
      $('#botamount .labeled.input').removeClass('disabled');
    }
  })
  ;
$('.private.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      $('.profil.bot-image.dropdown').addClass('disabled');
      $('#botname .input').addClass('disabled');
      document.querySelector("#LoadUsernameList").style.display = "block";
    },
    onUnchecked: function () {
      $('.profil.bot-image.dropdown').removeClass('disabled');
      $('#botname .input').removeClass('disabled');
      document.querySelector("#LoadUsernameList").style.display = "none";
    }
  })
  ;
$('.kick-the-joiner.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      params = new URLSearchParams(window.location.search);
      params.set('kick-the-joiner', true);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    },
    onUnchecked: function () {
      params = new URLSearchParams(window.location.search);
      params.delete('kick-the-joiner');
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  })
  ;
$('.rejoin.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      params = new URLSearchParams(window.location.search);
      params.set('rejoin', true);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    },
    onUnchecked: function () {
      params = new URLSearchParams(window.location.search);
      params.delete('rejoin');
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  })
  ;
$('.drawing-bot.checkbox')
  .checkbox({
    // check all children
    onChecked: function () {
      params = new URLSearchParams(window.location.search);
      params.set('drawing-bot', true);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    },
    onUnchecked: function () {
      params = new URLSearchParams(window.location.search);
      params.delete('drawing-bot');
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  })
  ;
$('.drawing-type.dropdown')
  .dropdown({
    clearable: false,
    defaultValue: 'horizontal',
    onChange: function (value, text, $selectedItem) {
      params = new URLSearchParams(window.location.search);
      params.set('drawing-mode', value);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  })
  ;
$('.profil.dropdown')
  .dropdown({
    clearable: false,
    defaultValue: '5',
    onChange: function (value, text, $selectedItem) {
      profilepicture = value;
    }
  })
  ;
$('.search.join.dropdown')
  .dropdown({
    clearable: false,
    onChange: function (value, text, $selectedItem) {
      serverlang = value;
    }
  })
  ;
$('.search.room.dropdown')
  .dropdown({
    clearable: false,
    onChange: function (value, text, $selectedItem) {
      roomlang = value;
      updateRoomList()
    }
  })
  ;
$('.search.game.dropdown')
  .dropdown({
    clearable: false,
    defaultValue: '',
    onChange: function (value, text, $selectedItem) {
      roomsubject = value;
      updateRoomList()
    }
  })
  ;
$('.spam.dropdown')
  .dropdown({
    clearable: false,
    onChange: function (value, text, $selectedItem) {
      spamType = value;
    }
  })
  ;
$('.messaging.dropdown')
  .dropdown({
    clearable: false,
    onChange: function (value, text, $selectedItem) {
      messageType = value;
    }
  })
  ;

setInterval(function () {
  socketList.forEach((socket) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(`42[42, ${socket.playerId}]`);
      //console.log(`WebSocket ${socket.playerId} playerId'li kulanıcı için anti afk gönderildi`);
    }
  });
}, 5000);

document.querySelector("#send").addEventListener("click", function () {
  params = new URLSearchParams(window.location.search);
  params.set('message-text', document.querySelector('#messagetext input').value);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, '', newUrl);

  let messagetext = params.get('message-text');
  const regex = /\b[aAá]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aAá]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aAá][^\w\s]*){2,}|\b[ᴬaAá][ˡlL1Ii][ᴸlL1Ii]?[ᴬaAá][ℍhH](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼áaAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[aAá][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼aáAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*\b|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|İsa|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|(?:\W*[\/\*\-+.,:;]\W*)*Y(?:\W*[\/\*\-+.,:;]\W*)*a(?:\W*[\/\*\-+.,:;]\W*)*h(?:\W*[\/\*\-+.,:;]\W*)*v(?:\W*[\/\*\-+.,:;]\W*)*e|(?:\W*[\/\*\-+.,:;]\W*)*İ(?:\W*[\/\*\-+.,:;]\W*)*\b/gi;

  if (regex.test(messagetext)) {
    document.querySelector('#messagetext input').value = "mikey";
    messagetext = "mikey";
  }

  let openSockets = socketList.filter(socket => socket.readyState === WebSocket.OPEN && socket.isRoom);

  switch (messageType) {
    case "11":
    default:
      const randomIndex = Math.floor(Math.random() * openSockets.length);
      openSockets[randomIndex].send(`42[${messageType},"${openSockets[randomIndex].playerId}","${messagetext}"]`);
      break;
    case "13":
      openSockets.forEach((socket) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(`42[${messageType},"${socket.playerId}","${messagetext}"]`);
        }
      });
      break;
  }

});

let spamIntervalId;

function startSpamIntervalId() {
  spamIntervalId = setInterval(function () {

    socketList.forEach((socket) => {
      if (socket.readyState === WebSocket.OPEN) {
        let spamtext = params.get('spam-text');
        const regex = /\b[aAá]\.?([lLℓᎥiI]\.?){2}[hH𝔥ʜ]*[\W_]*[aAá]\.?([lLℓᏂhH𝔥ʜ]*[\W_]*){1,2}\b|\b(?:[^\w\s]*[aAá][^\w\s]*){2,}|\b[ᴬaAá][ˡlL1Ii][ᴸlL1Ii]?[ᴬaAá][ℍhH](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*|\b[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼áaAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[lLℓIi][^w\s]*[lLℓIi](?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*[aAá][^\w\s]*[hH][ℑℎhHℏ𝕙𝖍𝗁][𝖺aáA𝗮𝘢ⓗ𝐡][𝛂𝛼aáAá𝒶𝓪𝔞𝕒]+(?:\W*[\/\*\-+.,:;]\W*)*[^\W_]*\b|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|Jesus|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|Yahve|İsa|İsa Mesih|Yahweh|İsa|Jesus Christ|Yahv[eéèêë]|İs[aáàâä] Mes[iíìîï]h|Yahw[eéèêë]h|Jes[uúùûü]s Chr[iíìîï]st|(?:\W*[\/\*\-+.,:;]\W*)*Y(?:\W*[\/\*\-+.,:;]\W*)*a(?:\W*[\/\*\-+.,:;]\W*)*h(?:\W*[\/\*\-+.,:;]\W*)*v(?:\W*[\/\*\-+.,:;]\W*)*e|(?:\W*[\/\*\-+.,:;]\W*)*İ(?:\W*[\/\*\-+.,:;]\W*)*\b/gi;

        if (regex.test(spamtext)) {
          document.querySelector('#spamtext input').value = "mikey";
          spamtext = "mikey";
        }
        const randomIndex = Math.floor(Math.random() * (spamtext.length + 1));
        let modifiedMessage;

        if (Math.random() < 0.1) {
          modifiedMessage = ":D";
        } else {
          modifiedMessage = spamtext.slice(0, randomIndex) + '឵' + spamtext.slice(randomIndex);
        }
        socket.send(`42[${spamType},"${socket.playerId}","${modifiedMessage}"]`);
        //console.log(`WebSocket ${socket.playerId} playerId'li kulanıcı için ${modifiedMessage} mesajı atıldı`);
      }
    });

  }, params.get('spam-ms') || 960);
}
function getProxy() {
  var proxy = prompt("Copy and paste the page link here and add 1 proxy.");
  const pattern = /\/\/([^/]+\.[^/.]+(\.[^/.]+)*)/;
  const match = pattern.exec(proxy);
  var storageKey = "proxies";
  var storedData = localStorage.getItem(storageKey);
  var dataObject = [];
  var isDuplicate = false;
  if (storedData != null) {
    dataObject = JSON.parse(storedData);
  }
  for (var i = 0; i < dataObject.length; i++) {
    if (dataObject[i] === match[1]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    dataObject.push(match[1]);
    localStorage.setItem(storageKey, JSON.stringify(dataObject));
    $('#botamount .labeled.input input').val(dataObject.length);
    iziToast.success({
      position: 'topRight',
      //theme: 'dark',
      title: 'Successful',
      message: `${match[1]} Proxies Have Been Added, Total: ${dataObject.length} Now it Has Proxies`
    });
  } else {
    iziToast.info({
      position: 'topRight',
      //theme: 'dark',
      title: 'Not Added',
      message: `The Proxy was not Added Because it is Already on The List. Total Proxies: ${dataObject.length}`
    });
  }
  window.removeEventListener("focus", getProxy);
}


const isDevToolsOpened = () => {
  const widthThreshold = window.outerWidth - window.innerWidth > 160
  const heightThreshold = window.outerHeight - window.innerHeight > 160
  return widthThreshold || heightThreshold
}

setInterval(() => {
  if (isDevToolsOpened()) {
    location.reload()
  }
}, 1000)


function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

let currentTagTarget = null;

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var contextmenu = document.getElementById("contextmenu");
  contextmenu.style.display = "block";
  contextmenu.style.left = e.pageX + "px"; // X koordinatı sayfa konumuna göre ayarlanıyor
  contextmenu.style.top = e.pageY + "px"; // Y koordinatı sayfa konumuna göre ayarlanıyor

  if (e.target.tagName) {
    currentTagTarget = e.target;
  } else {
    currentTagTarget = null;
  }
});



// Sayfada herhangi bir yere tıklandığında menüyü gizle
document.addEventListener("click", function (e) {
  var contextmenu = document.getElementById("contextmenu");
  contextmenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  // Edit butonu
  document.getElementById("editButton").addEventListener("click", function () {
    if (currentTagTarget.tagName === 'INPUT') {
      currentTagTarget.select();
    }
  });

  // Copy butonu
  document.getElementById("copyButton").addEventListener("click", async function () {
    if (currentTagTarget.tagName === 'INPUT') {
      try {
        await navigator.clipboard.writeText(currentTagTarget.value);
        console.log('Metin panoya kopyalandı!');
      } catch (err) {
        console.error('Metni kopyalarken hata oluştu:', err);
      }
    }
  });

  // Cut butonu
  document.getElementById("cutButton").addEventListener("click", async function () {
    if (currentTagTarget.tagName === 'INPUT') {
      try {
        await navigator.clipboard.writeText(currentTagTarget.value);
        currentTagTarget.value = '';
        console.log('Metin panoya kopyalandı ve input alanı temizlendi!');
      } catch (err) {
        console.error('Metni keserken hata oluştu:', err);
      }
    }
  });

  // Paste butonu
  document.getElementById("pasteButton").addEventListener("click", async function () {
    if (currentTagTarget.tagName === 'INPUT') {
      try {
        const text = await navigator.clipboard.readText();
        currentTagTarget.value = text;
      } catch (err) {
        console.error('Metni okurken hata oluştu:', err);
      }
    }
  });

  // Resim kayedetme butonu
  document.getElementById("saveImageButton").addEventListener("click", async function () {
    if (currentTagTarget.tagName === 'IMG') {
      try {
        var filename = currentTagTarget.getAttribute('data-name') + '-allah.jpg';
        fetch(currentTagTarget.src)
          .then(function (t) { return t.blob().then((b) => { var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.setAttribute("download", filename); a.click(); }) });
      } catch (err) {
        console.error('Resmi kayıt ederken hata oluştu:', err);
      }
    }
  });

});
