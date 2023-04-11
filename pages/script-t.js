setTimeout(() => {
    document.getElementById('transicao').style.display = 'none'
}, 5000);
let player = 1
const pace = document.getElementById('pace')

function rollingStones() {
    document.body.innerHTML += `
    <div id="dado-layout">
        <div class="dice">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
            <div class="face right"></div>
            <div class="face left"></div>
        </div>
    </div>
    `
    document.getElementById('roll-dice').play()

    const dice = document.querySelector('.dice')
    const radom =  Math.floor(Math.random() * 6) + 1
    const winsound = document.getElementById('win')
    const dadoLayout =  document.getElementById('dado-layout')
    const valorJogada =  document.getElementById('valor-jogada')
    if(player === 4) {
        player = 1
    } else {
        player = player + 1
    }
    
    dice.style.animation = 'rolling 2s';
    setTimeout(() => {
        switch (radom) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)'
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)'
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)'
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)'
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)'
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)'
                break;
            default:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)'
                break;
        }
        dice.style.animation = 'none'
        winsound.play()
    }, 2050)
    setTimeout(() => {
        dadoLayout.style.opacity = 0
    }, 4200)
    setTimeout(() => {
        dadoLayout.remove()
        valorJogada.innerHTML = `
        <p>${radom}</p>
        <img src="../imgs/player${player}.png" alt="">
        `
        dragElement(document.querySelectorAll(".player"));
    }, 5000)
}

