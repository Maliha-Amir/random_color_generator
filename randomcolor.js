function getColor(){
     // 16777215 se multiply isliye kia qk hame ais anumbers chahiye jo hexa numbers ban sake
    let randomNumber = Math.floor(Math.random() * 16777215);
    // 16 islioye likh qk hume hexa decimal num chahitye yh nhi likha tyo simple string dedega

    let randomCode = "#" + randomNumber.toString(16); // concatenate "#" with the hex value
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText=randomCode;
    // ise direct click karte hi code bhi copy hojayega.
    navigator.clipboard.writeText(randomCode);
    console.log(randomNumber, randomCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
);
