// images
import Logo from '../../assets/img/header/logo.svg';
import ResistanceImg from '../../assets/img/workouts/resistance.png';
import BoxingImg from '../../assets/img/workouts/boxing.png';
import BodyPumpImg from '../../assets/img/workouts/body-pump.png';
import YogaImg from '../../assets/img/workouts/yoga.png';
import FullBodyImg from '../../assets/img/workouts/full-body.png';
import FitnessImg from '../../assets/img/workouts/fitness.png';
import BattleRopeImg from '../../assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../../assets/img/community/img1.png';
import CommunityImg2 from '../../assets/img/community/img2.png';
import CommunityImg3 from '../../assets/img/community/img3.png';
import CommunityImg4 from '../../assets/img/community/img4.png';
import JoinImg from '../../assets/img/join/woman.png';
// icons
import UsersIcn from '../../assets/img/about-icons/users-icn.svg';
import CalendarIcn from '../../assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../../assets/img/pricing-icons/price.svg';
import CommunityIcn from '../../assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../../assets/img/faq/icons/question-mark.svg';
import {data} from "autoprefixer";

interface Header {
    logo: string;
    btnLoginText: string;
    btnSignupText: string;
}

interface NavItem {
    name: string;
    href: string;
}

interface Banner {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    textBtn: string;
    img: string;
}

interface About {
    icon: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    link: string;
}

interface WorkoutProgram {
    image: string;
    name: string;
}

interface Workouts {
    icon: string;
    title: string;
    programs: WorkoutProgram[];
}

interface PricingPlan {
    name: string;
    price: string;
    typPrice: string;
    howLong: string;
    list: { name: string }[];
    delay: number;
}

interface Pricing {
    icon: string;
    title: string;
    plans: PricingPlan[];
}

interface Testimonial {
    image: string;
    name: string;
    message: string;
}

interface Community {
    icon: string;
    title: string;
    testimonials: Testimonial[];
}

interface Accordion {
    question: string;
    answer: string;
}

interface FAQ {
    icon: string;
    title: string;
    accordions: Accordion[];
}

interface Join {
    image: string;
    title: string;
    span: string;
    title2: string;
    subtitle: string;
    btnText: string;
}

interface Footer {
    logo: string;
    copyrightText: string;
}

export const headerPl: Header = {
    logo: Logo,
    btnLoginText: "Zaloguj się",
    btnSignupText: "Zarejestruj się",
};

export const navPl: NavItem[] = [
    { name: 'Strona główna', href: 'home' },
    { name: 'O nas', href: 'about' },
    { name: 'Treningi', href: 'workouts' },
    { name: 'Cennik', href: 'pricing' },
    { name: 'Społeczność', href: 'community' },
    { name: 'FAQ', href: 'faq' },
];

export const bannerPl: Banner = {
    titlePart1: 'Wyciągnij najlepsze',
    titlePart2: '– pasujesz tutaj.',
    subtitle: 'Zapewniamy poważne ćwiczenia, ale w przyjaznej, zabawowej i bezpiecznej atmosferze.',
    textBtn: 'Dołącz teraz',
    img: '',
};

export const aboutpl: About = {
    icon: UsersIcn,
    title: "Nasza misja",
    subtitle1:
        "Wyróżniamy się niezrównaną atmosferą motywacyjną, wykwalifikowaną kadrą i najlepszym sprzętem do ćwiczeń, co pomaga naszym członkom osiągnąć indywidualne cele fitness.",
    subtitle2: "Siła naszej prawdziwej tożsamości jest wykorzystywana do inspiracji każdej osoby, która przekracza próg naszych siłowni, by się doskonalić.",
    link: "Dołącz teraz",
};

export const workoutsPl: Workouts = {
    icon: CalendarIcn,
    title: "Programy treningowe",
    programs: [
        {
            image: ResistanceImg,
            name: "Trening oporowy",
        },
        {
            image: BoxingImg,
            name: "Boks",
        },
        {
            image: BodyPumpImg,
            name: "Body Pump",
        },
        {
            image: YogaImg,
            name: "Joga",
        },
        {
            image: FullBodyImg,
            name: "Trening całego ciała",
        },
        {
            image: FitnessImg,
            name: "Fitness",
        },
        {
            image: BattleRopeImg,
            name: "Walka na linie",
        },
    ],
};

export const pricingPl: Pricing = {
    icon: PriceIcn,
    title: 'Plan cenowy',
    plans: [
        {
            name: 'Podstawowy',
            price: '89',
            typPrice: "zł",
            howLong: "/miesiąc",
            list: [
                { name: 'nieograniczony dostęp do siłowni' },
                { name: '1 program treningowy' },
                { name: 'bezpłatne konsultacje fitness' },
            ],
            delay: 600,
        },
        {
            name: 'Premium',
            price: '155',
            typPrice: "zł",
            howLong: "/miesiąc",
            list: [
                { name: 'nieograniczony dostęp do siłowni' },
                { name: '5 programów treningowych' },
                { name: 'bezpłatne konsultacje fitness' },
                { name: 'trener personalny' },
            ],
            delay: 800,
        },
        {
            name: 'Elite',
            price: '220',
            typPrice: "zł",
            howLong: "/miesiąc",
            list: [
                { name: 'nieograniczony dostęp do siłowni' },
                { name: '5 programów treningowych' },
                { name: 'bezpłatne konsultacje fitness' },
                { name: 'trener personalny' },
                { name: "50% zniżki na napoje"},
            ],
            delay: 1000,
        },
    ],
};

export const communityPl: Community = {
    icon: CommunityIcn,
    title: "Społeczność",
    testimonials: [
        {
            image: CommunityImg1,
            name: 'Mark A.',
            message: '„Wspaniała lokalizacja, wspaniała cena i wspaniali, pomocni ludzie. Czego chcieć więcej?”',
        },
        {
            image: CommunityImg2,
            name: 'Lauren K.',
            message: '„Gymme zmienił moje życie. Nie tylko fizycznie, ale także mentalnie. Jestem lepszą matką i ogólnie lepszym człowiekiem dzięki tej siłowni.”',
        },
        {
            image: CommunityImg3,
            name: 'John D.',
            message: '"„Uwielbiam te treningi! Trenerzy są kompetentni i motywujący. Gymme jest wspaniałe!”',
        },
        {
            image: CommunityImg4,
            name: 'Anne R.',
            message: '„Uwielbiam te treningi! Trenerzy są kompetentni i motywujący. Gymme jest wspaniałe!”',
        },
    ],
};

export const faqPl: FAQ = {
    icon: QuestionMarkIcn,
    title: 'FAQ',
    accordions: [
        {
            question: "Jak mogę zarezerwować trening?",
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: "Czy mogę płacić gotówką za członkostwo?",
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: "Jaki wiek muszę mieć, aby dołączyć?",
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'Czy są dostępne szafki?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'Jak mogę zrezygnować z członkostwa?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'Czy woda jest dostępna w siłownii?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
    ],
};

export const joinPl: Join = {
    image: JoinImg,
    title: 'Chcesz dołączyć',
    span: ' & ',
    title2: 'zbudować muskulature?',
    subtitle: 'Będziemy Cię na bieżąco informować o tym, co musisz wiedzieć o Gymme. Nic dodać nic ująć.',
    btnText: 'Dołącz teraz',
};

export const footer: Footer = {
    logo: Logo,
    copyrightText: 'All rights reserved. Gymme 2022.',
};

export default data
