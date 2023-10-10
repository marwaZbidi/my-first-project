function books(imag,name,author,year,category,description,price){
    return{
        imag:imag,
        name:name,
        author:author,
        year:year,
        category,category,
        description:description,
        price:price
    }
}

var book1=books("https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855652.jpg","Harry Potter And The Philosopher's Stone","J.K.Rowling",1997,"Fantasy","The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer's stone that will make this evil wizard immortal and undefeatable.","39DT")
var book2=books("https://images.booksense.com/images/926/582/9780545582926.jpg","Harry Potter And The Chamber Of Secrets","J.K.Rowling",1998,"Fantasy","The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the Chamber of Secrets has been opened and that the heir of Slytherin would kill all pupils who do not come from all-magical families.","37DT")
var book3=books("https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855676.jpg","Harry Potter And The Prisoner Of Azkaban","J.K.Rowling",1999,"Fantasy","Harry Potter & The Prisoner of Azkaban is about Harry's 3rd year at Hogwarts. Along with friends Ron and Hermione, Harry investigates the case of Sirius Black, an escaped prisoner from Azkaban, the wizard prison.","39DT")
var book4=books("https://149455152.v2.pressablecdn.com/wp-content/uploads/2013/06/kkhp4.jpg","Harry Poter And The Goblet Of Fire","J.K.Rowling",2000,"Fantasy","Harry, Ron and Hermione enter their fourth year at Hogwarts. After having a strange dream of the Dark Lord and his Death Eaters, Harry Potter awakes at the Weasleys' house where they shortly depart for the 422nd Quidditch World Cup. After the match, the camp is attacked by Death Eaters.","39DT")
var book5=books("https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855690.jpg","Harry Potter And The Order Of The Phoenix","J.K.Rowling",2003,"Fantasy","It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort,exams, and an obstructive Ministry of Magic.","39DT")
var book6=books("https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855706.jpg","Harry Potter And Tha Half Blood Prince","J.K.Rowling",2005,"Fantasy","In this book, Harry Potter learns a lot about Lord Voldemort's past, and Harry Potter prepares for the final battle against his nemesis with the help of Headmaster Dumbledore. But in that time, Voldemort returns to power, and makes a plan to destroy Harry.","39DT")
var book7=books("https://m.media-amazon.com/images/I/81DqEHVHRIL._SL1500_.jpg","Harry Potter And The Deathly Hallows","J.K.Rowling",2007,"Fantasy","The Deathly Hallows is about Harry Potter and his friends finding ways to destroy Voldemort. They learn that even good contains a bit of evil, and vise versa. Even though the trio faces many difficulties, they persevere.","39DT")
var book8=books("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083.jpg","Harry Potter And the cursed Child","J.K.Rowling",2011,"Fantasy","“Harry Potter and the Cursed Child” is about the journey Albus takes while growing up, and the roles he and his best friend, Scorpius (Draco Malfoy's son), play when dark forces, perhaps in league with Voldemort, once again threaten the fate of the planet","39DT")

$('#BOOKS').append(`<div class="book1"><h2 id="b1">${book1.name}</h2>
<img src=${book1.imag} id="img1">
<p id="author">${book1.author}</p>
<p>${book1.year}</p>
<p>${book1.category}</p>
<p>${book1.price}</p>
<p>${book1.description}</p>
</div> `)

$('#BOOKS').append(`<div class="book2"><h2 id="b2">${book2.name}</h2>
<img src=${book2.imag} id="img2">
<p id="author">${book2.author}</p
<p>${book2.year}</p>
<p>${book2.category}</p>
<p>${book2.price}</p>
<p>${book2.description}</p
</div> `)

$('#BOOKS').append(`<div class="book3"><h2 id="b3">${book3.name}</h2>
<img src=${book3.imag} id="img3">
<p id="author">${book3.author}</p>
<p>${book3.year}</p>
<p>${book3.category}</p>
<p>${book3.price}</p>
<p>${book3.description}</p
</div> `)

$('#BOOKS').append(`<div class="book4"><h2 id="b4">${book4.name}</h2>
<img src=${book4.imag} id="img4">
<p id="author">${book4.author}</p>
<p>${book4.year}</p>
<p>${book4.category}</p>
<p>${book4.price}</p>
<p>${book4.description}</p
</div> `)

$('#BOOKS').append(`<div class="book5"><h2 id="b5">${book5.name}</h2>
<img src=${book5.imag} id="img5">
<p id="author">${book5.author}</p>
<p>${book5.year}</p>
<p>${book5.category}</p>
<p>${book5.price}</p>
<p>${book5.description}</p
</div> `)

$('#BOOKS').append(`<div class="book6"><h2 id="b6">${book6.name}</h2>
<img src=${book6.imag} id="img6">
<p id="author">${book6.author}</p>
<p>${book6.year}</p>
<p>${book6.category}</p>
<p>${book6.price}</p>
<p>${book6.description}</p
</div> `)

$('#BOOKS').append(`<div class="book7"><h2 id="b7">${book7.name}</h2>
<img src=${book7.imag} id="img7">
<p id="author">${book7.author}</p>
<p>${book7.year}</p>
<p>${book7.category}</p>
<p>${book7.price}</p>
<p>${book7.description}</p
</div> `)

$('#BOOKS').append(`<div class="book8"><h2 id="b8">${book8.name}</h2>
<img src=${book8.imag} id="img8">
<p id="author">${book8.author}</p>
<p>${book8.year}</p>
<p>${book8.category}</p>
<p>${book8.price}</p>
<p>${book8.description}</p
</div> `)


function changeImage(imageId, newImageSrc) {
var imageElement = document.getElementById('imageId');
imageElement.src = newImageSrc;
}
        

        

        
