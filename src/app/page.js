"use client"

import İnfo from "@/komponents/info"
export default function Home() {
  const datas=[{text:"Ürün kalitelimi?",answer:"Evet.Kaliteli!"},
    {text:"Fiyatı ne kadar?",answer:"250 TL"},
    {text:"Ne zaman ulaşır ?",answer:"En geç 13.09.2024 kargoda"}
  ]





  return (
    <>
    
    <div className="maincontainer">{datas.map((data)=>(
      <İnfo text={data.text} answer={data.answer} />
      
    ))}
    
    </div>
    </>
  )
}
