export interface ServiceDetail {
  title: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  iconName: string;
  features: string[];
  content: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "mobile-app-development": {
    title: "Mobile App Development",
    seoTitle: "Mobile App Development Company in Bangladesh | iOS & Android",
    seoDescription: "Hire the best mobile app development company in Bangladesh. We build high-performance, native and cross-platform apps for iOS and Android.",
    shortDescription: "High-performance native and cross-platform mobile applications for iOS and Android.",
    iconName: "Smartphone",
    features: ["iOS Native (Swift)", "Android Native (Kotlin)", "Cross-platform (React Native/Flutter)", "App Store Optimization (ASO)"],
    content: `
      <h2>Top Mobile App Development Company in Bangladesh</h2>
      <p>In today's mobile-first world, having a robust mobile application is crucial for business growth. As a leading mobile app development company in Bangladesh, we specialize in building highly intuitive, fast, and scalable applications that your users will love.</p>
      
      <h3>Our Expertise</h3>
      <p>Whether you need a native iOS app built with Swift, a native Android app built with Kotlin, or a cross-platform solution using React Native or Flutter, our expert team has the technical prowess to deliver. We don't just write code; we architect solutions that scale gracefully as your user base grows.</p>
      
      <h3>End-to-End Development</h3>
      <p>From the initial wireframes and UI/UX design to backend API development, testing, and finally publishing on the Apple App Store and Google Play Store, we handle the entire lifecycle of your mobile application.</p>
    `
  },
  "web-development": {
    title: "Web Development",
    seoTitle: "Best Web Development Agency in Dhaka | Custom Web Apps",
    seoDescription: "Looking for the best web development agency in Dhaka? We build fast, secure, and highly scalable custom web applications and websites.",
    shortDescription: "Fast, secure, and highly scalable custom web applications and websites.",
    iconName: "Code",
    features: ["Custom Web Applications", "Frontend (React/Next.js)", "Backend (Node.js/Python)", "Cloud Deployment (AWS/Vercel)"],
    content: `
      <h2>The Best Web Development Agency in Dhaka</h2>
      <p>Your website is often the first interaction a potential customer has with your brand. We are recognized as the best web development agency in Dhaka because we build web experiences that are not only visually stunning but also technically superior.</p>
      
      <h3>Modern Technologies</h3>
      <p>We leverage modern tech stacks like React, Next.js, and Tailwind CSS on the frontend, combined with robust backend solutions using Node.js, Python, or Go. This ensures your web application is blazing fast, highly secure, and SEO-friendly out of the box.</p>
      
      <h3>Custom Solutions</h3>
      <p>We do not rely on bloated, slow templates. Every web application we build is custom-crafted to meet your specific business requirements, ensuring optimal performance and a seamless user experience across all devices.</p>
    `
  },
  "ecommerce-development": {
    title: "E-commerce Development",
    seoTitle: "E-commerce Website Developer in Bangladesh | Online Stores",
    seoDescription: "Hire a top e-commerce website developer in Bangladesh. We build high-converting online stores with secure local payment gateways.",
    shortDescription: "High-converting online stores with secure local payment gateways.",
    iconName: "ShoppingCart",
    features: ["Custom Storefront Design", "bKash & SSLCommerz Integration", "Inventory Management", "Fast Checkout Flow"],
    content: `
      <h2>Expert E-commerce Website Developer in Bangladesh</h2>
      <p>The e-commerce landscape in Bangladesh is highly competitive. To succeed, you need more than just a basic website—you need a high-converting sales engine. We are expert e-commerce website developers specializing in building fast, secure, and scalable online stores.</p>
      
      <h3>Localized Payment & Shipping</h3>
      <p>We seamlessly integrate popular local payment gateways like bKash, Nagad, and SSLCommerz, ensuring your customers can pay securely and conveniently. We also integrate local courier APIs for real-time shipping calculation and order tracking.</p>
      
      <h3>Optimized for Conversion</h3>
      <p>Our e-commerce platforms are meticulously designed to reduce cart abandonment. From lightning-fast page load speeds to intuitive navigation and friction-less checkout processes, we optimize every step of the buyer's journey.</p>
    `
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    seoTitle: "UI/UX Design Agency in Bangladesh | Product Design",
    seoDescription: "Top UI/UX design agency in Bangladesh. We design intuitive, beautiful, and user-centric digital products that drive engagement.",
    shortDescription: "Intuitive, beautiful, and user-centric digital products that drive engagement.",
    iconName: "Palette",
    features: ["Wireframing & Prototyping", "User Research & Testing", "Design Systems", "Mobile & Web Interfaces"],
    content: `
      <h2>Premium UI/UX Design Agency in Bangladesh</h2>
      <p>Great software is useless if it's too difficult to use. As a premium UI/UX design agency in Bangladesh, we believe that exceptional design is the bridge between complex technology and human interaction. We craft digital experiences that are intuitive, accessible, and aesthetically brilliant.</p>
      
      <h3>User-Centric Approach</h3>
      <p>Our design process starts with deep user research. We analyze your target audience, understand their pain points, and design interfaces that solve real problems. Through wireframing, rapid prototyping, and user testing, we validate our designs before a single line of code is written.</p>
      
      <h3>Comprehensive Design Systems</h3>
      <p>We don't just design individual screens; we build comprehensive design systems. This ensures visual consistency across your entire product ecosystem and drastically speeds up the development process.</p>
    `
  },
  "custom-software": {
    title: "Custom Software Development",
    seoTitle: "Custom Software Development Agency in Bangladesh | Enterprise",
    seoDescription: "Leading custom software development agency in Bangladesh. We build bespoke enterprise software to automate and scale your business.",
    shortDescription: "Bespoke enterprise software to automate and scale your business.",
    iconName: "Layers",
    features: ["Enterprise Architecture", "API Development & Integration", "Legacy System Modernization", "Data Security & Compliance"],
    content: `
      <h2>Leading Custom Software Development Agency in Bangladesh</h2>
      <p>Off-the-shelf software often forces you to change your business processes to fit the tool. We are a leading custom software development agency in Bangladesh that builds bespoke software tailored precisely to how your business operates.</p>
      
      <h3>Automate and Scale</h3>
      <p>Whether you need an internal ERP system, a specialized CRM, or a complex data processing engine, we architect solutions that automate manual workflows, reduce operational costs, and allow your business to scale efficiently.</p>
      
      <h3>Secure and Future-Proof</h3>
      <p>We build with the future in mind. Our enterprise architectures are highly scalable, secure by design, and easy to maintain. We also specialize in modernizing legacy systems, helping you transition to the cloud without disrupting your ongoing operations.</p>
    `
  }
};
