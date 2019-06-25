# graphQL-server

Learning how to set up a GraphQL client on an Apollo server. 

### Schema
1. Book
    - title: String
    - author: Author

2. Author 
    - name: String
    - birthdate: String
    - books: [Book]

` node index.js `

_sample query_ 
```
query {
  getBooks {
    title 
    author {
      name
      birthdate
    }
  }
}
```
