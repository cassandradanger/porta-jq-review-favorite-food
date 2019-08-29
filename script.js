const shadesOfCasie = [
    {
        name: "Cassandra",
        favoriteMeal: 'dinner',
        favoriteFood: 'pizza'
    },
    {
        name: "Casie",
        favoriteMeal: 'lunch',
        favoriteFood: 'tacos'   
    },
    {
        name: "KC",
        favoriteMeal: 'breakfast',
        favoriteFood: 'coffee'
    },
    {
        name: "KaCey Cassandraaaaaah",
        favoriteMeal: 'brunch',
        favoriteFood: 'mimosas'
    }
]



$(document).ready(onReady);

function onReady(){
    listOutFriends();
}


function listOutFriends(){
for(person of shadesOfCasie){
        let $li = $(
            `<li data-cohort="Porta">
                ${person.name}
                <button class="getFood">${person.favoriteMeal}</button>
            </li>
        `)

        $li.data('favoriteFood', person.favoriteFood);

        $('#listFriends').append($li);
    };
    $(".getFood").on('click', handleClick);
}

function handleClick(){
    let favFood = $(this).parent().data('favoriteFood');
    console.log('this is a secret favorite food: ',  favFood);
    $(this).parent().toggleClass('yellow');
}