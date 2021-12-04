interface TextGenerator {
    name: string,
    charNum?: number,
    upper?: boolean,
    lower?: boolean,
}

const getTextFromName = (textOptions: TextGenerator) => {
    const { name, charNum = 2, upper = true, lower = false } = textOptions;

    let imgText = name.slice(0, charNum);

    const nameArray = name.split(' ');

    if (nameArray.length === 2) {
        console.log(`${nameArray[0][0]}${nameArray[1][0]}`);

        imgText = `${nameArray[0][0]}${nameArray[1][0]}`;
    }

    if (lower) {
        imgText = imgText.toLowerCase();
    } else if (upper) {
        imgText = imgText.toUpperCase();
    }

    return imgText;
}

export default getTextFromName;
