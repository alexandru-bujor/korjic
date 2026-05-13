import wedding from "@/assets/cat-wedding.jpg";
import birthday from "@/assets/cat-birthday.jpg";
import baptism from "@/assets/cat-baptism.jpg";
import kids from "@/assets/cat-kids.jpg";
import candybar from "@/assets/cat-candybar.jpg";
import individual from "@/assets/cat-individual.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import tastes from "@/assets/cat-tastes.jpg";

export const WHATSAPP = "https://wa.me/37300000000";

export const categories = [
  {
    id: "birthday",
    title: "Torturi pentru zi de naștere",
    text: "Torturi spectaculoase pentru cea mai dulce aniversare.",
    img: birthday,
  },
  {
    id: "wedding",
    title: "Torturi pentru nuntă",
    text: "Capodopere pe mai multe etaje, lucrate manual.",
    img: wedding,
  },
  {
    id: "baptism",
    title: "Torturi pentru botez",
    text: "Delicate, pure, demne de prima sărbătoare.",
    img: baptism,
  },
  {
    id: "kids",
    title: "Torturi pentru copii",
    text: "Personaje, culori și emoții magice.",
    img: kids,
  },
  {
    id: "corporate",
    title: "Torturi corporate",
    text: "Branding edibil pentru momentele companiei.",
    img: corporate,
  },
  {
    id: "candybar",
    title: "Candy Bar",
    text: "Mese de deserturi care impresionează oaspeții.",
    img: candybar,
  },
  {
    id: "individual",
    title: "Deserturi individuale",
    text: "Eclere, tarte, macarons, mousse premium.",
    img: individual,
  },
  {
    id: "tastes",
    title: "Gusturi Korjic",
    text: "Combinații semnătură, dezvoltate de cofetarii noștri.",
    img: tastes,
  },
];

export const products = [
  {
    id: 1,
    name: "Tort Caramel & Vișină",
    category: "Zi de naștere",
    desc: "Blat moale de vișine, cremă de caramel sărat și ganache de ciocolată.",
    price: 690,
    kg: 2,
    time: "48h",
    img: birthday,
  },
  {
    id: 2,
    name: "Tort Mireasă Auriu",
    category: "Nuntă",
    desc: "Trei etaje, foiță de aur 24k, flori naturale și cremă de vanilie.",
    price: 2400,
    kg: 5,
    time: "5 zile",
    img: wedding,
  },
  {
    id: 3,
    name: "Tort Botez Roză",
    category: "Botez",
    desc: "Pastel delicat, cremă de fructe de pădure și decor floral artizanal.",
    price: 850,
    kg: 3,
    time: "72h",
    img: baptism,
  },
  {
    id: 4,
    name: "Tort Aniversar Copii",
    category: "Copii",
    desc: "Personalizabil cu personajul preferat. Blat vanilie & căpșuni.",
    price: 720,
    kg: 2.5,
    time: "48h",
    img: kids,
  },
  {
    id: 5,
    name: "Tort Corporate Geometric",
    category: "Corporate",
    desc: "Design minimalist cu logo edibil și accente aurii.",
    price: 1450,
    kg: 4,
    time: "5 zile",
    img: corporate,
  },
  {
    id: 6,
    name: "Candy Bar Premium",
    category: "Candy Bar",
    desc: "Set complet: macarons, eclere, mini tarte, cake pops, mousse.",
    price: 1800,
    kg: 0,
    time: "5 zile",
    img: candybar,
  },
  {
    id: 7,
    name: "Set Deserturi Mignon",
    category: "Deserturi",
    desc: "12 deserturi individuale într-o cutie elegantă cadou.",
    price: 480,
    kg: 0,
    time: "48h",
    img: individual,
  },
  {
    id: 8,
    name: "Black Forest Modern",
    category: "Zi de naștere",
    desc: "Reinterpretare modernă: ciocolată belgiană, vișine și mascarpone.",
    price: 760,
    kg: 2,
    time: "48h",
    img: tastes,
  },
];

export const tastes_list = [
  {
    name: "Ciocolată & vișină",
    note: "Intens, catifelat, cu acidulat fin.",
    img: birthday,
    pricePerKg: 480,
  },
  {
    name: "Vanilie & fructe de pădure",
    note: "Proaspăt, parfumat, echilibrat.",
    img: baptism,
    pricePerKg: 460,
  },
  {
    name: "Caramel sărat",
    note: "Dulce-sărat, cremos, de neuitat.",
    img: individual,
    pricePerKg: 470,
  },
  { name: "Red Velvet", note: "Catifelat, cu cremă de brânză.", img: kids, pricePerKg: 490 },
  {
    name: "Fistic & zmeură",
    note: "Elegant, mediteraneean, contrastant.",
    img: tastes,
    pricePerKg: 540,
  },
  { name: "Oreo Cream", note: "Indulgent, crocant, copios.", img: candybar, pricePerKg: 470 },
  { name: "Medovik modern", note: "Foitaj cu miere, cremă airy.", img: corporate, pricePerKg: 450 },
  {
    name: "Cheesecake",
    note: "New-York style, cu fructe proaspete.",
    img: wedding,
    pricePerKg: 510,
  },
];

