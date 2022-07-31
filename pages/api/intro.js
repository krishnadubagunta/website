import * as fs from 'fs'
import path from 'path'

const introMdData = fs.readFileSync(path.resolve(__dirname, 'files/intro.md'), { encoding: 'utf-8' })

export default function intro(_, res) {
    res.status(200).json({
        introMdData
    })
}