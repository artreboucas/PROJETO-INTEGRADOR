export type Training = { id:number; title:string; category:string; instructor:string; date:string; time:string; location:string; description:string; progress?:number; spots:number; enrolled:number; color:string }
export type Consultation = { id:number; title:string; specialist:string; specialty:string; date:string; time:string; status:'Solicitada'|'Confirmada'; description:string }

export const trainings: Training[] = [
 {id:1,title:'Manejo Agroecológico de Pragas',category:'Produção',instructor:'Prof.ª Ana Clara',date:'20/08/2026',time:'14:00',location:'Centro Comunitário',description:'Aprenda estratégias naturais de prevenção e controle de pragas, com foco em baixo custo e segurança dos alimentos.',progress:72,spots:25,enrolled:18,color:'leaf'},
 {id:2,title:'Comercialização em Feiras Locais',category:'Gestão',instructor:'Instituto Federal',date:'24/08/2026',time:'09:00',location:'Feira Agroecológica',description:'Boas práticas para organização, precificação, apresentação dos produtos e relacionamento com consumidores.',progress:35,spots:30,enrolled:21,color:'sun'},
 {id:3,title:'Conservação Pós-Colheita',category:'Qualidade',instructor:'Rede de Apoio Rural',date:'28/08/2026',time:'15:30',location:'Online',description:'Técnicas simples para reduzir perdas e manter a qualidade dos alimentos após a colheita.',spots:20,enrolled:12,color:'water'},
 {id:4,title:'Irrigação Econômica',category:'Produção',instructor:'Universidade Federal',date:'02/09/2026',time:'08:30',location:'Sítio Escola',description:'Planejamento de irrigação, economia de água e cuidados com o solo para pequenas propriedades.',spots:18,enrolled:9,color:'soil'}
]

export const consultations: Consultation[] = [
 {id:1,title:'Diagnóstico de pragas',specialist:'Dr. João Ribeiro',specialty:'Agronomia',date:'21/08/2026',time:'10:00',status:'Confirmada',description:'Avaliação de folhas e orientação para manejo integrado.'},
 {id:2,title:'Orientação sobre comercialização',specialist:'Mariana Costa',specialty:'Gestão Rural',date:'27/08/2026',time:'14:30',status:'Solicitada',description:'Apoio para organização de preços e apresentação dos produtos.'}
]

export const events = [
 {day:20,month:'AGO',title:'Manejo Agroecológico',type:'Capacitação'},
 {day:21,month:'AGO',title:'Diagnóstico de pragas',type:'Consultoria'},
 {day:24,month:'AGO',title:'Comercialização em Feiras',type:'Capacitação'},
 {day:27,month:'AGO',title:'Orientação comercial',type:'Consultoria'},
 {day:28,month:'AGO',title:'Conservação Pós-Colheita',type:'Capacitação'}
]
