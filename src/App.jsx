import { useState, useCallback} from "react";

export default function App() {
  const[length,setLength] = useState(8);
  const[numbers,useNumbers] = useState(false);
  const [chars, useChars] = useState(false);
  const[password,setPassword]= useState("")

  const generate = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num="1234567890"
    let special="!@#~$%^&*()_-+={}<:'?><|`"
    if(numbers) str+=num;
    if (chars) str += special;
    for(let i=0;i<length;i++){
      let s=Math.floor(Math.random() * str.length() +1  )
      pass+=s.charAt(s);
    }
  },[setLength, useNumbers, useChars, setPassword])

  return (
    <div className="w-screen h-screen bg-black py-10">
      <h1 className="text-4xl text-center text-white">Password generator</h1>
    </div>
  );
}
