"use client";
import { find, remove } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { badgeVariants } from "./badge";
import Small from "./typography/small";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Filter({ filterKey, filters }: { filterKey:string, filters: string[]}) {
    const searchParams = useSearchParams()
    const [filteredItems, setFilteredItems] = useState<string[]>(filterKey && (searchParams.get(filterKey)?.split(",")) || [])
    const router = useRouter()
    const pathname = usePathname()

    const findFilter = useCallback((filter: string): boolean => {
        return !!find(filteredItems, (f) => f === filter)
    }, [filteredItems])

    useEffect(() => {
        if(!filteredItems.length && !!searchParams.get(filterKey)) {
            router.push(pathname)
        }
        else if(!!filteredItems.length || searchParams.get(filterKey)) {
            router.push(pathname + '?' + `${filterKey}=${filteredItems.join(",")}`)
        }
    }, [filteredItems])

    return (
        <div className="md:space-x-4 space-x-2">
            {
                filters.map((filter) => <button key={filter} onClick={() => {
                    if(findFilter(filter)) {
                        setFilteredItems(remove(filteredItems, (f) => f!==filter))
                    }
                    else {
                        setFilteredItems([ ...filteredItems, filter ])
                    }
                }} className={badgeVariants({ ...(findFilter(filter) ? { variant: 'default' } : { variant: 'outline' }) })}>
                    <Small className="p-2" variant="light">{filter}</Small>
                </button>)
            }
        </div>
    );

}
