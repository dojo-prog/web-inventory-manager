import { mockBrands } from "./data/brand.data";
import db from "../src/database/db";
import { mockCategories } from "./data/category.data";
import { mockSuppliers } from "./data/supplier.data";
import { mockProducts } from "./data/product.data";
import buildInsertFields from "../src/utils/buildInsertFields";

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

const seedProducts = async () => {
  console.log("🌱 Starting products data seeding...");

  try {
    const brandsResult = await db.query("SELECT id FROM brands LIMIT 1;");
    const categoriesResult = await db.query(
      "SELECT id FROM categories LIMIT 1;",
    );

    if (brandsResult.rows.length === 0 || categoriesResult.rows.length === 0) {
      console.error(
        "❌ Seeding failed: You must seed brands and categories before seeding products!",
      );
      return;
    }

    const validBrandId = brandsResult.rows[0].id;
    const validCategoryId = categoriesResult.rows[0].id;

    await db.query(`TRUNCATE TABLE products CASCADE;`);

    for (const p of mockProducts) {
      const productWithValidIds = {
        ...p,
        brand_id: validBrandId,
        category_id: validCategoryId,
      };

      const { keysStr, placeholders, values } =
        buildInsertFields(productWithValidIds);

      await db.query(
        `
        INSERT INTO products (${keysStr})
        VALUES (${placeholders})
        `,
        values,
      );

      console.log(`🚀 Inserted product: ${p.name}`);
    }

    console.log("✅ Products seeding completed successfully");
  } catch (error) {
    console.error("❌ Product seeding encountered an error:", error);
  } finally {
    if (typeof db.end === "function") {
      await db.end();
    }
  }
};