export const reviews = [
  {
    name: "Ana Munteanu",
    rating: 5,
    text: "Tortul de nuntă a fost capodoperă. Toți invitații au cerut o felie în plus!",
    event: "Nuntă",
  },
  {
    name: "Cristian P.",
    rating: 5,
    text: "Am comandat un Candy Bar pentru evenimentul companiei – execuție perfectă.",
    event: "Corporate",
  },
  {
    name: "Elena G.",
    rating: 5,
    text: "Tortul de botez a fost exact cum mi l-am imaginat. Mulțumesc, Korjic!",
    event: "Botez",
  },
  {
    name: "Vlad I.",
    rating: 5,
    text: "Pentru fiica mea au făcut un tort cu personajul preferat. Magie pură.",
    event: "Copii",
  },
  {
    name: "Maria D.",
    rating: 5,
    text: "Gust premium, livrare impecabilă, comunicare rapidă pe WhatsApp.",
    event: "Aniversare",
  },
  {
    name: "Andrei L.",
    rating: 5,
    text: "Cel mai bun Medovik din Chișinău. Recomand din toată inima.",
    event: "Familie",
  },
];

export const cakeDesigns = [
  {
    id: "classic",
    name: "Clasic elegant",
    note: "Finisaj neted, decor minimal cu accente aurii.",
    img: birthday,
    priceMultiplier: 1,
  },
  {
    id: "floral",
    name: "Floral romantic",
    note: "Flori naturale și decoruri delicate din zahăr.",
    img: wedding,
    priceMultiplier: 1.15,
  },
  {
    id: "modern",
    name: "Modern geometric",
    note: "Linii curate, texturi mate, foiță aur 24k.",
    img: corporate,
    priceMultiplier: 1.2,
  },
  {
    id: "rustic",
    name: "Rustic naked",
    note: "Buttercream rustic, fructe proaspete, ierburi.",
    img: baptism,
    priceMultiplier: 0.95,
  },
  {
    id: "kids",
    name: "Tematic copii",
    note: "Personaje, culori vibrante, figurine 3D.",
    img: kids,
    priceMultiplier: 1.25,
  },
  {
    id: "luxury",
    name: "Luxury royal",
    note: "Perle edibile, dantelă din zahăr, broderii fine.",
    img: tastes,
    priceMultiplier: 1.4,
  },
];

export const tiers = [
  {
    id: 1,
    label: "1 nivel",
    desc: "Pentru până la 30 persoane",
    img: birthday,
    complexityMultiplier: 1,
    minKg: 1.5,
  },
  {
    id: 2,
    label: "2 niveluri",
    desc: "Recomandat 30–70 persoane",
    img: baptism,
    complexityMultiplier: 1.2,
    minKg: 4,
  },
  {
    id: 3,
    label: "3 niveluri",
    desc: "Spectaculos, 70+ persoane",
    img: wedding,
    complexityMultiplier: 1.4,
    minKg: 8,
  },
];

export const events = [
  {
    id: "wedding",
    title: "Nunți",
    img: wedding,
    text: "Torturi multietajate care devin centrul atenției la momentul tăierii.",
    benefits: ["Design exclusiv", "Degustare prealabilă", "Livrare la locație"],
  },
  {
    id: "birthday",
    title: "Zile de naștere",
    img: birthday,
    text: "De la elegant la spectaculos – tortul tău, exact cum ți l-ai dorit.",
    benefits: ["Personalizare totală", "Gusturi premium", "Topper-uri custom"],
  },
  {
    id: "baptism",
    title: "Botezuri",
    img: baptism,
    text: "Decoruri delicate și pastelate pentru prima ta sărbătoare.",
    benefits: ["Design pastel", "Variante cu mărturii", "Ambalare cadou"],
  },
  {
    id: "corporate",
    title: "Evenimente corporate",
    img: corporate,
    text: "Branding edibil cu logo, culorile și mesajul companiei.",
    benefits: ["Logo edibil", "Cantități mari", "Facturare oficială"],
  },
];

export const galleryImgs = [
  wedding,
  birthday,
  baptism,
  kids,
  candybar,
  corporate,
  individual,
  tastes,
];

export const filterOptions = {
  category: [
    "Toate",
    "Zi de naștere",
    "Nuntă",
    "Botez",
    "Copii",
    "Corporate",
    "Candy Bar",
    "Deserturi",
  ],
  event: ["Orice eveniment", "Aniversare", "Nuntă", "Botez", "Corporate", "Petrecere"],
  price: ["Orice preț", "< 700 lei", "700–1500 lei", "1500+ lei"],
  taste: ["Orice gust", "Ciocolată", "Vanilie", "Caramel", "Fructe de pădure", "Fistic"],
  persons: ["Orice", "5–10", "10–20", "20–50", "50+"],
};
