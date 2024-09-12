"use client";

import React from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='aspect-square'>
                    <button className='bg-white/50 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
                        <Plus className='text-[#1C1C1E]' />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className='p-0 bg-transparent border-none max-w-[480px]'>
                <CreateOrganization routing="hash" />
            </DialogContent>
        </Dialog>
    );
};

export default NewButton;