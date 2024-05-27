// Bilkul! Socho, tumhara React application hai aur usme ek list hai, jisme har item ko delete karne ke liye ek button hai. Har button ke saath ek function hai jo us item ko delete karta hai.

// Ab, agar tum useCallback() ka istemal nahi karte ho, to har baar jab koi item delete hone ke liye button press hota hai, React naya function banata hai. Yeh naye function ka matlab hai ki har baar React ko yaad dilana padega ki yeh item ko delete karne wala function hai.

// Par agar tum useCallback() ka istemal karte ho, to React ko yaad rahega ki yeh function badalne wala nahi hai. Iska matlab hai ki React function ko ek baar hi banayega aur usko phir se nahi banayega har baar jab koi item delete hone ke liye button press hota hai.

// Chhote examples mein yeh fark dikhai nahi deta, lekin bade applications mein jab bahut saare items aur updates hote hain, wahan useCallback() ka istemal performance ko behtar banata hai. Yeh React ko ek hint deta hai ki woh resources ko bacha sake jahan zarurat ho.

// -----------------------------------------------------------------------------------------------------------------

// Bilkul! useEffect() ek React Hook hai jo hume component ke lifecycle events jaise ki component mount, unmount, aur update hone par code chalane ka mauka deta hai.

// Chalo ek udaharan se samjhein. Maan lo, tumhare paas ek chat application hai jisme naye messages aate rehte hain. Ab, jab naya message aata hai, tum chahte ho ki chat window automatically scroll ho jaye taaki sabse neeche ka message dikhai de. Yahaan useEffect() kaam aata hai.

// Jab naye messages aate hain, hum useEffect() ka istemal karke scroll position ko set kar sakte hain. Is tarah, jab bhi component update hota hai, useEffect() chalta hai aur scroll position ko update karta hai.

// Aur yeh nahi, useEffect() ko cleanup function bhi provide kar sakte hain. Maan lo, agar hum component ko unmount karte hain to scroll position ko reset karne ke liye. useEffect() uske liye bhi upyogi hai. Is tarah, jab component unmount hota hai, cleanup function chalta hai aur hum scroll position ko reset kar sakte hain.

// Toh, useEffect() ka istemal hota hai jab hume component ke lifecycle events ke dauraan kuch karna hota hai, jaise ki data fetch karna, subscriptions setup karna, ya phir DOM manipulation karna. Ye hume ek tareeke se control dete hain component ke behaviour ko manage karne ke liye.

// ---------------------------------------------------------------------------------------------------------------------

// Memoization ek technique hai jisme kisi function ke calculations ko cache mein store kiya jata hai taaki agar wahi function same inputs ke liye dobara call ho, toh uska result cache se retrieve kiya ja sake aur computation ko dubara na karna pade.

// Chalo ek simple example dekhte hain. Maan lo, tumhe Fibonacci numbers calculate karne ka kaam hai. Fibonacci numbers ek sequence hota hai jisme har number pichle do numbers ka sum hota hai.

// Yadi hum Fibonacci numbers ko calculate karne ke liye ek recursive function bana lete hain, toh woh function bar bar same values ke liye computations karega. Lekin memoization ka istemal karke hum us function ke calculations ko cache mein store kar sakte hain taaki agar wahi number dobara calculate karne ki zarurat pade, toh computation dobara na karna pade.

// Memoization ka istemal karke Fibonacci numbers calculate karne wala function
// function fibonacci(n, memo = {}) {
//   if (n in memo) return memo[n]; // Agar number memo mein hai, toh uska result return karo
  
//   if (n <= 1) return n; // Base case
  
//   // Fibonacci numbers ke calculations
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  
//   return memo[n]; // Memo mein store kiya gaya result return karo
// }

// console.log(fibonacci(6)); // Output: 8

// ---------------------------------------------------------------------------------------------------------------------
// Plain JavaScript Object:
// Ek simple tareeka hai JavaScript object ka istemal karna, jisme keys ke saath data store kiya jaata hai. Yeh technique commonly use hoti hai memoization mein.
// const cache = {};

// Data store karna
// cache[key] = data;

// Data retrieve karna
// const data = cache[key];
// Map Object:
// JavaScript mein Map object bhi hota hai jo key-value pairs ko store karta hai. Yeh Map object ko use karke bhi cache create kiya ja sakta hai.

// const cache = new Map();

// Data store karna
// cache.set(key, data);

// Data retrieve karna
// const data = cache.get(key);
// localStorage or sessionStorage:
// Web browsers mein localStorage aur sessionStorage APIs available hote hain, jinka istemal client-side data ko store karne ke liye hota hai. Inka istemal karte waqt hume data ko string format mein store karna hota hai.
// javascript

// // Data store karna localStorage mein
// localStorage.setItem(key, JSON.stringify(data));

// // Data retrieve karna localStorage se
// const data = JSON.parse(localStorage.getItem(key));



import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (CharAllowed) str += "!@#$%^&*()_+{}[]|/~<>";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3);

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, CharAllowed, passwordGenerator]);
  
  return (
    <>
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="my-3 text-center text-white">Password Generator</h1>
        <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1 outline-none "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none shrink-0 bg-blue-700 text-white px-3 py-0.5" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev)=>!prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
