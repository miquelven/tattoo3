// import images
import Logo from '../src/img/header/logo.svg';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io';


export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Início' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#galeria', name: 'Galeria' },
    { href: '#contato', name: 'Contato' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoTwitter /> },
];

export const heroData = {
  title: 'Tattoo da Natu',
  subtitle: 'Arte na pele com segurança, delicadeza e respeito.',
  btnText: 'Orçamento',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Sobre Nós:',
  subtitle1:
    'Idealizado em 2022 e iniciado em 2023, o estúdio nasceu da paixão pela arte e do incentivo de amigos.',
  subtitle2:
    'O nome Tattoo da Natu vem do meu usuário nas redes, "natulims", e traduz autenticidade e carinho em cada traço.',
  subtitle3:
    'Unimos tatuagem e piercing com foco em segurança, qualidade e satisfação. Sempre conversamos antes para esclarecer dúvidas e alinhar expectativas.',
  btnText: 'Saiba mais',
  btnIcon: <IoMdArrowForward />,
};


export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      'Equipe acolhedora e atenciosa. Trabalho impecável e exclusivo. Consultoria cuidadosa antes de cada procedimento.',
    name: 'Jack Geoffrey',
    occupation: 'Artista de Tatuagem',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Atendimento excelente, ambiente seguro e resultado incrível. Recomendo para quem busca qualidade e respeito.',
    name: 'Douglas Hane',
    occupation: 'Artista de Tatuagem',
  },
];

export const contactData = {
  title: 'Entre em contato:',
  info: [
  ],
  form: {
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    btnText: 'Enviar',
  },
};

export const footerData = {
  about: {
    title: 'Sobre Tattoo Da Natu',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Rua Humaitá 275 - RJ',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+55 21 99804521',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'tattoo@danatu.com',
    },
  },
  links: {
    title: 'Links úteis',
    items: [
      { href: '/', name: 'Sobre Nós' },
      { href: '/', name: 'Galeria' },
      { href: '/', name: 'Serviços' },
      { href: '/', name: 'Contato' },
    ],
  },
  program: {
    title: 'Horário de Funcionamento',
    items: [
      { name: 'Seg - Ter / 9:00 - 22:00' },
      { name: 'Qua - Sex / 10:00 - 18:00' },
      { name: 'Sab - Dom / Não Funcionamos.' },
    ],
  },
  newsletter: {
    title: 'Novidades',
    subtitle:
      'Assine e receba novidades e promoções.',
    form: {
      placeholder: 'Email',
      icon: <FiSend />,
    },
  },
};
