import ProductCard from "../../components/frontend/home/ProductCard";

export default function Home() {
  return (
    <>

      <div className="flex sm-flex-col justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </>
  )
}
