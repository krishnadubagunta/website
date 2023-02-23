const Link = ({ children, className }) => <div className={`${className} cursor-pointer`}>{ children }</div>

Link.displayName = 'Link'

export default Link