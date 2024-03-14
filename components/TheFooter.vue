<template>
  <div>TheFooter</div>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/home', {
  version: 'draft',
  resolve_links: 'url',
});
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
