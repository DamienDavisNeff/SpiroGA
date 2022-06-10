// if you ever remove password
// remove this variable
var url = "https://discord.com/api/webhooks/984872108951748629/32Hu1k2Sta71XxdRAMXeZ9WQS-XF0kzayB0SaDUt3naATfy4V7_vzYF0C6zE_B_E59Z-";

/*
var authorName = "SirSpiro";
var authorURL = "https://www.spiro.ga";
var authorImageURL = "https://www.spiro.ga/images/Logo.png";
*/

// runs on button click
function ClickedButton() {
    // var url = document.getElementById('webhook').value; // gets webhook url from input
    // var sendText = document.getElementById('sendText').value;
    var embedTitle = document.getElementById('Title').value; // gets value of embed title from input
    var embedDescription = document.getElementById('Description').value; // gets value of embed description from input
    var embedImageURL = document.getElementById('ImageURL').value; // gets a image url from input
    var embedThumbnailURL = document.getElementById('ThumbnailURL').value; // gets thumbnail image from input
    var authorName = document.getElementById('AuthorName').value; // gets authors name from input
    var authorURL = document.getElementById('AuthorURL').value; // gets authors url from input
    var authorImageURL = document.getElementById('AuthorImageURL').value; // gets authors image from input
    var footerText = document.getElementById('FooterTitle').value; // gets footer title from input
    var footerImageURL = document.getElementById('FooterImageURL').value; // gets footer image from input
    
    // MANUAL OVERRIDE!
    // when enabled, overrides input to put in a hard coded link
    // useful for debugging
    var override = false;
    if(override == true) {
        url = "";
    }

    // if the url does not exist, gives error
    if(url == "") {
        console.log('test')
        document.getElementById('results').innerHTML = "You must specify a webhook URL";
    }

    // runs webhook with all values
    Webhook(url,embedTitle,embedDescription,embedImageURL,embedThumbnailURL,authorName,authorURL,authorImageURL,footerText,footerImageURL);

}

// webhook function requiring all values
function Webhook(url,embedTitle,embedDescription,embedImageURL,embedThumbnailURL,authorName,authorURL,authorImageURL,footerText,footerImageURL) {

    let WebhookSend = new XMLHttpRequest(); // creats http request
    WebhookSend.open("POST", url); // sets request to post

    WebhookSend.setRequestHeader("Accept", "application/json"); // sets accept to json only
    WebhookSend.setRequestHeader("Content-Type", "application/json"); // sets content type to json only

    WebhookSend.onload = () => console.log(WebhookSend.responseText); // displays response in console

    // Creates json with lal values
    let data = `{
        "content":"**Announcement**: @everyone",
        "embeds": [
            {
                "type":"rich",
                "title":"`+embedTitle+`",
                "description":"`+embedDescription+`",
                "image": {
                    "url":"`+embedImageURL+`",
                    "height":0,
                    "width":0
                },
                "thumbnail": {
                    "url":"`+embedThumbnailURL+`",
                    "height":0,
                    "width":0
                },
                "author": {
                    "name":"`+authorName+`",
                    "url":"`+authorURL+`",
                    "icon_url":"`+authorImageURL+`"
                },
                "footer": {
                    "text":"`+footerText+`",
                    "icon_url":"`+footerImageURL+`"
                }
            }
        ]
    }`

    // logs data & sends it
    console.log(data);
    WebhookSend.send(data);

    // gives response status, whether or not it is an error
    WebhookSend.onload = () => document.getElementById('results').innerHTML = "Response Status: <a href='https://discord.com/developers/docs/topics/opcodes-and-status-codes#http' target='_blank'>" + WebhookSend.status + "</a>";

}