function solve(input) {
    const n = input.shift();
    let songs = [];

    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift().split('|');
        songs.push({ piece, composer, key })

    }

    while (input != 'Stop') {
        const tokens = input.shift().split('|');
        const command = tokens[0];
        const pieceName = tokens[1];

        switch (command) {
            case 'Add':
                const composer = tokens[2];
                const key = tokens[3];
                if (!pieceChecker(pieceName)) {
                    songs.push({ piece: pieceName, composer, key })
                    console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${pieceName} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (pieceChecker(pieceName)) {
                    //songs.splice(songs.findIndex(x => x.piece === pieceName), 1)
                    songs = songs.filter(el => el.piece !== pieceName);
                    console.log(`Successfully removed ${pieceName}!`);
                } else {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                const piece = pieceChecker(pieceName);
                const newKey = tokens[2];
                if (pieceChecker(pieceName)) {
                    piece.key = newKey;
                    console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                }
                break;
        }

    }
    songs.forEach(song => {
        console.log(`${song.piece} -> Composer: ${song.composer}, Key: ${song.key}`);
    });
    function pieceChecker(pieceName) {
        return songs.find(x => x.piece === pieceName)
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
/* solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]) */