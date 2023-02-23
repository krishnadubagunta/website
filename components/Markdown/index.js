import ReactMarkdown from "react-markdown";
import Link from '../Link'

export default function Markdown({ children }) {
    return <ReactMarkdown className="text-sm text-gray-400" components={{
        h1: ({ children: c }) => <p className="text-lg">{c}</p>,
        p: ({ children: c }) => <p className="text-sm text-gray-400 flex">{ c }</p>,
        a: ({ children: c, href }) => <Link href={href} target="_blank" className="text-blue-500" >&nbsp;{ c }</Link>
    }}>
        { children }
    </ReactMarkdown>
}