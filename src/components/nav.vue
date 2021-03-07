<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky" style="width: 4000px;">
      <a class="navbar-brand" href="#"><b>SKYSILL</b></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"><b>HOME</b></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#about"><b>ABOUT</b></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#portfolio"><b>PORTFOLIO</b></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact"><b>CONTACT</b></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sticky {
  position: fixed;
}
</style>