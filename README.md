## This is a Pokemon Web application.

### Overview:

This is a Pokemon web application, a React-based single-page application that enables users to **search**, **explore**, and **view detailed information** about Pokemon. The application integrates with the PokeAPI to fetch Pokemon data and provides an interactive interface for browsing the complete Pokemon database of 1,138 Pokemon.

### Preview:
![homepage](/src/assets/img/pokemon-home-page.png)
*Home Page*
![searchpage](/src/assets/img/pokemon-search-page.png)
*Search Page*

### How to run:
`npm install`
`npm run dev`

### Here are the followed ticket:

- #### Ticket 1 : PokeList Search Bar
The current search bar on the PokeList is not functional.
You need to filter the PokeList to only show Pokémon whose names start with the searched string.
If there are no results: display a message to the user indicating that no Pokémon match their search.

- #### Ticket 2 : Sort the PokeList Alphabetically
    - Add a “Sort” button next to the search bar with 3 possible states.
    - By default, the button is not highlighted, it displays “Sort”, and the PokeList is not sorted.
    - If the user clicks on it, it becomes highlighted in red with the label “Sort A-Z” and the PokeList is sorted in ascending alphabetical order.
    - If the user clicks it again, it remains highlighted in red but now displays “Sort Z-A” and the PokeList is sorted in descending alphabetical order.
    - If the user clicks once more, it returns to the default state.
    - Sorting and searching should work together when both are active.

- #### Ticket 3 : Display the Selected Pokémon's PokeCard to the Right of the PokeList
API routes we will use: 
https://pokeapi.co/api/v2/pokemon?limit=1138: To fetch all Pokémon (name, URL)
https://pokeapi.co/api/v2/pokemon/{{id}}/: To fetch their images.
https://pokeapi.co/api/v2/pokemon-species/{{id}}/: To fetch their descriptions.
When the user clicks on a Pokémon's name:
That Pokémon is highlighted in the PokeList (underline or some other effect on the <li>).
On the right of the PokeList, a card appears showing the Pokémon's name, image, and description in English.
Tip: The Pokémon's ID can be found via its props.url.
Tip: Images and descriptions are grouped by version. Choose a default image/description that works for all 1138 Pokémon.

- #### Ticket 4 : Add Pokémon Images to the PokeList View
Add a thumbnail image of the Pokémon above its name in the list view.
Tip: To get the images, you will need to call the PokeAPI multiple times via https://pokeapi.co/api/v2/pokemon/{{id}}/ since https://pokeapi.co/api/v2/pokemon?limit=1138 will only provide the name and ID.

- #### Ticket 5 : PokeList Pagination on Scroll
Currently, all 1138 Pokémon are displayed at once on the page.
Display only 100 Pokémon at a time.
Initially, show Pokémon 1 to 100, then when the user scrolls to the end of the list, load and display the next 100 Pokémon, and so on.