// entao meu nobre pedro vc n fez esse codigo e deve aprendelo futuramente(apenas modificou)
dragElement(document.querySelectorAll(".player"));
function dragElement(elmnts) {
  for (var i = 0; i < elmnts.length; i++) {
    trueDraggable(elmnts[i])
  }     
  function trueDraggable(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector(elmnt.className + "header")) {
    // if present, the header is where you move the DIV from:
    document.querySelector(elmnt.className + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    elmnt.style.cursor = "grabbing"
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    pace.play()
    elmnt.style.cursor = "grab"
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  }
}

//==============================================================================================================================================================================================

let curiosidades = [
    {
        info: 'A Oceania possui 14 países e cerca de 22 dependências administradas por nações de outros continentes, não havendo entre esses territórios nenhuma fronteira terrestre.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/800px-Oceania_%28orthographic_projection%29.svg.png',
        id: 1
    },
    {
        info: 'Apesar de Sydney ser uma das cidades australianas mais conhecidas, ela não é a capital da Austrália, como muitos pensam. A verdadeira capital da Austrália é Camberra.',
        img: 'https://cdn.britannica.com/09/140809-050-53529B3C/Old-Parliament-House-steps-Australian-National-War.jpg',
        id: 2
    },
    {
        info: 'Wellington é a capital da Nova Zelândia e também da região de Wellington, localizada ao sul da North Island (Ilha Norte), da qual Wellington é a cidade principal. Tinha aproximadamente 393 mil habitantes em 2011.',
        img: 'https://blogdointercambio.west1.com.br/wp-content/uploads/2018/07/214070-wellington-conheca-a-segunda-cidade-mais-popular-da-nova-zelandia.jpg',
        id: 3
    },
    {
        info: 'Os Neozelandeses são também conhecidos internacionalmente pelo apelido de Kiwis, que vem do pássaro nativo e que é o símbolo nacional da Nova Zelândia.',
        img: 'https://phbr13.github.io/trabalho-escola/imgs/kiwi-na-mao.jpg',
        id: 4
    },
    {
        info: 'O achamento da Austrália foi no dia 21 de agosto de 1770 e recebeu o nome de Nova Gales do Sul. Supostamente a Austrália já havia sido visitada por portugueses em 1522 e em 1525 e por neerlandeses no século XVII, porém ignorada.',
        img: 'https://www.infoescola.com/wp-content/uploads/2010/09/descoberta-australia.jpg',
        id: 5
    },
    {
        info: 'O capitão Inglês James Cook foi quem achou a Austrália quando explorava o continente para o Reino Unido. Ele também adentrou a Austrália e teve uma ideia de seu verdadeiro tamanho e mapeou a Região.',
        img: 'https://www.surfertoday.com/images/jamp/page/captain-james-cook.jpg',
        id: 6
    },
    {
        info: 'O menor país da Oceania é Nauru, com apenas 20km².',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nauru_satellite.jpg/285px-Nauru_satellite.jpg',
        id: 7
    },
    {
        info: 'Tonga é um país pequeno, com várias ilhas, a principal ilha, Tongatapu, é protegida por lagoas e penhascos de pedra calcária, abrigando a capital rural de Nuku. A economia de Tonga é predominantemente agrícola. ',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tonga_ESA363260.jpg/1200px-Tonga_ESA363260.jpg',
        id: 8
    },
    {
        info: `Assim como as Américas, a  Oceania teve alguns colonizadores Europeus, aqui está uma lista entre os países da oceania e seus colonizadores:
        Austrália - Reino Unido;
        Fiji - Reino Unido;
        Ilhas Marshall - Espanha, depois Estados Unidos;
        Ilhas Salomão - Reino Unido;
        Kiribati - Reino Unido;
        Micronésia - Estados Unidos;
        Nauru - Reino Unido;
        Nova Zelândia - Reino Unido;
        Palau - Espanha;
        Papua Nova Guiné - Reino Unido;
        Samoa - Alemanha;
        Tonga - Único país do Pacífico que não sofreu processo de colonização; 
        Tuvalu - Reino Unido;
        Vanuatu - França e Reino Unido (Joint Colonial Condominium);
        `,
        img: 'https://4.bp.blogspot.com/-qBrAAZKOJMY/TqHUUINPxWI/AAAAAAAAA30/wNL1h1HyXlk/s1600/asia+oceania.jpg',
        id: 9
    },
    {
        info: `Essas são as principais Religiões da Austrália:
        Religião na Austrália (Dados do governo, censo de 2021):
        Sem religião (38.9%);
        Catolicismo (20.0%);
        Protestantismo (18.1%);
        Outros cristãos (5.8%);
        Islã (3.2%);
        Hinduísmo (2.7%);
        Budismo (2.4%);
        Sikhismo (0.8%);
        Não definido (7.2%);
       `,
        img: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/acima-simbolos-das-principais-religioes-mundo-57a1fb18078d7.jpg',
        id: 10
    },
    {
        info: 'O Havaí é conhecido mundial pelo surf, que tem diversas variáveis, como a remada, o tow in, o windsurfe, o kitesurf, e o Kaha Nalu/bodysurf, mas também muitos outros são praticados pelos Havaianos, como por exemplo: Lele Kawa (pular de um penhasco), pouca gente sabe que foi criado no Havaí, e a canoa havaiana.',
        img: 'https://tahititourisme.com/wp-content/uploads/2019/07/Tom-Servais-Tahiti-Surf-Pro-2017servais17_0332781140x550px.jpg',
        id: 11
    },
    {
        info: 'Esse continente é constituído por grupos de ilhas, e a sua maior porção de terra é a Austrália, o 6º maior país do mundo em território.',
        img: 'https://static.todamateria.com.br/upload/ma/pa/mapa-mundi-og.jpg',
        id: 12
    },
    {
        info: 'A  Austrália tem cinco lagos rosa: Hillier, Field of Pink Lakes, Hutt Lagoon, Pink Lake e Quairading Pink Lake. O fenômeno também ocorre no Senegal, na Espanha, no Canadá, nos Estados Unidos, na Bolívia e no Azerbaijão. O maior deles é o Hiller, existe algumas teorias do porque isso acontece, estima que seja uma combinação de fatores: a falta de nutrientes, muito sal e a presença de Dunaliella salina, microalga que libera betacaroteno. No contato com a luz solar, essa substância tornaria a água cor-de-rosa. Outra possibilidade é a proliferação da bactéria Salinibacter ruber, produzindo bacterioruberina, que teria a coloração rosa. O Lago Hillier tem 600 metros de comprimento e fica em uma área de preservação. É possível contratar passeios de helicóptero para ver o lago de cima, mas não se pode chegar até lá nem nadar nele, é claro.',
        img: 'https://blog.edestinos.com.br/wp-content/uploads/2018/08/LIQENI_HILLIER_-_ROZE.jpg',
        id: 13
    },
    {
        info: 'Os camelos selvagens australianos são populações selvagens de dromedários (Camelus dromedarius) na Austrália. Importados da Índia britânica e do Afeganistão durante o século 19 para transporte e construção durante a colonização das partes central e ocidental da Austrália , muitos foram soltos na natureza depois que o transporte motorizado substituiu o uso de camelos no início do século 20, resultando em uma população selvagem em rápido crescimento, sua população estimada é de 1milhão.',
        img: 'https://c.files.bbci.co.uk/9B3F/production/_110434793_gettyimages-1063075776.jpg',
        id: 14
    },
    {
        info: 'A Oceania além de ser o Menor continente do Mundo é o 2º menos populoso (perde apenas para a Antártida), com apenas 37 milhões de habitantes ou 0,5% da população mundial.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_Map_of_Oceania.png',
        id: 15
    },
    {
        info: 'Tonga é um reino polinésio com mais de 170 ilhas do Pacífico Sul, muitas desabitadas e a maioria repleta de praias de areia branca e recifes de corais e coberta por floresta tropical.',
        img: 'https://www.roteiroviagemdemochileiros.com.br/wp-content/uploads/2015/05/Reino-de-Tonga-4.jpg',
        id: 16
    },
    {
        info: 'Surpreendentemente a Oceania não é o território com mais ilhas no planeta, com apenas 10.000, só Canadá por exemplo tem 36.000 ilhas.',
        img: 'https://www.gestaoeducacional.com.br/wp-content/uploads/2018/11/ilhas-salomao-pais-da-europa.jpg',
        id: 17
    },
    {
        info: 'Os homens de lama, da tribo Asaro na Papua Nova Guiné é conhecida ao redor do mundo, porque eles têm o costume de cobrirem suas cabeças de lama, com o intuito de parecerem espíritos, antigamente eles usavam esses acessórios para assustar tribos inimigas, porém desde os anos 70 eles estão em paz e usam as máscaras em festivais e para alimentar o turismo.',
        img: 'https://lh3.googleusercontent.com/pQDmV9yW2RzlJyRlN02MbMgKzThsIC42j3QpBwY2Rhx57KcaBa-dDe-Yfh3UeLBEwT8OasFUELdm7G8vTyvOH4rbQVOc2zU3qZMdVMN1hfDBan2OYY1GUi0IPiIpsLVt4c_lSgt6tj1tt91Hnl2sukQsFoUOW94pplKijV6RIXaYUM3i2DUlocIIvDa_g767QkZfPEhr0a90q8c0wYwFAzyE4VbDxEFQ9ybCXC9OLnIBgFr3FWwyTPKpBidVbSBJfxXj7E1bjNQNOxP-X9KRzMVk_7noLbhhMaiSdTd6kcx5Aj-QyQFB0sg3If5KQB3-ZSzPddr4a61gJ0tAcOQuGsGgc7Kd25AMAJ3PVhXnrCFOTCqd9F5YXI7NzXu8nRuyT5Y9pBOT1vG77-PkD-649E5xWONzuQLIks7nhWTggcLBHRE9RhvJ9Je-kDUEpmBIVT3aHCAJz73n3n-eIcO6qcfVgOtn84JTw7mgR53Bb5i_ppqzYV8_GGbxEGelJt2Hd1VOx85TS6VtADAW8f9jcrgOV_qyv_hiy3FNsrysmDoUmcmFeg6CqyHd5EYZMKOUdS5O_RBkakzKEDAHxYY4JsQxvbt0Q7yDNvPI-gzWh2h0bOdgRKens28GbsIhaVHJJHfiat-WongaCHaIEwgIO1V-wYlaBmwbApInnj0CQR-DfxyTeprD0c76EBMZAgzuec9gpwynK3Gwx4uIypLcadWVYzjwaILyf4LlKVIwXWCH57i7PA=w595-h335-no',
        id: 18
    },
    {
        info: 'O Chile, tal como os Estados Unidos são países que têm territórios na Oceania e nas Américas, respectivamente, a Ilha de Páscoa que é a ilha das famosas cabeças de pedra gigantes, e o Havaí que é conhecido por seus vulcões e surfe.',
        img: 'https://www.constancezahn.com/wp-content/uploads/2020/05/destaque-destino-lua-de-mel-teresa-perez-tours-ilha-de-pascoa.jpg',
        id: 19
    },
    {
        info: 'A Papua Nova Guiné é o país com mais línguas faladas no mundo (850), mais de 4 vezes o número de línguas faladas no Brasil (210), porém nossa população é superior a 210 Milhões de pessoas, já a deles não supera 7,7 Milhões.',
        img: 'https://www.conexaolusofona.org/wp-content/uploads/2015/06/linguas.jpg',
        id: 20
    },
    {
        info: 'Na Nova Zelândia, 9 a cada 10 Maoris moram na Ilha do norte.',
        img: 'https://th-thumbnailer.cdn-si-edu.com/7RFmgKEWokTniiw5XnMkzn4fVl0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ab/1f/ab1f73c8-ca4a-4a58-bd19-f4a510463fd9/moana-maui-disney-animation.jpg',
        id: 21
    },
    {
        info: 'A cultura Maori é muito forte, pois cerca de 15% ou 600.000 habitantes (sua maior tribo são os Ngāpuhi, com 122 214 pessoas).',
        img: 'https://images.squarespace-cdn.com/content/v1/591f27711b631b9402bab28e/1647622328788-L6WQ6TB9GHMYXARKEJ1Z/maori+face.JPG?format=750w',
        id: 22
    },
    {
        info: 'Maori é o povo nativo da Nova Zelândia. Os Maori é um conjunto de tribos, há aqueles que afirmam que o povo maori tenha vindo de ilhas longínquas da Polinésia (Havaí) e chegado à Nova Zelândia no século X em CANOAS.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Haka_performed_during_US_Defense_Secretary%27s_visit_to_New_Zealand_%281%29.jpg',
        id: 23
    },
    {
        info: 'Dos Maoris Neozelandeses ¼ fala a língua nativa,  No idioma falado antes da colonização européia. A expressão na língua maori significa “normal” ou “natural”.',
        img: 'https://static.wixstatic.com/media/5740cb_cf1de78b03614887b3940e3247aae20c~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5740cb_cf1de78b03614887b3940e3247aae20c~mv2.jpg',
        id: 24
    },
    {
        info: 'A Nova Zelândia tem o famoso "haka", uma dança tradicional maori que é realizada antes de algumas competições esportivas, como o rugby. O haka envolve movimentos vigorosos e expressões faciais intensas, e pode parecer bastante intimidante para aqueles que não estão familiarizados com a cultura maori. link-video: https://www.youtube.com/watch?v=yiKFYTFJ_kw',
        img: 'https://i.guim.co.uk/img/media/8251b4e7c2be07453e89b8c0c70618d2c8223fa5/0_39_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=332c6f0e0b7f35fc089e8ee78cc54e15',
        id: 25
    },
    {
        info: 'Um costume inusitado para brasileiros que estão na Austrália pode ser o hábito de fazer um churrasco na praia, conhecido como "beach barbecue". Na Austrália, é comum levar uma churrasqueira portátil para a praia e cozinhar carne, frango ou legumes enquanto aproveita o sol e as ondas. Para muitos brasileiros, isso pode ser um pouco surpreendente, já que a cultura do churrasco é forte no Brasil, mas normalmente é associada a eventos em quintais ou espaços fechados.',
        img: 'https://i2-prod.mirror.co.uk/incoming/article23761234.ece/ALTERNATES/s615b/2_Family-having-BBQ-on-beach-at-sunset.jpg',
        id: 26
    },
    {
        info: 'Na Austrália os ovos de avestruz são geralmente vistos como um item exótico ou gourmet, e são bastante caros devido ao seu tamanho grande e raro. Além disso, a preparação e cozimento de ovos de avestruz requer habilidade e técnica especializadas, o valor de comércio costuma ser de 30 a 50 AUD (1AUD=3,37 reais).',
        img: 'https://img.olhardigital.com.br/wp-content/uploads/2021/07/avestruz.jpg',
        id: 27
    },
    {
        info: 'Uma curiosidade inusitada sobre Kiribati é que o país está localizado em dois hemisférios diferentes: o hemisfério norte e o hemisfério sul. Mais especificamente, Kiribati é composto por 33 ilhas, espalhadas em uma vasta área do Oceano Pacífico, que se estendem por cerca de 5.000 km em ambos os hemisférios.',
        img: 'https://3.bp.blogspot.com/_GpRRVgda3xo/THHK21YAMHI/AAAAAAAABL4/HUFcq1J0D_8/s1600/AAA.jpg',
        id: 28
    },
    {
        info: 'Nauru o menor país da Oceania possuí apenas 12000 habitantes',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1200px-Flag_of_Nauru.svg.png',
        id: 29
    },
    {
        info: 'O traje tradicional samoano (Samoa) para homens é chamado de "LavaLava", que é uma saia envolta na cintura, enquanto a vestimenta das mulheres é chamada de "puletasi", que é um vestido longo e solto. Essas roupas são frequentemente usadas em ocasiões especiais, como casamentos e outras celebrações.',
        img: 'https://www.linkpicture.com/q/LPic6431f61eceff2966062471.jpg',
        id: 30
    },
    {
        info: 'Há 3 anos a Austrália enfrentou uma dura seca que causou um comportamento hostil de camelos. Caçadores em helicópteros abateram a tiros mais de 10 mil camelos no sul da Austrália. Os caçadores pertencem ao Departamento de Meio Ambiente e Patrimônio da Austrália. A decisão foi tomada depois que as comunidades aborígenes (povos originários da Austrália) da região denunciaram que grupos de camelos estavam danificando estruturas em busca de água.',
        img: 'https://www.linkpicture.com/q/LPic6431f5fe83218611060955.jpg',
        id: 31
    },
    {
        info: 'Os aborígenes são os povos indígenas da Austrália, que vivem no continente há pelo menos 45.000 anos. Eles são considerados a cultura mais antiga do mundo, com uma rica história e tradições que se desenvolveram ao longo de milhares de anos. Os aborígenes são compostos por centenas de grupos étnicos distintos, cada um com sua própria língua, tradições e história. Eles têm uma forte conexão com a terra e são conhecidos por suas habilidades de caça e coleta, que foram transmitidas de geração em geração.',
        img: 'https://www.todoestudo.com.br/wp-content/uploads/2018/07/abori%CC%81genes.jpg',
        id: 32
    },
    {
        info: 'Em Samoa existe um prato típico chamado "umu", que consiste em cozinhar carne e vegetais em um forno subterrâneo, Tradicionalmente, o umu é preparado com frango, porco, peixe, taro, bananas, batatas-doces, abóbora e outras verduras. O umu é cozido em um forno subterrâneo chamado de "umu". Para preparar o forno, é preciso cavar um buraco no chão e colocar pedras no fundo, em seguida madeira ou carvão é colocado no buraco. Em seguida os alimentos são enrolados em folhas de bananeira para criar um pacote. Com a ajuda de uma pá, são colocados os pacotes de comida em cima das pedras quentes no forno. Depois eles são cobertos com mais folhas de bananeira e um pouco de terra para manter o calor dentro.',
        img: 'https://www.polynesia.com/blog/wp-content/uploads/2016/10/umu-cooking-1.jpg',
        id: 33
    },
    {
        info: 'A arte aborígene é uma forma de arte indígena da Austrália que existe há milhares de anos e inclui pinturas, esculturas, tecelagem, cestaria e outras formas de expressão. Uma técnica famosa é a pintura em estilo "ponto" ou "pontilhismo", onde pequenos pontos de tintas naturais são usados para criar desenhos complexos que contam histórias sobre a cultura, história e espiritualidade do povo aborígene.',
        img: 'https://w7.pngwing.com/pngs/847/688/png-transparent-indigenous-australian-art-indigenous-australians-painting-australia-thumbnail.png',
        id: 34
    },
    {
        info: 'A tatuagem maori, também chamada de "ta moko", foi a primeira tatuagem do mundo, ela é uma forma de tatuagem tradicional do povo maori, os indígenas da Nova Zelândia. As tatuagens maori tradicionais não envolvem o uso de agulhas, mas sim de facas e talhadeiras feitas de dentes de tubarão, de ossos ou de pedras. Já as tintas são de produtos naturais, como madeira, lagartos, gordura animal e resinas de árvores, os desenhos são baseados em símbolos culturais e histórias maori. A tatuagem era originalmente utilizada como forma de identificação e demonstração de status social, além de proteção espiritual',
        img: 'https://assets.theyou.com/public/thumbs/work_elements/51600/jpg/w1330/h1330/q80/51600/work_elements/October2021/grande-arm-maori-tattoo-water.jpg',
        id: 35
    },
    {
        info: 'O Templo de Borobudur, o maior templo budista do mundo, é um monumento localizado na Ilha de Java, na Indonésia, construído durante o século IX pelo Império Sailendra. É composto por nove plataformas decoradas com mais de 2.500 painéis de relevos esculpidos em pedra, que contam a história da vida de Buda e da sua doutrina. O templo possui 72 estupas (estruturas arquitetônicas em forma de torre, com uma base larga e uma cúpula no topo) e é considerado uma obra-prima da arquitetura e engenharia. É um importante símbolo do budismo na Indonésia e Patrimônio Mundial da UNESCO desde 1991.',
        img: 'https://maironpelomundo.com/wp-content/uploads/2021/05/Borobudur-visto-do-alto.jpg',
        id: 36
    },
    {
        info: 'O Museu Te Papa Tongarewa é um museu de arte e história localizado em Wellington, na Nova Zelândia. Inaugurado em 1998, o museu possui uma coleção de mais de 1,5 milhão de objetos relacionados à história, cultura e arte da Nova Zelândia e do Pacífico Sul. O museu é conhecido por suas exposições interativas e inovadoras, que oferecem uma experiência imersiva aos visitantes,tal como, Exibições interativas, Exibições em realidade virtual, Exibições em multi-telas, Exibições com participação do público (etc). O museu tem como objetivo ser um centro cultural que celebra a diversidade e a criatividade da região do Pacífico Sul e promove a compreensão e o respeito entre as diferentes culturas e tradições.',
        img: 'https://cdn.getyourguide.com/img/tour/59ab6f3152dc9.jpeg/146.jpg',
        id: 37
    },
    {
        info: '“The Hive” ou Colmeia é o apelido do edifício governamental que abriga a sede do governo da Nova Zelândia, localizado em Wellington. Construído entre 1969 e 1979, é composta por três principais estruturas: a Casa dos Representantes, a Casa do Conselho e a Biblioteca Parlamentar. O edifício da Colmeia foi inspirado em elementos da natureza, especialmente nas formas das colmeias das abelhas, que serviram como modelo para as cúpulas de aço e vidro que compõem a estrutura.',
        img: 'https://cimages1.touristlink.com/data/cache/BO/WE/NH/OU/SE/BE/EH/IV/beehive-building-bowen-_-house-parliament_400_300.jpg',
        id: 38
    },
    {
        info: 'Muitas pessoas famosas nasceram na Oceania, aqui estão algumas delas: Chris Hemsworth (Thor), Jason Momoa (Aquaman) e Margot Robie, recentemente fará o filme da Barbie.',
        img: 'https://www.linkpicture.com/q/LPic6431f5c0ba5e0497181923.jpg',
        id: 39
    },
    {
        info: 'Você sabia que o filme "Lilo & Stitch" foi inspirado em uma viagem que o diretor e roteirista, Chris Sanders, fez para as ilhas havaianas. Durante a viagem, ele ficou impressionado com a cultura local e a paisagem exótica e decidiu criar uma história com esses elementos.',
        img: 'https://www.opovo.com.br/_midias/jpg/2022/07/14/818x460/1_lilo_e_stitch_live_action_disney-19206447.jpg',
        id: 40
    },
]

let curiosidadesIdas = []

let perguntasPresas = [
    {
        info:'Quantos países a Oceania tem?',
        a:'14 países',
        b:'10 países',
        c:'6 países',
        d:'21 países',
        correta:'a',
        id: 1
    },
    {
        info:'Qual é a capital da Austrália?',
        a:'Sydney',
        b:'Canberra',
        c:'Melbourne',
        d:'Brisbane',
        correta:'b',
        id: 2
    },
    {
        info:'Qual é a capital da Nova Zelândia?',
        a:'Auckland',
        b:'Wellington',
        c:'Christchurch',
        d:'Dunedin',
        correta:'b',
        id: 3
    },
    {
        info:'Qual animal da Nova Zelândia é o símbolo do país?',
        a:'Canguru',
        b:'Kiwi',
        c:'Coala',
        d:'Equidna',
        correta:'b',
        id: 4
    },
    {
        info:'Quando foi descoberta a Austrália?',
        a:'2007',
        b:'1500',
        c:'1770',
        d:'1850',
        correta:'c',
        id: 5
    },
    {
        info:'Que país achou a Austrália?',
        a:'Inglaterra',
        b:'França',
        c:'Brasil',
        d:'Portugal',
        correta:'a',
        id: 6
    },
    {
        info:'Qual é o Menor País da Oceania?',
        a:'Austrália',
        b:'Tuvalu',
        c:'Nova Papua Guiné',
        d:'Nauru',
        correta:'d',
        id: 7
    },
    {
        info:'O que predomina na economia de Tonga?',
        a:'Agricultura',
        b:'Indústria ',
        c:'Telemarketing ',
        d:'Exploração de petróleo',
        correta:'a',
        id: 8
    },
    {
        info:'Qual desses países NÃO foi colonizado pela Inglaterra?',
        a:'Austrália',
        b:'Tonga',
        c:'Fiji',
        d:'Papua-Nova Guiné',
        correta:'b',
        id: 9
    },
    {
        info:'Qual é a crença principal na Austrália?',
        a:'Cristianismo',
        b:'Islamismo',
        c:'Budismo',
        d:'Ateísmo',
        correta:'a',
        id: 10
    },
    {
        info:'Qual é o esporte mais jogado no Havaí?',
        a:'Surfe',
        b:'Hugby',
        c:'Futebol',
        d:'Natação',
        correta:'a',
        id: 11
    },
    {
        info:'Qual é a classificação da Austrália no ranking mundial de Território?',
        a:'9º lugar',
        b:'5º lugar',
        c:'8º lugar',
        d:'6º lugar',
        correta:'d',
        id: 12
    },
    {
        info:'Qual é o nome do maior lago rosa da Austrália?',
        a:'Hillier',
        b:'Hutt Lagoon',
        c:'Pink Lake',
        d:'Quairading Pink Lake',
        correta:'a',
        id: 13
    },
    {
        info:'Qual é o Animal que tem população  de 1,2 Milhões na Austrália?',
        a:'Canguru',
        b:'Koala',
        c:'Formiga da Tasmânia',
        d:'Camelo ',
        correta:'d',
        id: 14
    },
    {
        info:'Quantos habitantes tem a Oceania?',
        a:'25M',
        b:'9M',
        c:'37M',
        d:'60M',
        correta:'c',
        id: 15
    },
    {
        info:'Quantas ilhas o país Tonga tem?',
        a:'170',
        b:'763',
        c:'267',
        d:'1069',
        correta:'a',
        id: 16
    },
    {
        info:'Aproximadamente quantas ilhas a Oceania têm?',
        a:'9500',
        b:'10000',
        c:'10500',
        d:'15000',
        correta:'b',
        id: 17
    },
    {
        info:'Qual é o nome da tribo que tem os “homens lama” ?',
        a:'Danos',
        b:'Tupi',
        c:'Asaro',
        d:'Maori',
        correta:'c',
        id: 18
    },
    {
        info:'Qual é o nome do território do Chile na Oceania?',
        a:'Ilha de Páscoa',
        b:'Ilha el Hierro',
        c:'Ilhas Canárias',
        d:'Ilha La Palma',
        correta:'a',
        id: 19
    },
    {
        info:'Quantas línguas são faladas na Papua Nova Guiné?',
        a:'830',
        b:'840',
        c:'850',
        d:'860',
        correta:'c',
        id: 20
    },
    {
        info:'Qual parte da Nova Zelândia a população Maori predomina?',
        a:'Ilha do Norte',
        b:'Ilha do Sul',
        c:'Ilha Steward',
        d:'Ilha do Leste',
        correta:'a',
        id: 21
    },
    {
        info:'Qual é a porcentagem de Maoris na Nova Zelândia?',
        a:'11%',
        b:'13%',
        c:'15%',
        d:'17%',
        correta:'c',
        id: 22
    },
    {
        info:'Segundo a crença popular de onde vieram os Maori?',
        a:'Nepal',
        b:'China',
        c:'Havaí',
        d:'Tasmânia',
        correta:'c',
        id: 23
    },
    {
        info:'Qual é a porcentagem de Maoris que falam a língua Nativa?',
        a:'1/1',
        b:'1/2',
        c:'1/3',
        d:'1/4',
        correta:'d',
        id: 24
    },
    {
        info:'Qual desses esportes os neozelandeses praticam o “haka”?',
        a:'Surfe',
        b:'Basquete',
        c:'Rugby',
        d:'Beisebol',
        correta:'c',
        id: 25
    },
    {
        info:'Qual é a diferença entre o churrasco brasileiro e Australiano?',
        a:'É na Praia',
        b:'Eles comem polvo',
        c:'São servidos apenas frutos do mar',
        d:'Na verdade são iguais',
        correta:'a',
        id: 26
    },
    {
        info:'Qual é o preço comercializado do ovo de avestruz na Austrália em reais?',
        a:'80R$',
        b:'150R$',
        c:'220R$',
        d:'300R$',
        correta:'b',
        id: 27
    },
    {
        info:'Qual é país da oceania que está nos 2 hemisférios?',
        a:'Palau',
        b:'Samoa',
        c:'Kiribati',
        d:'Ilhas Salomão',
        correta:'c',
        id: 28 
    },
    {
        info:'Quantos habitantes tem Nauru?',
        a:'9.000',
        b:'12.000',
        c:'13.000',
        d:'10',
        correta:'b',
        id: 29 
    },
    {
        info:'Qual o nome do traje tradicional samoano (Samoa) que é uma saia envolta na cintura?',
        a:'Puletasi',
        b:'Putelasi',
        c:'LavaLava',
        d:'Lalavava',
        correta:'c',
        id: 30
    },
    {
        info:'Em que ano caçadores australianos abateram a tiros mais de 10 mil camelos no sul da Austrália?',
        a:'2020',
        b:'2021',
        c:'2022',
        d:'2023',
        correta:'a',
        id: 31
    },
    {
        info:'A pelo menos quantos anos os Aborígenes chegaram na Austrália?',
        a:'55.000',
        b:'50.000',
        c:'45.000',
        d:'40.000',
        correta:'c',
        id: 32
    },
    {
        info:'O que de diferente acontece no preparo do "umu"?',
        a:'A comida é temperada com páprica defumada',
        b:'O forno funciona na base da luz solar',
        c:'Os alimentos são coletados exatamente 3 luas antes do preparo',
        d:'Forno é subterrâneo',
        correta:'d',
        id: 33
    },
    {
        info:'Qual é a técnica que a arte aborígene utiliza?',
        a:'Xilogravura',
        b:'Estêncil',
        c:'Pontilhismo',
        d:'Animação 3D',
        correta:'c',
        id: 34
    },
    {
        info:'Qual dessas não é uma das razões originais que a Ta Moko (tatuagem em Maori) era desenhada?',
        a:'Identificação de clã',
        b:'Marcação de eventos importantes',
        c:'Demonstração status social',
        d:'Aumentar comunicação com espíritos',
        correta:'d',
        id: 35
    },
    {
        info:'Em que século foi construído o Templo de Borobudur?',
        a:'IIIX e IX',
        b:'X',
        c:'X e XI',
        d:'XI e XII',
        correta:'a',
        id: 36
    },
    {
        info:'Quantos artefatos o Museu Te Papa Tongarewa tem?',
        a:'15.000',
        b:'150.000',
        c:'1.500.000',
        d:'15.000.000',
        correta:'c',
        id: 37
    },
    {
        info:'Como o povo da Nova Zelândia chama seu edifício Governamental?',
        a:'Colmeia ',
        b:'Centro',
        c:'Comando',
        d:'Nenhuma das anteriores',
        correta:'a',
        id: 38
    },
    {
        info:'Qual dessas celebridades não nasceu na Oceania?',
        a:'Chris Hemsworth',
        b:'Dwayne Johnson',
        c:'Margot Robbie',
        d:'Jason Momoa',
        correta:'b',
        id: 39
    },
    {
        info:'Onde se passa o filme Lilo & Stitch?',
        a:'Samoa',
        b:'Ilhas Marshall',
        c:'Micronésia',
        d:'Havaí',
        correta:'d',
        id: 40
    },
]

let perguntasLivres = []

let desafios = [
    {
        info: 'Imite um canguru e faça 10 pulinhos',
        img: '<img src="https://gifs.eco.br/wp-content/uploads/2021/10/imagens-e-gifs-de-cangurus-28.gif" alt="">',
    },
    {
        info: 'A Nova Zelândia tem o famoso "haka", uma dança tradicional maori que é realizada antes de algumas competições esportivas, como o rugby. O haka envolve movimentos vigorosos e expressões faciais intensas, e pode parecer bastante intimidante para aqueles que não estão familiarizados com a cultura maori. DANCE "haka" (pelo menos tente)',
        img: '<iframe width="560" height="315" src="https://www.youtube.com/embed/I3gbneDt-S4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
        info: 'Imite o canto do kiwi(pássaro símbolo da Nova Zelândia)',
        img: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wUd5ue6lGmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
        info: 'Você sabia que o maior concurso de obstáculos já aconteceu na austrália? Se chama Australian Ninja Warrior. O concurso apresenta uma série de competidores que tentam ultrapassar obstáculos que, a cada período, aumentam a dificuldade.<br> Como um Ninja DESVIE DAS BOLINHAS.',
        img: '<img src="https://i.gifer.com/J7En.gif" alt="">',
    },
    {
        info: 'Pegue o frisbee sem deixa-lo cair',
        img: '<img src="https://media.tenor.com/Gl4deYkMpIYAAAAd/frisbee.gif" alt="">',
    },
    {
        info: 'O casuar é uma ave do grupo das aves ratitas de grande porte, nativas do nordeste da Austrália, Nova Guiné e ilhas circundantes. São aves curiosas que costumam imitar movimentos de humanos depois de observá-los atentamente, embora sejam muito agressivas. EQUILIBRISSE COM APENAS UMA PERNA como um Casuar. link-video-casuar-atacando-homem: https://www.youtube.com/shorts/aYcef-FH6UA ',
        img: '<img src="https://qph.cf2.quoracdn.net/main-qimg-8728c781113d2e3f22d41b64cf30f0e9-lq" alt="">',
    },
    {
        info: 'A língua predominante na Austrália é o inglês, porém com algumas alterações. Tente pronunciar corretamente a palavra BREKKY do inglês australiano, depois inicie o audio para ver se está correto. Brekky significa café da manhã; no inglês americano seria breakfast ',
        img: '<audio controls src="../audios/brekky.wav"></audio>',
    },
    {
        info: 'Identifique a bandeira que não pertence a um país da oceania',
        img: '<img src="https://www.linkpicture.com/q/Design-sem-nome_15.png" alt="">',
    },
    {
        info: 'Os Maori são conhecidos por suas amedrontadoras expressões faciais. Imite a expressão do camarada abaixo.',
        img: '<img src="https://blog.informationplanet.com.br/wp-content/uploads/2012/05/Simbolos_Maori.jpg" alt="">',
    },
    {
        info: 'Execute entre 3 a 10 flexões.',
        img: '<img src="https://thumbs.gfycat.com/GrayCompassionateHerald-size_restricted.gif" alt="">',
    },
]

let desafiosIdos = []

function corLabel(label) {
    for (let index = 1; index < 5; index++) {
        document.getElementById(`${index}-label`).style.borderColor ='rgba(194, 194, 194, 0)'
    }
    document.getElementById(label).style.borderColor ='rgb(194, 194, 194)'
}

function deslizarSlider(onde) {
    if (onde === 'dentro') {
        document.getElementById('slider').style.left = '0'
    } else if (onde === 'fora') {
        document.getElementById('slider').style.left = '300vh'
    }
}

const option = document.getElementById('option')
function carta(carta) {
    option.play()
    if(carta === 'bolinha') {
        document.body.innerHTML += `
    <div id="slider">
        <div id="titulo">
            <h1 style="color: #515caf;">Bolinha</h1>
            <img src="../imgs/carta-bola.svg" alt="">
        </div>
        <div id="conteudo">
            <p>
                Parabéns, você ganhou uma bolinha!<br>
                Agora você deve arremessá-la em um dos jogadores. Se você acertar, o jogador acertado volta 2 casas. Se você errar, você volta 2 casas.
            </p>
        </div>
        <div id="botao">
            <div onclick="ok()">
                Prosseguir
            </div>
        </div>
    </div>
    `
    } else if (carta === 'curiosidade') {
        let num = Math.floor(Math.random() * curiosidades.length) 
        let curiosidade = curiosidades[num]
        if (curiosidade !== undefined) {
            perguntasLivres.push(perguntasPresas[curiosidade.id - 1])
            curiosidadesIdas.push(curiosidade)
            curiosidades.splice(num,1)
        } else {
            for (let index = 0; index < curiosidadesIdas.length; index++) {
                curiosidades.push(curiosidadesIdas[index])
            }
            perguntasLivres = []
            num = Math.floor(Math.random() * curiosidades.length) 
            curiosidade = curiosidades[num]
            curiosidadesIdas = []
        }
        document.body.innerHTML += `
    <div id="slider">
        <div id="titulo">
            <h1 style="color: #ebcf50;">Curiosidade</h1>
            <img src="../imgs/carta-curiosidade.svg" alt="">
        </div>
        <div id="conteudo">
            <p>
                ${curiosidade.info}
            </p>
        </div>
        <div id="imagem">
            <img src="${curiosidade.img}" alt="">
        </div>
        <div id="botao">
            <div onclick="ok()">
                Prosseguir
            </div>
        </div>
    </div>
    `
    } else if (carta === 'desafio') {
        let num = Math.floor(Math.random() * desafios.length) 
        let desafio = desafios[num]
        if (desafio !== undefined) {
            desafiosIdos.push(desafio)
            desafios.splice(num,1)
        } else {
            for (let index = 0; index < desafiosIdos.length; index++) {
                desafios.push(desafiosIdos[index])
            }
            num = Math.floor(Math.random() * curiosidades.length) 
            desafio = desafios[num]
            desafiosIdos = []
        }
        document.body.innerHTML += `
    <div id="slider">
        <div id="titulo">
            <h1 style="color: #b53434;">Desafio</h1>
            <img src="../imgs/carta-desafio.svg" alt="">
        </div>
        <div id="conteudo">
            <p>
                Você caiu na casa do desafio!!!<br>
                Se você cumpri-lo, você avança 2 casas. Se você não cumpri-lo, você volta 5 casas.
            </p>
            <p>
               Desafio: ${desafio.info}
            </p>
            <div id="imagem">
                ${desafio.img}
            </div>
        </div>
        <div id="botao">
            <div onclick="ok()">
                Prosseguir
            </div>
        </div>
    </div>
    `
    } else if (carta === 'perguntaMortal') {
        let num = Math.floor(Math.random() * perguntasLivres.length) 
        let pergunta = perguntasLivres[num]
        if (pergunta !== undefined) {
            perguntasLivres.splice(num,1)
        } else {
            num = Math.floor(Math.random() * perguntasPresas.length) 
            pergunta = perguntasPresas[num]
        }
        document.body.innerHTML += `
    <div id="slider">
        <div id="titulo">
            <h1 style="color: #80379e;">Pergunta Mortal</h1>
            <img src="../imgs/carta-cavera.svg" alt="">
        </div>
        <div id="conteudo">
            <p>
                ${pergunta.info}
            </p>
        </div>
        <div id="interacao">
            <form>
                <label id="1-label" onclick="corLabel('1-label')">
                    <span>A&#41; ${pergunta.a}</span>
                    <input type="radio" data-cu="${pergunta.a}" name="questao" id="A" value="A">
                </label>
                <label id="2-label" onclick="corLabel('2-label')">
                    <span>B&#41; ${pergunta.b}</span>
                    <input type="radio" data-cu="${pergunta.b}" name="questao" id="B" value="B">
                </label>
                <label id="3-label" onclick="corLabel('3-label')">
                    <span>C&#41; ${pergunta.c}</span>
                    <input type="radio" data-cu="${pergunta.c}" name="questao" id="C" value="C">
                </label>
                <label id="4-label" onclick="corLabel('4-label')">
                    <span>D&#41; ${pergunta.d}</span>
                    <input type="radio" data-cu="${pergunta.d}" name="questao" id="D" value="D">
                </label>
            </form>
        </div>
        <div id="botao">
            <div id="confirmar" onclick="verificar('${pergunta.correta}', 'mortal')">
                Confirmar?
            </div>
        </div>
    </div>
    `
    } else if (carta === 'pergunta') {
        let num = Math.floor(Math.random() * perguntasLivres.length) 
        let pergunta = perguntasLivres[num]
        if (pergunta !== undefined) {
            perguntasLivres.splice(num,1)
        } else {
            num = Math.floor(Math.random() * perguntasPresas.length) 
            pergunta = perguntasPresas[num]
        }
        document.body.innerHTML += `
    <div id="slider">
        <div id="titulo">
            <h1 style="color: #43ad52;">Pergunta</h1>
            <img src="../imgs/carta-pergunta.svg" alt="">
        </div>
        <div id="conteudo">
            <p>
                ${pergunta.info}
            </p>
        </div>
        <div id="interacao">
            <form>
                <label id="1-label" onclick="corLabel('1-label')">
                    <span>A&#41; ${pergunta.a}</span>
                    <input type="radio" data-cu="${pergunta.a}" name="questao" id="A" value="A">
                </label>
                <label id="2-label" onclick="corLabel('2-label')">
                    <span>B&#41; ${pergunta.b}</span>
                    <input type="radio" data-cu="${pergunta.b}" name="questao" id="B" value="B">
                </label>
                <label id="3-label" onclick="corLabel('3-label')">
                    <span>C&#41; ${pergunta.c}</span>
                    <input type="radio" data-cu="${pergunta.c}" name="questao" id="C" value="C">
                </label>
                <label id="4-label" onclick="corLabel('4-label')">
                    <span>D&#41; ${pergunta.d}</span>
                    <input type="radio" data-cu="${pergunta.d}" name="questao" id="D" value="D">
                </label>
            </form>
        </div>
        <div id="botao">
            <div id="confirmar" onclick="verificar('${pergunta.correta}', 'normal')">
                Confirmar?
            </div>
        </div>
    </div>
    `
    }
    setTimeout(() => {
        deslizarSlider('dentro')
    }, 100);
}

function ok() {
    option.play()
    deslizarSlider('fora')
    setTimeout(() => {
        document.getElementById('slider').remove()
        dragElement(document.querySelectorAll(".player"));
    }, 1000);
}

const lose = document.getElementById("lose")
const win2 = document.getElementById("win2")
function verificar(certo, qual) {
    option.play()
    const value = document.getElementsByName('questao')
    let lulu = 0
    for (let radio of value){
        if (radio.checked) { 
            lulu = 1   
            let be = 'Você ganhou uma bolinha especial!'
                let notbe = 'Volte uma casa'
            if (qual === 'normal') {
                be = 'Você ganhou uma bolinha especial!'
                notbe = 'Volte 1 casa'
            } else {
                be = 'Avance 1 casa'
                notbe = 'Volte 10 casas'
            }
            if(radio.value === certo.toUpperCase()) {
                win2.play()
                document.body.innerHTML += `
                <div id="slider2">
                    <h1>Acertou!</h1>
                    <p>${be}</p>
                </div>
                `
            } else {
                lose.play()
                const certoPLUS = document.getElementById(`${certo.toUpperCase()}`).getAttribute('data-cu')
                document.body.innerHTML += `
                <div id="slider2">
                    <h1>Errou!</h1>
                    <p>${notbe}<br>Certo: ${certo.toUpperCase()}&#41; ${certoPLUS}</p>
                </div>
                `
            }
            setTimeout(() => {
                document.getElementById('slider2').style.left = 0
            }, 100);
            setTimeout(()=> {
                document.getElementById('slider').remove()
                document.getElementById('slider2').style.left = '300vh'
            }, 3000)
            setTimeout(()=> {
                document.getElementById('slider2').remove()
            }, 3900)
        }
    }
    if (lulu === 1) {
        document.getElementById('confirmar').style.display = 'none'
    }
    dragElement(document.querySelectorAll(".player"));
}