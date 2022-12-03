import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "footer" | "default" | "login"
declare module "D:/ecommerce-nuxt-3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}