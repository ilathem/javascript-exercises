const palindromes = function (string) {
    let frontIndex = 0;
    let rearIndex = string.length - 1;
    while (frontIndex < rearIndex) {
        if (!(string.charAt(frontIndex).match(/[a-z0-9]/i))) {
            frontIndex++;
            continue;
        }
        if (!(string.charAt(rearIndex).match(/[a-z0-9]/i))) {
            rearIndex--;
            continue;
        }
        if (
          !(
            string.charAt(frontIndex).toLowerCase() ===
            string.charAt(rearIndex).toLowerCase()
          )
        ) {
            return false;
        } else {
            frontIndex++;
            rearIndex--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
