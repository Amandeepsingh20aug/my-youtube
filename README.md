Debouncing :

typing slow = 200ms
typing fast = 30ms

Performance :
- iphone pro max = 14 letter *1000 = 140000
- with debouncing = 3 API calls * 1000 = 3000

Debouncing with 200ms
- if Diffirence between 2 key strokes less than 200ms - Not Called the API.
- >200ms make an API call .