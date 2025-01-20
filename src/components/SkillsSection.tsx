import React, { useEffect, useRef } from 'react';
    import AOS from 'aos';

    const SkillsSection = () => {
      const sectionRef = useRef<HTMLElement>(null);

      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }, []);

      return (
        <section id="skills" className="py-24 bg-gray-50" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative" data-aos="fade-right">
                <img
                  className="w-full h-[500px] object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1550439062-609e1531f091?auto=format&fit=crop&q=80"
                  alt="Abstract tech background"
                />
              </div>

              <div className="mt-12 lg:mt-0" data-aos="fade-left">
                <div className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-6">
                  Level Up Your Skills
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-8">
                  Unlock Your Potential
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  "In today's fast-paced world, continuous learning is key. We provide the resources and guidance you need to stay ahead of the curve and achieve your professional goals."
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  "Our programs are designed to help you master new skills, enhance your expertise, and unlock new opportunities for growth and success."
                </p>
                <div>
                  <a
                    href="https://ternarctic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    Explore Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default SkillsSection;
