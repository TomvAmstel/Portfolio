var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('portfolioCtrl', function ($scope) {
    $scope.message = "Hello World!";

    $scope.array = [
        {
            'name': 'BenQ GW2765HT',
            'specs': '60Hz, 1440p'
        },
        {
            'name': 'QNIX QX2710',
            'specs': '60Hz overclockable, 1440p, accepts only DL DVI-D, no adapters.'
        },
        {
            'name': 'Dell Ultrasharp U3415W',
            'specs': 'Ultrawide, 34", 60Hz, expensive AF'
        }
    ];
});

portfolioApp.controller('imageCtrl', function ($scope) {
    $scope.interval = 1000;
    $scope.imageURLs = [
        {
            image:
                'Content/Images/Norway1.JPG',
            title:
                'Eerste dag',
            description:
                'Net buiten Finse.'
        },
        {
            image:
                'Content/Images/Norway2.JPG',
            title:
                'Tweede dag',
            description:
                'Eerste pauze op weg naar de onbemande hut Kongshelleren.'
        },
        {
            image:
                'Content/Images/Norway3.JPG',
            title:
                'Kongshelleren',
            description:
                'Aangekomen bij Kongshelleren. Enorm mooie plek.'
        }
    ];
});
