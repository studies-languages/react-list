import { ChangeEvent } from "react";

export function handleChange(event: ChangeEvent,  setObject: Function, object:any){
  const { name, value } = event.target as HTMLInputElement
  setObject({
    ...object,
    [name]:value
  })

}
