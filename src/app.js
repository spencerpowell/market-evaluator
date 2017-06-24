var totalScore = 0;
var add = function(a, b) {
    return a + b;
}
var currentSelection = 0;
var promptIndex = 0;
var numbersArray = [0]
var examples =
    [ "Rate each of the following ten factors on a scale of 0 to 10, where 0 is extremely unattractive and 10 is extremely attractive."
    , "Renting an old movie is typically low urgency; seeing the first showing of a new movie on opening night is high urgency, since it only happens once."
    , "The market for underwater basket weaving courses is very small; the market for cancer cures is massive."
    , "Lollipops sell for $0.05; aircraft carriers sell for billions."
    , "Restaurants built on high-traffic interstate high-ways spend little to bring in new customers.  Government contractors can spend millions landing major procurement deals."
    , "Delivering files via the Internet is almost free; inventing a product and building a factor costs millions."
    , "There are many hair salons, but very few companies that offer private space travel."
    , "You can offer to mow a neighbor's lawn in minutes; opening a bank can take years."
    , "To be a housekeeper, all you need is a set of inexpensive cleaning products.  To mine for gold, you need millions to purchase land and excavating equipment."
    , "Customers who purchase razors need shaving cream and extra blades as well; buy a Frisbee, and you won't need another unless you lose it."
    , "Business consulting requires ongoing work to get paid; a book can be produced once, then sold over and over as is."
    ]

var prompts =
    [ "Use this tool to identify the attractiveness of any potential market"
    , "How badly do people want or need this right now?"
    , "How many people are actively purchasing things like this?"
    , "What is the highest price a typical purchaser would be willing to spend for a solution?"
    , "How easy is it to acquire a new customer? On average, how much will it cost to generate a sale, in both money and effort?"
    , "How much would it cost to create and deliver the value offered, both in money and effort?"
    , "How unique is your offer versus competing offerings in the market, and how easy is it for potential competitors to copy you?"
    , "How quickly can you create something to sell?"
    , "How much will you have to invest before you're ready to sell?"
    , "Are there related secondary offers that you could also present to purchasing customers?"
    , "Once the initial offer has been created, how much additional work will you have to put into it in order to continue selling?"
    ]
var titles =
    [ "Ten Ways to Evaluate a Market"
    , "Urgency"
    , "Market Size"
    , "Pricing Potential"
    , "Cost of Customer Acquisition"
    , "Cost of Value Delivery"
    , "Uniqueness of Offer"
    , "Speed to Market"
    , "Up-Front Investment"
    , "Upsell Potential"
    , "Evergreen Potential"
    ]

$(document).ready(function() {
    $('.chart-scale').hide();
    $('#prevBtn').hide();
    $('#prompt').text(prompts[promptIndex]);
    $('#example').text(examples[promptIndex]);
    $('#title').text(titles[promptIndex]);
});

$('#nextBtn').click(function() {
    if (currentSelection == 0 && promptIndex > 0) {
        alert("Must select a number");
        return;
    }
    promptIndex += 1;
    $('.chart-scale').show();
    $('#prevBtn').show();
    $('#nextBtn').text('Next');
    $('#example').text(examples[promptIndex]);
    $('#prompt').text(prompts[promptIndex]);
    $('#title').text(titles[promptIndex]);
    console.log(numbersArray);
    numbersArray.push(currentSelection);
    totalScore = numbersArray.reduce(add, 0);
    console.log("Score: " + totalScore);
    currentSelection = 0;
    console.log(totalScore);
})

$('#prevBtn').click(function() {
    currentSelection = 0;
    promptIndex -= 1;
    console.log(numbersArray);
    numbersArray.pop();
    totalScore = numbersArray.reduce(add, 0);
    console.log("Score: " + totalScore);
    $('#prompt').text(prompts[promptIndex]);
    $('#example').text(examples[promptIndex]);
    $('#title').text(titles[promptIndex]);
    if (promptIndex === 0) {
        $('#prevBtn').hide();
        $('.chart-scale').hide();
        $('#nextBtn').text('Begin');
    }
    console.log(totalScore);
})

$('.btn-scale').click(function() {
    var $selectedBtn = this;
    var text = $($selectedBtn).text();
    currentSelection = parseInt(text);
    console.log(currentSelection);
})