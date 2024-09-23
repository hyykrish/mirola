"use client"

import { useState } from "react"
import { CanvasState, CanvasMode } from "@/types/canvas"
import Info from "./info"
import Participants from "./participants"
import { useCanRedo, useCanUndo, useHistory, useSelf } from "@/liveblocks.config"
import { Toolbar } from "./toolbar"




interface CanvasProps {
    boardId: string
}

export const Canvas = ({
    boardId
}: CanvasProps) => {

    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const info = useSelf((me) => {me.info})
    console.log(info)
    return (
        <main
            className="h-screen w-full relative bg-neutral-100 touch-none"
        >
            <Info boardId={boardId} />
            <Participants />
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                undo={history.undo}
                redo={history.redo}
            />
        </main>
    )
}
