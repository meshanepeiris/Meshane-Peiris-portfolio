import './App.css';

function Experiences() {
  return (
    <section class="p-5">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Experiences</h2>
                    <p class="mt-4 text-gray-600 text-lg">Currently, I am a manager at Royal Test Prep, where I oversee 
                        daily operations and ensure the smooth functioning of our services. My role involves managing a 
                        team of over 10 employees, providing them with guidance and support to achieve company objectives.</p>
                    <div class="mt-8">
                        <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about Royal Test Prep
                            <span class="ml-2">&#8594;</span></a>
                    </div>
                </div>
                <div class="mt-12 md:mt-0">
                    <img src="https://s3-media4.fl.yelpcdn.com/bphoto/EbmCkRE_HGu6mHkj4yi4rw/l.jpg" alt="Royal Test Prep" class="object-cover rounded-lg shadow-md"></img>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experiences;
