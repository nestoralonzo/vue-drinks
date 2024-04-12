import { ref, watch } from "vue"
import { defineStore } from "pinia"

export const useNotificationStore = defineStore("notification", () => {
  const text = ref("")
  const error = ref(false)
  const show = ref(false)

  watch(show, () => {
    if (show.value) {
      setTimeout(() => {
        text.value = ""
        error.value = false
        show.value = false
      }, 3000)
    }
  })

  // function $reset(){
  //     text.value = ''
  //     error.value = false
  //     show.value = false
  // }

  return {
    text,
    error,
    show,
    //$reset,
  }
})
