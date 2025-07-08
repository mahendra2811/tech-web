'use client';

import { Container } from '@/components/layout/Container';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ServiceCard } from '@/components/features/ServiceCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      icon: 'Globe',
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift.',
      icon: 'Smartphone',
    },
    {
      title: 'UI/UX Design',
      description:
        'User-centered design that enhances user experience and engagement, with a focus on accessibility and usability.',
      icon: 'Layout',
    },
    {
      title: 'Backend Development',
      description:
        'Robust server-side solutions and API development using Node.js, Python, Java, and more.',
      icon: 'Database',
    },
    {
      title: 'Custom Software',
      description:
        'Tailored software solutions to address your specific business needs and challenges.',
      icon: 'Code',
    },
    {
      title: 'Cybersecurity',
      description:
        'Protecting your digital assets with advanced security measures and best practices.',
      icon: 'Shield',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable and reliable cloud infrastructure using AWS, Azure, and Google Cloud Platform.',
      icon: 'Server',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions that leverage the power of artificial intelligence and machine learning.',
      icon: 'Cpu',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <AnimatedBackground>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We offer a comprehensive range of software development services to help your business
              thrive in the digital age.
            </motion.p>
          </div>
        </Container>
      </AnimatedBackground>

      {/* Services Grid Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background image and overlay */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/about_our_story_bg.png")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929]/70 to-[#102a43]/70" />

          {/* Animated overlay elements */}
          <div className="absolute inset-0">
            {/* Flowing data particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`service-particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-primary"
                style={{
                  left: `${5 + i * 5}%`,
                  top: `${10 + (i % 10) * 8}%`,
                }}
                animate={{
                  x: [0, 100, 0],
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 8 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Tech grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>
        </div>

        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Combined Process & CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background and animated elements */}
        <div className="absolute inset-0 -z-10">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#102a43] to-[#0a1929]" />

          {/* Additional animated tech elements */}
          <div className="absolute inset-0">
            {/* Floating circles with tech colors */}
            {[...Array(15)].map((_, i) => {
              const size = 10 + i * 5;
              const delay = i * 0.2;
              const duration = 15 + (i % 5);
              const x = 5 + i * 8;
              const y = 10 + (i % 6) * 15;

              // Alternate between different accent colors
              const colors = ['#00E5FF', '#0072FF', '#6E00FF', '#20B2AA'];
              const colorIndex = i % colors.length;

              return (
                <motion.div
                  key={`circle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${x}%`,
                    top: `${y}%`,
                    backgroundColor: `${colors[colorIndex]}30`,
                    boxShadow: `0 0 20px ${colors[colorIndex]}50`,
                  }}
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay,
                  }}
                />
              );
            })}

            {/* Light trails */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                className="absolute h-px"
                style={{
                  width: '30%',
                  left: `${(i % 3) * 30}%`,
                  top: `${15 + i * 10}%`,
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#00E5FF' : '#0072FF'}, transparent)`,
                  height: '2px',
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#00E5FF' : '#0072FF'}`,
                }}
                animate={{
                  x: ['0%', '200%'],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 8 + (i % 3),
                  repeat: Infinity,
                  delay: i * 1.2,
                }}
              />
            ))}

            {/* Animated SVG icons */}
            <div className="absolute inset-0">
              {/* Code brackets */}
              <motion.svg
                className="absolute w-16 h-16 text-[#00E5FF]"
                style={{ left: '15%', top: '20%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M9 22L3 12L9 2M15 2L21 12L15 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Server icon */}
              <motion.svg
                className="absolute w-12 h-12 text-[#0072FF]"
                style={{ right: '20%', top: '15%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12M7 8H7.01M7 16H7.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Database icon */}
              <motion.svg
                className="absolute w-14 h-14 text-[#6E00FF]"
                style={{ left: '25%', bottom: '20%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                }}
              >
                <path
                  d="M12 8C16.4183 8 20 6.65685 20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5C4 6.65685 7.58172 8 12 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Cloud icon */}
              <motion.svg
                className="absolute w-16 h-16 text-[#20B2AA]"
                style={{ right: '25%', bottom: '25%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M17.5 19H9C6.79086 19 5 17.2091 5 15C5 12.7909 6.79086 11 9 11C9 8.23858 11.2386 6 14 6C16.7614 6 19 8.23858 19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19H17.5M17.5 19L12 13.5M12 13.5L6.5 19M12 13.5V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Floating geometric shapes */}
            <motion.div
              className="absolute w-16 h-16 border-3 border-[#00E5FF] opacity-40"
              style={{ left: '60%', top: '60%' }}
              animate={{
                rotate: [0, 180],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            <motion.div
              className="absolute w-20 h-20 rounded-full border-3 border-[#0072FF] opacity-40"
              style={{ right: '70%', top: '30%' }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            <motion.div
              className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-[#6E00FF] border-r-[20px] border-r-transparent opacity-40"
              style={{ right: '30%', top: '70%' }}
              animate={{
                rotate: [0, 360],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            {/* Tech grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Subtle particle effects */}
            {[
              // Pre-generated random positions for particles
              { left: '88.52122415606817%', top: '31.0467239081998%' },
              { left: '82.58025345535525%', top: '47.430703510637606%' },
              { left: '57.809486110156804%', top: '1.195782782625543%' },
              { left: '64.525571991873%', top: '65.70303220361545%' },
              { left: '72.25992265978026%', top: '26.89855855971388%' },
              { left: '5.791748739955915%', top: '49.79943744319964%' },
              { left: '19.244760752342614%', top: '25.33773509686805%' },
              { left: '28.814305070354607%', top: '73.53405149001802%' },
              { left: '33.05442856117088%', top: '64.57049808984966%' },
              { left: '85.0237859951297%', top: '18.00890929062381%' },
              { left: '85.1257066449951%', top: '89.75723481672328%' },
              { left: '52.28945512597413%', top: '16.02674559901044%' },
              { left: '19.329036779123456%', top: '92.99548667335547%' },
              { left: '79.33153816337398%', top: '23.054124940046027%' },
              { left: '19.383802054657362%', top: '71.58208320685227%' },
              { left: '26.039621365278474%', top: '65.95371044264084%' },
              { left: '52.930384075045836%', top: '35.08051235195565%' },
              { left: '81.80064483976507%', top: '38.90507324132679%' },
              { left: '99.4696115723505%', top: '30.539643598036903%' },
              { left: '41.69294686517063%', top: '9.205336105675087%' },
            ].map((position, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-[#00E5FF]"
                style={{
                  left: position.left,
                  top: position.top,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}

            {/* Stock market-like rays */}
            {[...Array(10)].map((_, i) => {
              const startX = 5 + i * 10;
              const startY = 90 - (i % 3) * 10;
              const endY = 10 + (i % 5) * 10;
              const color = i % 2 === 0 ? '#00E5FF' : '#0072FF';

              return (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute h-px"
                  style={{
                    width: '2px',
                    left: `${startX}%`,
                    top: `${startY}%`,
                    height: `${startY - endY}%`,
                    background: `linear-gradient(to top, ${color}50, transparent)`,
                    transformOrigin: 'bottom',
                  }}
                  animate={{
                    scaleY: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            {/* Data flow lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`flow-line-${i}`}
                className="absolute h-px"
                style={{
                  width: '30%',
                  left: `${(i % 3) * 30}%`,
                  top: `${15 + i * 10}%`,
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#00E5FF' : '#0072FF'}, transparent)`,
                  height: '2px',
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#00E5FF' : '#0072FF'}`,
                }}
                animate={{
                  x: ['0%', '200%'],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 8 + (i % 3),
                  repeat: Infinity,
                  delay: i * 1.2,
                }}
              />
            ))}

            {/* Animated data points/balls */}
            {[
              // Pre-generated positions for data points
              { left: '75.01409390927995%', top: '31.828192066958017%' },
              { left: '81.45503672622988%', top: '20.326862083425855%' },
              { left: '97.18686841309051%', top: '66.74724311999421%' },
              { left: '36.44969143303365%', top: '5.656240874394724%' },
              { left: '33.9854212822628%', top: '64.27577094819932%' },
              { left: '93.01116801028317%', top: '46.2952684003153%' },
              { left: '90.28909664880526%', top: '96.36069646518645%' },
              { left: '53.957917273231836%', top: '90.77647249954994%' },
              { left: '85.55956854083524%', top: '82.69383982251925%' },
              { left: '87.92022472938103%', top: '52.018580871515816%' },
              { left: '67.11147596866806%', top: '60.0474231024246%' },
              { left: '63.35215080663815%', top: '3.5936924420976846%' },
              { left: '34.73277179386576%', top: '44.23387269852269%' },
              { left: '56.107651275129676%', top: '52.42838302510646%' },
              { left: '79.01989457581816%', top: '81.54560037035986%' },
              { left: '49.11686421768824%', top: '0.1323884148161869%' },
              { left: '61.816462442205946%', top: '92.74740412974522%' },
              { left: '34.665478374245495%', top: '24.54025020089201%' },
              { left: '80.1323887568484%', top: '5.319018666641517%' },
              { left: '38.45261420810681%', top: '23.40932251458635%' },
              { left: '89.40778006817641%', top: '1.7951173499644701%' },
              { left: '37.42737543451508%', top: '64.96626360015091%' },
              { left: '53.52045789354195%', top: '80.46122646591817%' },
              { left: '51.361277577763055%', top: '94.8883656445331%' },
              { left: '73.38847591327225%', top: '61.736621717811424%' },
            ].map((position, i) => {
              const size = 2 + (i % 4);
              const color = i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#0072FF' : '#6E00FF';

              return (
                <motion.div
                  key={`data-point-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: position.left,
                    top: position.top,
                    backgroundColor: color,
                    boxShadow: `0 0 ${size}px ${color}`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + (i % 5),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              );
            })}

            {/* Floating tech circles */}
            {[...Array(12)].map((_, i) => {
              const size = 15 + i * 6;
              const delay = i * 0.3;
              const duration = 12 + (i % 5);
              const x = 10 + i * 7;
              const y = 15 + (i % 8) * 10;

              // Alternate between different accent colors
              const colors = ['#00E5FF', '#0072FF', '#6E00FF', '#20B2AA'];
              const colorIndex = i % colors.length;

              return (
                <motion.div
                  key={`tech-circle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${x}%`,
                    top: `${y}%`,
                    backgroundColor: `${colors[colorIndex]}20`,
                    boxShadow: `0 0 15px ${colors[colorIndex]}30`,
                  }}
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay,
                  }}
                />
              );
            })}

            {/* Tech SVG icons */}
            <div className="absolute inset-0">
              {/* React icon */}
              <motion.svg
                className="absolute w-16 h-16 text-[#00E5FF]"
                style={{ left: '15%', top: '20%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                }}
              >
                <path
                  d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 21.5C17.5228 21.5 22 17.2467 22 12C22 6.75329 17.5228 2.5 12 2.5C6.47715 2.5 2 6.75329 2 12C2 17.2467 6.47715 21.5 12 21.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Node.js icon */}
              <motion.svg
                className="absolute w-14 h-14 text-[#0072FF]"
                style={{ right: '20%', top: '15%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M12 22V16M12 16C10.8954 16 10 15.1046 10 14V10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10V14C14 15.1046 13.1046 16 12 16ZM18 12H20C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C15.0399 4 17.6594 5.67102 19.0003 8.16175"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Cloud/AWS icon */}
              <motion.svg
                className="absolute w-16 h-16 text-[#6E00FF]"
                style={{ left: '25%', bottom: '20%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M17.5 19H9C6.79086 19 5 17.2091 5 15C5 12.7909 6.79086 11 9 11C9 8.23858 11.2386 6 14 6C16.7614 6 19 8.23858 19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19H17.5M17.5 19L12 13.5M12 13.5L6.5 19M12 13.5V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Database icon */}
              <motion.svg
                className="absolute w-14 h-14 text-[#20B2AA]"
                style={{ right: '25%', bottom: '25%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M12 8C16.4183 8 20 6.65685 20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5C4 6.65685 7.58172 8 12 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Python icon */}
              <motion.svg
                className="absolute w-12 h-12 text-[#FFD43B]"
                style={{ left: '45%', top: '10%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M12 2C6.47715 2 6 3.79086 6 7C6 8.65685 7.34315 10 9 10H15C16.6569 10 18 11.3431 18 13V17C18 20.2091 16.2091 22 13 22C9.79086 22 8 20.2091 8 17M12 2C17.5228 2 18 3.79086 18 7C18 8.65685 16.6569 10 15 10H9C7.34315 10 6 11.3431 6 13V17C6 20.2091 7.79086 22 11 22C14.2091 22 16 20.2091 16 17M12 2V7M12 22V17M9 7H15M9 17H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* JavaScript icon */}
              <motion.svg
                className="absolute w-12 h-12 text-[#F7DF1E]"
                style={{ right: '45%', top: '10%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M3 3H21V21H3V3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 15.5V12.5C16.5 11.3954 15.6046 10.5 14.5 10.5C13.3954 10.5 12.5 11.3954 12.5 12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10.5V18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 18V15.5C16.5 14.3954 15.6046 13.5 14.5 13.5C13.3954 13.5 12.5 14.3954 12.5 15.5V18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Mobile/App icon */}
              <motion.svg
                className="absolute w-12 h-12 text-[#FF6B6B]"
                style={{ left: '10%', top: '50%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* AI/ML icon */}
              <motion.svg
                className="absolute w-14 h-14 text-[#9C27B0]"
                style={{ right: '10%', bottom: '40%', opacity: 0.4 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Floating geometric shapes */}
            <motion.div
              className="absolute w-16 h-16 border-2 border-[#00E5FF] opacity-30"
              style={{ left: '60%', top: '60%' }}
              animate={{
                rotate: [0, 180],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            <motion.div
              className="absolute w-20 h-20 rounded-full border-2 border-[#0072FF] opacity-30"
              style={{ right: '70%', top: '30%' }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            <motion.div
              className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-[#6E00FF] border-r-[20px] border-r-transparent opacity-30"
              style={{ right: '30%', top: '70%' }}
              animate={{
                rotate: [0, 360],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
        </div>

        <Container>
          {/* Process Section Content */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Development Process</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We follow a structured approach to ensure the success of your project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Process Card 1 */}
              <div className="relative pt-5">
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                  1
                </div>

                <motion.div
                  className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Animated top border on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <motion.div
                    className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                    Discovery
                  </h3>
                  <p className="text-white/80">
                    We start by understanding your business goals, target audience, and project
                    requirements.
                  </p>

                  {/* Enhanced background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>

              {/* Process Card 2 */}
              <div className="relative pt-5">
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                  2
                </div>

                <motion.div
                  className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Animated top border on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <motion.div
                    className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                    Planning
                  </h3>
                  <p className="text-white/80">
                    We create a detailed project plan, including timelines, milestones, and resource
                    allocation.
                  </p>

                  {/* Enhanced background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>

              {/* Process Card 3 */}
              <div className="relative pt-5">
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                  3
                </div>

                <motion.div
                  className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Animated top border on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <motion.div
                    className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                    Development
                  </h3>
                  <p className="text-white/80">
                    Our team builds your solution using agile methodologies and best practices.
                  </p>

                  {/* Enhanced background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>

              {/* Process Card 4 */}
              <div className="relative pt-5">
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold z-20 shadow-lg">
                  4
                </div>

                <motion.div
                  className="group relative overflow-hidden rounded-lg border border-white/20 bg-background/10 backdrop-blur-sm p-8 text-center shadow-md mt-4"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Animated top border on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <motion.div
                    className="mb-4 mt-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7M13 21H21M13 3H21M3 21H9M3 3H9M3 12H9M15 3V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                    Delivery
                  </h3>
                  <p className="text-white/80">
                    We deploy your solution, provide training, and offer ongoing support.
                  </p>

                  {/* Enhanced background gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Section Content */}
          <motion.div
            className="group relative overflow-hidden bg-background/10 backdrop-blur-md text-white rounded-lg p-8 md:p-12 text-center border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
            }}
          >
            {/* Animated top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/70 to-primary/70" />

            {/* Floating elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`cta-particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-primary/40"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Contact us today to discuss how we can help you achieve your business goals with our
                software development services.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="relative overflow-hidden inline-flex h-12 items-center justify-center rounded-md bg-primary text-black px-8 text-base font-medium shadow-lg transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Enhanced background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
