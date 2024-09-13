"use client"

import EmptyBoards from "./empty-board";
import EmptyFavorites from "./empty-favorite";
import EmptySearch from "./empty-search";

interface BoardListProps {
    orgId:string,
    query:{
        search?: string,
        favorites?:string
    }
}

export const BoardList = ({orgId,query}:BoardListProps) => {

    const data = [];

    if(!data?.length && query.search){
        return(
            <div>
                <EmptySearch/>
            </div>
        )
    }

    if(!data?.length && query.favorites){
        return(
            <div>
                <EmptyFavorites/>
            </div>
        )
    }

    if(!data?.length){
        return(
            <div>
                <EmptyBoards/>
            </div>
        )
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}