import './App.css';

function Section() {
  return (
    <div id="about" class="relative bg-white overflow-hidden mt-16">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
                    <p class="mt-4 text-gray-600 text-lg"> 
                        Hi, my name is Meshane Peiris. I am currently an undergraduate student at Stony Brook 
                        University. I am a double major in Computer Science and Applied Mathematics. In my computer 
                        science studies, I have developed a strong interest in software development, algorithms, and 
                        artificial intelligence. I enjoy solving complex problems and creating efficient, scalable 
                        solutions. My coursework has provided me with a solid understanding of programming languages 
                        such as Java, Python, and JavaScript, and I have also gained hands-on experience through various projects.
                        
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pr-[10vh] bg-[url(misty.svg)] bg-center bg-cover mr-[10vh]">
        
    </div>
    </div>
  );
}

export default Section;

