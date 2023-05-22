function reverse(s) {
    let reversedString = '';
    s = s.split('');
    
    for(let i = s.length - 1; i>=0; i--) {
        reversedString += s[i];
    }
    
    return reversedString;
}

console.log(reverse("cool"));