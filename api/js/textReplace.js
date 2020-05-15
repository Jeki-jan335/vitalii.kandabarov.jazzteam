const textReplace = (text) => {
    if (!text) {
        return 'Missing description';
    }
    let strReplace = text.replace(REPLACE_TEXT, '');
    if (strReplace.length >= 80) {
        let lastIndex = strReplace.substring(0, 50).lastIndexOf(" ");
        strReplace = strReplace.substring(0, lastIndex) + '...';
        return strReplace;
    }else {
        let lastIndex = strReplace.substring(0, 20).lastIndexOf(" ");
        strReplace = strReplace.substring(0, lastIndex) + '...';
        return strReplace;
    }
};
