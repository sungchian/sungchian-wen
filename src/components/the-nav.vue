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
          <a href="#certificates" class="navlink">CERTIFICATE<span class="underline absolute w-full h-0.5"></span></a>
        </li>
        <li class="nav-item">
          <a href="#skill" class="navlink">SKILL<span class="underline absolute w-full h-0.5"></span></a>
        </li>
        <li class="nav-item">
          <a href="#exp" class="navlink">EXPERIENCE<span class="underline absolute w-full h-0.5"></span></a>
        </li>
        <li class="nav-item">
          <a href="#project" class="navlink">PROJECT<span class="underline absolute w-full h-0.5"></span></a>
        </li>
        <li class="nav-item">
          <a href="#Contact" class="navlink">CONTACT<span class="underline absolute w-full h-0.5"></span></a>
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
