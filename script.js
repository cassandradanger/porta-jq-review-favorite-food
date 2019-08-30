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
    $('#submitBtn').on('click',  handleSubmit);
}

// use .val() in some way, to clear out the inputs upon submit

function handleSubmit(){
    let nameValue = $('#name').val();
    let food = $('#food').val();
    let meal = $('#meal').val();

    // if the NAME value is an empty string, show an alert
    if(nameValue === ''){
        $('#name').addClass('error');
        alert("Please fill out the name input");
    } else if(food === ''){
        $('#food').addClass('error');
        alert("Please fill out the food input");
    } else if(meal === ''){
        $('#meal').addClass('error');
        alert("Please fill out the meal input");
    } else {
        // get rid of the border
        $("#name").removeClass('error');
        $("#meal").removeClass('error');
        $("#food").removeClass('error');
        
        let newObject = {
            name: nameValue,
            favoriteMeal: meal,
            favoriteFood: food
        }

        shadesOfCasie.push(newObject);

        listOutFriends();

        $('#name').val('');
        $('#food').val('');
        $('#meal').val('');
    }
}

function listOutFriends(){
    $('#listFriends').empty();
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
    let favFood = $(this).parent().data();
    console.log('this is a secret favorite food: ',  favFood);
    $(this).toggleClass('yellow');
}