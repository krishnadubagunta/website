const Timeline = ({ children }) => {
    return (<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-800">
        { children }
    </div>)
}

Timeline.displayName = 'Timeline'

export default Timeline