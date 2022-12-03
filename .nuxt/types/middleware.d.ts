import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/ecommerce-nuxt-3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}