import ReactMarkdown from "react-markdown";
import Link from '../Link'

export default function Markdown({ children }) {
    return <ReactMarkdown className="text-sm text-gray-400" components={{
        h1: function H1({ children: c }) { return <p className="text-lg">{c}</p> },
        p: function p({ children: c }) { return <p className="text-sm text-gray-400 pb-4">{ c }</p> },
        a: function a({ children: c, href }) { return <span>
            <Link  href={href} target="_blank" className="text-blue-500" >&nbsp;{ c }</Link>
        </span> },
    }}>
        { children }
    </ReactMarkdown>
}
