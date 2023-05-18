// Function to encrypt the text using a substitution cipher
function encrypt() {
    const plainText = document.getElementById("plainText").value;
    const key = parseInt(document.getElementById("keys").value); // Number of positions to shift

    let encryptedText = "";
    for (let i = 0; i < plainText.length; i++) {
        let charCode = plainText.charCodeAt(i);

        // Encrypt uppercase letters
        if (charCode >= 65 && charCode <= 90) { 
            charCode = ((charCode - 65 + key) % 26) + 65;
            //98 - 65 + 3 ) % 26 ) + 65 cons
        }
        // Encrypt lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + key) % 26) + 97;
        }

        encryptedText += String.fromCharCode(charCode);

    }

    document.getElementById("encryptedText").value = encryptedText;
}

// Function to decrypt the text using a substitution cipher
function decrypt() {
    const encryptedText = document.getElementById("encryptedText2").value;
    const key = parseInt(document.getElementById("keys").value); // Number of positions to shift

    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);

        // Decrypt uppercase letters
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - key + 26) % 26) + 65;
        }
        // Decrypt lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - key + 26) % 26) + 97;
        }

        decryptedText += String.fromCharCode(charCode);
    }

    document.getElementById("decryptedText").value = decryptedText;
}