import express from "express";
import cors from "cors";
import ENV from "./lib/env";
import errorMiddleware from "./middlewares/error.middleware";
import cookieParser from "cookie-parser";
import authRouter from "./modules/auth/auth.route";
import userRouter from "./modules/users/user.route";
import brandRouter from "./modules/brands/brand.route";
import categoryRouter from "./modules/categories/category.route";
import productRouter from "./modules/products/product.route";
import productImageRouter from "./modules/product_images/product_image.route";
import productVariantRouter from "./modules/product_variants/product_variant.route";
import supplierRouter from "./modules/suppliers/supplier.route";
import activityLogRouter from "./modules/activity_logs/activity_log.route";

const app = express();

// Cors config
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  }),
);

// Global Middlewares
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

// Routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/suppliers", supplierRouter);
app.use("/api/v1/brands", brandRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/products", productImageRouter);
app.use("/api/v1/products", productVariantRouter);
app.use("/api/v1/activity-logs", activityLogRouter);

// Error Handler
app.use(errorMiddleware);

export default app;
