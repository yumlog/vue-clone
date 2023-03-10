<template>
	<div class="bottom-sheet">
		<div class="dimm" aria-hidden="true" />
		<transition name="slide-up" appear>
			<div class="pop" :password="password" :class="{ password: password == true}">
				<div class="title-wrap">
					{{ label }}
				</div>
				<div class="body">
					<div class="contents">
						<slot name="body" />
					</div>
				</div>
				<div class="footer" v-if="!password">
					<slot name="footer" />
				</div>
				<button class="btn-close" @click="closePop()" v-if="!password">
          <img inline src="@/assets/images/icon_20/close.svg" aria-hidden="true">
          <span class="sr-only">닫기</span>
        </button>
        <button class="btn-close" @click="closePop()" v-if="password">
          <img inline src="@/assets/images/icon_20/close_white2.svg" aria-hidden="true">
          <span class="sr-only">닫기</span>
        </button>
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
    password: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    closePop() {
      const popup = document.querySelector('.pop')
      popup.classList.add('slide-down')
      setTimeout(() => {
        this.$emit('close')
      }, 300);
    }
  },
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

  &.password {
    background-color: var(--primary-1);
  }

  &.slide-down {
    animation: slide-down .3s ease;
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

.btn-close {
  position: absolute;
  top: 21px;
  right: 22px;
  > img {
    width: 20px !important;
    height: 20px !important;
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