<template>
  <nav class="navbar">
    <div class="max-width">
      <div class="nav-title">
        <a href="#">Portfolio</a>
      </div>
      <ul class="navbar-nav flex">
        <li class="nav-item">
          <a href="#about" class="navlink">
            INTRO
            <span class="underline absolute w-full h-0.5"></span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#certificates" class="navlink"
            >CERTIFICATE<span class="underline absolute w-full h-0.5"></span
          ></a>
        </li>
        <li class="nav-item">
          <a href="#skill" class="navlink"
            >SKILL<span class="underline absolute w-full h-0.5"></span
          ></a>
        </li>
        <li class="nav-item">
          <a href="#exp" class="navlink"
            >EXPERIENCE<span class="underline absolute w-full h-0.5"></span
          ></a>
        </li>
        <li class="nav-item">
          <a href="#project" class="navlink"
            >PROJECT<span class="underline absolute w-full h-0.5"></span
          ></a>
        </li>
        <li class="nav-item">
          <a href="#Contact" class="navlink"
            >CONTACT<span class="underline absolute w-full h-0.5"></span
          ></a>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="navlink"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
      <div class="menu-btn">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  setup() {
    return {};
  },
};
</script>
