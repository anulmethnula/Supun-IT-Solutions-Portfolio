export type Project = { id:string; title:string; description:string; category:string; tags:string[]; image:string; status:string; url:string; featured:boolean };
export const projects: Project[] = [
 {id:"camy",title:"CAMY Digital Platform",description:"A business management platform for entrepreneurs and daily operations.",category:"Web Applications",tags:["Business System","Web Portal"],image:"/images/projects/camy.jpg",status:"Preview",url:"",featured:true},
 {id:"zevenra",title:"ZEVENRA E-Commerce",description:"A modern online store with seamless ordering and pre-order management.",category:"E-Commerce",tags:["Online Store","Fashion"],image:"/images/projects/zevenra.jpg",status:"Preview",url:"",featured:true},
 {id:"aerosoft",title:"AeroSoft ERP",description:"An integrated ERP system for business operations, inventory and HR.",category:"ERP Systems",tags:["ERP","Automation"],image:"/images/projects/aerosoft.jpg",status:"Preview",url:"",featured:true},
 {id:"inventory",title:"Inventory System",description:"A centralized inventory solution for efficient stock control.",category:"Internal Systems",tags:["Inventory","Operations"],image:"/images/projects/inventory.jpg",status:"Preview",url:"",featured:true},
 {id:"pos",title:"POS Solution",description:"A point-of-sale system for sales, billing and branch management.",category:"Business Systems",tags:["POS","Sales"],image:"/images/projects/pos.jpg",status:"Preview",url:"",featured:false},
 {id:"websites",title:"Company Websites",description:"Modern responsive websites for Supun Group and related businesses.",category:"Web Applications",tags:["Web Design","Corporate"],image:"/images/projects/websites.jpg",status:"Preview",url:"",featured:false},
];
export const categories=["All Projects","Web Applications","ERP Systems","Business Systems","E-Commerce","Mobile Applications","Internal Systems"];
