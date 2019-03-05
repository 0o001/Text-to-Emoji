const readline = require('readline')
const emoji = require('./emoji.json')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

})

rl.question('> ', ( answer ) => {

    let textToEmoji = []
    const answerArray = answer.split(' ').filter( item => item )
    
    answerArray.forEach( ( answerItem ) => {

        const findEmojiArray = Object.values( emoji ).filter( ( emojiItem ) => {

            return answerItem.includes( ...emojiItem.keywords )

        })

        if( findEmojiArray.length ) {

            const char = findEmojiArray[Math.floor( Math.random() * findEmojiArray.length )].char

            textToEmoji.push( char )

        }

    })

    console.log( textToEmoji.join(' ') )
     
    rl.close()
    
})

