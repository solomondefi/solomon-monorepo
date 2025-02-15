<template>
  <Dropdown
    :modelValue="open"
    transition="slm-select"
    class="slm-select"
    :class="{ open, disabled }"
    :interactive="false"
    @update:modelValue="setOpen"
  >
    <div class="slm-select-value">
      <div>{{ sOptions[modelValue] }}</div>
      <Caret />
    </div>
    <template #dropdown>
      <div
        v-for="opt in unselected"
        :key="opt"
        class="slm-select-item"
        @click="select(opt)"
      >
        {{ sOptions[opt] }}
      </div>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue'
import Caret from '../Caret.vue'
import Dropdown from '../Dropdown.vue'

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(
  defineProps<{
    modelValue: string | number
    options: Record<string, string> | Array<string | number>
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    options: () => [],
    disabled: false,
  },
)
const { options, modelValue, disabled } = toRefs(props)

const open = ref(false)

const sOptions = computed(() => {
  if (Array.isArray(options.value)) {
    const obj: Record<string, string> = {}
    for (const option of options.value) {
      obj[option] = option.toString()
    }
    return obj
  }
  return options.value
})
const unselected = computed(() =>
  Object.keys(sOptions.value).filter((opt) => opt !== modelValue.value),
)
const select = (option: string) => {
  emit('update:modelValue', option)
  open.value = false
}
const setOpen = (newOpen: boolean) => {
  open.value = !disabled.value && newOpen
}
</script>

<style lang="postcss">
@import '@theme/css/global.css';

.slm-select-value {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.slm-select {
  @mixin select;
  color: var(--solomon-color-text-form);
  .slm-select-value .caret {
    border-color: $disabled1;
    margin-top: 4px;
  }
  &.open {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &.disabled {
    cursor: default;
    background-color: #ddd;
    color: var(--solomon-color-text-disabled);
    .slm-select-value .caret {
      border-color: var(--solomon-color-text-disabled);
    }
  }
}
.dropdown-menu {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.slm-select-item {
  @mixin title-regular 14px;
  @mixin flex-center;
  justify-content: flex-start;
  height: 34px;
  padding: 0 16px;
  background-color: $bg2;
  border-top: 1px solid $border1;
  &:hover {
    background-color: $bg3;
  }
}
.slm-select-enter-active,
.slm-select-leave-active {
  transition: all 250ms;
  transition-timing-function: cubic-bezier(0.53, 2, 0.36, 0.85);
}
.slm-select-enter-from,
.slm-select-leave-active {
  opacity: 0;
}
.slm-select-enter-from,
.slm-select-leave-to {
  position: absolute;
}
.slm-select-enter-from {
  transform: translateY(-10px);
}
.slm-select-leave-active {
  transform: translateY(10px);
}
</style>
