var account = ["Savings Account","Credit 1 Outstanding", "Credit 2 Outstanding"]

var balance = [10950.66,1322.80,0]

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: account,
        datasets: [{
            label: "Accounts and Balance",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: balance,
        }]
    },

    // Configuration options go here
    options: {}
});
}