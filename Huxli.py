"""For now, just a way to categorize books based on ISBN"""

from isbnlib import meta

isbn = str(raw_input("ISBN: "))

bookDict = meta(isbn) # example ISBN (Maddie Lounging on Things)

bookAuthor = bookDict["Authors"][0]
bookTitle = bookDict["Title"]

print "%s by %s" % (bookTitle, bookAuthor)
