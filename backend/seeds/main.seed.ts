import { mockBrands } from "./data/brand.data";
import db from "../src/database/db";
import { mockCategories } from "./data/category.data";

const seedBrands = async () => {
  console.log("🌱 Starting brand data seeding...");

  try {
    await db.query("TRUNCATE TABLE brands CASCADE;");

    for (const b of mockBrands) {
      await db.query(
        `
        INSERT INTO brands (name, logo_url, logo_path)
        VALUES ($1, $2, $3)
        `,
        [b.name, b.logo_url, b.logo_path],
      );
      console.log(`🚀 Inserted brand: ${b.name}`);
    }

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding encountered an error:", error);
  } finally {
    if (typeof db.end === "function") {
      await db.end();
    }
  }
};

const seedCategories = async () => {
  console.log("🌱 Starting categories data seeding...");

  try {
    await db.query("TRUNCATE TABLE categories CASCADE;");

    for (const c of mockCategories) {
      await db.query(
        `
        INSERT INTO categories (name, slug)
        VALUES ($1, $2)
        `,
        [c.name, c.slug],
      );
      console.log(`🚀 Inserted category: ${c.name}`);
    }

    console.log("✅ Category seeding completed successfully!");
  } catch (error) {
    console.error("❌ Category seeding encountered an error:", error);
  } finally {
    if (typeof db.end === "function") {
      await db.end();
    }
  }
};
