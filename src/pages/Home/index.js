import React, { useMemo, useState } from "react";
import { Primeira } from "./style";

// Os dados que virão da api...
const frameworks = [
  "Node.js",
  "React.js",
  "Veu.js",
  "Angular.js",
  "Next.js",
  "Nuxt.js",
  "React Native"
];

export default function Home() {
  const [sech, setSech] = useState(""); 
  
  //compração dos dados que estão a vir da apicom os dados que está a ser digitado na input...
  const frameworksFound = useMemo(() => {
    const lowerSech = sech.toLowerCase();
    return frameworks.filter((javascript) => javascript.toLowerCase().includes(lowerSech));
  }, [sech])
  // como o array frameworks é fixa então não precisa ser incluida no array de dependêcia...  
  return (
    <>
      <Primeira>
        <div>
          <h1>Sech frameworks of GooGle</h1>
          <input
            className="sech"
            type="text"
            name=""
            id=""
            placeholder=""
            required
            value={sech}
            onChange={(frame) => setSech(frame.target.value)}
          />
          <ul>
            {frameworksFound.map((javascript) => (
              <li key={javascript}>{javascript}</li>
            ))}
          </ul>
        </div>
      </Primeira>
    </>
  );
}
