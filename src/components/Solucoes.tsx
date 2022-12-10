import Image, { StaticImageData } from "next/image";
import icon from "/public/favicon.ico";

interface Solucao{
  icone:StaticImageData;
  title:string;
  text:string;
}

export function Solucoes(){
  const solucoesData = [
    {
      icone:icon,
      title:"Identidade Visual",
      text:"Agregue valor a sua marca gere conexão facilite a decisão de compra do seu cliente com uma comunicação visual e estratágica"  
    },
    {
      icone:icon,
      title:"Sites",
      text:"Transmita mais autoridade, expanda seu alcance e tenha um ambiente só seu e claro gere vendas."  
    },
    {
      icone:icon,
      title:"Social Media",
      text:"Delegue a gestão das suas redes sociais Conte com quem entende do assunto e esta em constante capacitação."  
    }
  ];
  return(
    <div 
      id="servicos"
      className="w-full flex flex-col items-center mt-96"
    >
      <h2 className="text-5xl text-white mb-14">Solucoes oferecidas</h2>
      <div className="w-4/5 flex justify-between">
        {
          solucoesData.map((solucao:Solucao) =>{
            return(
              <div 
                key={solucao.title}
                className="flex flex-col items-center justify-evenly h-[35rem]"
              >
                <div className="w-full flex items-center justify-center">
                  <Image 
                    src={solucao.icone} 
                    alt={solucao.title}
                    width={175}
                    height={175}
                  />
                </div>
                <h3 className="text-4xl font-bold">{solucao.title}</h3>
                <p className="text-xl text-left w-4/6">{solucao.text}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
