function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.join(',').replace(new RegExp(elemToReplace, 'g'), substitutionElem).split(',').map(Number);
}
