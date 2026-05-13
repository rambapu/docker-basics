import mongoose from "mongoose";
import Book from "../models/bookModel.js";

const initialBooks = [
  { bookId: 1, title: "1984", author: "George Orwell" },
  { bookId: 2, title: "Brave New World", author: "Aldous Huxley" },
  { bookId: 3, title: "The Catcher in the Rye", author: "J.D. Salinger" },
];

const initializeBookData = async () => {
  try {
    const booksExist = await Book.countDocuments();

    if (booksExist === 0) {
      console.log("Seeding the database with initial book data...");

      await Book.insertMany(initialBooks);

      console.log("Database seeded successfully");
    } else {
      console.log("Books already exist in the database.");
    }
  } catch (error) {
    console.error("Error while seeding database:", error);
  }
};

const dbStart = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log("MongoDB connected");

    await initializeBookData();
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default dbStart;
