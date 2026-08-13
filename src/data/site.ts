import {
  Building2,
  Boxes,
  Camera,
  CalendarCheck,
  ClipboardList,
  DoorOpen,
  Footprints,
  Headphones,
  Leaf,
  Layers,
  MapPin,
  ShieldCheck,
  SquareStack,
  Trash2,
  Users,
  type LucideIcon,
} from "lucide-react";

import residentialImg from "@/assets/type-residential.jpg";
import towerImg from "@/assets/type-tower.jpg";
import beforeLobbyImg from "@/assets/before-lobby.jpg";
import afterLobbyImg from "@/assets/after-lobby.jpg";
import beforeCommonImg from "@/assets/before-common.jpg";
import afterCommonImg from "@/assets/after-common.jpg";
import beforeElevatorImg from "@/assets/before-elevator.jpg";
import afterElevatorImg from "@/assets/after-elevator.jpg";
import beforeStairsImg from "@/assets/before-stairs.jpg";
import afterStairsImg from "@/assets/after-stairs.jpg";

export const serviceCities = [
  "מודיעין",
  "לוד",
  "רמלה",
  "שוהם",
  "חולון",
  "רעננה",
  "רמת גן",
  "הרצליה",
  "רחובות",
  "בית שמש",
  "כפר סבא",
  "נס ציונה",
  "ראש העין",
  "פתח תקווה",
  "ראשון לציון",
] as const;

export const company = {
  name: "TOWER CARE",
  phone: "050-679-0612",
  whatsapp: "050-679-0612",
  /** Digits only, used for the wa.me link. */
  whatsappNumber: "972506790612",
  email: "towercare148@gmail.com",
  serviceArea: `${serviceCities.slice(0, -1).join(", ")} ו${serviceCities[serviceCities.length - 1]}`,
  whatsappMessage: "היי, הגעתי דרך האתר ואשמח לקבל הצעת מחיר לניקיון הבניין.",
} as const;

/** Real Google Business Profile rating — do not change without verifying against the live listing. */
export const googleRating = {
  score: 5.0,
  reviewCount: 30,
  profileUrl: "https://share.google/ojgUNwWxHC1RfdG6C",
} as const;

/** Real Google reviews, copied verbatim from the business's Google profile. */
export const testimonials = [
  {
    quote:
      "תודה רבה לעדי ולצוות על השירות ניקיון לחדר המדרגות בבניין שלנו במודיעין. מומלץ בחום. צוות עובדים מעולה, ניקיון ברמה גבוהה תמיד מגיעים בזמן ושולחים תמונות לפני ואחרי הניקיון.",
    name: "ינון דבוש",
  },
  {
    quote:
      "תודה רבה לצוות של ניקיון חדרי מדרגות בכלל ולאופק בפרט. תודה על המענה על תהליך הקליטה המהיר על השירות המעולה וכמובן על זה שהבניין שלנו תמיד נראה נקי בזכותכם. ממליצה בחום לכל מי שמחפש ניקיון לחדר מדרגות שלו או לניקיון הבניין בכלל. בהחלט חמש כוכבים!",
    name: "ליזי שמיר",
  },
  {
    quote:
      "שירות מעולה ומקצועי! אנחנו מאוד מרוצים מניקיון הבניין וחדרי המדרגות. מהרגע הראשון קיבלנו יחס אישי, זמינות גבוהה ועבודה יסודית עם הרבה תשומת לב לפרטים הקטנים. הלובי והשטחים המשותפים תמיד נראים נקיים ומטופחים. ממליצים בחום לכל ועד בית שמחפש חברת ניקיון אמינה ומקצועית.",
    name: "פדאל",
  },
] as const;

