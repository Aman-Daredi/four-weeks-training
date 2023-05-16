using static System.Reflection.Metadata.BlobBuilder;

namespace LibraryManagement
{

    public interface IRepositry <T>
    {
        public IEnumerable<T> GetAll();

        public void Add(T item);

        public void Update(T item);

        public void Delete(T item);
    }

    public class Library<T> : IRepositry<T>
    {
        private List<T> _context = new List<T>();

        public IEnumerable<T> GetAll()
        {
            return this._context.ToList();
        }

        public void Add(T item)
        {
            this._context.Add(item);
        }

        public void Update(T item)
        {

        }

        public void Delete(T item)
        {
            this._context.Remove(item);
        }


    }


    internal class Program
    {
        static void Main(string[] args)
        {
            // Initialize collections for books, authors, and borrowers

            Library<Book> books = new Library<Book>();
            Library<Author> authors = new Library<Author>();
            Library<Borrower> borrowers = new Library<Borrower>();

            // Main program loop
            while (true)
            {
                DisplayMenu();

                int choice;
                int.TryParse(Console.ReadLine(), out choice);

                switch (choice)
                {
                    // Add cases for each menu option
                    case 1:
                        // Add a book
                        Book book = GetBookDetails(authors);
                        books.Add(book);
                        break;

                    case 2:
                        // Update a book
                        break;

                    case 3:
                        // Delete a book
                        Book bookToBeDeleted = DeleteBookDetails(books.GetAll().ToList());
                        books.Delete(bookToBeDeleted);
                        break;

                    case 4:
                        List<Book> b = books.GetAll().ToList();
                        DisplayAllBooks(b);
                        break;


                    case 5:
                        Author author = GetAuthorDetails();
                        authors.Add(author);
                        break;

                    case 6:
                        break;

                    case 7:
                        break;

                    case 8:
                        List<Author> a = authors.GetAll().ToList();
                        DisplayAllAuthors(a);
                        break;

                    case 16:
                        // Filter books by status
                        break;
                    default:
                        Console.WriteLine("Invalid option. Please try again.");
                        break;
                }
            }

        }

        // Adds new book
        static Book GetBookDetails(Library<Author> authors)
        {
            Console.WriteLine("Enter Book Title");
            string? Title = Console.ReadLine();

            Console.WriteLine("Enter Author Details");

            Author author = GetAuthorDetails();
            authors.Add(author);


            Console.WriteLine("Enter PublicationYear");
            int PublicationYear = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Is this Book available?");
            bool IsAvailable = Console.ReadLine() == "Yes";

            

            Book newBook = new Book();
            if (Title != null) newBook.Title = Title;
            newBook.PublicationYear = PublicationYear;
            newBook.Author = author;
            newBook.IsAvailable = IsAvailable;

            return newBook;
        }

        static Author GetAuthorDetails()
        {
            Console.WriteLine("Enter Author's FirstName: ");
            string FirstName = Console.ReadLine();

            Console.WriteLine("Enter Author's LastName: ");
            string LastName = Console.ReadLine();

            Console.WriteLine("Enter Author's BirthDate: ");
            DateTime DateOfBirth = DateTime.Parse(Console.ReadLine());

            Author author = new Author(FirstName, LastName, DateOfBirth);
            return author;

        }


        // Update a Book


        // List all books
        static void DisplayAllBooks(List<Book> books)
        {
            foreach (Book b in books)
            {
                Console.WriteLine($"Book Title: {b.Title}, Book Author: " +
                    $"{b.Author.FirstName} {b.Author.LastName}, Book PublicationYear: " +
                    $"{b.PublicationYear}, IsAvailable: {b.IsAvailable}");
            }
        }

        // Delete a book
        static Book DeleteBookDetails(List<Book> books)
        {
            Console.WriteLine("Enter Title of the book you want to delete: ");
            string Title = Console.ReadLine();
            Book book = books.Find(b => b.Title == Title);
            return book;
        }

        

