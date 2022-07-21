let details = [
  {
    title: "Marriage of Anansewaa",
    author: "Efua Southerland",
    description: "Tails",
  },
  { title: "Macberth", author: "Olu Famiye", description: "Novel" },
  { title: "Things fall apart", author: "Chinue Achibe", description: "Tails" },
  { title: "Animal Farm", author: "Max Glover", description: "Tails" },
  { title: "Money Galore", author: "Amu Djoleto", description: "Novel" },
  { title: "Cry my country", author: "Chris Brown", description: "Novel" },
  { title: "Disblieve is power", author: "Max Glover", description: "Tails" },
  { title: "The cat lover", author: "Lisa Givenchy", description: "Tails" },
  { title: "Runaway love", author: "Maxuell Green", description: "Novel" },
  { title: "Circle CI", author: "Lisa Givenchy", description: "Sci-fi" },
];
class bookModel {
  constructor({ title, author, description }) {
    this.title = title;
    this.author = author;
    this.description = description;
  }
  save() {
    details.push(this);
    return this;
  }
  static list() {
    return details;
  }
  static update(updateinfo = {}) {
    details = details.map((book) => {
      if (book.title === updateinfo.title) {
        return { ...book, ...updateinfo };
      }
      return book;
    });
  }
  static delete({ title }) {
    let deleted = null;
    details = details.filter((book) => {
      if (book.author !== title) {
        return true;
      }
      deleted = book;
      return false;
    });
    return deleted;
  }
}
const listBooksController = (requestObject, responseObject) => {
  const books = bookModel.list();
  responseObject.json({ books });
};
const addBookController = (requestObject, responseObject) => {
  const { title, author, description } = requestObject.body;
  const book = new bookModel({ title, author, description });
  book.save();
  responseObject.json({
    message: `book added ${title} ${author} ${description}`,
  });
};
const updateBookController = (requestObject, responseObject) => {
  const { title, author, description } = requestObject.body;
  const updatedDetails = bookModel.update({ title, author, description });
  responseObject.json({
    message: `details updated to ${title} ${author} ${description}`,
  });
};
const deleteBookController = (requestObject, responseObject) => {
  const { title, author, description } = requestObject.body;
  const deletedDetails = bookModel.delete({ title });
  responseObject.json({
    message: `details deleted ${title} ${author} ${description}`,
  });
};
export {
  listBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
};