export const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
  company.whatsappMessage,
)}`;

export const navLinks = [
  { label: "ראשי", href: "#top" },
  { label: "השירותים שלנו", href: "#services" },
  { label: "איך זה עובד", href: "#process" },
  { label: "למה אנחנו", href: "#why" },
  { label: "לקוחות ממליצים", href: "#testimonials" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "צור קשר", href: "#quote" },
] as const;

export const heroTrust = [
  "צוותי ניקיון קבועים",
  "פיקוח ובקרת איכות",
  "שירות לבנייני מגורים ומשרדים",
  "התאמת תכנית ניקיון לכל בניין",
] as const;

export const introMetrics: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "שירות קבוע", text: "ניקיון ותחזוקה לפי תכנית קבועה.", icon: CalendarCheck },
  { title: "צוות מקצועי", text: "צוותים מנוסים, אמינים ומסודרים.", icon: Users },
  { title: "בקרת איכות", text: "פיקוח שוטף ושמירה על סטנדרט מוגדר.", icon: ShieldCheck },
  { title: "מענה מהיר", text: "כתובת אחת זמינה לכל בקשה או פנייה.", icon: Headphones },
];

export const services: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "לובי וכניסה",
    text: "ניקיון יסודי של הלובי, דלת הכניסה הראשית ומראות בקומת הקרקע, עם ריחן קבוע לריח נעים.",
    icon: DoorOpen,
  },
  {
    title: "חדרי מדרגות",
    text: "שטיפה וניקיון מדרגות, מעקות ואזורים משותפים בכל קומות הבניין.",
    icon: Footprints,
  },
  {
    title: "קומות ומסדרונות",
    text: "שמירה שוטפת על ניקיון הקומות והמסדרונות בבניין.",
    icon: Layers,
  },
  {
    title: "מעלית",
    text: "ניקוי רצפה, מראות, לחצנים ודפנות המעלית.",
    icon: SquareStack,
  },
  {
    title: "חדר אשפה וריחון",
    text: "ניקיון חדר הזבל והשארת ריחן קבוע כדי לשמור על ריח נעים בחדר ובלובי.",
    icon: Trash2,
  },
  {
    title: "החלפת שקיות זבל",
    text: "החלפת שקיות בפחי האשפה בבניין, כולל פחי צפרדע, בכל ביקור.",
    icon: Boxes,
  },
];

export const buildingTypes = [
  {
    title: "בנייני מגורים",
    text: "שירות ניקיון קבוע שמאפשר לוועד הבית לדעת שהבניין נמצא בידיים טובות.",
    image: residentialImg,
  },
  {
    title: "מגדלי מגורים",
    text: "תכנית ניקיון להיקפים גדולים: לובי, מספר חדרי מדרגות, מעליות ושטחים משותפים.",
    image: towerImg,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "מכירים את הבניין",
    text: "מספרים לנו על הבניין, מספר הקומות, השטחים המשותפים והצרכים.",
  },
  {
    step: "02",
    title: "בונים תכנית ניקיון",
    text: "מתאימים תדירות, משימות והיקף שירות.",
  },
  {
    step: "03",
    title: "מתחילים לעבוד",
    text: "צוות ניקיון מגיע בהתאם לתכנית שנקבעה.",
  },
  {
    step: "04",
    title: "בקרה ושירות שוטף",
    text: "אנחנו נשארים זמינים ודואגים שהסטנדרט נשמר לאורך זמן.",
  },
];

export const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "הצעת מחיר פיזית בחינם",
    text: "מגיעים לבניין, בודקים בעצמנו את השטח ונותנים הצעת מחיר מדויקת – ללא עלות וללא התחייבות.",
    icon: MapPin,
  },
  {
    title: "חוזה עבודה מסודר",
    text: "כל תנאי השירות סגורים על הכתב מראש, בלי הפתעות בדרך.",
    icon: ClipboardList,
  },
  {
    title: "התחייבות לתוצאה",
    text: "אנחנו עומדים מאחורי רמת הניקיון בכל ביקור וביקור.",
    icon: ShieldCheck,
  },
  {
    title: "דיווח עם תמונות בכל ביקור",
    text: "בסיום כל ניקיון נשלח אליכם אוטומטית דוח עם תמונות מהשטח, בלי צורך לבדוק בעצמכם.",
    icon: Camera,
  },
  {
    title: "ריחן קבוע בבניין",
    text: "ריח נעים קבוע בלובי ובחדר האשפה – לא רק ניקיון, גם תחושה טובה בכניסה לבית.",
    icon: Leaf,
  },
  {
    title: "איש קשר זמין 24/7",
    text: "מההנהלה, לכל שאלה, בקשה או תקלה – בכל שעה.",
    icon: Headphones,
  },
];

/** Before/after gallery — swap the image fields once real photos exist. */
export const beforeAfterItems: {
  category: string;
  beforeImage?: string;
  afterImage?: string;
}[] = [
  { category: "לובי", beforeImage: beforeLobbyImg, afterImage: afterLobbyImg },
  { category: "חדר מדרגות", beforeImage: beforeStairsImg, afterImage: afterStairsImg },
  { category: "מעלית", beforeImage: beforeElevatorImg, afterImage: afterElevatorImg },
  { category: "שטחים משותפים", beforeImage: beforeCommonImg, afterImage: afterCommonImg },
];

export const faqs = [
  {
    q: "באילו סוגי בניינים אתם מטפלים?",
    a: "אנחנו עובדים מול ועדי בתים בבנייני מגורים ומגדלי מגורים, בכל היקף – מבניין קטן ועד מגדל עם מספר חדרי מדרגות.",
  },
  {
    q: "כל כמה זמן אפשר להזמין שירות ניקיון?",
    a: "התדירות נקבעת יחד איתכם לפי צרכי הבניין – מפעם בשבוע, דרך תכנית מעורבת (ניקיון מלא פעם אחת ומעלית ולובי בנוסף), ועד ניקיון יומי.",
  },
  {
    q: "האם ניתן לבנות תכנית ניקיון מותאמת לבניין?",
    a: "כן. אנחנו מגדירים יחד איתכם את המשימות, השטחים והתדירות, ומעלים את התכנית על הכתב כדי שהיא תהיה ברורה לכל הצדדים.",
  },
  {
    q: "איך אנחנו יודעים שהניקיון בוצע?",
    a: "בסיום כל ביקור נשלח אליכם אוטומטית דוח עם תמונות מהשטח, כדי שתהיה לכם שקיפות מלאה בלי צורך לבדוק בעצמכם.",
  },
  {
    q: "מה קורה אם יש בעיה או בקשה מיוחדת?",
    a: "יש לכם איש קשר מההנהלה זמין 24/7. אנחנו בודקים את הבקשה ומטפלים בה או מעדכנים את התכנית בהתאם.",
  },
  {
    q: "מה שעות הפעילות שלכם?",
    a: "ניתן ליצור קשר בטלפון ובוואטסאפ בין השעות 07:00–19:00.",
  },
  {
    q: "באילו אזורים אתם נותנים שירות?",
    a: `אזורי השירות: ${company.serviceArea}.`,
  },
];

export const buildingTypeOptions = [
  "בניין מגורים",
  "מגדל מגורים",
  "בניין משרדים",
  "חברת ניהול",
  "אחר",
] as const;

export const frequencyOptions = [
  "פעם בשבוע",
  "פעמיים בשבוע",
  "3 פעמים בשבוע",
  "5 פעמים בשבוע",
  "כל יום",
  "עדיין לא בטוח",
] as const;

export const serviceOptions = [
  "לובי",
  "חדרי מדרגות",
  "מעליות",
  "קומות ומסדרונות",
  "חדר אשפה וריחון",
  "החלפת שקיות זבל",
  "אחר",
] as const;

export const legalLinks = [
  { label: "מדיניות פרטיות", href: "/privacy" },
  { label: "תנאי שימוש", href: "/terms" },
  { label: "הצהרת נגישות", href: "/accessibility" },
] as const;

export const footerIcons = { Building2, Boxes };
