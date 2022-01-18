export interface Filed {
  value: string | number
  handleChange: (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=> void
  handleError: (name:string,validate: boolean)=> void
  error: boolean
}