        // List all Authors
        static void DisplayAllAuthors(List<Author> authors)
        {
            foreach (Author a in authors)
            {
                Console.WriteLine($"FirstName: {a.FirstName}, LastName: {a.LastName}, DateOfBirth: {a.DateOfBirth}");
            }
        }

        static void DisplayMenu()
        {
            // Display the menu options
            Console.WriteLine("Welcome to the Library Management System!\n");
            Console.WriteLine("1. Add a book");
            Console.WriteLine("2. Update a book");
            Console.WriteLine("3. Delete a book");
            Console.WriteLine("4. List all books");
            Console.WriteLine("5. Add an author");
            Console.WriteLine("6. Update an author");
            Console.WriteLine("7. Delete an author");
            Console.WriteLine("8. List all authors");
            Console.WriteLine("9. Add a borrower");
            Console.WriteLine("10. Update a borrower");
            Console.WriteLine("11. Delete a borrower");
            Console.WriteLine("12. List all borrowers");
            Console.WriteLine("13. Register a book to a borrower");
            Console.WriteLine("14. Display borrowed books");
            Console.WriteLine("15. Search books");
            Console.WriteLine("16. Filter books by status");
            Console.WriteLine("\nEnter the number corresponding to the action you'd like to perform:");
        }
    }

    // Class definitions

    

    class Book
    {

        static List<Book> books = new List<Book>();


        public string Title { get; set; }
        public Author Author { get; set; }
        public int PublicationYear { get; set; }
        public bool IsAvailable { get; set; }


        public void Add(Book book)
        {
            books.Add(book);
        }

        public void Update()
        {
            Console.WriteLine("Enter the Title of the book you want to Update: ");
            string? Title = Console.ReadLine();
            Book? foundBook = books.Find(b => b.Title == Title);
            if (foundBook != null)
            {
                Console.WriteLine("What do you want to update in this book? ");
                DisplayBookUpdateMenu();
                int input = Convert.ToInt32(Console.ReadLine());
                switch (input)
                {
                    case 1:
                        Console.WriteLine("Add new Title: ");
                        string? newTitle = Console.ReadLine();
                        if (newTitle != null) foundBook.Title = newTitle;
                        break;

                    case 2:
                        Console.WriteLine("");
                        break;

                    case 3:
                        Console.WriteLine("Enter new PublicationYear: ");
                        int newPublicationYear = Convert.ToInt32(Console.ReadLine());
                        foundBook.PublicationYear = newPublicationYear;
                        break;

                    case 4:
                        Console.WriteLine("Is this book available? ");
                        bool IsAvailable = Console.ReadLine() == "Yes";
                        foundBook.IsAvailable = IsAvailable;
                        break;

                    default:
                        Console.WriteLine("wrong input.");
                        break;
                }
            }
            else
            {
                Console.WriteLine("Sorry, No book found with such name.");
            }
        }

        private static void DisplayBookUpdateMenu()
        {
            Console.WriteLine("1. Title");
            Console.WriteLine("2. Author");
            Console.WriteLine("3. PublicationYear");
            Console.WriteLine("4. IsAvailable");

        }

        public void Delete()
        {
            Console.WriteLine("Enter the Title of the book you want to Delete: ");
            string? BookToBeDeletedTitle = Console.ReadLine();
            Book? BookToBeDeleted = books.Find(b => b.Title.Equals(BookToBeDeletedTitle));
            if (BookToBeDeleted != null)
            {
                int index = books.IndexOf(BookToBeDeleted);
                books.RemoveAt(index);
                Console.WriteLine($"Book with Title: {BookToBeDeletedTitle} deleted Successfully");
            }
            else
            {
                Console.WriteLine("No such book exists.");
            }
        }
    }

    class Author
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }

        public Author(string FirstName, string LastName, DateTime DateOfBirth)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.DateOfBirth = DateOfBirth;
        }
    }

    class Borrower
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}