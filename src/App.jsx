import { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [chars, setChars] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let special = "!@#~$%^&*()_-+={}<:'?><|`";
    if (numbers) str += num;
    if (chars) str += special;
    for (let i = 0; i < length; i++) {
      let s = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(s);
    }
    setPassword(pass);
  }, [length, numbers, chars, setPassword]);
  useEffect(() => {generate()},[length, numbers, chars, generate]);

  const CopytoClip = () => {
    passwordRef.current?.select();
    document.execCommand("copy");
  }

  return (
    <div className="w-screen h-screen bg-indigo-950 py-10">
      <h1 className="text-6xl text-center text-white font-mono">
        Password generator
      </h1>
      <div className="w-3/6  bg-blue-900 mx-auto my-32 h-2/5 text-center rounded-2xl text-white">
        <div>
          <input type="text" value={password} ref={passwordRef} readOnly  className="my-16 w-2/3 rounded-xl rounded-r-none h-10 px-6 text-black outline-none" />
          <button className="rounded-xl h-10 bg-green-600 rounded-l-none w-14" onClick={CopytoClip}>Copy</button>
        </div>
        <div className="grid grid-cols-2 col ml-12">
          <div className="flex flex-col mx-28">
            <input
              type="range"
              value={length}
              min={6}
              max={60}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className=" text-xl px-3">Length: {length} </label>
          </div>
          <div className="flex flex-col text-left px-24 h-full ">
            <div>
              <input
                type="checkbox"
                defaultChecked={numbers}
                className=" size-5"
                onChange={() => setNumbers((prev) => !prev)}
              />
              <label htmlFor="Numbers Allowed" className=" text-xl px-3">Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={chars}
                className=" size-5"
                onChange={() => setChars((prev) => !prev)}
              />
              <label htmlFor="Chars Allowed" className=" text-xl px-3">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
