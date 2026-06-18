import { mockBrands } from "./data/brand.data";
import db from "../src/database/db";
import { mockCategories } from "./data/category.data";
import { mockSuppliers } from "./data/supplier.data";

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

const seedSuppliers = async () => {
  console.log("🌱 Starting suppliers data seeding...");

  try {
    await db.query("TRUNCATE TABLE suppliers CASCADE;");

    for (const s of mockSuppliers) {
      const values = [
        s.name,
        s.supplier_code,
        s.contact_name,
        s.email,
        s.phone,
        s.website,
        JSON.stringify(s.address_line),
        s.is_active,
      ];

      await db.query(
        `
        INSERT INTO suppliers (
          name, 
          supplier_code,
          contact_name, 
          email,
          phone,
          website, 
          address_line, 
          is_active
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `,
        values,
      );

      console.log(`🚀 Inserted supplier: ${s.name}`);
    }

    console.log("✅ Suppliers seeding completed successfully!");
  } catch (error) {
    console.error("❌ Category seeding encountered an error:", error);
  } finally {
    if (typeof db.end === "function") {
      await db.end();
    }
  }
};
