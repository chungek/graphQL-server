const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
    {
      title: 'The Hobbit',
      author: {
        name: 'J.R.R. Tolkien',
        birthdate: 'January 3, 1892',
        books: ['The Hobbit'],
      },
    },
    {
      title: 'Shiloh',
      author: {
        name: 'Phyliss Reynolds Naylor',
        birthdate: 'January 4, 1933',
        books: ['Shiloh'], 
      },
    }
  ];

  const authors = [
    {
      name: 'J.R.R. Tolkien',
      birthdate: 'January 3, 1892',
      books: ['The Hobbit'],
    },
    {
      name: 'Phyliss Reynolds Naylor',
      birthdate: 'January 4, 1933',
      books: ['Shiloh'],
    },
  ];
  
  // Type definitions define the "shape" of your data and specify
  // which ways the data can be fetched from the GraphQL server.
  const typeDefs = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.
  
    # This "Book" type can be used in other type declarations.
    type Book {
      title: String
      author: Author 
    }

    # This "Author" type can be used in other type declarations.
    type Author {
      name: String
      birthdate: String
      books: [Book]
    }
  
    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
      getBooks: [Book]
      getAuthors: [Author]
    }
  `;
  
  // Resolvers define the technique for fetching the types in the
  // schema.  We'll retrieve books from the "books" array above.
  const resolvers = {
    Query: {
      getBooks: () => books,
      getAuthors: () => authors,
    },
  };
  
  // In the most basic sense, the ApolloServer can be started
  // by passing type definitions (typeDefs) and the resolvers
  // responsible for fetching the data for those types.
  const server = new ApolloServer({ typeDefs, resolvers });
  
  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });