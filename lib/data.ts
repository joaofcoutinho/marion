export const STORES = [
  {
    city: 'Iconha',
    cityItalic: true,
    tag: 'Fábrica',
    address: 'BR-101, Km 374 — Ilha do Coco, Iconha, ES · 29280-000',
    phone: '28999397736',
    display: '(28) 99939-7736',
    index: '01',
  },
  {
    city: 'Guarapari',
    address: 'R. Francisco Vieira Passos, 1221 — Muquiçaba, Guarapari, ES',
    phone: '27997608006',
    display: '(27) 99760-8006',
    index: '02',
  },
  {
    city: 'Cachoeiro',
    address: 'Av. Dr. Aristides Campos, 129 — Santo Antônio, Cachoeiro, ES',
    phone: '28999815860',
    display: '(28) 99981-5860',
    index: '03',
  },
  {
    city: 'Anchieta',
    address: 'Rod. do Sol, 2551 — Oliveira, Anchieta, ES',
    phone: '28999512829',
    display: '(28) 99951-2829',
    index: '04',
  },
]

export const PRODUCTS = [
  {
    slug: 'telhado',
    tag: 'Categoria',
    span: 'feature' as const,
    name: 'Telhado.',
    desc: '',
    image: '/images/cat-telhado.png',
    wppMsg: 'Olá, preciso de madeiras para telhado!',
    num: '01',
  },
  {
    slug: 'esquadrias',
    tag: 'Categoria',
    span: 'tall' as const,
    name: 'Esquadrias.',
    desc: '',
    image: '/images/cat-esquadrias.png',
    wppMsg: 'Olá, tenho interesse em esquadrias!',
    num: '02',
  },
  {
    slug: 'decks-madeiras',
    tag: 'Categoria',
    span: 'std' as const,
    name: 'Decks & Madeiras.',
    desc: '',
    image: '/images/cat-deck.png',
    wppMsg: 'Olá, tenho interesse em decks e madeiras nobres!',
    num: '03',
  },
  {
    slug: 'moveis',
    tag: 'Categoria',
    span: 'std' as const,
    name: 'Móveis.',
    desc: '',
    image: '/images/cat-moveis.png',
    wppMsg: 'Olá, tenho interesse em móveis!',
    num: '04',
  },
]

export const BADGES = [
  { num: '01', icon: 'shield',   title: 'Garantia de 1 Ano',  sub: 'Em todos os produtos' },
  { num: '02', icon: 'discount', title: '5% de desconto',      sub: 'Pagamento à vista' },
  { num: '03', icon: 'card',     title: 'Até 6× sem juros',    sub: 'Cartões de crédito' },
  { num: '04', icon: 'truck',    title: 'Frete grátis',        sub: 'Para todo o Brasil' },
]

export const FEATURES = [
  {
    num: '01',
    title: 'Direto da fábrica.',
    desc: 'Sem intermediários. Melhor preço e controle total da qualidade em cada peça.',
    image: '/images/product-telhado.jpg',
  },
  {
    num: '02',
    title: 'Atendimento ágil.',
    desc: 'Orçamento rápido via WhatsApp com equipe especializada e atenciosa.',
    image: '/images/product-cadeiras.jpg',
  },
  {
    num: '03',
    title: 'Madeira certificada.',
    desc: 'Madeiras selecionadas, tratadas e com procedência garantida.',
    image: '/images/product-deck.jpg',
  },
  {
    num: '04',
    title: 'Quatro lojas no ES.',
    desc: 'Guarapari, Cachoeiro, Anchieta e Iconha. Sempre perto de você.',
    image: '/images/product-rural.jpg',
  },
]

export const PRIMARY_PHONE = '27997608006'
export const INSTAGRAM = 'https://www.instagram.com/marionmadeirasoficial'

export type Product = {
  slug: string
  name: string
  desc?: string
  image?: string
  wppMsg: string
}

export type Category = {
  slug: string
  num: string
  name: string
  italic?: string
  tagline: string
  intro: string
  image: string
  items: { name: string; desc: string }[]
  products?: Product[]
  pdf?: string
  wppMsg: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'construcao',
    num: '01',
    name: 'Construção',
    italic: 'sólida',
    tagline: 'Estrutura que sustenta sua obra do alicerce ao acabamento.',
    intro: 'Vigas, caibros, pontaletes, sarrafos e tábuas brutas selecionadas. Madeira tratada e dimensionada para garantir estabilidade e durabilidade em obras residenciais, comerciais e industriais.',
    image: '/images/cat-construcao.png',
    items: [
      { name: 'Vigas', desc: 'Peças de grande porte para sustentação de lajes, telhados e mezaninos.' },
      { name: 'Caibros', desc: 'Suporte para ripas e estruturas de cobertura, em diferentes bitolas.' },
      { name: 'Pontaletes', desc: 'Reforço vertical para fôrmas, escoramento e estruturas temporárias.' },
      { name: 'Sarrafos', desc: 'Peças finas para travamento, batentes e estruturas auxiliares.' },
      { name: 'Tábuas Brutas', desc: 'Tábuas para fôrmas de concreto, fundo de laje e tapumes.' },
      { name: 'Ripas', desc: 'Peças leves para estruturas, caibramento e acabamentos.' },
    ],
    products: [
      {
        slug: 'tabua-de-pinus',
        name: 'Tábua de Pinus',
        desc: 'Madeira leve e versátil, ideal para fôrmas, móveis simples e acabamentos internos.',
        image: '/cat-construcao/tabus-pinus.png',
        wppMsg: 'Olá! Tenho interesse na Tábua de Pinus. Pode me passar um orçamento?',
      },
      {
        slug: 'madeirite-comum',
        name: 'Madeirite Comum',
        desc: 'Compensado resinado para fôrmas de concreto, tapumes e usos estruturais em obras.',
        image: '/cat-construcao/madeirite-comum.png',
        wppMsg: 'Olá! Tenho interesse no Madeirite Comum. Pode me passar um orçamento?',
      },
      {
        slug: 'madeirite-plastificado',
        name: 'Madeirite Plastificado',
        desc: 'Compensado com película plástica de alta resistência. Reuso múltiplo em fôrmas e acabamento liso.',
        image: '/cat-construcao/madeirite-plastificado.png',
        wppMsg: 'Olá! Tenho interesse no Madeirite Plastificado. Pode me passar um orçamento?',
      },
    ],
    pdf: '/catálogo_construção.pdf',
    wppMsg: 'Olá! Tenho interesse em madeiras para construção e gostaria de um orçamento.',
  },
  {
    slug: 'rural',
    num: '02',
    name: 'Rural',
    italic: 'do campo',
    tagline: 'Madeira robusta para a propriedade que trabalha de verdade.',
    intro: 'Mourões, lascas e estacas tratadas para cercas, currais, pastos e infraestrutura rural. Resistência à umidade, ao tempo e ao uso pesado do dia a dia no campo.',
    image: '/images/cat-rural.png',
    items: [
      { name: 'Mourões Tratados', desc: 'Postes para cerca com tratamento autoclave, longa durabilidade no solo.' },
      { name: 'Lascas de Eucalipto', desc: 'Para cercas rústicas, divisórias de pasto e contenções.' },
      { name: 'Estacas', desc: 'Apoio para mudas, hortas e pequenas estruturas rurais.' },
      { name: 'Palanques', desc: 'Peças robustas para porteiras, mangueiros e currais.' },
      { name: 'Travessas', desc: 'Madeira pesada para passagens, contenções e bases.' },
      { name: 'Bambu & Acessórios', desc: 'Itens complementares para cercas e estruturas rurais.' },
    ],
    products: [
      {
        slug: 'mourao-eucalipto-tratado',
        name: 'Mourão (Eucalipto Tratado)',
        desc: 'Postes verticais para cercas, tratados em autoclave. Resistência a cupins, fungos e umidade — durabilidade longa no solo.',
        image: '/cat-rural/Mourão (Eucalipto Tratado).png',
        wppMsg: 'Olá! Tenho interesse no Mourão (Eucalipto Tratado). Pode me passar um orçamento?',
      },
      {
        slug: 'esteio-eucalipto-tratado',
        name: 'Esteio (Eucalipto Tratado)',
        desc: 'Peças robustas para sustentação de currais, mangueiros, galpões e porteiras. Tratamento autoclave para uso pesado no campo.',
        image: '/cat-rural/Esteio (Eucalipto Tratado).png',
        wppMsg: 'Olá! Tenho interesse no Esteio (Eucalipto Tratado). Pode me passar um orçamento?',
      },
      {
        slug: 'arame-farpado',
        name: 'Arame Farpado',
        desc: 'Para cercas rurais, divisórias de pasto e contenções. Resistência e segurança para sua propriedade.',
        image: '/cat-rural/Arame Farpado.png',
        wppMsg: 'Olá! Tenho interesse no Arame Farpado. Pode me passar um orçamento?',
      },
    ],
    pdf: '/catálogo_rural.pdf',
    wppMsg: 'Olá! Preciso de madeira para uso rural e gostaria de um orçamento.',
  },
  {
    slug: 'telhado',
    num: '03',
    name: 'Telhado',
    italic: 'seguro',
    tagline: 'Cobertura que protege a sua obra por décadas.',
    intro: 'Estrutura completa para telhados: ripas, caibros, terças e linhas dimensionadas. Madeira tratada para resistir à umidade, ao calor e à carga das telhas, seja cerâmica, metálica ou shingle.',
    image: '/images/cat-telhado.png',
    items: [
      { name: 'Ripas', desc: 'Apoio direto para fixação das telhas, em medidas padrão e sob encomenda.' },
      { name: 'Caibros', desc: 'Suporte das ripas, dimensionados para diferentes tipos de telha.' },
      { name: 'Terças', desc: 'Estrutura horizontal que recebe os caibros, base do telhado.' },
      { name: 'Linhas / Vigas', desc: 'Peças principais que sustentam toda a estrutura da cobertura.' },
      { name: 'Tábuas para Forro', desc: 'Acabamento sob o telhado, com encaixe macho-fêmea.' },
      { name: 'Madeira Tratada', desc: 'Tratamento autoclave contra cupim e fungos.' },
    ],
    products: [
      {
        slug: 'viga-paraju',
        name: 'Viga Paraju',
        desc: 'Peças de grande porte em Paraju para sustentação de telhados. Alta densidade, resistência mecânica e durabilidade premium.',
        image: '/cat-telhado/Viga Paraju.png',
        wppMsg: 'Olá! Tenho interesse na Viga Paraju. Pode me passar um orçamento?',
      },
      {
        slug: 'caibro-paraju',
        name: 'Caibro Paraju',
        desc: 'Suporte direto das ripas em madeira Paraju, dimensionado para diferentes tipos de telha. Resistente e estável.',
        image: '/cat-telhado/Caibro Paraju.png',
        wppMsg: 'Olá! Tenho interesse no Caibro Paraju. Pode me passar um orçamento?',
      },
      {
        slug: 'ripa-paraju',
        name: 'Ripa Paraju',
        desc: 'Apoio direto para fixação das telhas, em Paraju selecionada. Linhas retas, sem empenamento.',
        image: '/cat-telhado/Ripa Paraju.png',
        wppMsg: 'Olá! Tenho interesse na Ripa Paraju. Pode me passar um orçamento?',
      },
      {
        slug: 'telha-portuguesa',
        name: 'Telha Portuguesa',
        desc: 'Cobertura cerâmica clássica brasileira. Encaixe com acabamento elegante e durabilidade comprovada.',
        image: '/cat-telhado/Telha Portuguesa.png',
        wppMsg: 'Olá! Tenho interesse na Telha Portuguesa. Pode me passar um orçamento?',
      },
      {
        slug: 'telha-americana',
        name: 'Telha Americana',
        desc: 'Modelo cerâmico amplo, ideal para grandes coberturas. Bom rendimento por m² e fácil instalação.',
        image: '/cat-telhado/Telha Americana.png',
        wppMsg: 'Olá! Tenho interesse na Telha Americana. Pode me passar um orçamento?',
      },
    ],
    wppMsg: 'Olá! Preciso de madeira para telhado e gostaria de um orçamento.',
  },
  {
    slug: 'pintura',
    num: '04',
    name: 'Pintura',
    italic: 'acabamento',
    tagline: 'Tintas, vernizes e acessórios para o acabamento perfeito.',
    intro: 'Linha completa de tintas, vernizes, seladores e acessórios para madeira e alvenaria. Produtos de marcas reconhecidas, pensados para realçar a beleza e proteger a peça.',
    image: '/images/cat-pintura.png',
    items: [
      { name: 'Tintas', desc: 'Acrílicas, esmaltes e látex para interior e exterior.' },
      { name: 'Vernizes', desc: 'Brilhante, fosco e acetinado para realçar e proteger a madeira.' },
      { name: 'Seladores', desc: 'Preparação da superfície para melhor aderência e durabilidade.' },
      { name: 'Stains', desc: 'Tingimento que valoriza os veios naturais da madeira.' },
      { name: 'Pincéis & Rolos', desc: 'Ferramentas profissionais para aplicação uniforme.' },
      { name: 'Solventes & Massas', desc: 'Diluentes, removedores, massa corrida e massa para madeira.' },
    ],
    wppMsg: 'Olá! Tenho interesse em produtos de pintura e gostaria de informações.',
  },
  {
    slug: 'fechadura',
    num: '05',
    name: 'Fechadura',
    italic: 'segurança',
    tagline: 'Segurança e bom funcionamento em cada porta.',
    intro: 'Fechaduras, trincos, fechos e ferrolhos para portas residenciais, comerciais e externas. Modelos em diversos acabamentos, da linha econômica à premium.',
    image: '/images/cat-fechadura.png',
    items: [
      { name: 'Fechaduras Externas', desc: 'Portas de entrada, alta resistência e segurança reforçada.' },
      { name: 'Fechaduras Internas', desc: 'Quartos, banheiros e ambientes internos.' },
      { name: 'Trincos & Fechos', desc: 'Para portas leves, armários, portões e acessos secundários.' },
      { name: 'Ferrolhos', desc: 'Reforço de segurança em portas e janelas.' },
      { name: 'Maçanetas', desc: 'Diversos modelos e acabamentos: cromado, escovado, dourado.' },
      { name: 'Acessórios', desc: 'Cilindros, espelhos e peças de reposição.' },
    ],
    wppMsg: 'Olá! Tenho interesse em fechaduras e gostaria de um orçamento.',
  },
  {
    slug: 'dobradica',
    num: '06',
    name: 'Dobradiça',
    italic: 'precisão',
    tagline: 'O movimento certo em cada porta e janela.',
    intro: 'Dobradiças em diferentes materiais e tamanhos, do uso doméstico ao industrial. Aço, ferro, latão e inox — para portas, janelas, móveis e portões.',
    image: '/images/cat-dobradica.png',
    items: [
      { name: 'Dobradiças de Aço', desc: 'Padrão para portas internas e externas, com rolamento.' },
      { name: 'Dobradiças de Latão', desc: 'Acabamento nobre para portas residenciais e móveis finos.' },
      { name: 'Dobradiças Reforçadas', desc: 'Para portas pesadas, portões e usos comerciais.' },
      { name: 'Dobradiças de Móveis', desc: 'Para armários, gavetas e montagens em geral.' },
      { name: 'Dobradiças Tipo Caneco', desc: 'Movimento amplo para portas de armário.' },
      { name: 'Parafusos & Acessórios', desc: 'Fixação completa para instalação correta.' },
    ],
    wppMsg: 'Olá! Tenho interesse em dobradiças e gostaria de um orçamento.',
  },
  {
    slug: 'esquadrias',
    num: '07',
    name: 'Esquadrias',
    italic: 'sob medida',
    tagline: 'Portas, janelas e batentes que valorizam o ambiente.',
    intro: 'Linha completa de esquadrias em madeira maciça e laminada. Portas, janelas, batentes, marcos e vistas — em medidas padrão ou sob encomenda.',
    image: '/images/cat-esquadrias.png',
    items: [
      { name: 'Portas Internas', desc: 'Lisa, frisada ou com almofadas, em diversos modelos.' },
      { name: 'Portas Externas', desc: 'Maciças e robustas para entradas principais.' },
      { name: 'Janelas', desc: 'Modelos de abrir, correr e basculante em madeira maciça.' },
      { name: 'Batentes & Marcos', desc: 'Estrutura para instalação de portas e janelas.' },
      { name: 'Vistas / Guarnições', desc: 'Acabamento estético dos vãos.' },
      { name: 'Sob Medida', desc: 'Esquadrias personalizadas no tamanho exato da sua obra.' },
    ],
    wppMsg: 'Olá! Tenho interesse em esquadrias e gostaria de um orçamento.',
  },
  {
    slug: 'moveis',
    num: '08',
    name: 'Móveis',
    italic: 'feitos à mão',
    tagline: 'Peças únicas, pensadas para durar gerações.',
    intro: 'Móveis em madeira maciça, com ofício tradicional e madeiras selecionadas. Mesas, cadeiras, prateleiras, balcões e peças sob medida — feitos para destacar a beleza natural da madeira.',
    image: '/images/cat-moveis.png',
    items: [
      { name: 'Mesas', desc: 'Mesas de jantar, centro e auxiliares em madeira maciça.' },
      { name: 'Cadeiras & Bancos', desc: 'Modelos clássicos e contemporâneos, conforto e durabilidade.' },
      { name: 'Prateleiras', desc: 'Soluções rústicas e modernas para ambientes residenciais.' },
      { name: 'Balcões', desc: 'Para cozinha, comércio ou ambientes corporativos.' },
      { name: 'Estantes & Racks', desc: 'Móveis para organizar e expor com estilo.' },
      { name: 'Sob Medida', desc: 'Móveis projetados e fabricados especialmente para você.' },
    ],
    wppMsg: 'Olá! Tenho interesse em móveis e gostaria de um orçamento.',
  },
  {
    slug: 'decks-madeiras',
    num: '09',
    name: 'Decks & Madeiras',
    italic: 'nobres',
    tagline: 'Áreas externas que combinam beleza natural e durabilidade.',
    intro: 'Decks de madeira nobre, pisos externos e tábuas selecionadas para varandas, piscinas e áreas de lazer. Madeira tratada com proteção UV e acabamento premium para resistir ao sol, à chuva e ao tempo.',
    image: '/images/cat-deck.png',
    items: [
      { name: 'Deck de Cumaru', desc: 'Madeira nobre de alta densidade, ideal para áreas externas.' },
      { name: 'Deck de Ipê', desc: 'Resistência excepcional e tonalidade marcante.' },
      { name: 'Deck Modular', desc: 'Réguas com encaixe rápido para instalação prática.' },
      { name: 'Pisos Externos', desc: 'Tábuas com tratamento para áreas molhadas e expostas.' },
      { name: 'Madeiras Selecionadas', desc: 'Peças escolhidas grão a grão para acabamento premium.' },
      { name: 'Acessórios para Deck', desc: 'Clipes, parafusos, óleos e seladores específicos.' },
    ],
    wppMsg: 'Olá! Tenho interesse em decks e madeiras nobres e gostaria de um orçamento.',
  },
]
