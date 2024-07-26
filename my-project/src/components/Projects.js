import './App.css';

function Projects() {
  return (
    <div class="p-5">
        <div class="flex m-5 space-x-4 justify-center">
            <div>
                <a href="https://github.com/SahusBhandary/Flexify/" class="block max-w-sm p-6  border  rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">Flexify</h5>
                <p class="font-normal  text-gray-400">Fitness application built with Python that helps users track their fitness goals.</p>
                <br></br>
                <button type="button" class="  border  focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">Flexify</button>
                </a>
            </div>
            <div>
                <a href="https://github.com/SahusBhandary/SBUHacks24" class="block max-w-sm p-6 border  rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">Social Sync AI</h5>
                <p class="font-normal  text-gray-400">Generaive AI that helps users plan events around the world.</p>
                <br></br>
                <button type="button" class="  border  focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">Social Sync AI</button>
                </a>
            </div>
            <div>
                <a href="https://github.com/fwang20/PyGame-RPG" class="block max-w-sm p-6 border rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">2D RPG Game</h5>
                <p class="font-normal  text-gray-400">Top-down view action adventure game in a two dimensional world.</p>
                <br></br>
                <button type="button" class="  border  focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">2D Game</button>
                </a>
            </div>
        </div> 
    </div>
  );
}

export default Projects;
