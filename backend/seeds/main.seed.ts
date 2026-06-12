import { mockBrands } from "./data/brand.data";
import db from "../src/database/db";

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

seedBrands();
