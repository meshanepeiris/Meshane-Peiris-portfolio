import './App.css';

function Hero() {
  return (
    <section class="bg-center bg-cover bg-[url(hero.svg)] bg-no-repeat bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Hi, my name is Meshane!</h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to my portfolio</p>
        </div>
    </section>
  );
}

export default Hero;
