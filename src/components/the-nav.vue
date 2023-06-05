<template>
  <nav class="navbar">
    <div class="max-width">
      <div class="nav-title">
        <a href="#">Portfolio</a>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#about" class="navlink">Intro</a>
        </li>
        <li class="nav-item">
          <a href="#skill" class="navlink">Skill</a>
        </li>
        <li class="nav-item">
          <a href="#exp" class="navlink">Expience</a>
        </li>
        <li class="nav-item">
          <a href="#project" class="navlink">Project</a>
        </li>
        <li class="nav-item">
          <a href="#contect" class="navlink">Contect</a>
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
