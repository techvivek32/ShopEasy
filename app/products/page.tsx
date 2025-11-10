import { Suspense } from "react"
import { ProductList } from "@/components/product-list"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}