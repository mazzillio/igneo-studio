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
    <div>
      <h2>Preços promocionais para pequenos negócios MEI e ME e profissionais liberais</h2>
      <div>
        {
          pacotes.map((pacote:PacoteType) =>{
            const { title, prazo, preco, parcela, divulgacoes, artes } = pacote;
            return(
              <div key={title}>
                <div>
                  <h4>Pacote {title}</h4>
                  <span>Prazo {prazo} dias úteis</span>
                  <p>R$ {preco}</p>
                  <span>Ou até 6 vezes sem juros</span>
                  <p>R$ {parcela}</p>
                  <ul>
                    <li>Logotipo</li>
                    <li>Paleta de cores</li>
                    <li>Fonte para tpitulo e textos</li>
                    <li>Foto de perfil e destaques Instagam</li>
                    <li>Assinatura e-mail</li>
                    <li>{divulgacoes} material de divulgação</li>
                    {
                      artes ?? <li>{artes} artes editáveis no canva</li>
                    }
                  </ul>
                </div>
                <button>Contratar</button>
              </div>
            );
          })
        }
      </div>
      <p>Parcelamos em até 12x</p>
      <p>10% Desconto em pagamento a vista</p>
      <p>(Pix, Boleto ou tranferência)</p>
    </div>
  );
}