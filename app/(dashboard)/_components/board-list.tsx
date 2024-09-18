"use client"

import EmptyBoards from "./empty-board";
import EmptyFavorites from "./empty-favorite";
import EmptySearch from "./empty-search";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import NewBoardButton from "./new-board-button";
import { BoardCard } from "./boardcard";
interface BoardListProps {
    orgId: string,
    query: {
        search?: string,
        favorites?: string
    }
}

export const BoardList = ({ orgId, query }: BoardListProps) => {

    const data = useQuery(api.boards.get, {
        orgId,
        ...query
    })

    if (data === undefined) {
        return (
            <div>
                <h2 className="text-3xl">
                    {query.favorites ? "Favorites Board" : "Team Boards"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton orgId={orgId} disabled />
                    <BoardCard.Skeleton />
                </div>
            </div>
        )
    }

    if (!data?.length && query.search) {
        return (
            <div>
                <EmptySearch />
            </div>
        )
    }

    if (!data?.length && query.favorites) {
        return (
            <div>
                <EmptyFavorites />
            </div>
        )
    }

    if (!data?.length) {
        return (
            <div>
                <EmptyBoards />
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-3xl">
                {query.favorites ? "Favorites Board" : "Team Boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId} />

                {data.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}
                    />
                ))}
            </div>
        </div>
    )
}