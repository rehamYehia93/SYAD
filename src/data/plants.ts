
export interface Plant {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  images: string[];
  source:{
    en: string;
    ar: string;
    link:string;
  };
}

export const plants: Plant[] = [
 
  {
    id: "1",
    name: {
      ar: "نبات الغضى",
      en: "Ghadi plant"
    },
   
    location: {
      ar: "جده",
      en: "Jada"
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ar: "ستخدم نبات الغضا في كثير من الدول لأغراض إعادة تأهيل المراعي وتشجير جوانب الطرق الصحراوية، كما أنه يدخل في صناعة الأثاث والورق والأصباغ. ويعتبر خشب الغضا المصدر الرئيس للحطب والوقود في البيئات التي ينتشر فيها، نظرا لصلابته حيث ينتج عن احتراقه كمية حرارة عالية ومدة احتراق طويلة.أم أوراقه فهي تشكل غذاءً جيداً للكثير من الحيوانات الصحراوية البرية وغير البرية مثل الجمال والماعز والمها العربي وغيرها. أما بيئيًا فيلعب نبات الغضا دوراً كبيرًا ومهماً كعنصر نباتي في تثبيت الكثبان الرملية ومنع انجراف التربة، ويعمل كمصد للرياح ويتحمل اصطدام ذرات الرمل وتراكمها على الأغصان، وله القدرة على تكوين الكدوات أو النبكات الرملية حوله نتيجة اصطدامه بالرياح المحملة بالرواسب."
    },
   
    source: {
      en: "Wikipedia",
      ar: "ويكيبديا",
      link:'www.google.com',
    },
    images: [
      "public/images/6.jpg",
      "public/images/4.jpg",
      "public/images/2.jpg",
   ],
  },
  {
    id: "2",
    name: {
      ar: "نبات الافندر",
      en: "Lavander plant"
    },
   
    location: {
      ar: "جده",
      en: "Jada"
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ar: "ستخدم نبات الغضا في كثير من الدول لأغراض إعادة تأهيل المراعي وتشجير جوانب الطرق الصحراوية، كما أنه يدخل في صناعة الأثاث والورق والأصباغ. ويعتبر خشب الغضا المصدر الرئيس للحطب والوقود في البيئات التي ينتشر فيها، نظرا لصلابته حيث ينتج عن احتراقه كمية حرارة عالية ومدة احتراق طويلة.أم أوراقه فهي تشكل غذاءً جيداً للكثير من الحيوانات الصحراوية البرية وغير البرية مثل الجمال والماعز والمها العربي وغيرها. أما بيئيًا فيلعب نبات الغضا دوراً كبيرًا ومهماً كعنصر نباتي في تثبيت الكثبان الرملية ومنع انجراف التربة، ويعمل كمصد للرياح ويتحمل اصطدام ذرات الرمل وتراكمها على الأغصان، وله القدرة على تكوين الكدوات أو النبكات الرملية حوله نتيجة اصطدامه بالرياح المحملة بالرواسب."
    },
   
    source: {
      en: "Wikipedia",
      ar: "ويكيبديا",
      link:'www.google.com',
    },
    images: [
      "public/images/6.jpg",
      "public/images/4.jpg",
      "public/images/2.jpg",
   ],
  },
  {
    id: "3",
    name: {
      ar: "نبات صبار",
      en: "Olive plant"
    },
   
    location: {
      ar: "جده",
      en: "Jada"
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ar: "ستخدم نبات الغضا في كثير من الدول لأغراض إعادة تأهيل المراعي وتشجير جوانب الطرق الصحراوية، كما أنه يدخل في صناعة الأثاث والورق والأصباغ. ويعتبر خشب الغضا المصدر الرئيس للحطب والوقود في البيئات التي ينتشر فيها، نظرا لصلابته حيث ينتج عن احتراقه كمية حرارة عالية ومدة احتراق طويلة.أم أوراقه فهي تشكل غذاءً جيداً للكثير من الحيوانات الصحراوية البرية وغير البرية مثل الجمال والماعز والمها العربي وغيرها. أما بيئيًا فيلعب نبات الغضا دوراً كبيرًا ومهماً كعنصر نباتي في تثبيت الكثبان الرملية ومنع انجراف التربة، ويعمل كمصد للرياح ويتحمل اصطدام ذرات الرمل وتراكمها على الأغصان، وله القدرة على تكوين الكدوات أو النبكات الرملية حوله نتيجة اصطدامه بالرياح المحملة بالرواسب."
    },
   
    source: {
      en: "Wikipedia",
      ar: "ويكيبديا",
      link:'www.google.com',
    },
    images: [
      "public/images/6.jpg",
      "public/images/4.jpg",
      "public/images/2.jpg",
   ],
  },
  {
    id: "4",
    name: {
      ar: "نبات الغضى",
      en: "Ghadi plant"
    },
   
    location: {
      ar: "جده",
      en: "Jada"
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ar: "ستخدم نبات الغضا في كثير من الدول لأغراض إعادة تأهيل المراعي وتشجير جوانب الطرق الصحراوية، كما أنه يدخل في صناعة الأثاث والورق والأصباغ. ويعتبر خشب الغضا المصدر الرئيس للحطب والوقود في البيئات التي ينتشر فيها، نظرا لصلابته حيث ينتج عن احتراقه كمية حرارة عالية ومدة احتراق طويلة.أم أوراقه فهي تشكل غذاءً جيداً للكثير من الحيوانات الصحراوية البرية وغير البرية مثل الجمال والماعز والمها العربي وغيرها. أما بيئيًا فيلعب نبات الغضا دوراً كبيرًا ومهماً كعنصر نباتي في تثبيت الكثبان الرملية ومنع انجراف التربة، ويعمل كمصد للرياح ويتحمل اصطدام ذرات الرمل وتراكمها على الأغصان، وله القدرة على تكوين الكدوات أو النبكات الرملية حوله نتيجة اصطدامه بالرياح المحملة بالرواسب."
    },
   
    source: {
      en: "Wikipedia",
      ar: "ويكيبديا",
      link:'www.google.com',
    },
    images: [
      "public/images/6.jpg",
      "public/images/4.jpg",
      "public/images/2.jpg",
   ],
  },
  {
    id: "5",
    name: {
      ar: "نبات الغضى",
      en: "Ghadi plant"
    },
   
    location: {
      ar: "جده",
      en: "Jada"
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ar: "ستخدم نبات الغضا في كثير من الدول لأغراض إعادة تأهيل المراعي وتشجير جوانب الطرق الصحراوية، كما أنه يدخل في صناعة الأثاث والورق والأصباغ. ويعتبر خشب الغضا المصدر الرئيس للحطب والوقود في البيئات التي ينتشر فيها، نظرا لصلابته حيث ينتج عن احتراقه كمية حرارة عالية ومدة احتراق طويلة.أم أوراقه فهي تشكل غذاءً جيداً للكثير من الحيوانات الصحراوية البرية وغير البرية مثل الجمال والماعز والمها العربي وغيرها. أما بيئيًا فيلعب نبات الغضا دوراً كبيرًا ومهماً كعنصر نباتي في تثبيت الكثبان الرملية ومنع انجراف التربة، ويعمل كمصد للرياح ويتحمل اصطدام ذرات الرمل وتراكمها على الأغصان، وله القدرة على تكوين الكدوات أو النبكات الرملية حوله نتيجة اصطدامه بالرياح المحملة بالرواسب."
    },
   
    source: {
      en: "Wikipedia",
      ar: "ويكيبديا",
      link:'www.google.com',
    },
    images: [
      "public/images/6.jpg",
      "public/images/4.jpg",
      "public/images/2.jpg",
   ],
  },
  {
    id: "6",
    name: {
      ar: "نبات الغضى",
      en: "Ghadi plant"
    },
   
    location: {
      ar: "جده",
      en: "Jada"
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ar: "ستخدم نبات الغضا في كثير من الدول لأغراض إعادة تأهيل المراعي وتشجير جوانب الطرق الصحراوية، كما أنه يدخل في صناعة الأثاث والورق والأصباغ. ويعتبر خشب الغضا المصدر الرئيس للحطب والوقود في البيئات التي ينتشر فيها، نظرا لصلابته حيث ينتج عن احتراقه كمية حرارة عالية ومدة احتراق طويلة.أم أوراقه فهي تشكل غذاءً جيداً للكثير من الحيوانات الصحراوية البرية وغير البرية مثل الجمال والماعز والمها العربي وغيرها. أما بيئيًا فيلعب نبات الغضا دوراً كبيرًا ومهماً كعنصر نباتي في تثبيت الكثبان الرملية ومنع انجراف التربة، ويعمل كمصد للرياح ويتحمل اصطدام ذرات الرمل وتراكمها على الأغصان، وله القدرة على تكوين الكدوات أو النبكات الرملية حوله نتيجة اصطدامه بالرياح المحملة بالرواسب."
    },
   
    source: {
      en: "Wikipedia",
      ar: "ويكيبديا",
      link:'www.google.com',
    },
    images: [
      "public/images/6.jpg",
      "public/images/4.jpg",
      "public/images/2.jpg",
   ],
  },
 
];
