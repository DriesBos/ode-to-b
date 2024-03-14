<template>
  <section id="theFooter" class="footer" :class="{ visible: isVisible }">
    <ul>
      <li>Site</li>
      <li class="hovered links">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="hovered links">
        <NuxtLink to="/brands">For Brands</NuxtLink>
      </li>
      <li class="hovered links">
        <NuxtLink to="/art">For Art</NuxtLink>
      </li>
      <li class="hovered links">
        <NuxtLink to="/people">For People</NuxtLink>
      </li>
      <li class="hovered links" target="_blank">
        <a href="https://shop.odetoa.com/collections/frontpage">Shop</a>
      </li>
    </ul>
    <ul>
      <li>Offices</li>
      <li class="hovered links" @click="toggleFooterModalAmsterdam">
        {{ general[0].content.amsterdam }}
      </li>
      <li class="hovered links" @click="toggleFooterModalMexico">
        {{ general[0].content.mexico }}
      </li>
      <li class="hovered links" @click="toggleFooterModalGhana">
        {{ general[0].content.ghana }}
      </li>
    </ul>
    <ul
      v-if="
        general[0].content.instagram ||
        general[0].content.facebook ||
        general[0].content.linkedin
      "
    >
      <li>Follow Us</li>
      <li v-if="general[0].content.instagram" class="hovered links">
        <a
          :href="general[0].content.instagram"
          target="_blank"
          title="instagram"
          rel="noreferrer"
          >Instagram</a
        >
      </li>
      <li v-if="general[0].content.facebook" class="hovered links">
        <a
          :href="general[0].content.facebook"
          target="_blank"
          title="instagram"
          rel="noreferrer"
          >Facebook</a
        >
      </li>
      <li v-if="general[0].content.linkedin" class="hovered links">
        <a
          :href="general[0].content.linkedin"
          target="_blank"
          title="instagram"
          rel="noreferrer"
          >LinkedIn</a
        >
      </li>
    </ul>
    <ul>
      <li>&nbsp;</li>
      <li class="hovered links" @click="toggleFooterModalTerms">Terms</li>
      <li class="hovered links" @click="toggleFooterModalMadeby">Made By</li>
    </ul>
  </section>
</template>

<script setup>
const general = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with: 'general',
  is_startpage: false,
});

general.value = data.stories;

const isVisible = ref(false);

function toggleFooterModalAmsterdam() {
  this.$emit('update', {
    title: general[0].content.amsterdam,
    text: general[0].content.amsterdam_text,
  });
}
function toggleFooterModalMexico() {
  this.$emit('update', {
    title: general[0].content.mexico,
    text: general[0].content.mexico_text,
  });
}
function toggleFooterModalGhana() {
  this.$emit('update', {
    title: general[0].content.ghana,
    text: general[0].content.ghana_text,
  });
}
function toggleFooterModalTerms() {
  this.$emit('update', {
    title: general[0].content.terms_title,
    text: general[0].content.terms_text,
  });
}
function toggleFooterModalMadeby() {
  this.$emit('update', {
    title: general[0].content.madeby_title,
    text: general[0].content.madeby_text,
  });
}
function setVisible() {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition > document.body.clientHeight - window.innerHeight) {
    this.isVisible = true;
  } else {
    this.isVisible = false;
  }
}
function TheFooterCursor() {
  let cursor = document.querySelector('.cursor');
  cursor.classList.add('thefootercursor');
}
function removeTheFooterCursor() {
  let cursor = document.querySelector('.cursor');
  cursor.classList.remove('thefootercursor');
}
</script>

<style lang="sass">
.footer
  // position: fixed
  // left: 0
  // right: 0
  // bottom: 0
  z-index: 997
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  align-items: flex-start
  // background: black
  // color: white
  background: var(--current-color)
  color: var(--second-color)
  padding: var(--spacing-three)
  overflow: hidden
  // opacity: 0
  // pointer-events: none
  // &.visible
  //   opacity: 1
  //   pointer-events: auto
  ul
    display: flex
    flex-direction: column
    align-items: flex-start
    @media screen and ( min-width: $breakpoint-mobile)
      flex-grow: 1
    @media screen and ( max-width: $breakpoint-mobile)
      flex-basis: 50%
      padding-bottom: var(--spacing-three)
    li
      font-size: 1.33em
      line-height: 1.27
      // text-transform: uppercase
      &.links
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px var(--second-color)
        transition: color $transition-hover, stroke $transition-hover
        flex-shrink: 0
        a
          -webkit-text-stroke: 1px var(--second-color)
        &:hover
          @media (hover: hover)
            color: var(--second-color) !important


  &-Form
    margin-top: var(--spacing-two)
    display: flex
    flex-direction: column
    align-items: flex-start
    color: currentColor
    input
      width: 100%
      border-bottom: 2px solid currentColor
      border-radius: 0
      text-transform: uppercase
      &::placeholder
        color: currentColor
        text-transform: uppercase
    button
      display: flex
      align-items: center
      align-self: flex-start
      margin-top: var(--spacing-two)
      svg
        height: 2em
        fill: currentColor
  &-Buttons
    display: flex
    flex-grow: 1
    justify-content: space-between
    align-items: flex-end
    width: 100%
    margin-top: var(--spacing-three)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
    button
      display: flex
      align-items: center
      align-self: flex-start
      svg
        height: 2em
        fill: currentColor
    &_Links
      display: flex
      flex-wrap: wrap
      h4, h5, a
        color: rgba(0,0,0,0) !important
        -webkit-text-stroke: 1px var(--second-color)
        transition: color $transition-hover, stroke $transition-hover
        font-size: 1.33em
        line-height: 1
        flex-shrink: 0
        margin-top: var(--spacing-two)
        &:hover
          @media (hover: hover)
            color: var(--second-color) !important
      a, h5
        margin-right: var(--spacing-two)
  .markdown
    color: var(--second-color)
</style>
