'use strict'

var yaml = require('js-yaml')
  , fs = require('fs')
  , path = require('path')
  , spawnSync = require('child_process').spawnSync
  , beautify = require('js-beautify').html_beautify
  , root = path.join(__dirname, '../')

var sections = yaml.load(
  fs.readFileSync(path.join(root, './seed/words.yaml'), 'utf8')
)

var sectionsJsx = '<div>' + sections.map(
  (section) => {
    let wordsAndIpa = section.words || []
      , title = section.title

    let wordsJsx = Object.keys(wordsAndIpa).map((word) => {
      let ipa = wordsAndIpa[word]
      return `<PronunciationWord word="${word}" ipa="${ipa}"/>`
    }).join('')

    return '<section>'
      + `<h3>${title}</h3>`
      + `<div>${wordsJsx}</div>`
      + '</section>'
  }
).join('') + '</div>'

fs.writeFileSync(
  path.join(root, './src/generated-components/WordList.js')
, '// XXX: This file is generated by "scripts/create-pronunciations.js"\n'
  + "import React from 'react';\n"
  + "import PronunciationWord from '../components/PronunciationWord';\n"
  + `export default () => (${beautify(sectionsJsx, { indent_size: 2 })})`
)

var wordsAndIpa = sections.map(
  (section) => section.words
).reduce(
  (memo, currentWords) => Object.assign(memo, currentWords)
, {}
)

var words = Object.keys(wordsAndIpa)

words.forEach((word, index) => {
  let ipa = wordsAndIpa[word]

  spawnSync('aws', [
    'polly'
  , 'synthesize-speech'
  , '--text-type', 'ssml'
  , '--text', `<speak><phoneme alphabet="ipa" ph="${ipa}">${word}</phoneme></speak>`
  , '--output-format', 'mp3'
  , '--voice-id', 'Joanna'
  , `${word}.mp3`
  ], {
    stdio: 'inherit'
  , cwd: path.join(root, './public/pronunciations')
  })

  console.log(`create pronunciations ${index + 1}/${words.length}`)
})
