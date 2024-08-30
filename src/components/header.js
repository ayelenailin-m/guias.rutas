export function Header() {
  const $header = document.createElement('header');

  $header.classList.add("bg-gray-700", "m-3","text-white", "text-center", "py-4", "rounded-lg", "shadow-custom-light");

  $header.innerHTML = `
    <nav>
    <ul class="flex justify-center mt-4 mb-2">
      <li class="mr-8">
        <a href="/" class= "p-2 rounded-xl hover:shadow-custom-light">Home</a>
      </li>
      <li>
        <a href="/login" class="p-2 rounded-xl hover:shadow-custom-light">Login</a>
      </li>
    </ul>
    </nav>
  `

  return $header
}