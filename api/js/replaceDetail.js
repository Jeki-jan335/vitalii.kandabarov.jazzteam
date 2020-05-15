const replaceDetail = (text) => {
    if (!text) {
        return 'Missing description';
    }
    let strReplace = text.replace(REPLACE_TEXT, '');
    if (strReplace.length >= 500) {
        strReplace = strReplace.substring(0, 500);
        var lastIndex = strReplace.lastIndexOf(" ");
        strReplace = strReplace.substring(0, lastIndex) + '...';
        return strReplace;
    }else{
        return text;
    }
};
