<template>
  <div class="page-wrap external-link">
    <div class="page container">
      <h1>{{ t('upload.title') }}</h1>
      <div class="section">
        {{ t('upload.text1') }}
      </div>
      <div class="section">
        {{ t('upload.text2') }}
      </div>
      <SlmInput v-model="link" :title="t('upload.placeholder')" />
      <Checkbox
        :label="t('upload.shorten')"
        :checked="shorten"
        @checked="shorten = $event"
      />
      <ErrorMessage :errorMessage="error" />
      <div class="buttons">
        <div
          class="button button-back"
          @click="$router.push({ name: 'select', params: { type: $route.params.type } })"
        >
          {{ t('back') }}
        </div>
        <div class="button" @click="upload">
          {{ t('next') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { SlmInput, Checkbox, ErrorMessage } from '@solomon/web/ui-widgets'
import router from '../router'

const validateUrl = (url: string) =>
  // eslint-disable-next-line max-len
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
    url,
  )

const { t } = useI18n()
const link = ref('')
const error = ref()
const shorten = ref(false)

const upload = () => {
  if (!validateUrl(link.value)) {
    error.value = t('upload.invalid_url')
  } else {
    router.push({ name: 'contract-submit' })
  }
}
</script>
