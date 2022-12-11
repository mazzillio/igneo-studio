interface PacoteType{
    title:string,
    prazo:number,
    preco:number,
    parcela:string,
    divulgacoes:number,
    artes?:number
}
export function Pacotes() {
  const pacotes:PacoteType[] =[
    {
      title:"Spark",
      prazo:15,
      preco:1250,
      parcela:"208,33",
      divulgacoes:1
    },
    {
      title:"Flame",
      prazo:20,
      preco:1880,
      parcela:"313,33",
      divulgacoes:3,
      artes:3  
    },
    {
      title:"Eruption",
      prazo:20,
      preco:3720,
      parcela:"620",
      divulgacoes:5,
      artes:5
    },

  ];
  return(
    <div className="flex flex-col items-center">
      <h2 className="text-4xl mb-16">Preços promocionais para pequenos negócios MEI e ME e profissionais liberais</h2>
      <div className="w-full flex flex-row gap-5 ">
        {
          pacotes.map((pacote:PacoteType) =>{
            const { title, prazo, preco, parcela, divulgacoes, artes } = pacote;
            return(
              <div
                className="w-1/3 min-h-max flex flex-col mx-auto mb-10"
                key={title}
              >
                <div className="py-5 px-4 border-2 border-primary-300 min-h-[420px] mb-4">
                  <h4 className="text-3xl text-primary-300">Pacote {title}</h4>
                  <span className="tex-2xl">Prazo {prazo} dias úteis</span>
                  <p className="text-4xl text-primary-300">R$ {preco}</p>
                  <span className="text-2xl">Ou até 6 vezes sem juros</span>
                  <p className="text-3xl text-primary-300">R$ {parcela}</p>
                  <ul className="text-xl">
                    <li>Logotipo</li>
                    <li>Paleta de cores</li>
                    <li>Fonte para tpitulo e textos</li>
                    <li>Foto de perfil e destaques Instagam</li>
                    <li>Assinatura e-mail</li>
                    <li>{divulgacoes} material de divulgação</li>
                    {
                      artes ? <li>{artes} artes editáveis no canva</li> : null
                    }
                  </ul>
                </div>
                <button className="flex items-center justify-center text-xl font-semibold bg-primary-300 rounded-lg mx-auto h-11 w-[9rem]">Contratar</button>
              </div>
            );
          })
        }
      </div>
      <p className="text-2xl">Parcelamos em até 12x</p>
      <p className="text-2xl">10% Desconto em pagamento a vista</p>
      <p className="text-2xl">(Pix, Boleto ou tranferência)</p>
    </div>
  );
}