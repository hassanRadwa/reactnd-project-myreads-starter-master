# MyReads Project

This is the modified version of starter template for the final assessment project for Udacity's React Fundamentals course. It is an application that contains the following:
1.   home page: contains categorized books according to three categories:'Currently Reading','Want to Read', and 'Read'. The book category can be changed from category to another or even be removed from My Reads by selecting the 'none' category.

2. search page: you can search for new books to be added to your Reads. The search results show all books that meets your search criteria with book details button to add it to your reads.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* run the project in your browser: http://localhost:3000/

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html 
└── src
    └── components #Application components
        ├── BookItem.js 
        ├── BookList.js 
        ├── BookShell.js 
        ├── NotFoundComponent.js 
        ├── SelectComponents.js 
    └── pages #Application pages
        ├── book.js 
        ├── searchBooks.js 
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root of your app. 
    ├── App.test.js # Used for testing. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The backend server [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
* [`get`](#get)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

