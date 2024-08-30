export function LandingPage() {
  const $container = document.createElement("div");

  $container.classList.add("mx-3", "my-3", "p-6", "bg-pink-300", "rounded-md");

  $container.innerHTML = `
    <h1 class="text-2xl text-center m-2">Bienvenido a mi landing</h1>
    <div class="flex flex-row m-3 p-4 rounded-xl gap-3 bg-gray-700 text-white hover:scale-105 transition-transform duration-300">
      <img class="w-40 rounded-xl" src="./src/images/gatito.jpg" alt="gatito">
      <p class="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
    <div class="flex flex-row m-3 gap-3">
      <img class="w-40 rounded-xl" src="./src/images/gatito.jpg" alt="gatito">
      <p class="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
    <div class="flex flex-row m-3 gap-3">
      <img class="w-40 rounded-xl" src="./src/images/gatito.jpg" alt="gatito">
      <p class="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
  `;

  return $container;
}
