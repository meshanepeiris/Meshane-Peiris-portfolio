import './App.css';

function Education() {
  return (
    <section class="pt-[90px]">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div class="mt-12 md:mt-0">
                    <img src="https://news.stonybrook.edu/wp-content/uploads/2023/12/fall-2023-sunset.jpg" alt="About Us Image" class="object-cover rounded-lg shadow-md"></img>
                </div>
                <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Stony Brook University</h2>
                    <p class="mt-4 font-extrabold text-gray-600 text-lg">Bachelor's of Science in Computer Science and Applied Mathematics</p>
                    <p class="mt-4 text-gray-600 text-lg">GPA: 3.94/4.0</p>
                    <p class="mt-4 text-gray-600 text-lg">Relevant Coursework: Data Structures and Algorithms, Programming Abstractions, System Fundamentals, Computer Systems</p>
                    <p class="mt-4 text-gray-600 text-lg">Clubs: Stony Brook University Web Development Club</p>

                </div>
            </div>
        </div>
    </section>
  );
}

export default Education;
