import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}