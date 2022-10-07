import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "footer" | "default"
declare module "D:/project-nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}