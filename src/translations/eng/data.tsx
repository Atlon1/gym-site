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
    subtitle: string;
    btnText: string;
}

interface Footer {
    logo: string;
    copyrightText: string;
}

export const headerEng: Header = {
    logo: Logo,
    btnLoginText: 'Log in',
    btnSignupText: 'Sign Up',
};

export const navEng: NavItem[] = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Workouts', href: 'workouts' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Community', href: 'community' },
    { name: 'FAQ', href: 'faq' },
];

export const bannerEng: Banner = {
    titlePart1: 'Get the best part of your day',
    titlePart2: '– you fit here.',
    subtitle: 'We provide serious fitness but within a fun and friendly, safe space.',
    textBtn: 'Join Now',
    img: '',
};

export const abouteng: About = {
    icon: UsersIcn,
    title: 'Our mission',
    subtitle1:
        'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
    subtitle2: 'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
    link: 'Join Now',
};

export const workoutsEng: Workouts = {
    icon: CalendarIcn,
    title: 'Training programs',
    programs: [
        {
            image: ResistanceImg,
            name: 'Resistance',
        },
        {
            image: BoxingImg,
            name: 'Boxing',
        },
        {
            image: BodyPumpImg,
            name: 'Body Pump',
        },
        {
            image: YogaImg,
            name: 'Yoga',
        },
        {
            image: FullBodyImg,
            name: 'Full Body',
        },
        {
            image: FitnessImg,
            name: 'Fitness',
        },
        {
            image: BattleRopeImg,
            name: 'Battle Rope',
        },
    ],
};

export const pricingEng: Pricing = {
    icon: PriceIcn,
    title: 'Pricing plan',
    plans: [
        {
            name: 'Basic',
            price: '20',
            typPrice: "$",
            howLong: "/month",
            list: [
                { name: 'unlimited gym access' },
                { name: '1 training programs' },
                { name: 'free fitness consultation' },
            ],
            delay: 600,
        },
        {
            name: 'Premium',
            price: '35',
            typPrice: "$",
            howLong: "/month",
            list: [
                { name: 'unlimited gym access' },
                { name: '5 training programs' },
                { name: 'free fitness consultation' },
                { name: 'personal trainer' },
            ],
            delay: 800,
        },
        {
            name: 'Elite',
            price: '49',
            typPrice: "$",
            howLong: "/month",
            list: [
                { name: 'unlimited gym access' },
                { name: 'all training programs' },
                { name: 'free fitness consultation' },
                { name: 'personal trainer' },
                { name: '50% off drinks' },
            ],
            delay: 1000,
        },
    ],
};

export const communityEng: Community = {
    icon: CommunityIcn,
    title: 'Community',
    testimonials: [
        {
            image: CommunityImg1,
            name: 'Mark A.',
            message: '“Great location, great price and great, helpful people. What to want more?”',
        },
        {
            image: CommunityImg2,
            name: 'Lauren K.',
            message: '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
        },
        {
            image: CommunityImg3,
            name: 'John D.',
            message: '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
        },
        {
            image: CommunityImg4,
            name: 'Anne R.',
            message: '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
        },
    ],
};

export const faq: FAQ = {
    icon: QuestionMarkIcn,
    title: 'FAQ',
    accordions: [
        {
            question: 'How can I book a workout class?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'Can I pay by cash for my membership?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'What age do I need to be to join?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'Are there any lockers?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'How do I cancel my membership?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
        {
            question: 'Is there water available at the gym?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
        },
    ],
};

export const join: Join = {
    image: JoinImg,
    title: 'Wanna join & have fun?',
    subtitle: 'We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
    btnText: 'Join now',
};

export const footer: Footer = {
    logo: Logo,
    copyrightText: 'All rights reserved. Gymme 2022.',
};

export default data
