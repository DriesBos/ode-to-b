<template>
  <header class="the-Prev" @click="handleClick">
    <nav>
      <ul>
        <li>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 26"
          >
            <g clip-path="url(#a)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 13.986H2.822l9.602 9.591-1.413 1.412L.409 14.4l-.001.001L-1 12.996l.002-.002H-1l1.413-1.412h.002L11.011 1l1.407 1.406-9.596 9.584H24v1.996Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const router = useRouter();

function handleClick() {
  if (window.history.state.back === null) {
    router.push('/');
  } else {
    router.go(-1);
  }
}
</script>

<style lang="sass">
.the-Prev
  position: fixed
  top: var(--site-border-spacing)
  left: 0
  z-index: 999
  display: flex
  justify-content: center
  align-items: center
  width: var(--site-border-spacing)
  height: var(--site-border-spacing)
  cursor: pointer
  li
    pointer-events: auto
    svg
      height: 1.5rem
      fill: var(--current-color)
      transition: all 0.33s ease
      transform: translateX(0rem)
  &:hover
    svg
      transform: translateX(-.5rem)
</style>
