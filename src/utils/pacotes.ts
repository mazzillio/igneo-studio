export interface PacoteType{
    title:string,
    prazo:number,
    preco:number,
    parcela:string,
    divulgacoes:number,
    artes?:number
}
export const pacotes:PacoteType[] =[
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
