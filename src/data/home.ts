
export interface KPIS {
    id: string;
    year:string;
    video: string;
    marine: string;
    wild: string;
  }
  export interface ADDS {
    id: string;
    text: {
      en: string;
      ar: string;
    };
  }
  export interface SERVICES {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    image: string;
    is_favorite:boolean;
  }
export interface STAT {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  number:string;
  prefix?:string;
}

  export const kpis: KPIS[] =[
    {
      id: "1",
      year: "2017",
      video:"public/videos/2017.mp4",
      marine:"3.79%",
      wild:"4.56%",
    },
    {
        id: "2",
        year: "Now",
        video:"public/videos/2024.mp4",
        marine:"6.79%",
        wild:"8.56%",
      },
  
      {
        id: "3",
        year: "2025",
        video:"public/videos/2025.mp4",
        marine:"7.79%",
        wild:"8.2%",
      },
      {
        id: "4",
        year: "2030",
        video:"public/videos/2030.mp4",
        marine:"1.79%",
        wild:"2.2%",
      },
  
  ];
  export const adds: ADDS[] =[
    {
      id: "1",
      text: {
        ar:"إطلاق تطبيق الراصد الفطرى لرصد الحياه الفطرية والابلاغ عن إنتهاكات البيئة الطبيعية",
        en:"Launching the Wildlife Monitor app to monitor wildlife and report violations of the natural environment."
      }
    },
    {
      id: "2",
      text: {
        ar:"يمكنك الآن اكتشاف المحميات الطبيعية في المملكة عن طريق تطبيق (الراصد الفطري)، الذي يتيح لك استكشاف التنوع",
        en:"You can now discover the Kingdom's natural reserves through the Fungal Observer application, which allows you to explore diversity."
      }
    },
   
    {
      id: "3",
      text: {
        ar:"إطلاق تطبيق الراصد الفطرى لرصد الحياه الفطرية والابلاغ عن إنتهاكات البيئة الطبيعية",
        en:"Launching the Wildlife Monitor app to monitor wildlife and report violations of the natural environment."
      }
    },
    {
      id: "4",
      text: {
        ar:"يمكنك الآن اكتشاف المحميات الطبيعية في المملكة عن طريق تطبيق (الراصد الفطري)، الذي يتيح لك استكشاف التنوع",
        en:"You can now discover the Kingdom's natural reserves through the Fungal Observer application, which allows you to explore diversity."
      }
    },
  ];

  export const services: SERVICES[] =[
    {
      id: "1",
      name: {
        ar:"المستكشف",
        en:"Explorer"
      },
      image:"public/images/serv1.png",
      is_favorite: false,
    },
    {
      id: "2",
      name: {
        ar:"الراصد الفطري",
        en:"The instinctive observer"
      },
      image:"public/images/serv2.png",
      is_favorite: true,
    },
    {
      id: "3",
      name: {
        ar:"دعم اتخاذ القرار",
        en:"Decision support"
      },
      image:"public/images/serv3.png",
      is_favorite: false,
    },
    {
      id: "4",
      name: {
        ar:"البيانات المفتوحة",
        en:"Open data"
      },
      image:"public/images/serv4.png",
      is_favorite: true,
    },
   
  ];
  export const statistics: STAT[] =[
    {
      id: "1",
      name: {
        ar:" عدد المحميات القائمة",
        en:"Number of existing reserves"
      },
      number:"278",
    },
    {
      id: "2",
      name: {
        ar:" عدد المحميات المقترحة",
        en:"Number of proposed reserves"
      },
      number:"94",
    },
    {
      id: "3",
      name: {
        ar:" عدد المشاهدات",
        en:"Number of views"
      },
      number:"15343",
    },
    {
      id: "4",
      name: {
        ar:" مسارات الحماية والمراقبة (كم)",
        en:"Protection and surveillance paths (km)"
      },
      number:"669000",
    },
    {
      id: "5",
      name: {
        ar:" عدد المحميات القائمة",
        en:"Number of existing reserves"
      },
      number:"278",
    },
    {
      id: "6",
      name: {
        ar:" عدد المحميات المقترحة",
        en:"Number of proposed reserves"
      },
      number:"94",
    },
    {
      id: "7",
      name: {
        ar:" عدد المشاهدات",
        en:"Number of views"
      },
      number:"15343",
    },
    {
      id: "8",
      name: {
        ar:" عدد المحميات المقترحة",
        en:"Number of proposed reserves"
      },
      number:"94",
      prefix: '+'
    },
   
  ];