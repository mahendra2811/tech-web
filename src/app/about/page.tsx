'use client';

import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0a1929' }}>
        {/* Animated background elements */}
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
              { left: '50.63439251022997%', top: '8.84882350448386%' },
              { left: '98.47023703920387%', top: '84.02161038676361%' },
              { left: '67.84585094561263%', top: '39.21307301346704%' },
              { left: '91.0293606197383%', top: '11.0769198649327%' },
              { left: '46.29043331567112%', top: '93.9557960257377%' },
              { left: '99.23668544858906%', top: '10.860592099890132%' },
              { left: '62.81979880522155%', top: '8.690446921838213%' },
              { left: '66.37965955853065%', top: '0.08041960361676592%' },
              { left: '43.52810012914692%', top: '32.61475636236691%' },
              { left: '39.62972449683918%', top: '2.0302879045937527%' },
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
          </div>
        </div>

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Our Company
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are a team of passionate developers, designers, and strategists dedicated to
              creating exceptional software solutions.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
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
                key={`particle-${i}`}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-background/90 backdrop-blur-md p-8 rounded-lg shadow-lg border border-primary/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-foreground mb-4">
                Founded in 2010, {siteConfig.name} began with a simple mission: to help businesses
                leverage technology to achieve their goals.
              </p>
              <p className="text-lg text-foreground mb-4">
                Over the years, we&apos;ve grown from a small team of three developers to a
                full-service software development company with experts in various technologies and
                domains.
              </p>
              <p className="text-lg text-foreground">
                Today, we work with clients ranging from startups to enterprise organizations,
                delivering innovative solutions that drive growth and efficiency.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md">
                {/* Animated tech elements */}
                <div className="absolute -inset-4">
                  {[...Array(5)].map((_, i) => {
                    const size = 60 + i * 20;
                    return (
                      <motion.div
                        key={`tech-circle-${i}`}
                        className="absolute rounded-full border border-primary/20"
                        style={{
                          width: size,
                          height: size,
                          left: `calc(50% - ${size / 2}px)`,
                          top: `calc(50% - ${size / 2}px)`,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: 'linear',
                          },
                          scale: {
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          },
                        }}
                      />
                    );
                  })}
                </div>

                <div className="relative z-10 bg-background/80 backdrop-blur-md p-8 rounded-lg border border-primary/20 shadow-lg">
                  <div className="text-center mb-4">
                    <span className="inline-block text-4xl text-primary mb-2">13+</span>
                    <h3 className="text-xl font-semibold text-foreground">Years of Excellence</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="inline-block text-2xl text-secondary mb-1">200+</span>
                      <p className="text-sm text-foreground">Projects Completed</p>
                    </div>
                    <div>
                      <span className="inline-block text-2xl text-secondary mb-1">50+</span>
                      <p className="text-sm text-foreground">Team Members</p>
                    </div>
                    <div>
                      <span className="inline-block text-2xl text-secondary mb-1">15+</span>
                      <p className="text-sm text-foreground">Countries Served</p>
                    </div>
                    <div>
                      <span className="inline-block text-2xl text-secondary mb-1">98%</span>
                      <p className="text-sm text-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#0a1929' }}>
        {/* Animated background with circuit pattern */}
        <div className="absolute inset-0 -z-10">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1929] via-[#102a43] to-[#0a1929]" />

          {/* Circuit-like animated elements */}
          <div className="absolute inset-0">
            {/* Circuit grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]" />

            {/* Horizontal circuit lines */}
            {[...Array(8)].map((_, i) => {
              const y = 12 + i * 10;
              // Alternate between different accent colors
              const colors = ['#00E5FF', '#0072FF', '#20B2AA', '#6E00FF'];
              const colorIndex = i % colors.length;

              return (
                <motion.div
                  key={`h-line-${i}`}
                  className="absolute h-px w-full"
                  style={{
                    top: `${y}%`,
                    background: `linear-gradient(90deg, transparent, ${colors[colorIndex]}60, transparent)`,
                    boxShadow: `0 0 15px ${colors[colorIndex]}50`,
                    height: '2px',
                  }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scaleX: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              );
            })}

            {/* Vertical circuit lines */}
            {[...Array(6)].map((_, i) => {
              const x = 15 + i * 15;
              // Alternate between different accent colors
              const colors = ['#00E5FF', '#0072FF', '#20B2AA'];
              const colorIndex = i % colors.length;

              return (
                <motion.div
                  key={`v-line-${i}`}
                  className="absolute w-px h-full"
                  style={{
                    left: `${x}%`,
                    background: `linear-gradient(180deg, transparent, ${colors[colorIndex]}40, transparent)`,
                    boxShadow: `0 0 8px ${colors[colorIndex]}30`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scaleY: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 0.7,
                  }}
                />
              );
            })}

            {/* Connection nodes */}
            {[...Array(20)].map((_, i) => {
              const size = 4 + (i % 3);
              const x = 8 + i * 5;
              const y = 10 + (i % 8) * 10;

              // Alternate between different accent colors
              const colors = ['#00E5FF', '#0072FF', '#6E00FF', '#20B2AA'];
              const colorIndex = i % colors.length;

              return (
                <motion.div
                  key={`node-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${x}%`,
                    top: `${y}%`,
                    backgroundColor: colors[colorIndex],
                    boxShadow: `0 0 12px ${colors[colorIndex]}`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              );
            })}

            {/* Data pulses */}
            {[...Array(12)].map((_, i) => {
              // Alternate between different accent colors
              const colors = ['#00E5FF', '#0072FF', '#6E00FF'];
              const colorIndex = i % colors.length;
              const isVertical = i % 3 === 0;

              return (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: isVertical ? '3px' : '3px',
                    height: isVertical ? '3px' : '3px',
                    left: isVertical ? `${10 + (i % 6) * 15}%` : 0,
                    top: isVertical ? 0 : `${12 + i * 6}%`,
                    backgroundColor: colors[colorIndex],
                    boxShadow: `0 0 15px ${colors[colorIndex]}`,
                  }}
                  animate={{
                    [isVertical ? 'y' : 'x']: [
                      isVertical ? '0%' : '0%',
                      isVertical ? '100%' : '100%',
                    ],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 8 + (i % 4),
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: 'linear',
                  }}
                />
              );
            })}

            {/* Binary code patterns */}
            <div className="absolute inset-0 opacity-15">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`binary-${i}`}
                  className="absolute text-[10px] text-[#00E5FF] font-mono"
                  style={{
                    left: `${8 + i * 6}%`,
                    top: `${5 + (i % 10) * 9}%`,
                  }}
                >
                  10110101
                  <br />
                  01001010
                  <br />
                  11001101
                </div>
              ))}
            </div>

            {/* Circuit SVG icons */}
            <div className="absolute inset-0">
              {/* Chip icon */}
              <motion.svg
                className="absolute w-16 h-16 text-[#00E5FF]"
                style={{ left: '20%', top: '25%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M9 2V4M15 2V4M9 20V22M15 20V22M4 9H2M4 15H2M22 9H20M22 15H20M7 8H17M7 12H17M7 16H17M8 7V17M12 7V17M16 7V17M7 12H17M8 7V17M12 7V17M16 7V17M7 8H17M7 12H17M7 16H17M8 7V17M12 7V17M16 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Circuit board icon */}
              <motion.svg
                className="absolute w-14 h-14 text-[#0072FF]"
                style={{ right: '25%', top: '20%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M8 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H8M16 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H16M12 6V18M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* CPU icon */}
              <motion.svg
                className="absolute w-16 h-16 text-[#6E00FF]"
                style={{ left: '30%', bottom: '15%', opacity: 0.5 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
              >
                <path
                  d="M9 3H15M9 21H15M3 9V15M21 9V15M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM9 9H15V15H9V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Network icon */}
              <motion.svg
                className="absolute w-14 h-14 text-[#20B2AA]"
                style={{ right: '20%', bottom: '20%', opacity: 0.5 }}
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
                  d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Circuit board patterns */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => {
                const x = 20 + i * 15;
                const y = 30 + (i % 3) * 20;
                const size = 30 + i * 5;

                return (
                  <motion.div
                    key={`circuit-${i}`}
                    className="absolute border-2 border-[#00E5FF] opacity-30"
                    style={{
                      width: size,
                      height: size,
                      left: `${x}%`,
                      top: `${y}%`,
                      borderRadius: i % 2 === 0 ? '50%' : '0%',
                    }}
                    animate={{
                      rotate: [0, 180],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in every project, focusing on quality, performance, and user experience.',
              },
              {
                title: 'Innovation',
                description:
                  'We embrace new technologies and approaches to solve complex problems in creative ways.',
              },
              {
                title: 'Collaboration',
                description:
                  'We believe in the power of teamwork and partnership with our clients to achieve shared goals.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-background p-8 rounded-lg shadow-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card highlight effect */}
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />

                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      {/* <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="relative h-64 w-full rounded-lg bg-muted overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-xl font-bold text-primary/30">
                    Team Member {i}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
    </>
  );
}
