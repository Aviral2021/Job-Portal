import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'



const UpdateProfileDialog = ({open, setOpen}) => {
  return (
    <div>
    <Dialog open = {open}>
    <DialogContent>
    <DialogHeader>
    <DialogTitle>Update Profile</DialogTitle>
    </DialogHeader>
    <form action="">
        <div className='grid gap-4 py-4'>
        <Label htmlFor = "name" className= "text-right"> Name </Label>
        <Input
        id = "name"
        name = "name"
        className= "col-span-3"

        />

        </div>
    </form>


    </DialogContent>


    </Dialog>
     

    </div>
  )
}

export default UpdateProfileDialog