import { ReactChildren } from "../types";

export default function Container({ children }: ReactChildren) {
    return <div className="z-10 max-w-5xl">
        { children }
    </div>
}