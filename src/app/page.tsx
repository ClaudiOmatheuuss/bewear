import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { getDb } from "@/db";
import { productTable } from "@/db/schema";
import { desc } from "drizzle-orm";
import Image from "next/image";

const Home = async () => {
  let products: Array<{
    id: string;
    categoryId: string;
    name: string;
    slug: string;
    description: string;
    createdAt: Date;
    variants: Array<{
      id: string;
      productId: string;
      name: string;
      slug: string;
      color: string;
      priceInCents: number;
      imageUrl: string;
      createdAt: Date;
    }>;
    category: {
      id: string;
      name: string;
      slug: string;
      createdAt: Date;
    };
  }> = [];
  let newlyCreatedProducts: Array<{
    id: string;
    categoryId: string;
    name: string;
    slug: string;
    description: string;
    createdAt: Date;
    variants: Array<{
      id: string;
      productId: string;
      name: string;
      slug: string;
      color: string;
      priceInCents: number;
      imageUrl: string;
      createdAt: Date;
    }>;
  }> = [];
  let categories: Array<{
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
  }> = [];

  try {
    const db = getDb();
    products = await db.query.productTable.findMany({
      with: {
        variants: true,
        category: true,
      },
    });

    newlyCreatedProducts = await db.query.productTable.findMany({
      orderBy: [desc(productTable.createdAt)],
      with: {
        variants: true,
      },
      limit: 4,
    });

    categories = await db.query.categoryTable.findMany({});
  } catch (error) {
    console.error("Database query error:", error);
    console.warn("Database not available, using empty data");
  }

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
