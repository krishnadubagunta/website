import * as fs from 'fs'

const introMdData = fs.readFileSync('files/intro.md', { encoding: 'utf-8' })

export default function intro(_, res) {
    res.status(200).send(introMdData)
}