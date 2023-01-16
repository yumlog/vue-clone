<template>
  <!-- appear: 최초 렌더링시 인터랙션 -->
  <transition name="modal" appear>
    <div class="modal-backdrop">
      <div class="modal-wrapper">
        <div class="modal-container">
  
          <div class="modal-header">
            <h3>{{ title || 'Default Title' }}</h3>
          </div>
  
          <div class="modal-body">
            <slot name="body" />
          </div>
  
          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click="$emit('close')">
                닫기
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: String
  },
  
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 1rem;
}

.modal-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease;
}

.modal-header {
  padding: 1rem;
  h3 {
    margin-top: 0;
    color: #42b983;
  }
}

.modal-body {
  padding: 0 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}


// transition
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
}
</style>