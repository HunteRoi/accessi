/* eslint-disable @typescript-eslint/no-explicit-any */

// ORIGINAL SOURCE CODE FROM Victor Widell
// https://github.com/geon/geon.github.com/blob/master/_posts/2016-03-03-dsxyliea.md

type Word = { length: number, position: number };

function mixUpWords(textNodes: TextNodeWithValue[], wordsInTextNodes: Word[][]) {
    for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        for (let j = 0; j < wordsInTextNodes[i].length; j++) {
            if (Math.random() > 1 / 10) {
                continue;
            }

            const wordMeta = wordsInTextNodes[i][j];

            const word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
            const before = node.nodeValue.slice(0, wordMeta.position);
            const after = node.nodeValue.slice(wordMeta.position + wordMeta.length);

            node.nodeValue = before + mixUpWord(word) + after;
        }
    }
}

function mixUpWord(word: string) {
    if (word.length < 3) return word;
    return word[0] + mixUpInnerWord(word.slice(1, -1)) + word[word.length - 1];
}

function mixUpInnerWord(innerWord: string) {
    if (innerWord.length < 2) return innerWord;

    let positionA, positionB;
    do {
        positionA = getRandomIntBetween(0, innerWord.length - 1);
        positionB = getRandomIntBetween(0, innerWord.length - 1);
    } while (!(positionA < positionB));

    return innerWord.slice(0, positionA) + innerWord[positionB] + innerWord.slice(positionA + 1, positionB) + innerWord[positionA] + innerWord.slice(positionB + 1);
}

function getRandomIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

type TextNodeWithValue = ChildNode & { nodeValue: string };
function isTextNodeWithValue(node: ChildNode): node is TextNodeWithValue {
    return node.nodeType === 3 && node.nodeValue != null;
}

/**
 * Apply a dyslexia effect on the entire page.
 * @param selectors selectors like 'p, h1, h2, h3'
 * @returns the interval ID
 */
export default function useDyslexia(selectors: string): NodeJS.Timeout {
    const nodes = document.querySelectorAll(selectors);
    const textNodes = Array.from(nodes)
        .flatMap(node => [...node.childNodes])
        .filter(isTextNodeWithValue);
    const wordsInTextNodes: Word[][] = [];

    const alphaNumericalRegex = /\w+/g;
    for (let i = 0; i < textNodes.length; i++) {
        const node = textNodes[i];
        const words: Word[] = [];

        let match: RegExpExecArray | null = alphaNumericalRegex.exec(node.nodeValue);
        while (match != null) {
            const word = match[0];
            words.push({
                length: word.length,
                position: match.index
            });

            match = alphaNumericalRegex.exec(node.nodeValue);
        }
        wordsInTextNodes[i] = words;
    }

    return setInterval(mixUpWords, 50, textNodes, wordsInTextNodes);
}
