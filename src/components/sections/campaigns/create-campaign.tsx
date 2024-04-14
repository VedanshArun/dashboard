"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {toast} from "sonner"

export default function CreateCampaign() {
    const [title,setTitle] = useState("");
    const [owner , setOwner] = useState("");
    const [description , setDescription] = useState("");
    const [targetFunds,setTargetFunds] = useState(0);
    const handleSubmit = async (e) => {
        console.log();
        e.preventDefault();
        if (!title || !owner || !description || !targetFunds){
            if (!title){
                toast("Create Campaign Error", {
                    description: "Title input field is empty",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
            }
            if (!owner) {
                toast("Create Campaign Error", {
                    description: "Campaign by input field is empty",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
            }
            if (!description){
                toast("Create Campaign Error", {
                    description: "description input field is empty",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
            }
            if (!targetFunds){
                toast("Create Campaign Error", {
                    description: "target funds input field is empty",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
            }
            
            return ; 
        }
        
        else{

            try {
                const res = await fetch('api/campaigns', {
                    method: 'POST',
                    headers : {
                      "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({title,owner,description,targetFunds}),
                  });
                if (res.ok){
                    console.log('campaign created successfully');
                }
            } catch (error) {
                console.log('campaign creation failed');
            }
        }

    }
    return (
        <Sheet>
        <SheetTrigger asChild>
            <Button variant="red">Create</Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Create a new campaign</SheetTitle>
            <SheetDescription>
                Create a new campaign for users around India to donate for a charitable cause.
            </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
            <div className="grid items-center">
                <Label htmlFor="title" className="mt-2  mb-2">Title of Campaign</Label>
                <Input id="title" type="title" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="grid items-center">
                <Label htmlFor="owner" className="mt-2  mb-2">Campaign by </Label>
                <Input id="owwner" type="title" onChange={(e) => setOwner(e.target.value)} />
            </div>
            <div className="grid items-center">
                <Label htmlFor="targetFunds" className="mt-2  mb-2">Target funds </Label>
                <Input id="targetFunds" type="number" onChange={(e) => setTargetFunds(e.target.value)} />
            </div>
            <div className="grid items-center">
                <Label htmlFor="description" className="mt-2  mb-2">Campaign description</Label>
                <Textarea placeholder="Type your description here." onChange={(e) => setDescription(e.target.value)} />
            </div>
            
            </div>
            <SheetFooter>
            <SheetClose asChild>
                <Button type="submit" onClick={handleSubmit}>Save</Button>
            </SheetClose>
            </SheetFooter>
        </SheetContent>
        </Sheet>
    )
}
