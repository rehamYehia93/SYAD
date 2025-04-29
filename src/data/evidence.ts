
export interface Evidence {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  link: string;
  image: string;
}
export interface References {
  id: string;
  text: {
    en: string;
    ar: string;
  };
  link: string;
}

export const evidences: Evidence[] = [
  {
    id: "1",
    title: {
      en: "Plants Guides",
      ar: "دليل النباتات"
    },
    link: "/plants",
    image:"public/images/1.jpg",
  },
  {
    id: "2",
    title: {
      en: "Reptile Guide",
      ar: "دليل الزواحف",
    },
    link: "/plants",
    image:"public/images/2.jpg",
  },
  {
    id: "3",
    title: {
      en: "Coral Reef Guide",
      ar: "دليل الشعاب المرجانية"
    },
    link: "/plants",
    image:"public/images/3.jpg",
  },
  {
    id: "4",
    title: {
      en: "Mammals Guide",
      ar: "دليل الثديات"
    },
    link: "/plants",
    image:"public/images/4.jpg",
  },
  {
    id: "5",
    title: {
      en: "Birds Evidence",
      ar: "دليل الطيور"
    },
    link: "/plants",
    image:"public/images/5.png",
  },
  {
    id: "5",
    title: {
      en: "Fishs Evidence",
      ar: "دليل الأسماك"
    },
    link: "/plants",
    image:"public/images/3.jpg",
  },
];

export const references: References[] =[
  {
    id: "1",
    text: {
      en: "Wikipedia",
      ar: "ويكبيديا"
    },
    link:"www.google.com",
  },
  {
    id: "2",
    text: {
      en: "General Encyclopedia of Wildlife",
      ar: "الموسوعة العامة للحياة البرية"
    },
    link:"www.google.com",
  },

  {
    id: "3",
    text: {
      en: "National Center for Wildlife Development",
      ar: "المركز الوطني لتنمية الحياة الفطرية"
    },
    link:"www.google.com",
  },
  {
    id: "4",
    text: {
      en: "National Center for Wildlife Development",
      ar: "الموسوعة العامة للحياة البرية"
    },
    link:"www.google.com",
  },

  {
    id: "5",
    text: {
      en: "National Center for Wildlife Development",
      ar: "المركز الوطني لتنمية الحياة الفطرية"
    },
    link:"www.google.com",
  },

];
