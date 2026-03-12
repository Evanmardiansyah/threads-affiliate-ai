export async function POST(req){

const {url}=await req.json()

const templates=[

"Gw baru nemu produk ini di Shopee. Linknya "+url,
"Produk ini lagi rame dibeli orang. Cek "+url,
"Kalau cari barang murah coba lihat ini "+url,
"Barang underrated menurut gw. Link "+url,
"Serius ini worth it sih "+url

]

let posts=[]

for(let i=0;i<30;i++){

let random=templates[Math.floor(Math.random()*templates.length)]

posts.push(random)

}

return Response.json({posts})

}
