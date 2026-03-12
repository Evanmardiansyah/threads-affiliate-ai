"use client"

import { useState } from "react"

export default function Home(){

const [url,setUrl]=useState("")
const [result,setResult]=useState([])

async function generate(){

const res=await fetch("/api/generate",{
method:"POST",
body:JSON.stringify({url})
})

const data=await res.json()

setResult(data.posts)

}

return(

<div style={{maxWidth:700,margin:"auto"}}>

<h1>Affiliate Threads Generator</h1>

<input
placeholder="Paste link Shopee"
onChange={(e)=>setUrl(e.target.value)}
/>

<button onClick={generate}>
Generate Caption
</button>

{result.map((p,i)=>(
<p key={i}>{p}</p>
))}

</div>

)

}
