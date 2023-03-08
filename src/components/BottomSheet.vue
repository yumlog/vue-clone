<template>
    <div v-if="showBottomSheet" class="bottom-sheet">
      <div class="dimm" aria-hidden="true"></div>
      <transition name="slide-up" appear>
        <div class="pop">
          <div class="title-wrap">{{ label }}
            <button class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="body">
            <div class="contents">
              <slot name="body"></slot>
            </div>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Title',
      },
    },
    data() {
      return {
        showBottomSheet: true
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .bottom-sheet {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  
  .dimm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(22,22,22,.4);
    
  }
  
  .pop {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    border-radius: 20px 20px 0 0;
    .title-wrap {
      width: 100%;
      padding: 20px 66px 30px 22px;
      font-size: 20px;
      font-weight: 600;
      .btn-close {
        position: absolute;
        right: 22px;
        width: 20px;
        height: 20px;
        background: url('@/assets/images/icon_24/close.png') center no-repeat;
        background-size: 100%;
      }
    }
    .body {
      padding: 0 22px 30px;
      .contents {
        min-height: 66px;
      }
    }
  
    .footer {
      padding: 0 22px 30px;
    }
  }
  
  /* slide-up 효과 정의 */
  .slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.3s ease;
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
  </style>