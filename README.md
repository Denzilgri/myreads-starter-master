# MyReads Project

# Table of Contents

* [Overview](#overview)
* [How to run it?](#how-to-run-it?)
* [Backend Server](#backend-server)
* [Important](#important)
* [Dependencies](#dependencies)

## Overview

This project is an browser based book reading and management app developed for avid ebook readers. The app consists of three categories namely, reading, want to read and read. The user can search for a book to read using the search button at the bottom right corner of the start page. The project is a react framework based application and hence is more optimised than similar reading apps.

The user has the option to transfer the books between shelves as well as taking it off from all the shelves. This app is also a web reponsive app.

## How to run it?

### TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

### What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   ├── App.js # This is the root of your app. Contains static HTML right now.
    │   ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    │   ├── Book.js # This component represents a unit of book.
    │   ├── BookList.js # Wrapper component for each book shelf.
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    │   ├── BookShelf.js # Component for book shelf.
    │   ├── Search.js # Component for book searching books in the library.
    │   └── ShelfSwitcher.js # Component for changing shelf of a particular book.
    ├── css
    │   ├── App.css # Styles for your app. Feel free to customize this as you desire.
    │   └── index.css # Global styles. You probably won't need to change anything here.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── img
    │   └── no-cover.jpg
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, I've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

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

## Dependencies

This project uses the react framework library and its depencies. Please do an 'npm install' to download those dependencies. The app will only start once the command 'npm start' is used in the command line(cmd in windows, terminal in linux and osx). The project is compatible on all browsers.